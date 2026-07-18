'use client';

import styles from "./Footer.module.scss";
import { LinkTemplate } from '@/utils/types';
import CypherLink from '@/components/links/cypher';
import { useTranslations } from 'next-intl';
import LogoDraw from "@/components/LogoDraw";
import Link from 'next/link';
import { useIsFullyVisible } from "@/utils/functions";
import { El } from '@/utils/types';

const s = styles;

function Footer() {
    const [logoRef,    isLogoFullyVisible]    = useIsFullyVisible<HTMLAnchorElement>();
    const [dividerRef, isDividerFullyVisible] = useIsFullyVisible<HTMLDivElement>();

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
                    <Link href="/" className={s.logo} ref={logoRef}>
                        <LogoDraw 
                            active={isLogoFullyVisible}
                            color="#ffff"
                            duration={2}
                            delay={0.1}
                        />
                    </Link>
                    <p className={s.slogan}>{ t('slogan')}</p>
                    <p className={s.availability}><span className={s.indicator}></span>{ t('availability') }</p>
                </div>

                <div className={s.divider} ref={dividerRef} style={{ height: isDividerFullyVisible ? '11rem' : 0, marginBottom: isDividerFullyVisible ? 'auto' : 0 }} />

                <nav>
                    { links.map(link => <CypherLink className={s.link} label={link.label} href={link.href} key={links.indexOf(link)} />) }
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