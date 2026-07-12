import { gsap } from 'gsap';
import { ARef } from '@/utils/types';

export const linksColumnSlide: {
    in:  (elements: ARef[]) => gsap.core.Tween,
    out: (elements: ARef[]) => gsap.core.Tween
} = {
    in: (elements: ARef[]): gsap.core.Tween => {
        const targets = elements!.map(element => element!.current).filter(Boolean);

        return gsap.fromTo(targets, {
            x: index => index % 2 == 0 ? 50 : -50,
            opacity: 0
        }, {
            duration: 0.75,
            stagger: 0.2,
            x: 0,
            opacity: 1,
            ease: 'power1.out'
        });
    },
    out: (elements: ARef[]): gsap.core.Tween => {
        const targets = elements!.map(element => element!.current).filter(Boolean);

        return gsap.fromTo(targets, {
            x: 0,
            opacity: 1,
        }, {
            duration: 0.5,
            stagger: 0.1,
            x: index => index % 2 != 0 ? 50 : -50,
            opacity: 0,
            ease: 'power1.out'
        });
    }
}
