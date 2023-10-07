import { Link } from 'react-router-dom';
import type { Article as ArticleType } from '../../actions/articles';

type ArticleProps = {
  article: ArticleType;
  user?: {
    username: string;
    attributes?: {
      email: string;
      email_verified: boolean;
      name: string;
      sub: string;
    }
  }
};

function Article({ article }: ArticleProps) {
  const date = new Date(article.createdAt);
  return (
    <li className='py-12  px-5 my-2'>
      <article>
        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <dl>
            <dt className='sr-only'>Published on</dt>
            <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
              <time dateTime={date.toISOString()}>{date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
            </dd>
          </dl>
          <div className="space-y-5 xl:col-span-3">
            <div className='space-y-6'>
              <div>
                <h2 className='text-2xl font-bold leading-8 tracking-tight'>
                  <a className="text-gray-900 dark:text-gray-100 hover:underline" href="#">{article.title}</a>
                </h2>
              </div>
              <div className='max-w-none text-gray-500 dark:text-gray-400'>
                {article.description}
              </div>
            </div>
            <div className='text-base font-medium leading-6'>
              <Link to={`/articles/${article.id}`} className='text-pink-700 hover:underline dark:text-slate-50' aria-label={`Read &quot;${article.title}&quot;`}>Read more →</Link>
            </div>
          </div>
        </div>
      </article>
    </li>
  );

}

export default Article;
