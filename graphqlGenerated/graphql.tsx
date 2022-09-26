import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Duration = {
  __typename?: 'Duration';
  additionalInfo?: Maybe<TextContent>;
  hours: Scalars['Float'];
};

export type DurationInput = {
  additionalInfo?: InputMaybe<TextContentInput>;
  hours: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateNewPriceListElement?: Maybe<PriceListElement>;
  DeletePriceListElementById: Scalars['String'];
  UpdatePriceListElementById: PriceListElement;
};


export type MutationCreateNewPriceListElementArgs = {
  newPriceListElement: PriceListElementInput;
};


export type MutationDeletePriceListElementByIdArgs = {
  _id: Scalars['String'];
};


export type MutationUpdatePriceListElementByIdArgs = {
  id: Scalars['String'];
  updatedPriceListElement: PriceListElementInput;
};

export type PriceListElement = {
  __typename?: 'PriceListElement';
  _id: Scalars['ID'];
  name: TextContent;
  tickets?: Maybe<Array<Maybe<Ticket>>>;
};

export type PriceListElementInput = {
  name: TextContentInput;
  tickets?: InputMaybe<Array<InputMaybe<TicketInput>>>;
};

export type PriceListElementInput1 = {
  _id: Scalars['String'];
  name: TextContentInput;
  tickets?: InputMaybe<Array<InputMaybe<TicketInput>>>;
};

export type Query = {
  __typename?: 'Query';
  GetPriceList: Array<Maybe<PriceListElement>>;
  GetPriceListElementById: PriceListElement;
};


export type QueryGetPriceListElementByIdArgs = {
  id: Scalars['String'];
};

export type TextContent = {
  __typename?: 'TextContent';
  ENG?: Maybe<Scalars['String']>;
  EST?: Maybe<Scalars['String']>;
  RUS?: Maybe<Scalars['String']>;
};

export type TextContentInput = {
  ENG?: InputMaybe<Scalars['String']>;
  EST?: InputMaybe<Scalars['String']>;
  RUS?: InputMaybe<Scalars['String']>;
};

export type Ticket = {
  __typename?: 'Ticket';
  description: TextContent;
  duration?: Maybe<Duration>;
  price: Scalars['Float'];
};

export type TicketInput = {
  description: TextContentInput;
  duration?: InputMaybe<DurationInput>;
  price: Scalars['Float'];
};

export type CreateNewPriceListElementMutationVariables = Exact<{
  newPriceListElement: PriceListElementInput;
}>;


export type CreateNewPriceListElementMutation = { __typename?: 'Mutation', CreateNewPriceListElement?: { __typename?: 'PriceListElement', _id: string, name: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null }, tickets?: Array<{ __typename?: 'Ticket', price: number, description: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null }, duration?: { __typename?: 'Duration', hours: number, additionalInfo?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null } | null> | null } | null };

export type DeletePriceListElementByIdMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeletePriceListElementByIdMutation = { __typename?: 'Mutation', DeletePriceListElementById: string };

export type ChangePriceListElementByIdMutationVariables = Exact<{
  updatedPriceListElement: PriceListElementInput;
  id: Scalars['String'];
}>;


export type ChangePriceListElementByIdMutation = { __typename?: 'Mutation', UpdatePriceListElementById: { __typename?: 'PriceListElement', _id: string, name: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null }, tickets?: Array<{ __typename?: 'Ticket', price: number, description: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null }, duration?: { __typename?: 'Duration', hours: number, additionalInfo?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null } | null> | null } };

export type GetPriceListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPriceListQuery = { __typename?: 'Query', GetPriceList: Array<{ __typename?: 'PriceListElement', _id: string, name: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } } | null> };

export type GetPriceListElementByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPriceListElementByIdQuery = { __typename?: 'Query', GetPriceListElementById: { __typename?: 'PriceListElement', _id: string, name: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null }, tickets?: Array<{ __typename?: 'Ticket', price: number, description: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null }, duration?: { __typename?: 'Duration', hours: number, additionalInfo?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null } | null> | null } };

export type GetPriceListNamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPriceListNamesQuery = { __typename?: 'Query', GetPriceList: Array<{ __typename?: 'PriceListElement', _id: string, name: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } } | null> };


export const CreateNewPriceListElementDocument = gql`
    mutation CreateNewPriceListElement($newPriceListElement: PriceListElementInput!) {
  CreateNewPriceListElement(newPriceListElement: $newPriceListElement) {
    _id
    name {
      RUS
      EST
      ENG
    }
    tickets {
      description {
        RUS
        EST
        ENG
      }
      duration {
        hours
        additionalInfo {
          RUS
          EST
          ENG
        }
      }
      price
    }
  }
}
    `;
export type CreateNewPriceListElementMutationFn = Apollo.MutationFunction<CreateNewPriceListElementMutation, CreateNewPriceListElementMutationVariables>;

/**
 * __useCreateNewPriceListElementMutation__
 *
 * To run a mutation, you first call `useCreateNewPriceListElementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewPriceListElementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewPriceListElementMutation, { data, loading, error }] = useCreateNewPriceListElementMutation({
 *   variables: {
 *      newPriceListElement: // value for 'newPriceListElement'
 *   },
 * });
 */
export function useCreateNewPriceListElementMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewPriceListElementMutation, CreateNewPriceListElementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewPriceListElementMutation, CreateNewPriceListElementMutationVariables>(CreateNewPriceListElementDocument, options);
      }
export type CreateNewPriceListElementMutationHookResult = ReturnType<typeof useCreateNewPriceListElementMutation>;
export type CreateNewPriceListElementMutationResult = Apollo.MutationResult<CreateNewPriceListElementMutation>;
export type CreateNewPriceListElementMutationOptions = Apollo.BaseMutationOptions<CreateNewPriceListElementMutation, CreateNewPriceListElementMutationVariables>;
export const DeletePriceListElementByIdDocument = gql`
    mutation DeletePriceListElementById($id: String!) {
  DeletePriceListElementById(_id: $id)
}
    `;
export type DeletePriceListElementByIdMutationFn = Apollo.MutationFunction<DeletePriceListElementByIdMutation, DeletePriceListElementByIdMutationVariables>;

/**
 * __useDeletePriceListElementByIdMutation__
 *
 * To run a mutation, you first call `useDeletePriceListElementByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePriceListElementByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePriceListElementByIdMutation, { data, loading, error }] = useDeletePriceListElementByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePriceListElementByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeletePriceListElementByIdMutation, DeletePriceListElementByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePriceListElementByIdMutation, DeletePriceListElementByIdMutationVariables>(DeletePriceListElementByIdDocument, options);
      }
export type DeletePriceListElementByIdMutationHookResult = ReturnType<typeof useDeletePriceListElementByIdMutation>;
export type DeletePriceListElementByIdMutationResult = Apollo.MutationResult<DeletePriceListElementByIdMutation>;
export type DeletePriceListElementByIdMutationOptions = Apollo.BaseMutationOptions<DeletePriceListElementByIdMutation, DeletePriceListElementByIdMutationVariables>;
export const ChangePriceListElementByIdDocument = gql`
    mutation ChangePriceListElementById($updatedPriceListElement: PriceListElementInput!, $id: String!) {
  UpdatePriceListElementById(
    updatedPriceListElement: $updatedPriceListElement
    id: $id
  ) {
    _id
    name {
      RUS
      EST
      ENG
    }
    tickets {
      description {
        RUS
        EST
        ENG
      }
      duration {
        hours
        additionalInfo {
          RUS
          EST
          ENG
        }
      }
      price
    }
  }
}
    `;
export type ChangePriceListElementByIdMutationFn = Apollo.MutationFunction<ChangePriceListElementByIdMutation, ChangePriceListElementByIdMutationVariables>;

/**
 * __useChangePriceListElementByIdMutation__
 *
 * To run a mutation, you first call `useChangePriceListElementByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePriceListElementByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePriceListElementByIdMutation, { data, loading, error }] = useChangePriceListElementByIdMutation({
 *   variables: {
 *      updatedPriceListElement: // value for 'updatedPriceListElement'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useChangePriceListElementByIdMutation(baseOptions?: Apollo.MutationHookOptions<ChangePriceListElementByIdMutation, ChangePriceListElementByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePriceListElementByIdMutation, ChangePriceListElementByIdMutationVariables>(ChangePriceListElementByIdDocument, options);
      }
export type ChangePriceListElementByIdMutationHookResult = ReturnType<typeof useChangePriceListElementByIdMutation>;
export type ChangePriceListElementByIdMutationResult = Apollo.MutationResult<ChangePriceListElementByIdMutation>;
export type ChangePriceListElementByIdMutationOptions = Apollo.BaseMutationOptions<ChangePriceListElementByIdMutation, ChangePriceListElementByIdMutationVariables>;
export const GetPriceListDocument = gql`
    query GetPriceList {
  GetPriceList {
    _id
    name {
      RUS
      EST
      ENG
    }
  }
}
    `;

/**
 * __useGetPriceListQuery__
 *
 * To run a query within a React component, call `useGetPriceListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPriceListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPriceListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPriceListQuery(baseOptions?: Apollo.QueryHookOptions<GetPriceListQuery, GetPriceListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPriceListQuery, GetPriceListQueryVariables>(GetPriceListDocument, options);
      }
export function useGetPriceListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPriceListQuery, GetPriceListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPriceListQuery, GetPriceListQueryVariables>(GetPriceListDocument, options);
        }
export type GetPriceListQueryHookResult = ReturnType<typeof useGetPriceListQuery>;
export type GetPriceListLazyQueryHookResult = ReturnType<typeof useGetPriceListLazyQuery>;
export type GetPriceListQueryResult = Apollo.QueryResult<GetPriceListQuery, GetPriceListQueryVariables>;
export const GetPriceListElementByIdDocument = gql`
    query GetPriceListElementById($id: String!) {
  GetPriceListElementById(id: $id) {
    _id
    name {
      RUS
      EST
      ENG
    }
    tickets {
      description {
        RUS
        EST
        ENG
      }
      duration {
        hours
        additionalInfo {
          RUS
          EST
          ENG
        }
      }
      price
    }
  }
}
    `;

/**
 * __useGetPriceListElementByIdQuery__
 *
 * To run a query within a React component, call `useGetPriceListElementByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPriceListElementByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPriceListElementByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPriceListElementByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPriceListElementByIdQuery, GetPriceListElementByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPriceListElementByIdQuery, GetPriceListElementByIdQueryVariables>(GetPriceListElementByIdDocument, options);
      }
export function useGetPriceListElementByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPriceListElementByIdQuery, GetPriceListElementByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPriceListElementByIdQuery, GetPriceListElementByIdQueryVariables>(GetPriceListElementByIdDocument, options);
        }
export type GetPriceListElementByIdQueryHookResult = ReturnType<typeof useGetPriceListElementByIdQuery>;
export type GetPriceListElementByIdLazyQueryHookResult = ReturnType<typeof useGetPriceListElementByIdLazyQuery>;
export type GetPriceListElementByIdQueryResult = Apollo.QueryResult<GetPriceListElementByIdQuery, GetPriceListElementByIdQueryVariables>;
export const GetPriceListNamesDocument = gql`
    query GetPriceListNames {
  GetPriceList {
    _id
    name {
      RUS
      EST
      ENG
    }
  }
}
    `;

/**
 * __useGetPriceListNamesQuery__
 *
 * To run a query within a React component, call `useGetPriceListNamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPriceListNamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPriceListNamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPriceListNamesQuery(baseOptions?: Apollo.QueryHookOptions<GetPriceListNamesQuery, GetPriceListNamesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPriceListNamesQuery, GetPriceListNamesQueryVariables>(GetPriceListNamesDocument, options);
      }
export function useGetPriceListNamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPriceListNamesQuery, GetPriceListNamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPriceListNamesQuery, GetPriceListNamesQueryVariables>(GetPriceListNamesDocument, options);
        }
export type GetPriceListNamesQueryHookResult = ReturnType<typeof useGetPriceListNamesQuery>;
export type GetPriceListNamesLazyQueryHookResult = ReturnType<typeof useGetPriceListNamesLazyQuery>;
export type GetPriceListNamesQueryResult = Apollo.QueryResult<GetPriceListNamesQuery, GetPriceListNamesQueryVariables>;