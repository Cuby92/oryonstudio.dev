'use client';

import { Children, El } from '@/utils/types';
import { useRef, useEffect } from 'react';
import styles from './LoadingPage.module.scss';
import { gsap } from 'gsap';

const s = styles;

const ROWS = 4;
const EASES = ['power1.out', 'power2.out', 'power3.out', 'power4.out'];

function LoadingPage({ children }: Children) {
    const gridRef    = useRef <El.Div> (null);
    const headingRef = useRef <El.H>   (null);
    const blocksRef  = useRef <(El.Div | null)[]> ([]);
    const wordsRef   = useRef <(El     | null)[]> ([]);
    
    function animate() {
        const blocks = blocksRef.current.filter(Boolean);
        const words  = wordsRef .current.filter(Boolean);

        const tl = gsap.timeline();

        tl.set(blocks, {
            transformOrigin: 'right center',
            scaleX: 1
        });

        tl.set(words, {
            y: 0
        });

        tl.to(words, {
            y: '100%',
            duration: 0.5,
            stagger: {
                each: 0.1,
                from: 'end'
            },
            ease: 'power1.out'
        });

        blocks.forEach(block => {
            tl.to(block, {
                scaleX: 0,
                duration: 1,
                ease: EASES[Math.floor(Math.random() * EASES.length)],
            }, '<0.1');
        }, '<0.9');
        
        return tl;
    }

    useEffect(() => {
        animate();
    }, []);

    return (
        <>
            <div className={s.grid} ref={gridRef}>
                { Array.from({ length: ROWS }).map((_, i) => (
                    <div 
                        key={i}
                        className={s.block}
                        ref={el => { blocksRef.current[i] = el }}
                    />
                )) }

                <div className={s.branding}>
                    <h1 ref={headingRef}>
                        <span className={s.oryon} ref={ el => { wordsRef.current[0] = el }}>
                            ORYON
                        </span>
                        <span className={s.studio} ref={el => { wordsRef.current[1] = el }}>
                            STUDIO</span>
                        </h1>
                </div>
            </div>
            { children }
        </>
    );
}

export default LoadingPage;