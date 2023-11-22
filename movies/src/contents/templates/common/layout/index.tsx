import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import GlobalNavigationBar from '../../../components/common/layout/GlobalNavigationBar';
import { Contents } from '../../../../styles/common/layout';

const LayoutTemplate = (props: PropsWithChildren) => {
    return (
        <Box>
            <GlobalNavigationBar />
            <Contents id='contents'>{props.children}</Contents>
        </Box>
    );
};

export default LayoutTemplate;
