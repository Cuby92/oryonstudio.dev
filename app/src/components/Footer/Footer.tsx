import styles from "./Footer.module.scss";
import { LinkTemplate } from '@/utils/types';
import CypherLink from '@/components/links/cypher';
import { useTranslations } from 'next-intl';
import LogoDraw from "@/components/LogoDraw";
import Link from 'next/link';

const s = styles;

function Footer() {
    const t = useTranslations('global');

    const links: LinkTemplate[] = [
        { href: '/',           label: t('links.home')       },
        { href: '/about',      label: t('links.about')      },
        { href: '/experience', label: t('links.experience') },
        { href: '/services',   label: t('links.services')   },
        { href: '/contact',    label: t('links.contact')    }
    ];

    return (
        <footer className={s.Footer}>
            <section className={s.MainSection}>
                <div className={s.info}>
                    <Link href="/" className={s.logo}>
                        <LogoDraw active={true} color="white" />
                    </Link>
                    <p className={s.slogan}>The cosmic standard for standout brands.</p>
                    <p className={s.availability}><span className={s.indicator}></span>Available for select Q3/Q4 projects.</p>
                </div>

                <div className={s.divider} />

                <nav>
                    { links.map(link => <CypherLink className={s.link} label={link.label} href={link.href} key={links.indexOf(link)} />)}
                </nav>
            </section>

            <div className={s.bottom}>
                <p className={s.humanTouch}>{ t('footer.humanTouch.designed_and_engineered_by') } <a target='_blank'>{ t('footer.humanTouch.jakub_barczynski') }</a>. { t('footer.humanTouch.powered_by_nextjs') }</p>
                <p className={s.copyright}>{ t('footer.copyright') }</p>
            </div>
        </footer>
    );
}

export default Footer;