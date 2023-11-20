import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import GlobalNavigationBar from '../../../components/common/layout/GlobalNavigationBar';

const LayoutTemplate = (props: PropsWithChildren) => {
    return (
        <Box>
            {/* <img src={reactLogo} /> */}
            <GlobalNavigationBar />
            <Box>{props.children}</Box>
        </Box>
    );
};

export default LayoutTemplate;
