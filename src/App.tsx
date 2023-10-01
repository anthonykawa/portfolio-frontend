import { useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { gql, useQuery } from '@apollo/client';
import { getArticle } from './graphql/queries';
import '@aws-amplify/ui-react/styles.css';
import './App.css'

import awsconfig from './amplifyconfiguration.json';
Amplify.configure(awsconfig);

function App() {
  const articles = useQuery(gql(getArticle));
  useEffect(() => {
    console.log('articles', articles.data);
  }, [articles.data]);
  return (
    <div className='bg-white dark:bg-black'>
      <div className='relative isolate px-6 pt-14 lg:px-8'>

      </div>
    </div>
  )
}

export default App
