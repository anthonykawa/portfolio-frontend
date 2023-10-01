/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateArticle = /* GraphQL */ `subscription OnCreateArticle($filter: ModelSubscriptionArticleFilterInput) {
  onCreateArticle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateArticleSubscriptionVariables,
  APITypes.OnCreateArticleSubscription
>;
export const onUpdateArticle = /* GraphQL */ `subscription OnUpdateArticle($filter: ModelSubscriptionArticleFilterInput) {
  onUpdateArticle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateArticleSubscriptionVariables,
  APITypes.OnUpdateArticleSubscription
>;
export const onDeleteArticle = /* GraphQL */ `subscription OnDeleteArticle($filter: ModelSubscriptionArticleFilterInput) {
  onDeleteArticle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteArticleSubscriptionVariables,
  APITypes.OnDeleteArticleSubscription
>;
export const onCreateAuthor = /* GraphQL */ `subscription OnCreateAuthor($filter: ModelSubscriptionAuthorFilterInput) {
  onCreateAuthor(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAuthorSubscriptionVariables,
  APITypes.OnCreateAuthorSubscription
>;
export const onUpdateAuthor = /* GraphQL */ `subscription OnUpdateAuthor($filter: ModelSubscriptionAuthorFilterInput) {
  onUpdateAuthor(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAuthorSubscriptionVariables,
  APITypes.OnUpdateAuthorSubscription
>;
export const onDeleteAuthor = /* GraphQL */ `subscription OnDeleteAuthor($filter: ModelSubscriptionAuthorFilterInput) {
  onDeleteAuthor(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAuthorSubscriptionVariables,
  APITypes.OnDeleteAuthorSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
