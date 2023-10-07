import { ListArticlesQuery, GetArticleQuery } from '../API';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { API, graphqlOperation } from 'aws-amplify';
import { listArticles, getArticle } from '../graphql/queries';

export const fetchArticles = async () => {
  const articlesData: GraphQLResult<ListArticlesQuery> = (await API.graphql(graphqlOperation(listArticles)) as unknown) as {
    data: ListArticlesQuery,
  };
  const articles = articlesData.data?.listArticles?.items;
  return articles;
}

export const fetchArticle = async (id: string) => {
  const articleData: GraphQLResult<GetArticleQuery> = (await API.graphql(graphqlOperation(getArticle, { id })) as unknown) as {
    data: GetArticleQuery,
  }
  const article = articleData.data?.getArticle;
  return article;
}