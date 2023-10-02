import _ from 'lodash';
import {
  withAuthenticator, 
  // WithAuthenticatorProps 
} from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { listArticles } from '../graphql/queries';
import { Article } from '../components/article';
import { useAppSelector, useAppDispatch } from '../hooks';
import { addArticle } from '../actions';
import { ListArticlesQuery } from '../API';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import {} from '@headlessui/react';
import { useEffect } from 'react';

const Articles = withAuthenticator(function Articles(
//   {
//  signOut, user 
// }: WithAuthenticatorProps
) {
  const articles = useAppSelector((state) => state.articles.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesData: GraphQLResult<ListArticlesQuery> = (await API.graphql(graphqlOperation(listArticles)) as unknown) as {
        data: ListArticlesQuery,
      };
      const articles = articlesData.data?.listArticles?.items;
      _.forEach(articles, (article) => {
        if (article) {
          dispatch(addArticle(article));
        }
      })
    }
    fetchArticles();
  }, []);

  // const articles = useQuery(gql(listArticles));

  return (
    <div className='divide-y divide-gray-200 dark:divide-gray-700'>
      <div className='space-y-2 pb-8 pt-6 md:space-y-5'>
        <h1 className='text-4xl font-bold dark:text-white'>Latest</h1>
        <p className='text-lg text-gray-500 dark:text-gray-400'>A site created with Vite and Tailwind.css</p>
      </div>
      <ul role='list' className='divide-y divide-gray-200 dark:divide-gray-700'>
        {_.map(articles, (article) => {
          return (<Article key={article.id} article={article} />);
        })}
      </ul>
    </div>
  );
});

export default Articles;
