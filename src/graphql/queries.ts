/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getArticle = /* GraphQL */ `query GetArticle($id: ID!) {
  getArticle(id: $id) {
    id
    title
    description
    body
    authorID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetArticleQueryVariables,
  APITypes.GetArticleQuery
>;
export const listArticles = /* GraphQL */ `query ListArticles(
  $filter: ModelArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      body
      authorID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListArticlesQueryVariables,
  APITypes.ListArticlesQuery
>;
export const articlesByAuthorID = /* GraphQL */ `query ArticlesByAuthorID(
  $authorID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  articlesByAuthorID(
    authorID: $authorID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      body
      authorID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ArticlesByAuthorIDQueryVariables,
  APITypes.ArticlesByAuthorIDQuery
>;
export const getAuthor = /* GraphQL */ `query GetAuthor($id: ID!) {
  getAuthor(id: $id) {
    id
    User {
      id
      firstName
      lastName
      email
      username
      createdAt
      updatedAt
      __typename
    }
    Articles {
      nextToken
      __typename
    }
    jobTitle
    company
    createdAt
    updatedAt
    authorUserId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetAuthorQueryVariables, APITypes.GetAuthorQuery>;
export const listAuthors = /* GraphQL */ `query ListAuthors(
  $filter: ModelAuthorFilterInput
  $limit: Int
  $nextToken: String
) {
  listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      jobTitle
      company
      createdAt
      updatedAt
      authorUserId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAuthorsQueryVariables,
  APITypes.ListAuthorsQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    firstName
    lastName
    email
    username
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      email
      username
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
