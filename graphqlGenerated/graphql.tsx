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
  UpdatePriceListElementById: Scalars['String'];
};


export type MutationCreateNewPriceListElementArgs = {
  newPriceListElement: PriceListElementInput;
};


export type MutationUpdatePriceListElementByIdArgs = {
  _id: Scalars['String'];
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

export type Query = {
  __typename?: 'Query';
  GetPriceList: Array<Maybe<PriceListElement>>;
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

export type GetPriceListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPriceListQuery = { __typename?: 'Query', GetPriceList: Array<{ __typename?: 'PriceListElement', _id: string, name: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null }, tickets?: Array<{ __typename?: 'Ticket', price: number, description: { __typename?: 'TextContent', RUS?: string | null, ENG?: string | null, EST?: string | null }, duration?: { __typename?: 'Duration', hours: number, additionalInfo?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null } | null> | null } | null> };


export const GetPriceListDocument = gql`
    query GetPriceList {
  GetPriceList {
    _id
    name {
      RUS
      EST
      ENG
    }
    tickets {
      description {
        RUS
        ENG
        EST
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