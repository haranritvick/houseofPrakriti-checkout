"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import styles from '../styles/Drawerpage.module.scss'

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface DrawerProps {
    anchor: Anchor;
    open: boolean;
    onClose: () => void;
}

const AnchorTemporaryDrawer: React.FC<DrawerProps> = ({ anchor, open, onClose }) => {

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 600 }}
            role="presentation"
            onClick={onClose}
            onKeyDown={onClose}
        >
            <div className={styles.main_wrapper}>
                <div className={styles.inner_address}>
                    🏠  ADD NEW ADDRESS
                </div>
            </div>
        </Box>
    );

    return (
        <Drawer
            anchor={anchor}
            open={open}
            onClose={onClose}
        >
            {list(anchor)}
        </Drawer>
    );
}

export default AnchorTemporaryDrawer;
