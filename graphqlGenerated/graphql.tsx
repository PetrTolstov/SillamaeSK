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

export type Field = {
  __typename?: 'Field';
  fieldInfo?: Maybe<Scalars['String']>;
  fieldTitle?: Maybe<TextContent>;
};

export type FieldInput = {
  fieldInfo?: InputMaybe<Scalars['String']>;
  fieldTitle?: InputMaybe<TextContentInput>;
};

export type GeneralContactsInfo = {
  __typename?: 'GeneralContactsInfo';
  _id?: Maybe<Scalars['ID']>;
  addressField?: Maybe<Field>;
  emailField?: Maybe<Field>;
  phoneField?: Maybe<Field>;
};

export type GeneralContactsInfoInput = {
  addressField?: InputMaybe<FieldInput>;
  emailField?: InputMaybe<FieldInput>;
  phoneField?: InputMaybe<FieldInput>;
};

export type LatestNews = {
  __typename?: 'LatestNews';
  _id: Scalars['ID'];
  created_time?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  isLoggedIn?: Maybe<Scalars['Boolean']>;
  str?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AddSimplePage?: Maybe<Scalars['String']>;
  CreateNewPriceListElement?: Maybe<PriceListElement>;
  DeletePriceListElementById: Scalars['String'];
  EditSimplePage?: Maybe<Scalars['String']>;
  EditToken?: Maybe<Scalars['String']>;
  Login: LoginResponse;
  RefetchLatestNews: Scalars['String'];
  SetGeneralContactInfo?: Maybe<Scalars['String']>;
  SetPersonalContactInfo?: Maybe<Scalars['String']>;
  SetSportOpportunitiesDescription?: Maybe<Scalars['String']>;
  SetTimeTable?: Maybe<Scalars['String']>;
  UpdatePriceListElementById: PriceListElement;
  UpdateUser: Scalars['String'];
};


export type MutationAddSimplePageArgs = {
  newSimplePage?: InputMaybe<SimplePageInput>;
  type?: InputMaybe<Scalars['Int']>;
};


export type MutationCreateNewPriceListElementArgs = {
  newPriceListElement: PriceListElementInput;
};


export type MutationDeletePriceListElementByIdArgs = {
  _id: Scalars['String'];
};


export type MutationEditSimplePageArgs = {
  _id: Scalars['ID'];
  updatedSimplePage?: InputMaybe<SimplePageInput>;
};


export type MutationEditTokenArgs = {
  newToken?: InputMaybe<Scalars['String']>;
};


export type MutationLoginArgs = {
  userData: UserInput;
};


export type MutationSetGeneralContactInfoArgs = {
  newGeneralContactsInfo?: InputMaybe<GeneralContactsInfoInput>;
};


export type MutationSetPersonalContactInfoArgs = {
  newPersonalContactsInfo?: InputMaybe<Array<InputMaybe<PersonContactInfoInput>>>;
};


export type MutationSetSportOpportunitiesDescriptionArgs = {
  newSportOpportunitiesDescription?: InputMaybe<SportOpportunitiesDescriptionInput>;
};


export type MutationSetTimeTableArgs = {
  newTimeTable?: InputMaybe<TimeTableInput>;
};


export type MutationUpdatePriceListElementByIdArgs = {
  id: Scalars['String'];
  updatedPriceListElement: PriceListElementInput;
};


export type MutationUpdateUserArgs = {
  updatedUser: UserInput;
};

export type NewsResponse = {
  __typename?: 'NewsResponse';
  data?: Maybe<LatestNews>;
  errorMessage?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type PersonContactInfo = {
  __typename?: 'PersonContactInfo';
  _id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<TextContent>;
};

export type PersonContactInfoInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<TextContentInput>;
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
  GetGeneralContactsInfo?: Maybe<GeneralContactsInfo>;
  GetLatestNews: NewsResponse;
  GetPersonalContactsInfo?: Maybe<Array<Maybe<PersonContactInfo>>>;
  GetPriceList: Array<Maybe<PriceListElement>>;
  GetPriceListElementById: PriceListElement;
  GetSimplePages?: Maybe<Array<SimplePage>>;
  GetSportOpportunitiesDescription?: Maybe<SportOpportunitiesDescription>;
  GetTimeTable?: Maybe<TimeTable>;
};


export type QueryGetPriceListElementByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetSimplePagesArgs = {
  type?: InputMaybe<Scalars['Int']>;
};

export type ResponseData = LatestNews | StringBox;

export type SimplePage = {
  __typename?: 'SimplePage';
  _id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  text?: Maybe<TextContent>;
  title?: Maybe<TextContent>;
  type: Scalars['Int'];
};

export type SimplePageInput = {
  image?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<TextContentInput>;
  title?: InputMaybe<TextContentInput>;
};

export type SportOpportunitiesDescription = {
  __typename?: 'SportOpportunitiesDescription';
  text?: Maybe<TextContent>;
  title?: Maybe<TextContent>;
};

export type SportOpportunitiesDescriptionInput = {
  text?: InputMaybe<TextContentInput>;
  title?: InputMaybe<TextContentInput>;
};

export type StringBox = {
  __typename?: 'StringBox';
  str?: Maybe<Scalars['String']>;
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

export type TimeTable = {
  __typename?: 'TimeTable';
  SportComplex?: Maybe<TimeTableBlock>;
  SwimmingPool?: Maybe<TimeTableBlock>;
  title?: Maybe<TextContent>;
};

export type TimeTableBlock = {
  __typename?: 'TimeTableBlock';
  minTitle1?: Maybe<TextContent>;
  minTitle2?: Maybe<TextContent>;
  timeTable1?: Maybe<Scalars['String']>;
  timeTable2?: Maybe<Scalars['String']>;
  title?: Maybe<TextContent>;
};

export type TimeTableBlockInput = {
  minTitle1?: InputMaybe<TextContentInput>;
  minTitle2?: InputMaybe<TextContentInput>;
  timeTable1?: InputMaybe<Scalars['String']>;
  timeTable2?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<TextContentInput>;
};

export type TimeTableInput = {
  SportComplex?: InputMaybe<TimeTableBlockInput>;
  SwimmingPool?: InputMaybe<TimeTableBlockInput>;
  title?: InputMaybe<TextContentInput>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  login: Scalars['String'];
  password: Scalars['String'];
};

export type UserInput = {
  login: Scalars['String'];
  password: Scalars['String'];
};

export type AddSimplePageMutationVariables = Exact<{
  type?: InputMaybe<Scalars['Int']>;
  newSimplePage?: InputMaybe<SimplePageInput>;
}>;


export type AddSimplePageMutation = { __typename?: 'Mutation', AddSimplePage?: string | null };

export type CreateNewPriceListElementMutationVariables = Exact<{
  newPriceListElement: PriceListElementInput;
}>;


export type CreateNewPriceListElementMutation = { __typename?: 'Mutation', CreateNewPriceListElement?: { __typename?: 'PriceListElement', _id: string, name: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null }, tickets?: Array<{ __typename?: 'Ticket', price: number, description: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null }, duration?: { __typename?: 'Duration', hours: number, additionalInfo?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null } | null> | null } | null };

export type DeletePriceListElementByIdMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeletePriceListElementByIdMutation = { __typename?: 'Mutation', DeletePriceListElementById: string };

export type EditSimplePageMutationVariables = Exact<{
  id: Scalars['ID'];
  updatedSimplePage?: InputMaybe<SimplePageInput>;
}>;


export type EditSimplePageMutation = { __typename?: 'Mutation', EditSimplePage?: string | null };

export type LoginMutationVariables = Exact<{
  userData: UserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', Login: { __typename?: 'LoginResponse', str?: string | null, isLoggedIn?: boolean | null } };

export type RefetchLatestNewsMutationVariables = Exact<{ [key: string]: never; }>;


export type RefetchLatestNewsMutation = { __typename?: 'Mutation', RefetchLatestNews: string };

export type SetGeneralContactInfoMutationVariables = Exact<{
  newGeneralContactsInfo?: InputMaybe<GeneralContactsInfoInput>;
}>;


export type SetGeneralContactInfoMutation = { __typename?: 'Mutation', SetGeneralContactInfo?: string | null };

export type SetPersonalContactInfoMutationVariables = Exact<{
  newPersonalContactsInfo?: InputMaybe<Array<InputMaybe<PersonContactInfoInput>> | InputMaybe<PersonContactInfoInput>>;
}>;


export type SetPersonalContactInfoMutation = { __typename?: 'Mutation', SetPersonalContactInfo?: string | null };

export type SetSportOpportunitiesDescriptionMutationVariables = Exact<{
  newSportOpportunitiesDescription?: InputMaybe<SportOpportunitiesDescriptionInput>;
}>;


export type SetSportOpportunitiesDescriptionMutation = { __typename?: 'Mutation', SetSportOpportunitiesDescription?: string | null };

export type SetTimeTableMutationVariables = Exact<{
  newTimeTable?: InputMaybe<TimeTableInput>;
}>;


export type SetTimeTableMutation = { __typename?: 'Mutation', SetTimeTable?: string | null };

export type ChangePriceListElementByIdMutationVariables = Exact<{
  updatedPriceListElement: PriceListElementInput;
  id: Scalars['String'];
}>;


export type ChangePriceListElementByIdMutation = { __typename?: 'Mutation', UpdatePriceListElementById: { __typename?: 'PriceListElement', _id: string, name: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null }, tickets?: Array<{ __typename?: 'Ticket', price: number, description: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null }, duration?: { __typename?: 'Duration', hours: number, additionalInfo?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null } | null> | null } };

export type UpdateUserMutationVariables = Exact<{
  updatedUser: UserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', UpdateUser: string };

export type GetGeneralContactsInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGeneralContactsInfoQuery = { __typename?: 'Query', GetGeneralContactsInfo?: { __typename?: 'GeneralContactsInfo', _id?: string | null, addressField?: { __typename?: 'Field', fieldInfo?: string | null, fieldTitle?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null } | null, phoneField?: { __typename?: 'Field', fieldInfo?: string | null, fieldTitle?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null } | null, emailField?: { __typename?: 'Field', fieldInfo?: string | null, fieldTitle?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null } | null } | null };

export type GetLatestNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLatestNewsQuery = { __typename?: 'Query', GetLatestNews: { __typename?: 'NewsResponse', errorMessage?: string | null, success: boolean, data?: { __typename?: 'LatestNews', _id: string, created_time?: string | null, message?: string | null } | null } };

export type GetPersonalContactsInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPersonalContactsInfoQuery = { __typename?: 'Query', GetPersonalContactsInfo?: Array<{ __typename?: 'PersonContactInfo', _id?: string | null, name?: string | null, phone?: string | null, email?: string | null, role?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null } | null> | null };

export type GetPriceListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPriceListQuery = { __typename?: 'Query', GetPriceList: Array<{ __typename?: 'PriceListElement', _id: string, name: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null }, tickets?: Array<{ __typename?: 'Ticket', price: number, description: { __typename?: 'TextContent', RUS?: string | null, ENG?: string | null, EST?: string | null }, duration?: { __typename?: 'Duration', hours: number, additionalInfo?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null } | null> | null } | null> };

export type GetPriceListElementByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPriceListElementByIdQuery = { __typename?: 'Query', GetPriceListElementById: { __typename?: 'PriceListElement', _id: string, name: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null }, tickets?: Array<{ __typename?: 'Ticket', price: number, description: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null }, duration?: { __typename?: 'Duration', hours: number, additionalInfo?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null } | null> | null } };

export type GetPriceListNamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPriceListNamesQuery = { __typename?: 'Query', GetPriceList: Array<{ __typename?: 'PriceListElement', _id: string, name: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } } | null> };

export type GetSimplePagesQueryVariables = Exact<{
  type?: InputMaybe<Scalars['Int']>;
}>;


export type GetSimplePagesQuery = { __typename?: 'Query', GetSimplePages?: Array<{ __typename?: 'SimplePage', _id: string, image?: string | null, title?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null, text?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null }> | null };

export type GetSportOpportunitiesDescriptionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSportOpportunitiesDescriptionQuery = { __typename?: 'Query', GetSportOpportunitiesDescription?: { __typename?: 'SportOpportunitiesDescription', title?: { __typename?: 'TextContent', EST?: string | null, RUS?: string | null } | null, text?: { __typename?: 'TextContent', EST?: string | null, RUS?: string | null } | null } | null };

export type GetTimeTableQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTimeTableQuery = { __typename?: 'Query', GetTimeTable?: { __typename?: 'TimeTable', title?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null, SportComplex?: { __typename?: 'TimeTableBlock', timeTable1?: string | null, timeTable2?: string | null, title?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null, minTitle1?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null, minTitle2?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null } | null, SwimmingPool?: { __typename?: 'TimeTableBlock', timeTable1?: string | null, timeTable2?: string | null, title?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null, minTitle1?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null, minTitle2?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null } | null } | null };


export const AddSimplePageDocument = gql`
    mutation AddSimplePage($type: Int, $newSimplePage: SimplePageInput) {
  AddSimplePage(type: $type, newSimplePage: $newSimplePage)
}
    `;
export type AddSimplePageMutationFn = Apollo.MutationFunction<AddSimplePageMutation, AddSimplePageMutationVariables>;

/**
 * __useAddSimplePageMutation__
 *
 * To run a mutation, you first call `useAddSimplePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSimplePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSimplePageMutation, { data, loading, error }] = useAddSimplePageMutation({
 *   variables: {
 *      type: // value for 'type'
 *      newSimplePage: // value for 'newSimplePage'
 *   },
 * });
 */
export function useAddSimplePageMutation(baseOptions?: Apollo.MutationHookOptions<AddSimplePageMutation, AddSimplePageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddSimplePageMutation, AddSimplePageMutationVariables>(AddSimplePageDocument, options);
      }
export type AddSimplePageMutationHookResult = ReturnType<typeof useAddSimplePageMutation>;
export type AddSimplePageMutationResult = Apollo.MutationResult<AddSimplePageMutation>;
export type AddSimplePageMutationOptions = Apollo.BaseMutationOptions<AddSimplePageMutation, AddSimplePageMutationVariables>;
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
export const EditSimplePageDocument = gql`
    mutation EditSimplePage($id: ID!, $updatedSimplePage: SimplePageInput) {
  EditSimplePage(_id: $id, updatedSimplePage: $updatedSimplePage)
}
    `;
export type EditSimplePageMutationFn = Apollo.MutationFunction<EditSimplePageMutation, EditSimplePageMutationVariables>;

/**
 * __useEditSimplePageMutation__
 *
 * To run a mutation, you first call `useEditSimplePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditSimplePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editSimplePageMutation, { data, loading, error }] = useEditSimplePageMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updatedSimplePage: // value for 'updatedSimplePage'
 *   },
 * });
 */
export function useEditSimplePageMutation(baseOptions?: Apollo.MutationHookOptions<EditSimplePageMutation, EditSimplePageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditSimplePageMutation, EditSimplePageMutationVariables>(EditSimplePageDocument, options);
      }
export type EditSimplePageMutationHookResult = ReturnType<typeof useEditSimplePageMutation>;
export type EditSimplePageMutationResult = Apollo.MutationResult<EditSimplePageMutation>;
export type EditSimplePageMutationOptions = Apollo.BaseMutationOptions<EditSimplePageMutation, EditSimplePageMutationVariables>;
export const LoginDocument = gql`
    mutation Login($userData: UserInput!) {
  Login(userData: $userData) {
    str
    isLoggedIn
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      userData: // value for 'userData'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RefetchLatestNewsDocument = gql`
    mutation RefetchLatestNews {
  RefetchLatestNews
}
    `;
export type RefetchLatestNewsMutationFn = Apollo.MutationFunction<RefetchLatestNewsMutation, RefetchLatestNewsMutationVariables>;

/**
 * __useRefetchLatestNewsMutation__
 *
 * To run a mutation, you first call `useRefetchLatestNewsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefetchLatestNewsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refetchLatestNewsMutation, { data, loading, error }] = useRefetchLatestNewsMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefetchLatestNewsMutation(baseOptions?: Apollo.MutationHookOptions<RefetchLatestNewsMutation, RefetchLatestNewsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefetchLatestNewsMutation, RefetchLatestNewsMutationVariables>(RefetchLatestNewsDocument, options);
      }
export type RefetchLatestNewsMutationHookResult = ReturnType<typeof useRefetchLatestNewsMutation>;
export type RefetchLatestNewsMutationResult = Apollo.MutationResult<RefetchLatestNewsMutation>;
export type RefetchLatestNewsMutationOptions = Apollo.BaseMutationOptions<RefetchLatestNewsMutation, RefetchLatestNewsMutationVariables>;
export const SetGeneralContactInfoDocument = gql`
    mutation SetGeneralContactInfo($newGeneralContactsInfo: GeneralContactsInfoInput) {
  SetGeneralContactInfo(newGeneralContactsInfo: $newGeneralContactsInfo)
}
    `;
export type SetGeneralContactInfoMutationFn = Apollo.MutationFunction<SetGeneralContactInfoMutation, SetGeneralContactInfoMutationVariables>;

/**
 * __useSetGeneralContactInfoMutation__
 *
 * To run a mutation, you first call `useSetGeneralContactInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetGeneralContactInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setGeneralContactInfoMutation, { data, loading, error }] = useSetGeneralContactInfoMutation({
 *   variables: {
 *      newGeneralContactsInfo: // value for 'newGeneralContactsInfo'
 *   },
 * });
 */
export function useSetGeneralContactInfoMutation(baseOptions?: Apollo.MutationHookOptions<SetGeneralContactInfoMutation, SetGeneralContactInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetGeneralContactInfoMutation, SetGeneralContactInfoMutationVariables>(SetGeneralContactInfoDocument, options);
      }
export type SetGeneralContactInfoMutationHookResult = ReturnType<typeof useSetGeneralContactInfoMutation>;
export type SetGeneralContactInfoMutationResult = Apollo.MutationResult<SetGeneralContactInfoMutation>;
export type SetGeneralContactInfoMutationOptions = Apollo.BaseMutationOptions<SetGeneralContactInfoMutation, SetGeneralContactInfoMutationVariables>;
export const SetPersonalContactInfoDocument = gql`
    mutation SetPersonalContactInfo($newPersonalContactsInfo: [PersonContactInfoInput]) {
  SetPersonalContactInfo(newPersonalContactsInfo: $newPersonalContactsInfo)
}
    `;
export type SetPersonalContactInfoMutationFn = Apollo.MutationFunction<SetPersonalContactInfoMutation, SetPersonalContactInfoMutationVariables>;

/**
 * __useSetPersonalContactInfoMutation__
 *
 * To run a mutation, you first call `useSetPersonalContactInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetPersonalContactInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setPersonalContactInfoMutation, { data, loading, error }] = useSetPersonalContactInfoMutation({
 *   variables: {
 *      newPersonalContactsInfo: // value for 'newPersonalContactsInfo'
 *   },
 * });
 */
export function useSetPersonalContactInfoMutation(baseOptions?: Apollo.MutationHookOptions<SetPersonalContactInfoMutation, SetPersonalContactInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetPersonalContactInfoMutation, SetPersonalContactInfoMutationVariables>(SetPersonalContactInfoDocument, options);
      }
export type SetPersonalContactInfoMutationHookResult = ReturnType<typeof useSetPersonalContactInfoMutation>;
export type SetPersonalContactInfoMutationResult = Apollo.MutationResult<SetPersonalContactInfoMutation>;
export type SetPersonalContactInfoMutationOptions = Apollo.BaseMutationOptions<SetPersonalContactInfoMutation, SetPersonalContactInfoMutationVariables>;
export const SetSportOpportunitiesDescriptionDocument = gql`
    mutation SetSportOpportunitiesDescription($newSportOpportunitiesDescription: SportOpportunitiesDescriptionInput) {
  SetSportOpportunitiesDescription(
    newSportOpportunitiesDescription: $newSportOpportunitiesDescription
  )
}
    `;
export type SetSportOpportunitiesDescriptionMutationFn = Apollo.MutationFunction<SetSportOpportunitiesDescriptionMutation, SetSportOpportunitiesDescriptionMutationVariables>;

/**
 * __useSetSportOpportunitiesDescriptionMutation__
 *
 * To run a mutation, you first call `useSetSportOpportunitiesDescriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetSportOpportunitiesDescriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setSportOpportunitiesDescriptionMutation, { data, loading, error }] = useSetSportOpportunitiesDescriptionMutation({
 *   variables: {
 *      newSportOpportunitiesDescription: // value for 'newSportOpportunitiesDescription'
 *   },
 * });
 */
export function useSetSportOpportunitiesDescriptionMutation(baseOptions?: Apollo.MutationHookOptions<SetSportOpportunitiesDescriptionMutation, SetSportOpportunitiesDescriptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetSportOpportunitiesDescriptionMutation, SetSportOpportunitiesDescriptionMutationVariables>(SetSportOpportunitiesDescriptionDocument, options);
      }
export type SetSportOpportunitiesDescriptionMutationHookResult = ReturnType<typeof useSetSportOpportunitiesDescriptionMutation>;
export type SetSportOpportunitiesDescriptionMutationResult = Apollo.MutationResult<SetSportOpportunitiesDescriptionMutation>;
export type SetSportOpportunitiesDescriptionMutationOptions = Apollo.BaseMutationOptions<SetSportOpportunitiesDescriptionMutation, SetSportOpportunitiesDescriptionMutationVariables>;
export const SetTimeTableDocument = gql`
    mutation SetTimeTable($newTimeTable: TimeTableInput) {
  SetTimeTable(newTimeTable: $newTimeTable)
}
    `;
export type SetTimeTableMutationFn = Apollo.MutationFunction<SetTimeTableMutation, SetTimeTableMutationVariables>;

/**
 * __useSetTimeTableMutation__
 *
 * To run a mutation, you first call `useSetTimeTableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetTimeTableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setTimeTableMutation, { data, loading, error }] = useSetTimeTableMutation({
 *   variables: {
 *      newTimeTable: // value for 'newTimeTable'
 *   },
 * });
 */
export function useSetTimeTableMutation(baseOptions?: Apollo.MutationHookOptions<SetTimeTableMutation, SetTimeTableMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetTimeTableMutation, SetTimeTableMutationVariables>(SetTimeTableDocument, options);
      }
export type SetTimeTableMutationHookResult = ReturnType<typeof useSetTimeTableMutation>;
export type SetTimeTableMutationResult = Apollo.MutationResult<SetTimeTableMutation>;
export type SetTimeTableMutationOptions = Apollo.BaseMutationOptions<SetTimeTableMutation, SetTimeTableMutationVariables>;
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
export const UpdateUserDocument = gql`
    mutation UpdateUser($updatedUser: UserInput!) {
  UpdateUser(updatedUser: $updatedUser)
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      updatedUser: // value for 'updatedUser'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetGeneralContactsInfoDocument = gql`
    query GetGeneralContactsInfo {
  GetGeneralContactsInfo {
    _id
    addressField {
      fieldTitle {
        RUS
        EST
      }
      fieldInfo
    }
    phoneField {
      fieldTitle {
        RUS
        EST
      }
      fieldInfo
    }
    emailField {
      fieldTitle {
        RUS
        EST
      }
      fieldInfo
    }
  }
}
    `;

/**
 * __useGetGeneralContactsInfoQuery__
 *
 * To run a query within a React component, call `useGetGeneralContactsInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGeneralContactsInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGeneralContactsInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGeneralContactsInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetGeneralContactsInfoQuery, GetGeneralContactsInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGeneralContactsInfoQuery, GetGeneralContactsInfoQueryVariables>(GetGeneralContactsInfoDocument, options);
      }
export function useGetGeneralContactsInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGeneralContactsInfoQuery, GetGeneralContactsInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGeneralContactsInfoQuery, GetGeneralContactsInfoQueryVariables>(GetGeneralContactsInfoDocument, options);
        }
export type GetGeneralContactsInfoQueryHookResult = ReturnType<typeof useGetGeneralContactsInfoQuery>;
export type GetGeneralContactsInfoLazyQueryHookResult = ReturnType<typeof useGetGeneralContactsInfoLazyQuery>;
export type GetGeneralContactsInfoQueryResult = Apollo.QueryResult<GetGeneralContactsInfoQuery, GetGeneralContactsInfoQueryVariables>;
export const GetLatestNewsDocument = gql`
    query GetLatestNews {
  GetLatestNews {
    errorMessage
    success
    data {
      _id
      created_time
      message
    }
  }
}
    `;

/**
 * __useGetLatestNewsQuery__
 *
 * To run a query within a React component, call `useGetLatestNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestNewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLatestNewsQuery(baseOptions?: Apollo.QueryHookOptions<GetLatestNewsQuery, GetLatestNewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLatestNewsQuery, GetLatestNewsQueryVariables>(GetLatestNewsDocument, options);
      }
export function useGetLatestNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLatestNewsQuery, GetLatestNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLatestNewsQuery, GetLatestNewsQueryVariables>(GetLatestNewsDocument, options);
        }
export type GetLatestNewsQueryHookResult = ReturnType<typeof useGetLatestNewsQuery>;
export type GetLatestNewsLazyQueryHookResult = ReturnType<typeof useGetLatestNewsLazyQuery>;
export type GetLatestNewsQueryResult = Apollo.QueryResult<GetLatestNewsQuery, GetLatestNewsQueryVariables>;
export const GetPersonalContactsInfoDocument = gql`
    query GetPersonalContactsInfo {
  GetPersonalContactsInfo {
    _id
    name
    role {
      RUS
      EST
    }
    phone
    email
  }
}
    `;

/**
 * __useGetPersonalContactsInfoQuery__
 *
 * To run a query within a React component, call `useGetPersonalContactsInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonalContactsInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonalContactsInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPersonalContactsInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetPersonalContactsInfoQuery, GetPersonalContactsInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonalContactsInfoQuery, GetPersonalContactsInfoQueryVariables>(GetPersonalContactsInfoDocument, options);
      }
export function useGetPersonalContactsInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonalContactsInfoQuery, GetPersonalContactsInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonalContactsInfoQuery, GetPersonalContactsInfoQueryVariables>(GetPersonalContactsInfoDocument, options);
        }
export type GetPersonalContactsInfoQueryHookResult = ReturnType<typeof useGetPersonalContactsInfoQuery>;
export type GetPersonalContactsInfoLazyQueryHookResult = ReturnType<typeof useGetPersonalContactsInfoLazyQuery>;
export type GetPersonalContactsInfoQueryResult = Apollo.QueryResult<GetPersonalContactsInfoQuery, GetPersonalContactsInfoQueryVariables>;
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
export const GetSimplePagesDocument = gql`
    query GetSimplePages($type: Int) {
  GetSimplePages(type: $type) {
    _id
    title {
      RUS
      EST
    }
    text {
      RUS
      EST
    }
    image
  }
}
    `;

/**
 * __useGetSimplePagesQuery__
 *
 * To run a query within a React component, call `useGetSimplePagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSimplePagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSimplePagesQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetSimplePagesQuery(baseOptions?: Apollo.QueryHookOptions<GetSimplePagesQuery, GetSimplePagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSimplePagesQuery, GetSimplePagesQueryVariables>(GetSimplePagesDocument, options);
      }
export function useGetSimplePagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSimplePagesQuery, GetSimplePagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSimplePagesQuery, GetSimplePagesQueryVariables>(GetSimplePagesDocument, options);
        }
export type GetSimplePagesQueryHookResult = ReturnType<typeof useGetSimplePagesQuery>;
export type GetSimplePagesLazyQueryHookResult = ReturnType<typeof useGetSimplePagesLazyQuery>;
export type GetSimplePagesQueryResult = Apollo.QueryResult<GetSimplePagesQuery, GetSimplePagesQueryVariables>;
export const GetSportOpportunitiesDescriptionDocument = gql`
    query GetSportOpportunitiesDescription {
  GetSportOpportunitiesDescription {
    title {
      EST
      RUS
    }
    text {
      EST
      RUS
    }
  }
}
    `;

/**
 * __useGetSportOpportunitiesDescriptionQuery__
 *
 * To run a query within a React component, call `useGetSportOpportunitiesDescriptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSportOpportunitiesDescriptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSportOpportunitiesDescriptionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSportOpportunitiesDescriptionQuery(baseOptions?: Apollo.QueryHookOptions<GetSportOpportunitiesDescriptionQuery, GetSportOpportunitiesDescriptionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSportOpportunitiesDescriptionQuery, GetSportOpportunitiesDescriptionQueryVariables>(GetSportOpportunitiesDescriptionDocument, options);
      }
export function useGetSportOpportunitiesDescriptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSportOpportunitiesDescriptionQuery, GetSportOpportunitiesDescriptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSportOpportunitiesDescriptionQuery, GetSportOpportunitiesDescriptionQueryVariables>(GetSportOpportunitiesDescriptionDocument, options);
        }
export type GetSportOpportunitiesDescriptionQueryHookResult = ReturnType<typeof useGetSportOpportunitiesDescriptionQuery>;
export type GetSportOpportunitiesDescriptionLazyQueryHookResult = ReturnType<typeof useGetSportOpportunitiesDescriptionLazyQuery>;
export type GetSportOpportunitiesDescriptionQueryResult = Apollo.QueryResult<GetSportOpportunitiesDescriptionQuery, GetSportOpportunitiesDescriptionQueryVariables>;
export const GetTimeTableDocument = gql`
    query GetTimeTable {
  GetTimeTable {
    title {
      RUS
      EST
    }
    SportComplex {
      title {
        RUS
        EST
      }
      minTitle1 {
        RUS
        EST
      }
      minTitle2 {
        RUS
        EST
      }
      timeTable1
      timeTable2
    }
    SwimmingPool {
      title {
        RUS
        EST
      }
      minTitle1 {
        RUS
        EST
      }
      minTitle2 {
        RUS
        EST
      }
      timeTable1
      timeTable2
    }
  }
}
    `;

/**
 * __useGetTimeTableQuery__
 *
 * To run a query within a React component, call `useGetTimeTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTimeTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTimeTableQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTimeTableQuery(baseOptions?: Apollo.QueryHookOptions<GetTimeTableQuery, GetTimeTableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTimeTableQuery, GetTimeTableQueryVariables>(GetTimeTableDocument, options);
      }
export function useGetTimeTableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTimeTableQuery, GetTimeTableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTimeTableQuery, GetTimeTableQueryVariables>(GetTimeTableDocument, options);
        }
export type GetTimeTableQueryHookResult = ReturnType<typeof useGetTimeTableQuery>;
export type GetTimeTableLazyQueryHookResult = ReturnType<typeof useGetTimeTableLazyQuery>;
export type GetTimeTableQueryResult = Apollo.QueryResult<GetTimeTableQuery, GetTimeTableQueryVariables>;