import _ from 'lodash';
import { useEffect, useState } from 'react';
import { EditableList } from "../components/EditableList";
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { addArticle, removeArticle, updateArticle as updateStateArticle } from '../../../actions';
import { fetchArticles } from '../../../queries';
import { deleteArticle, updateArticle } from '../../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import ArticleModal from './ArticleModal';
import type { Article } from '../../../actions/articles';
import { Article as GraphQLArticle } from '../../../API';

function AdminArticles() {
  const articles = useAppSelector((state) => state.articles.value);
  const [showModal, setShowModal] = useState<boolean>(true);
  const [selectedArticle, setSelectedArticle] = useState<Article | undefined>();
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

  const handleDelete = async (id: string) => {
    try {
      await API.graphql(graphqlOperation(deleteArticle, { input: { id } }));
      dispatch(removeArticle(id));
    } catch (error) {
      console.error('error', error);
    }
  }

  const handleEdit = (id: string) => {
    const article = _.find(articles, (article) => article.id === id);
    if (article) {
      setSelectedArticle(article);
      setShowModal(true);
    }
  }

  const handlePreview = (id: string) => {
    console.log('preview article', id);
  }

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedArticle(undefined);
  }

  const handleModalSave = async (article: Article) => {
    const updatedArticleData = (await API.graphql(graphqlOperation(updateArticle, {
      input: _.omit(article, ['__typename', 'createdAt', 'owner', 'updatedAt']),
    })) as unknown) as {
      data: {
        updateArticle: GraphQLArticle,
      } 
    };
    dispatch(updateStateArticle(updatedArticleData.data.updateArticle));
    setShowModal(false);
    console.log(`article ${article.id} successfully saved`);
  }

  return (
    <div>
      <ArticleModal
        showModal={showModal}
        currentArticle={selectedArticle}
        onClose={handleModalClose}
        onSave={handleModalSave}
      />
      <EditableList>
        {articles?.map((article) => (  
          <EditableList.Item
            key={article.id}
            title={article.title}
            description={article.description}
            id={article.id}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onPreview={handlePreview}
          />
        ))}
      </EditableList>
    </div>
  );
}

export default AdminArticles;
