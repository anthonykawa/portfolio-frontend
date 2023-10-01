import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/client.ts';
import Routes from './routes';
import Nav from './components/navbar';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Nav />
      <Routes />
    </ApolloProvider>
  </React.StrictMode>,
)
