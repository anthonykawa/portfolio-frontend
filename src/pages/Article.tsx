import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { selectArticle } from '../actions';
import { fetchArticle } from '../queries';

type ArticleParam = {
  id: string;
}

function Article() {
  const navigate = useNavigate();
  const params = useParams<ArticleParam>();
  const [article, setArticle] = useState(useAppSelector((state) => selectArticle(state, params.id)))

  useEffect(() => {
    if (params.id) {
      fetchArticle(params.id)
      .then((article) => {
        if (article) {
          setArticle(article);
        } else {
          navigate('/404')
        }
      });
    }
  }, [params]);

  if (!article) return <></>;

  return (
    <div dangerouslySetInnerHTML={{ __html: _.toString(article.body) }}>
    </div>
  );
}

export default Article;
