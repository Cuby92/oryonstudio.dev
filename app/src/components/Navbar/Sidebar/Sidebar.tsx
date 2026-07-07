'use client';

import styles from './Sidebar.module.scss';
import SidebarLink from '@/components/Navbar/Sidebar/link';
import { useState } from 'react';
import { LinkTemplate } from '@/utils/types';

const s = styles;

interface Props {
    open: boolean;
    headerHeight: number;
    setSidebarOpen: (open: boolean) => void;
}

function Sidebar({ open, headerHeight, setSidebarOpen } : Props) {
    const [activeLink, setActiveLink] = useState(0);

    const links: LinkTemplate[] = [
        { href: '/',           label: 'Home'           },
        { href: '/about',      label: 'About Us'       },
        { href: '/services',   label: 'Our Services'   },
        { href: '/experience', label: 'Our Experience' },
        { href: '/contact',    label: 'Contact'        }
    ];

    function createLink(link: LinkTemplate, index: number) {
        return (
            <SidebarLink
                key={index}
                onClick={ () => setSidebarOpen(false) }
                className={s.link}
                onMouseEnter={ () => setActiveLink(index + 1) }
                active={ activeLink == index + 1 }
                href={link.href}
            >
                {link.label}
            </SidebarLink>
        );
    }

    return (
        <div className={s.Sidebar} style={{ paddingTop: headerHeight }} onMouseLeave={ () => setActiveLink(0) }>
            <div className={s.Section1}>
                <nav className={s.Links}>
                    { links.map(link => createLink(link, links.indexOf(link))) }
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;