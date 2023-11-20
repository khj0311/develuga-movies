import { gql, useQuery } from '@apollo/client';
import Layout from './contents/templates/common/layout';
import Router from './router';
import './styles/index.css';

const GET_MOVIES = gql`
    query {
        movies {
            id
            title
        }
    }
`;

function App() {
    // const [count, setCount] = useState(0);
    // const { data } = useQuery(GET_MOVIES);

    return (
        <Layout>
            <Router />
        </Layout>
    );
}

export default App;
