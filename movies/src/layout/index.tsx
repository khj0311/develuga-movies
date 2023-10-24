import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import GlobalNavigationBar from './templates/GlobalNavigationBar';

const Layout = (props: PropsWithChildren) => {
    return (
        <Box>
            {/* <img src={reactLogo} /> */}
            <GlobalNavigationBar />
            {/* <Box>{props.children}</Box> */}
        </Box>
    );
};

export default Layout;
