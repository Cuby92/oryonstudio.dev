'use client';

import styles from './Navbar.module.scss';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { useState, useRef } from 'react';

const s = styles;

function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <nav>
            <div className={s.Hitbox} style={ sidebarOpen ? { display: 'block' } : { display: 'none' }} onClick={() => setSidebarOpen(false)}></div>
            <Sidebar setSidebarOpen={setSidebarOpen} open={sidebarOpen} />
            <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        </nav>
    );
}

export default Navbar;