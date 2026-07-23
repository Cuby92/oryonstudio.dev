import styles from './links.module.scss';
import type { LinkProps } from '@/utils/types';
import Link from 'next/link';

const s = styles;

function ShadowBtn({ children, href, className, ref, style }: LinkProps) {
    return (
        <div className={`${className} ${s.shadowBtn}`}>
            <span className={s.glow} />
            <span className={s.flare} />
            <Link
                href={href}
                ref={ref}
                style={style}
                className={s.link}
            > 
                { children }
            </Link>
        </div>
    );
}

export default ShadowBtn;