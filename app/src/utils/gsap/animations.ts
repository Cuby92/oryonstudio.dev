import { gsap } from 'gsap';
import { ARef } from '@/utils/types';
import { mapArray } from '@/utils/functions';

export const linksColumnSlide: {
    in:  (elements: ARef[]) => gsap.core.Tween,
    out: (elements: ARef[]) => gsap.core.Tween
} = {
    in: (elements: ARef[]): gsap.core.Tween => {
        return gsap.fromTo(mapArray(elements), {
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
        return gsap.fromTo(mapArray(elements), {
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
