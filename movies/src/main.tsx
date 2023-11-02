import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`
//       query {
//         movies {
//           id
//           title
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </BrowserRouter>
    </React.StrictMode>
);
