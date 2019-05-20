// import React from 'react';
// import ReactDOM from 'react-dom';
// import { ApolloProvider } from 'react-apollo';
// import { ApolloClient } from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';

// import Routes from './routes';
// import * as registerServiceWorker from './serviceWorker';


// const link = new HttpLink({
//   uri: 'http://localhost:8081/graphql'
// })

// const client = new ApolloClient({
//   link
// })

// const App = (
//   <ApolloProvider client={client}>
//     <Routes />
//   </ApolloProvider>
// );

// ReactDOM.render(App, document.getElementById('root'));
// registerServiceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import 'semantic-ui-css/semantic.min.css';

import Routes from './routes';
import * as registerServiceWorker from './serviceWorker';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8081/graphql',
});

const client = new ApolloClient({
  networkInterface,
});

const App = (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker.unregister();
