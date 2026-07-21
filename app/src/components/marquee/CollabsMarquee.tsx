import Marquee from "./Marquee";
import Image from 'next/image';
import styles from './Marquee.module.scss';

const s = styles;

function CollabsMarquee({ className }: { className?: string }) {
    return (
        <Marquee className={className}>
            <Image className={s.item} width={750}  height={301} alt="Biogas Solutions"   src="https://www.biogassolutions.pl/img/brand/logo.svg" />
            <Image className={s.item} width={1734} height={540} alt="Lumi"               src="/collabs/lumi.png"                                 />
            <Image className={s.item} width={1288} height={158} alt="SIMERIS RACING"     src="/collabs/simeris-racing.svg"                       />
            <Image className={s.item} width={688}  height={230} alt="Romgos Bio Energia" src="/collabs/rbe.svg"                                  />
        </Marquee>
    );
}

export default CollabsMarquee;