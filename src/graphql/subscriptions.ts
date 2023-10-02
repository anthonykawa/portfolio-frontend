/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateArticle = /* GraphQL */ `subscription OnCreateArticle(
  $filter: ModelSubscriptionArticleFilterInput
  $owner: String
) {
  onCreateArticle(filter: $filter, owner: $owner) {
    id
    title
    description
    body
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateArticleSubscriptionVariables,
  APITypes.OnCreateArticleSubscription
>;
export const onUpdateArticle = /* GraphQL */ `subscription OnUpdateArticle(
  $filter: ModelSubscriptionArticleFilterInput
  $owner: String
) {
  onUpdateArticle(filter: $filter, owner: $owner) {
    id
    title
    description
    body
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateArticleSubscriptionVariables,
  APITypes.OnUpdateArticleSubscription
>;
export const onDeleteArticle = /* GraphQL */ `subscription OnDeleteArticle(
  $filter: ModelSubscriptionArticleFilterInput
  $owner: String
) {
  onDeleteArticle(filter: $filter, owner: $owner) {
    id
    title
    description
    body
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteArticleSubscriptionVariables,
  APITypes.OnDeleteArticleSubscription
>;
export const onCreateAuthor = /* GraphQL */ `subscription OnCreateAuthor(
  $filter: ModelSubscriptionAuthorFilterInput
  $owner: String
) {
  onCreateAuthor(filter: $filter, owner: $owner) {
    id
    jobTitle
    company
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAuthorSubscriptionVariables,
  APITypes.OnCreateAuthorSubscription
>;
export const onUpdateAuthor = /* GraphQL */ `subscription OnUpdateAuthor(
  $filter: ModelSubscriptionAuthorFilterInput
  $owner: String
) {
  onUpdateAuthor(filter: $filter, owner: $owner) {
    id
    jobTitle
    company
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAuthorSubscriptionVariables,
  APITypes.OnUpdateAuthorSubscription
>;
export const onDeleteAuthor = /* GraphQL */ `subscription OnDeleteAuthor(
  $filter: ModelSubscriptionAuthorFilterInput
  $owner: String
) {
  onDeleteAuthor(filter: $filter, owner: $owner) {
    id
    jobTitle
    company
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAuthorSubscriptionVariables,
  APITypes.OnDeleteAuthorSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
    id
    email
    imageURI
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
    id
    email
    imageURI
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
    id
    email
    imageURI
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
