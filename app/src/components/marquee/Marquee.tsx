import type { Children } from '@/utils/types';
import styles from './Marquee.module.scss';

const s = styles;

interface Props extends Children {
    className?: string;
}

function Marquee({ children, className }: Props) {
    return (
        <div className={`${s.marquee} ${className}`}>
            <div className={s.track}>
                { children }
            </div>

            <div className={s.track}>
                { children }
            </div>
        </div>
    );
}

export default Marquee;