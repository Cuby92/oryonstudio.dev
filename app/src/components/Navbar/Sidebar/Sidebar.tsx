'use client';

import styles from './Sidebar.module.scss';
import SidebarLink from '@/components/Navbar/Sidebar/link';
import { useState } from 'react';

const s = styles;

interface Props {
    open: boolean;
    headerHeight: number;
    setSidebarOpen: (open: boolean) => void;
}

function Sidebar({ open, headerHeight, setSidebarOpen } : Props) {
    const [activeLink, setActiveLink] = useState(0);

    return (
        <div className={s.Sidebar} style={{ paddingTop: headerHeight }} onMouseLeave={ () => setActiveLink(0) }>
            <div className={s.Section1}>
                <nav className={s.Links}>
                    <SidebarLink onClick={() => setSidebarOpen(false) } className={s.link} onMouseEnter={ () => setActiveLink(1)} active={activeLink === 1} href='/'          >Home          </SidebarLink>
                    <SidebarLink onClick={() => setSidebarOpen(false) } className={s.link} onMouseEnter={ () => setActiveLink(2)} active={activeLink === 2} href="/about"     >About Us      </SidebarLink>
                    <SidebarLink onClick={() => setSidebarOpen(false) } className={s.link} onMouseEnter={ () => setActiveLink(3)} active={activeLink === 3} href="/services"  >Our Services  </SidebarLink>
                    <SidebarLink onClick={() => setSidebarOpen(false) } className={s.link} onMouseEnter={ () => setActiveLink(4)} active={activeLink === 4} href="/experience">Our Experience</SidebarLink>
                    <SidebarLink onClick={() => setSidebarOpen(false) } className={s.link} onMouseEnter={ () => setActiveLink(5)} active={activeLink === 5} href="/contact"   >Contact       </SidebarLink>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;