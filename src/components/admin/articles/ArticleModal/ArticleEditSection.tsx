import _ from 'lodash';
import { Dispatch, ChangeEvent, SetStateAction, forwardRef, ForwardedRef } from 'react';
import { Article } from "../../../../actions/articles";
import Editor from '../../components/Editor';
import { Editor as TinyMCEEditor } from 'tinymce';

type ArticleEditSectionProps = {
  article: Article
  setArticle: Dispatch<SetStateAction<Article | undefined>>,
};
const ArticleEditSection = forwardRef((
  { article, setArticle }: ArticleEditSectionProps,
  ref: ForwardedRef<TinyMCEEditor>,
) => {

  const handleChange = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.persist();
    const { target } = evt;
    const { name, value } = target;
    const next = _.clone(article || {});
    if (!next.id) throw new Error('Unable to locate article\'s id');
    _.assign(next, {
      [name]: value,
    });
    setArticle(next);
  }

  const handleBodyChange = (value: string) => {
    const next = _.clone(article || {});
    if (!next.id) throw new Error('Unable to locate article\'s id');
    _.assign(next, {
      body: value,
    });
    setArticle(next);
  }

  return (
    <div>
      <form action="#" onChange={handleChange}>
        <div className='grid gap-4 mb-4'>
          <div>
            <label htmlFor='title' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Title</label>
            <input type="text" name="title" id="title" defaultValue={article.title} className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="title..." />
          </div>
          <div>
            <label htmlFor='description' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Description</label>
            <input type="text" name="description" id="description" defaultValue={article.description} className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="title..." />
          </div>
          <div>
            <Editor ref={ref} value={article.body} onChange={handleBodyChange} />
          </div>
        </div>
      </form>
    </div>
  );
});

export default ArticleEditSection;
