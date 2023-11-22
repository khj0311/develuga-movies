import { Box, Collapse, IconButton, ListItem, ListItemButton, Stack, styled } from '@mui/material';
import LogoDesktopCol from '/src/assets/logo_mo.svg';
import LogoDesktopExpand from '/src/assets/logo_pc.svg';
import { NAVIGATION } from '../../../../libs/data/navigation';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PushPinRoundedIcon from '@mui/icons-material/PushPinRounded';
import { Aside } from '../../../../styles/common/layout';

interface I_openProps {
    [id: string]: boolean;
}
const GlobalNavigationBar = () => {
    let animCollapse: boolean = false;
    const navigate = useNavigate();
    const collapseTimeout = useRef<any>();
    const asideRef = useRef<HTMLDivElement>(null);
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [open, setOpen] = useState<I_openProps>({});

    const _onClickNavigationPin = () => {
        setCollapsed(!collapsed);
    };

    const _onClickExpandButton = (e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>) => {
        const target = e.currentTarget;
        if (target) {
            const copiedOpen = { ...open };
            const targetId = target.getAttribute('id');
            if (targetId) {
                copiedOpen[targetId] = !copiedOpen[targetId];

                setOpen(copiedOpen);

                if (target.classList.contains('expand-button')) {
                    if (!copiedOpen[targetId]) {
                        target.classList.remove('expanded');
                    } else {
                        target.classList.add('expanded');
                    }
                }
            }
        }
    };

    useEffect(() => {
        Object.keys(NAVIGATION).map((key) => {
            const path = NAVIGATION[key];

            if (path.children !== undefined) {
                const depth1 = path.children;

                Object.keys(depth1).map((depth1Key) => {
                    const depth1Child = depth1[depth1Key];

                    if (location.pathname.indexOf(depth1Child.href) > -1) {
                        const copiedOpen = { ...open };
                        copiedOpen[depth1Child.id] = !copiedOpen[depth1Child.id];

                        setOpen(copiedOpen);
                    }
                });
            }
        });
    }, []);

    useEffect(() => {
        if (asideRef && asideRef.current !== null) {
            const aside = asideRef.current;

            const _onMouseEnterNavigation = () => {
                if (!collapsed || !animCollapse) return;
                if (aside.classList.contains('navigation-collapsed')) {
                    aside.classList.remove('navigation-collapsed');
                }

                clearTimeout(collapseTimeout.current);
                collapseTimeout.current = setTimeout(() => {
                    animCollapse = false;
                }, 200);
            };

            const _onMouseLeaveNavigation = () => {
                if (!collapsed || animCollapse) return;
                if (!aside.classList.contains('navigation-collapsed')) {
                    aside.classList.add('navigation-collapsed');
                }

                clearTimeout(collapseTimeout.current);
                collapseTimeout.current = setTimeout(() => {
                    animCollapse = true;
                }, 200);
            };

            const contentsEl = document.getElementById('contents');

            if (collapsed) {
                contentsEl && contentsEl.classList.add('gnb-collapsed');
                aside.addEventListener('mouseenter', _onMouseEnterNavigation);
                aside.addEventListener('mouseleave', _onMouseLeaveNavigation);
            } else {
                contentsEl && contentsEl.classList.remove('gnb-collapsed');
                aside.removeEventListener('mouseenter', _onMouseEnterNavigation);
                aside.removeEventListener('mouseleave', _onMouseLeaveNavigation);
            }

            return () => {
                aside.removeEventListener('mouseenter', _onMouseEnterNavigation);
                aside.removeEventListener('mouseleave', _onMouseLeaveNavigation);
            };
        }
    }, [collapsed]);

    return (
        <Aside ref={asideRef} className='aside'>
            <Box className='aside-header'>
                <Box className='aside-header-wrapper'>
                    <Link className='aside-header-logo' to={'/'}>
                        <Box className='aside-header-logo__expand'>
                            <img src={LogoDesktopExpand} />
                        </Box>
                        <Box className='aside-header-logo__collapsed'>
                            <img src={LogoDesktopCol} />
                        </Box>
                    </Link>
                </Box>
                <IconButton className='aside-header__pin' sx={collapsed ? { transform: 'rotate(45deg)' } : null} onClick={_onClickNavigationPin}>
                    <PushPinRoundedIcon fontSize='small' />
                </IconButton>
            </Box>
            <Box className='aside-container'>
                <Box className='aside-wrapper'>
                    {Object.keys(NAVIGATION).map((key) => {
                        const path = NAVIGATION[key];

                        if (path.navShow && path.children !== undefined) {
                            return (
                                <Stack key={path.id} className='aside-section'>
                                    <ListItem id={path.id} component={'button'} className='aside-section-title' onClick={_onClickExpandButton}>
                                        {path.title}
                                    </ListItem>
                                    <Collapse className='aside-section-itemlist' in={!open[path.id]}>
                                        {Object.keys(path.children).map((depth1Key) => {
                                            if (path.children === undefined) return;

                                            const depth1 = path.children[depth1Key];

                                            if (depth1.children === undefined) {
                                                return (
                                                    <Box key={depth1.id} className='aside-item'>
                                                        <ListItemButton
                                                            key={depth1.id}
                                                            component={'li'}
                                                            role={'button'}
                                                            className={`aside-item-button ${location.pathname === depth1.href && 'aside-depth1-selected'}`}
                                                            onClick={() => navigate(depth1.href)}
                                                        >
                                                            {depth1.icon !== undefined && depth1.icon !== null && <depth1.icon className='aside-item-button__icon' />}
                                                            <Box component='span' className='aside-item-button__title'>
                                                                {depth1.title}
                                                            </Box>
                                                            <Box component='div' className='aside-item-button__blank'></Box>
                                                        </ListItemButton>
                                                    </Box>
                                                );
                                            } else {
                                                return (
                                                    <Box key={depth1.id} className='aside-item'>
                                                        <ListItemButton
                                                            id={depth1.id}
                                                            component='a'
                                                            className={`aside-item-button expand-button ${location.pathname.indexOf(depth1.href) > -1 && 'aside-depth1-selected'} ${
                                                                open[depth1.id] && 'expanded'
                                                            }`}
                                                            onClick={_onClickExpandButton}
                                                        >
                                                            <Box className='aside-item-button__depth1'>
                                                                {depth1.icon !== undefined && depth1.icon !== null && <depth1.icon className='aside-item-button__icon' />}
                                                                <Box component='span' className='aside-item-button__title'>
                                                                    {depth1.title}
                                                                </Box>
                                                            </Box>
                                                            <ExpandMoreRoundedIcon className='aside-item-button__expand' />
                                                        </ListItemButton>
                                                        <Collapse in={open[depth1.id]}>
                                                            {Object.keys(depth1.children).map((depth2Key) => {
                                                                if (depth1.children === undefined) return;

                                                                const depth2 = depth1.children[depth2Key];

                                                                return (
                                                                    <ListItemButton
                                                                        key={depth2.id}
                                                                        component={'li'}
                                                                        role={'button'}
                                                                        className={`aside-item-button ${location.pathname === depth2.href && 'aside-selected'}`}
                                                                        onClick={() => navigate(depth2.href)}
                                                                    >
                                                                        <Box component={'span'} className='aside-item-button__icon dot'></Box>
                                                                        <Box component='span' className='aside-item-button__title'>
                                                                            {depth2.title}
                                                                        </Box>
                                                                        <Box component='div' className='aside-item-button__blank'></Box>
                                                                    </ListItemButton>
                                                                );
                                                            })}
                                                        </Collapse>
                                                    </Box>
                                                );
                                            }
                                        })}
                                    </Collapse>
                                </Stack>
                            );
                        }
                    })}
                </Box>
            </Box>
        </Aside>
    );
};

export default GlobalNavigationBar;
