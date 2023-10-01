/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createArticle = /* GraphQL */ `mutation CreateArticle(
  $input: CreateArticleInput!
  $condition: ModelArticleConditionInput
) {
  createArticle(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateArticleMutationVariables,
  APITypes.CreateArticleMutation
>;
export const updateArticle = /* GraphQL */ `mutation UpdateArticle(
  $input: UpdateArticleInput!
  $condition: ModelArticleConditionInput
) {
  updateArticle(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateArticleMutationVariables,
  APITypes.UpdateArticleMutation
>;
export const deleteArticle = /* GraphQL */ `mutation DeleteArticle(
  $input: DeleteArticleInput!
  $condition: ModelArticleConditionInput
) {
  deleteArticle(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteArticleMutationVariables,
  APITypes.DeleteArticleMutation
>;
export const createAuthor = /* GraphQL */ `mutation CreateAuthor(
  $input: CreateAuthorInput!
  $condition: ModelAuthorConditionInput
) {
  createAuthor(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAuthorMutationVariables,
  APITypes.CreateAuthorMutation
>;
export const updateAuthor = /* GraphQL */ `mutation UpdateAuthor(
  $input: UpdateAuthorInput!
  $condition: ModelAuthorConditionInput
) {
  updateAuthor(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAuthorMutationVariables,
  APITypes.UpdateAuthorMutation
>;
export const deleteAuthor = /* GraphQL */ `mutation DeleteAuthor(
  $input: DeleteAuthorInput!
  $condition: ModelAuthorConditionInput
) {
  deleteAuthor(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAuthorMutationVariables,
  APITypes.DeleteAuthorMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
