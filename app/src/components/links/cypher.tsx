'use client';

import { LinkProps } from '@/utils/types';
import { Link } from '@/i18n/navigation';
import styles from './links.module.scss';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { useRef } from 'react';
import { Any, AnyRef } from '@/utils/types';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrambleTextPlugin);

const s = styles;

interface Props extends LinkProps {
    onClick?: () => void;
}

function CypherLink({ href, className, onClick, label = 'label', active, ref } : Props) {
    const textRef: AnyRef = useRef<Any>(null);

    const { contextSafe } = useGSAP();

    const handleMouseEnter = contextSafe(() => {
        if (!textRef.current) return;

        gsap.killTweensOf(textRef.current);

        gsap.to(textRef.current, {
            duration: 1,
            scrambleText: {
                text: `${label}${active ? ' █ //current' : '=>'}`,
                chars: "ORYONSTUDIO"
            }
        });
    });

    const handleMouseLeave = contextSafe(() => {
        if (!textRef.current) return;

        gsap.killTweensOf(textRef.current);

        gsap.to(textRef.current, {
            duration: 0.5,
            scrambleText: {
                text: `~/${label}${active ? ' █' : ''}`,
                chars: "oryonstudio"
            }
        });
    });

    const initialText = `~/${ label }${active ? ' █' : ''}`;

    return (
        <Link
            href={href}
            className={`${className} ${s.cypherLink}`}
            onClick={onClick}
            ref={ref}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className={s.text} ref={textRef} dangerouslySetInnerHTML={{ __html: initialText }} />
        </Link>
    );
}

export default CypherLink;
