import { Box, Button, Collapse, IconButton, ListItem, ListItemButton, Stack, Typography, styled } from '@mui/material';
import LogoMobile from '/src/assets/logo_mo.svg';
import LogoDesktop from '/src/assets/logo_pc.svg';
import { NAVIGATION } from '../../libs/data/navigation';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PushPinRoundedIcon from '@mui/icons-material/PushPinRounded';

const Aside = styled(Box)({
    height: '100vh',
    position: 'fixed',
    width: '280px',
    transition: 'all 0.2s ease 0s',
    zIndex: 10,
    backgroundColor: 'rgb(255, 255, 255)',
    borderRight: '1px dashed rgba(145, 158, 171, 0.2)',
    '& .aside-header': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '24px 16px 8px 16px',
        height: '70px',
        '&-wrapper': {
            display: 'flex',
            '& img': {
                height: '38px',
            },
        },
    },
    '& .aside-container': {
        overflowX: 'hidden',
        height: 'calc(100vh - 70px)',
    },
    '& .aside-wrapper': {
        padding: '0 16px',
        height: '100%',
    },
    '& .aside-section-title': {
        boxSizing: 'border-box',
        listStyle: 'none',
        fontSize: '0.825rem',
        cursor: 'pointer',
        fontWeight: 700,
        lineHeight: 1.5,
        textTransform: 'uppercase',
        fontFamily: '"Public Sans", sans-serif',
        display: 'inline-flex',
        color: 'rgb(145, 158, 171)',
        marginBottom: '4px',
        padding: '16px 8px 8px 12px',
        transition: 'all 0.2s ease 0s',
        // transition: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 0.2s ease',
        opacity: 1,
        border: 'none',
        backgroundColor: 'transparent',
        whiteSpace: 'nowrap',
        '&:hover': {
            color: 'rgb(33, 43, 54)',
        },
    },
    '& .aside-item-button': {
        margin: '0px 0px 4px',
        appearance: 'none',
        height: '44px',
        width: '100%',
        borderRadius: '8px',
        padding: '0px 18px',
        justifyContent: 'space-between',
        transition: 'all 0.15s ease 0s',
        color: 'rgb(99, 115, 129)',
        backgroundColor: 'transparent',
        minWidth: 0,
        '&__icon': {
            userSelect: 'none',
            width: '1em',
            height: '1em',
            display: 'inline-block',
            fill: 'currentcolor',
            flexShrink: 0,
            transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            fontSize: '18px',
            marginRight: '4px',
            '&.dot': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:before': {
                    content: '""',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: 'rgb(145, 158, 171)',
                    transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                },
            },
        },
        '&__title': {
            whiteSpace: 'nowrap',
            paddingLeft: '0.8rem',
            transition: 'all 0.15s ease 0s',
            fontSize: '0.875rem',
            fontWeight: '500',
        },
        '&__blank': {
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        '&__depth1': {
            display: 'flex',
            alignItems: 'center',
        },
        '&__expand': {
            transition: 'all 0.2s ease 0s',
            transform: 'rotate(-90deg)',
        },
        '&.expanded': {
            color: 'rgb(33, 43, 54)',
            backgroundColor: 'rgba(145, 158, 171, 0.08)',
            '& .aside-item-button__expand': {
                transform: 'rotate(0)',
            },
        },
    },
    '& .aside-depth1-selected': {
        color: 'rgb(0, 167, 111) !important',
        backgroundColor: 'rgba(0, 167, 111, 0.08) !important',
    },
    '& .aside-selected': {
        '& .aside-link-label': {
            color: 'rgb(33, 43, 54)',
            fontWeight: 600,
        },
        '& .dot': {
            '&:before': {
                backgroundColor: 'rgb(0, 167, 111)',
                transform: 'scale(2)',
            },
        },
    },
    '&.navigation-collpased': {
        width: '86px',
        '& .aside-section-title': {
            opacity: 0,
            width: 0,
        },
        '& .aside-item-button': {
            '&__title': {
                opacity: 0,
                width: 0,
            },
            '&__expand': {
                opacity: 0,
                width: 0,
            },
        },
    },
});

interface I_openProps {
    [id: string]: boolean;
}
const GlobalNavigationBar = () => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [open, setOpen] = useState<I_openProps>({});

    const _onClickNavigationPin = () => {
        setCollapsed(!collapsed);
    };

    const _onMouseEnterNavigation = () => {
        setCollapsed(false);
    };

    const _onMouseLeaveNavigation = () => {
        setCollapsed(true);
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

    return (
        <Aside className={`aside${collapsed ? ' navigation-collpased' : ''}`}>
            <Box className='aside-header'>
                <Box className='aside-header-wrapper'>
                    <img src={LogoMobile} />
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
