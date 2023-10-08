import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/client.ts';
import Routes from './routes';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store.ts';
import { Amplify } from 'aws-amplify';
import { BrowserRouter } from 'react-router-dom';
import './index.css'

import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ReduxProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
