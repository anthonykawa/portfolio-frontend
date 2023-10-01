/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateArticleInput = {
  id?: string | null,
  title: string,
  description: string,
  body?: string | null,
  authorID: string,
};

export type ModelArticleConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  body?: ModelStringInput | null,
  authorID?: ModelIDInput | null,
  and?: Array< ModelArticleConditionInput | null > | null,
  or?: Array< ModelArticleConditionInput | null > | null,
  not?: ModelArticleConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Article = {
  __typename: "Article",
  id: string,
  title: string,
  description: string,
  body?: string | null,
  authorID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateArticleInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  body?: string | null,
  authorID?: string | null,
};

export type DeleteArticleInput = {
  id: string,
};

export type CreateAuthorInput = {
  id?: string | null,
  jobTitle: string,
  company?: string | null,
  authorUserId?: string | null,
};

export type ModelAuthorConditionInput = {
  jobTitle?: ModelStringInput | null,
  company?: ModelStringInput | null,
  and?: Array< ModelAuthorConditionInput | null > | null,
  or?: Array< ModelAuthorConditionInput | null > | null,
  not?: ModelAuthorConditionInput | null,
  authorUserId?: ModelIDInput | null,
};

export type Author = {
  __typename: "Author",
  id: string,
  User?: User | null,
  Articles?: ModelArticleConnection | null,
  jobTitle: string,
  company?: string | null,
  createdAt: string,
  updatedAt: string,
  authorUserId?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  username: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelArticleConnection = {
  __typename: "ModelArticleConnection",
  items:  Array<Article | null >,
  nextToken?: string | null,
};

export type UpdateAuthorInput = {
  id: string,
  jobTitle?: string | null,
  company?: string | null,
  authorUserId?: string | null,
};

export type DeleteAuthorInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  email: string,
  username: string,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  username?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelArticleFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  body?: ModelStringInput | null,
  authorID?: ModelIDInput | null,
  and?: Array< ModelArticleFilterInput | null > | null,
  or?: Array< ModelArticleFilterInput | null > | null,
  not?: ModelArticleFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAuthorFilterInput = {
  id?: ModelIDInput | null,
  jobTitle?: ModelStringInput | null,
  company?: ModelStringInput | null,
  and?: Array< ModelAuthorFilterInput | null > | null,
  or?: Array< ModelAuthorFilterInput | null > | null,
  not?: ModelAuthorFilterInput | null,
  authorUserId?: ModelIDInput | null,
};

export type ModelAuthorConnection = {
  __typename: "ModelAuthorConnection",
  items:  Array<Author | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionArticleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  body?: ModelSubscriptionStringInput | null,
  authorID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionArticleFilterInput | null > | null,
  or?: Array< ModelSubscriptionArticleFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAuthorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  jobTitle?: ModelSubscriptionStringInput | null,
  company?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAuthorFilterInput | null > | null,
  or?: Array< ModelSubscriptionAuthorFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type CreateArticleMutationVariables = {
  input: CreateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type CreateArticleMutation = {
  createArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    description: string,
    body?: string | null,
    authorID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateArticleMutationVariables = {
  input: UpdateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type UpdateArticleMutation = {
  updateArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    description: string,
    body?: string | null,
    authorID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteArticleMutationVariables = {
  input: DeleteArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type DeleteArticleMutation = {
  deleteArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    description: string,
    body?: string | null,
    authorID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAuthorMutationVariables = {
  input: CreateAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type CreateAuthorMutation = {
  createAuthor?:  {
    __typename: "Author",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Articles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    jobTitle: string,
    company?: string | null,
    createdAt: string,
    updatedAt: string,
    authorUserId?: string | null,
  } | null,
};

export type UpdateAuthorMutationVariables = {
  input: UpdateAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type UpdateAuthorMutation = {
  updateAuthor?:  {
    __typename: "Author",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Articles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    jobTitle: string,
    company?: string | null,
    createdAt: string,
    updatedAt: string,
    authorUserId?: string | null,
  } | null,
};

export type DeleteAuthorMutationVariables = {
  input: DeleteAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type DeleteAuthorMutation = {
  deleteAuthor?:  {
    __typename: "Author",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Articles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    jobTitle: string,
    company?: string | null,
    createdAt: string,
    updatedAt: string,
    authorUserId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetArticleQueryVariables = {
  id: string,
};

export type GetArticleQuery = {
  getArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    description: string,
    body?: string | null,
    authorID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListArticlesQueryVariables = {
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticlesQuery = {
  listArticles?:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      id: string,
      title: string,
      description: string,
      body?: string | null,
      authorID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ArticlesByAuthorIDQueryVariables = {
  authorID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ArticlesByAuthorIDQuery = {
  articlesByAuthorID?:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      id: string,
      title: string,
      description: string,
      body?: string | null,
      authorID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAuthorQueryVariables = {
  id: string,
};

export type GetAuthorQuery = {
  getAuthor?:  {
    __typename: "Author",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Articles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    jobTitle: string,
    company?: string | null,
    createdAt: string,
    updatedAt: string,
    authorUserId?: string | null,
  } | null,
};

export type ListAuthorsQueryVariables = {
  filter?: ModelAuthorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAuthorsQuery = {
  listAuthors?:  {
    __typename: "ModelAuthorConnection",
    items:  Array< {
      __typename: "Author",
      id: string,
      jobTitle: string,
      company?: string | null,
      createdAt: string,
      updatedAt: string,
      authorUserId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
};

export type OnCreateArticleSubscription = {
  onCreateArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    description: string,
    body?: string | null,
    authorID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
};

export type OnUpdateArticleSubscription = {
  onUpdateArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    description: string,
    body?: string | null,
    authorID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
};

export type OnDeleteArticleSubscription = {
  onDeleteArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    description: string,
    body?: string | null,
    authorID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null,
};

export type OnCreateAuthorSubscription = {
  onCreateAuthor?:  {
    __typename: "Author",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Articles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    jobTitle: string,
    company?: string | null,
    createdAt: string,
    updatedAt: string,
    authorUserId?: string | null,
  } | null,
};

export type OnUpdateAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null,
};

export type OnUpdateAuthorSubscription = {
  onUpdateAuthor?:  {
    __typename: "Author",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Articles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    jobTitle: string,
    company?: string | null,
    createdAt: string,
    updatedAt: string,
    authorUserId?: string | null,
  } | null,
};

export type OnDeleteAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null,
};

export type OnDeleteAuthorSubscription = {
  onDeleteAuthor?:  {
    __typename: "Author",
    id: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Articles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    jobTitle: string,
    company?: string | null,
    createdAt: string,
    updatedAt: string,
    authorUserId?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
