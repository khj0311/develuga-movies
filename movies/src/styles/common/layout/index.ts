import { Box, styled } from '@mui/material';

export const Aside = styled(Box)({
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
        padding: '24px 16px 8px 28px',
        transition: 'all 0.15s ease 0s',
        height: '70px',
        '&-wrapper': {
            display: 'flex',
            '& img': {
                height: '18px',
            },
        },
        '& .aside-header-logo__expand': {
            display: 'block',
        },
        '& .aside-header-logo__collapsed': {
            display: 'none',
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
        color: 'rgb(32, 183, 219) !important',
        backgroundColor: 'rgba(122, 201, 173, 0.2) !important',
    },
    '& .aside-selected': {
        backgroundColor: 'rgba(122, 201, 173, 0.2) !important',
        '& .aside-item-button__title': {
            color: 'rgb(33, 43, 54)',
            fontWeight: 600,
        },
        '& .dot': {
            '&:before': {
                backgroundColor: 'rgb(32, 183, 219)',
                transform: 'scale(2)',
            },
        },
    },
    '&.navigation-collpased': {
        width: '86px',
        '& .aside-header': {
            justifyContent: 'space-between',
            padding: '24px 16px 8px 16px',
            '&-wrapper': {
                '& img': {
                    height: '38px',
                },
            },
            '&__pin': {
                opacity: 0,
                width: 0,
            },
        },
        '& .aside-header-logo__expand': {
            display: 'none',
        },
        '& .aside-header-logo__collapsed': {
            display: 'block',
        },
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
