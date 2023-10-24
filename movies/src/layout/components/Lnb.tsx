import { Box, Button, Collapse, Link, List, ListItem, ListItemButton, ListSubheader, Paper, Stack, SxProps, Typography, styled } from '@mui/material';
import LogoMobile from '/src/assets/logo_mo.svg';
import LogoDesktop from '/src/assets/logo_pc.svg';
import MovieIcon from '@mui/icons-material/Movie';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '../../libs/data/path';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import UpcomingRoundedIcon from '@mui/icons-material/UpcomingRounded';
import AirplayRoundedIcon from '@mui/icons-material/AirplayRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded';
import BallotRoundedIcon from '@mui/icons-material/BallotRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import WysiwygRoundedIcon from '@mui/icons-material/WysiwygRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import { MouseEvent, MouseEventHandler, SyntheticEvent, useState } from 'react';

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
        '&:hover': {
            color: 'rgb(33, 43, 54)',
        },
        border: 'none',
        backgroundColor: 'transparent',
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
});

// color: rgb(0, 167, 111);
// background-color: rgba(0, 167, 111, 0.08);

const Lnb = () => {
    const [expanded, setExpanded] = useState([]);
    const _onClickExpandButton = (e: MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget) {
            console.log(e.currentTarget.getAttribute('data-expand-id'));
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
                {/* Movies */}
                <Stack className='aside-section-wrapper'>
                    <ListItem component={'button'} className='aside-content-title' data-expand-id='expand-movies' onClick={_onClickExpandButton}>
                        Movies
                    </ListItem>
                    <Collapse id='expand-movies' in={true}>
                        <Link href='/' className='aside-content-link'>
                            <Button component={'div'} className='aside-content-button'>
                                <Box component={'span'} className='aside-link-icon'>
                                    <ThumbUpRoundedIcon className='aside-link-svg' />
                                </Box>
                                <Box component={'span'} className='aside-link-title'>
                                    <Box component={'span'} className='aside-link-label'>
                                        Popular
                                    </Box>
                                </Box>
                            </Button>
                        </Link>
                        <Link href='/' className='aside-content-link'>
                            <Button component={'div'} className='aside-content-button'>
                                <Box component={'span'} className='aside-link-icon'>
                                    <EqualizerRoundedIcon className='aside-link-svg' />
                                </Box>
                                <Box component={'span'} className='aside-link-title'>
                                    <Box component={'span'} className='aside-link-label'>
                                        Now Playing
                                    </Box>
                                </Box>
                            </Button>
                        </Link>
                        <Link href='/' className='aside-content-link'>
                            <Button component={'div'} className='aside-content-button'>
                                <Box component={'span'} className='aside-link-icon'>
                                    <UpcomingRoundedIcon className='aside-link-svg' />
                                </Box>
                                <Box component={'span'} className='aside-link-title'>
                                    <Box component={'span'} className='aside-link-label'>
                                        Upcoming
                                    </Box>
                                </Box>
                            </Button>
                        </Link>
                        <Link href='/' className='aside-content-link'>
                            <Button component={'div'} className='aside-content-button'>
                                <Box component={'span'} className='aside-link-icon'>
                                    <StarRoundedIcon className='aside-link-svg' />
                                </Box>
                                <Box component={'span'} className='aside-link-title'>
                                    <Box component={'span'} className='aside-link-label'>
                                        Top Rated
                                    </Box>
                                </Box>
                            </Button>
                        </Link>
                    </Collapse>
                </Stack>
                {/* TV Shows */}
                <Stack className='aside-section-wrapper'>
                    <ListItem component={'button'} className='aside-content-title' data-expand-id='expand-tv' onClick={_onClickExpandButton}>
                        TV Shows
                    </ListItem>
                    <Collapse id='expand-tv' in={true}>
                        <Link href='/' className='aside-content-link'>
                            <Button component={'div'} className='aside-content-button'>
                                <Box component={'span'} className='aside-link-icon'>
                                    <ThumbUpRoundedIcon className='aside-link-svg' />
                                </Box>
                                <Box component={'span'} className='aside-link-title'>
                                    <Box component={'span'} className='aside-link-label'>
                                        Popular
                                    </Box>
                                </Box>
                            </Button>
                        </Link>
                        <Link href='/' className='aside-content-link'>
                            <Button component={'div'} className='aside-content-button'>
                                <Box component={'span'} className='aside-link-icon'>
                                    <AirplayRoundedIcon className='aside-link-svg' />
                                </Box>
                                <Box component={'span'} className='aside-link-title'>
                                    <Box component={'span'} className='aside-link-label'>
                                        Airing Today
                                    </Box>
                                </Box>
                            </Button>
                        </Link>
                        <Link href='/' className='aside-content-link'>
                            <Button component={'div'} className='aside-content-button'>
                                <Box component={'span'} className='aside-link-icon'>
                                    <LiveTvRoundedIcon className='aside-link-svg' />
                                </Box>
                                <Box component={'span'} className='aside-link-title'>
                                    <Box component={'span'} className='aside-link-label'>
                                        On TV
                                    </Box>
                                </Box>
                            </Button>
                        </Link>
                        <Link href='/' className='aside-content-link'>
                            <Button component={'div'} className='aside-content-button'>
                                <Box component={'span'} className='aside-link-icon'>
                                    <StarRoundedIcon className='aside-link-svg' />
                                </Box>
                                <Box component={'span'} className='aside-link-title'>
                                    <Box component={'span'} className='aside-link-label'>
                                        Top Rated
                                    </Box>
                                </Box>
                            </Button>
                        </Link>
                    </Collapse>
                </Stack>
                {/* People */}
                <Stack className='aside-section-wrapper'>
                    <ListItem component={'button'} className='aside-content-title' data-expand-id='expand-people' onClick={_onClickExpandButton}>
                        People
                    </ListItem>
                    <Collapse id='expand-people' in={true}>
                        <Link href='/' className='aside-content-link'>
                            <Button component={'div'} className='aside-content-button'>
                                <Box component={'span'} className='aside-link-icon'>
                                    <Groups2RoundedIcon className='aside-link-svg' />
                                </Box>
                                <Box component={'span'} className='aside-link-title'>
                                    <Box component={'span'} className='aside-link-label'>
                                        Popular People
                                    </Box>
                                </Box>
                            </Button>
                        </Link>
                    </Collapse>
                </Stack>
                {/* User */}
                <Stack className='aside-section-wrapper'>
                    <ListItem component={'button'} className='aside-content-title' data-expand-id='expand-user' onClick={_onClickExpandButton}>
                        User
                    </ListItem>
                    <Collapse id='expand-user' in={true}>
                        <Link href='/' className='aside-content-link'>
                            <Button component={'div'} className='aside-content-button'>
                                <Box component={'span'} className='aside-link-icon'>
                                    <WysiwygRoundedIcon className='aside-link-svg' />
                                </Box>
                                <Box component={'span'} className='aside-link-title'>
                                    <Box component={'span'} className='aside-link-label'>
                                        Overview
                                    </Box>
                                </Box>
                            </Button>
                        </Link>
                        <Box>
                            <ListItemButton className='aside-content-button'>
                                <Box component={'span'} className='aside-link-icon'>
                                    <FavoriteRoundedIcon className='aside-link-svg' />
                                </Box>
                                <Box component={'span'} className='aside-link-title'>
                                    <Box component={'span'} className='aside-link-label'>
                                        Favorites
                                    </Box>
                                </Box>
                                <ExpandMoreRoundedIcon />
                            </ListItemButton>
                            <Collapse in={true}>
                                <Link href='/' className='aside-content-link'>
                                    <Button component={'div'} className='aside-content-button'>
                                        <Box component={'span'} className='aside-link-icon dot'></Box>
                                        <Box component={'span'} className='aside-link-title'>
                                            <Box component={'span'} className='aside-link-label'>
                                                Movies
                                            </Box>
                                        </Box>
                                    </Button>
                                </Link>
                                <Link href='/' className='aside-content-link'>
                                    <Button component={'div'} className='aside-content-button'>
                                        <Box component={'span'} className='aside-link-icon dot'></Box>
                                        <Box component={'span'} className='aside-link-title'>
                                            <Box component={'span'} className='aside-link-label'>
                                                TV Shows
                                            </Box>
                                        </Box>
                                    </Button>
                                </Link>
                            </Collapse>
                        </Box>
                        <Box>
                            <ListItemButton className='aside-content-button'>
                                <Box component={'span'} className='aside-link-icon'>
                                    <RecommendRoundedIcon className='aside-link-svg' />
                                </Box>
                                <Box component={'span'} className='aside-link-title'>
                                    <Box component={'span'} className='aside-link-label'>
                                        Recommendations
                                    </Box>
                                </Box>
                                <ExpandMoreRoundedIcon />
                            </ListItemButton>
                            <Collapse in={true}>
                                <Link href='/' className='aside-content-link'>
                                    <Button component={'div'} className='aside-content-button'>
                                        <Box component={'span'} className='aside-link-icon dot'></Box>
                                        <Box component={'span'} className='aside-link-title'>
                                            <Box component={'span'} className='aside-link-label'>
                                                Movies
                                            </Box>
                                        </Box>
                                    </Button>
                                </Link>
                                <Link href='/' className='aside-content-link'>
                                    <Button component={'div'} className='aside-content-button'>
                                        <Box component={'span'} className='aside-link-icon dot'></Box>
                                        <Box component={'span'} className='aside-link-title'>
                                            <Box component={'span'} className='aside-link-label'>
                                                TV Shows
                                            </Box>
                                        </Box>
                                    </Button>
                                </Link>
                            </Collapse>
                        </Box>
                        <Link href='/' className='aside-content-link'>
                            <Button component={'div'} className='aside-content-button'>
                                <Box component={'span'} className='aside-link-icon'>
                                    <ForumRoundedIcon className='aside-link-svg' />
                                </Box>
                                <Box component={'span'} className='aside-link-title'>
                                    <Box component={'span'} className='aside-link-label'>
                                        Discussions
                                    </Box>
                                </Box>
                            </Button>
                        </Link>
                        <Link href='/' className='aside-content-link'>
                            <Button component={'div'} className='aside-content-button'>
                                <Box component={'span'} className='aside-link-icon'>
                                    <BallotRoundedIcon className='aside-link-svg' />
                                </Box>
                                <Box component={'span'} className='aside-link-title'>
                                    <Box component={'span'} className='aside-link-label'>
                                        Lists
                                    </Box>
                                </Box>
                            </Button>
                        </Link>
                        <Box>
                            <ListItemButton className='aside-content-button'>
                                <Box component={'span'} className='aside-link-icon'>
                                    <StarBorderRoundedIcon className='aside-link-svg' />
                                </Box>
                                <Box component={'span'} className='aside-link-title'>
                                    <Box component={'span'} className='aside-link-label'>
                                        Ratings
                                    </Box>
                                </Box>
                                <ExpandMoreRoundedIcon />
                            </ListItemButton>
                            <Collapse in={true}>
                                <Link href='/' className='aside-content-link'>
                                    <Button component={'div'} className='aside-content-button'>
                                        <Box component={'span'} className='aside-link-icon dot'></Box>
                                        <Box component={'span'} className='aside-link-title'>
                                            <Box component={'span'} className='aside-link-label'>
                                                Movies
                                            </Box>
                                        </Box>
                                    </Button>
                                </Link>
                                <Link href='/' className='aside-content-link'>
                                    <Button component={'div'} className='aside-content-button'>
                                        <Box component={'span'} className='aside-link-icon dot'></Box>
                                        <Box component={'span'} className='aside-link-title'>
                                            <Box component={'span'} className='aside-link-label'>
                                                TV Shows
                                            </Box>
                                        </Box>
                                    </Button>
                                </Link>
                            </Collapse>
                        </Box>
                        <Box>
                            <ListItemButton className='aside-content-button'>
                                <Box component={'span'} className='aside-link-icon'>
                                    <VisibilityRoundedIcon className='aside-link-svg' />
                                </Box>
                                <Box component={'span'} className='aside-link-title'>
                                    <Box component={'span'} className='aside-link-label'>
                                        Watchlist
                                    </Box>
                                </Box>
                                <ExpandMoreRoundedIcon />
                            </ListItemButton>
                            <Collapse in={true}>
                                <Link href='/' className='aside-content-link'>
                                    <Button component={'div'} className='aside-content-button'>
                                        <Box component={'span'} className='aside-link-icon dot'></Box>
                                        <Box component={'span'} className='aside-link-title'>
                                            <Box component={'span'} className='aside-link-label'>
                                                Movies
                                            </Box>
                                        </Box>
                                    </Button>
                                </Link>
                                <Link href='/' className='aside-content-link'>
                                    <Button component={'div'} className='aside-content-button'>
                                        <Box component={'span'} className='aside-link-icon dot'></Box>
                                        <Box component={'span'} className='aside-link-title'>
                                            <Box component={'span'} className='aside-link-label'>
                                                TV Shows
                                            </Box>
                                        </Box>
                                    </Button>
                                </Link>
                            </Collapse>
                        </Box>
                    </Collapse>
                </Stack>
            </Stack>
        </Aside>
    );
};

export default Lnb;
