'use client';

import { useState, useEffect, useRef } from 'react';
import { DeviceSpecs } from '@/utils/types';
import { Ref, El, Elements } from './types';


// E L E M E N T S   C O N V E R S I O N
/**
 * Checks if the item is a valid HTMLElement
 * @param item any
 * @returns boolean
 */
export function isHTMLElement(item: any): item is HTMLElement {
    return item != null && typeof item === 'object' && 'nodeType' in item;
}

export function isRef(item: any): item is React.RefObject<any> {
    return typeof item === 'object' && 'current' in item;
}

/**
 * Converts the elements to a uniform formula which is an array of DOM elements; also filters nulls if present
 * @param el element, ref or array of refs/elements
 * @returns HTMLElement[]
 */
export function convertElements(el: Elements): HTMLElement[] {
    if (!el) return [];

    // Case 1: Ref object (Ref<any>)
    if (isRef(el)) {
        const current = el.current;
        if (!current) return [];

        // Case 1a: .current is an array (Ref<T[]>)
        if (Array.isArray(current)) {
            return current
                .map(item => {
                    if (!item) return null;
                    if (isRef(item)) return item.current;
                    else return item;
                })
                .filter(isHTMLElement);
        }

        // Case 1b: .current is a single element
        else return isHTMLElement(current) ? [current] : [];
    }

    // Case 2: direct array (Ref<T>[])
    if (Array.isArray(el)) {
        return el
            .map(item => {
                if (!item) return null;
                if (typeof item === 'object' && 'current' in item) return item.current;
                return item;
            })
            .filter(isHTMLElement);
    }

    // Case 3: single raw HTMLElement or invalid element
    else return isHTMLElement(el) ? [el] : [];
}


// D E V I C E   S P E C S
export function useDeviceSpecs(): DeviceSpecs {
    const [specs, setSpecs] = useState<DeviceSpecs>({
        mobile:         false,
        lowPowerDevice: false,
        mounted:        false
    });

    useEffect(() => {
        const nav = navigator as any;

        // 1. Basic Mobile Check
        const mobile =
        /Mobi|Android|iPhone/i.test(navigator.userAgent) ||
        (window.matchMedia('(pointer: coarse)').matches);

        // 2. Hardware Resource Checks
        const lowRAM = nav.deviceMemory && nav.deviceMemory <= 4;
        const lowCPU = nav.hardwareConcurrency && nav.hardwareConcurrency <= 4;

        // 3. Connection Data-Saver Check
        const saveDataActive = nav.connection?.saveData === true;
        const lowPowerDevice = !!(lowRAM || lowCPU || saveDataActive);

        setSpecs({
            mobile,
            lowPowerDevice,
            mounted: true,
        });
    }, []);

    return specs;
}


// I N T E R S E C T I O N   O B S E R V E R
export function useIsVisible<T extends HTMLElement = HTMLElement>(ratio?: number, options?: IntersectionObserverInit): [React.RefObject<T | null>, boolean] {
    const [isVisible, setIsVisible] = useState(false);
    const elRef = useRef<T | null>(null);
    if (!ratio) ratio = 1.0;

    useEffect(() => {
        if (!elRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting && entry.intersectionRatio >= ratio);
            }, {
                threshold: ratio,
                ...options
            }
        );

        observer.observe(elRef.current);

        return () => {
            if (elRef.current) observer.unobserve(elRef.current);
        }
    }, [ratio, options]);

    return [elRef, isVisible];
}

