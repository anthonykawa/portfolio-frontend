import _ from 'lodash';
import {
  withAuthenticator, 
  // WithAuthenticatorProps 
} from '@aws-amplify/ui-react';
import { ArticleItem } from '../components/article';
import { useAppSelector, useAppDispatch } from '../hooks';
import { addArticle } from '../actions';
import { useEffect } from 'react';
import { fetchArticles } from '../queries';

const Articles = withAuthenticator(function Articles() {
  const articles = useAppSelector((state) => state.articles.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchArticles().then((articles) => {
      _.forEach(articles, (article) => {
        if (article) {
          dispatch(addArticle(article));
        }
      })
    });
  }, []);

  return (
    <div className='divide-y divide-gray-200 dark:divide-gray-700'>
      <div className='space-y-2 pb-8 pt-6 md:space-y-5'>
        <h1 className='text-4xl font-bold dark:text-white'>Latest</h1>
        <p className='text-lg text-gray-500 dark:text-gray-400'>A site created with Vite and Tailwind.css</p>
      </div>
      <ul role='list' className='divide-y divide-gray-200 dark:divide-gray-700'>
        {_.map(articles, (article) => {
          return (<ArticleItem key={article.id} article={article} />);
        })}
      </ul>
    </div>
  );
});

export default Articles;
