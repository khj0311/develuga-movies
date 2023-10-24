import { Box, Button, Collapse, Link, ListItem, Stack, styled } from '@mui/material';
import LogoMobile from '/src/assets/logo_mo.svg';
import LogoDesktop from '/src/assets/logo_pc.svg';
import { ROUTE_PATH } from '../../libs/data/path';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { MouseEvent, useState } from 'react';

const Aside = styled(Box)({
    display: 'flex',
    position: 'fixed',
    flexDirection: 'column',
    top: 0,
    left: 0,
    zIndex: 10,
    // width: '88px',
    width: '280px',
    height: '100%',
    backgroundColor: 'rgb(255, 255, 255)',
    borderRight: '1px dashed rgba(145, 158, 171, 0.2)',
    overflowY: 'auto',
    '& .aside-section': {
        display: 'flex',
        flexDirection: 'column',
    },
    '& .aside-section-wrapper': {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 16px',
    },
    '& .aside-content-title': {
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
        transition: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        border: 'none',
        backgroundColor: 'transparent',
        '&:hover': {
            color: 'rgb(33, 43, 54)',
        },
    },
    '& .aside-content-link': {
        textDecoration: 'none',
        color: 'inherit',
    },
    '& .aside-content-button': {
        display: 'flex',
        justifyContent: 'flex-start',
        flexGrow: 1,
        margin: '0px 0px 4px',
        padding: '4px 8px 4px 12px',
        color: 'rgb(99, 115, 129)',
        borderRadius: '8px',
        minWidth: '0px',
        minHeight: '44px',
        textAlign: 'left',
        transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: 'transparent',
        '& .aside-expand-icon': {
            transform: 'rotate(-90deg)',
        },
        '&.expanded': {
            color: 'rgb(33, 43, 54)',
            backgroundColor: 'rgba(145, 158, 171, 0.08)',
            '& .aside-expand-icon': {
                transform: 'rotate(0)',
            },
        },
    },
    '& .aside-link-icon': {
        width: '20px',
        height: '20px',
        flexShrink: '0',
        marginRight: '16px',
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
    '& .aside-link-svg': {
        display: 'block',
        width: '100%',
        height: '100%',
    },
    '& .aside-link-title': {
        flex: '1 1 auto',
        minWidth: '0px',
    },
    '& .aside-link-label': {
        width: '100%',
        maxWidth: '100%',
        display: 'block',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        lineHeight: '1.57143',
        fontSize: '0.875rem',
        fontFamily: '"Public Sans", sans-serif',
        fontWeight: '500',
        textTransform: 'capitalize',
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
    '& .aside-depth1-selected': {
        color: 'rgb(0, 167, 111) !important',
        backgroundColor: 'rgba(0, 167, 111, 0.08) !important',
    },
});

interface I_openProps {
    [id: string]: boolean;
}
const GlobalNavigationBar = () => {
    const [open, setOpen] = useState<I_openProps>({});

    const _onClickExpandButton = (e: MouseEvent<HTMLButtonElement>) => {
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

    return (
        <Aside>
            <Link href='/'>
                <Box sx={{ padding: '24px 28px 12px' }}>
                    <img src={LogoDesktop} />
                    {/* <img src={LogoMobile} /> */}
                </Box>
            </Link>
            <Stack className='aside-section'>
                {Object.keys(ROUTE_PATH).map((key) => {
                    const path = ROUTE_PATH[key];

                    if (path.navShow) {
                        return (
                            <Stack key={path.id} className='aside-section-wrapper'>
                                <ListItem component={'button'} className='aside-content-title' id={path.id} onClick={_onClickExpandButton}>
                                    {path.title}
                                </ListItem>
                                <Collapse in={!open[path.id]}>
                                    {path.children !== undefined &&
                                        Object.keys(path.children).map((depth1Key, depth1Idx) => {
                                            if (path.children !== undefined) {
                                                const depth1 = path.children[depth1Key];

                                                console.log(depth1Idx);

                                                if (depth1.children !== undefined) {
                                                    return (
                                                        <Box key={depth1.id}>
                                                            <ListItem
                                                                component={'button'}
                                                                className={`aside-content-button expand-button ${depth1.isSelected && 'aside-depth1-selected'}`}
                                                                id={depth1.id}
                                                                onClick={_onClickExpandButton}
                                                            >
                                                                <Box component={'span'} className='aside-link-icon'>
                                                                    {depth1.icon !== undefined && depth1.icon !== null && <depth1.icon className='aside-link-svg' />}
                                                                </Box>
                                                                <Box component={'span'} className='aside-link-title'>
                                                                    <Box component={'span'} className='aside-link-label'>
                                                                        {depth1.title}
                                                                    </Box>
                                                                </Box>
                                                                <ExpandMoreRoundedIcon className='aside-expand-icon' />
                                                            </ListItem>
                                                            <Collapse in={open[depth1.id]}>
                                                                {Object.keys(depth1.children).map((depth2Key) => {
                                                                    if (depth1.children !== undefined) {
                                                                        const depth2 = depth1.children[depth2Key];
                                                                        location.pathname === depth2.href && (depth1.isSelected = true);

                                                                        return (
                                                                            <Link key={depth2.id} href={depth2.href} className='aside-content-link'>
                                                                                <Button
                                                                                    component={'div'}
                                                                                    className={`aside-content-button ${location.pathname === depth2.href && 'aside-selected'}`}
                                                                                >
                                                                                    <Box component={'span'} className='aside-link-icon dot'></Box>
                                                                                    <Box component={'span'} className='aside-link-title'>
                                                                                        <Box component={'span'} className='aside-link-label'>
                                                                                            {depth2.title}
                                                                                        </Box>
                                                                                    </Box>
                                                                                </Button>
                                                                            </Link>
                                                                        );
                                                                    }
                                                                })}
                                                            </Collapse>
                                                        </Box>
                                                    );
                                                } else {
                                                    return (
                                                        <Link key={depth1.id} href={depth1.href} className='aside-content-link' id={depth1.id}>
                                                            <Button
                                                                component={'div'}
                                                                className={`aside-content-button ${location.pathname === depth1.href && 'aside-depth1-selected'}`}
                                                            >
                                                                <Box component={'span'} className='aside-link-icon'>
                                                                    {depth1.icon !== undefined && depth1.icon !== null && <depth1.icon className='aside-link-svg' />}
                                                                </Box>
                                                                <Box component={'span'} className='aside-link-title'>
                                                                    <Box component={'span'} className='aside-link-label'>
                                                                        {depth1.title}
                                                                    </Box>
                                                                </Box>
                                                            </Button>
                                                        </Link>
                                                    );
                                                }
                                            }
                                        })}
                                </Collapse>
                            </Stack>
                        );
                    }
                })}
            </Stack>
        </Aside>
    );
};

export default GlobalNavigationBar;
