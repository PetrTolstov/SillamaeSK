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

export type CalendarEvent = {
  __typename?: 'CalendarEvent';
  _id: Scalars['ID'];
  date?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  eventDescription?: Maybe<TextContent>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<TextContent>;
  place?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
};

export type CalendarEventInput = {
  date?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['String']>;
  eventDescription?: InputMaybe<TextContentInput>;
  link?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<TextContentInput>;
  place?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['String']>;
};

export type Contact = {
  __typename?: 'Contact';
  body?: Maybe<TextContent>;
  title?: Maybe<TextContent>;
};

export type ContactInput = {
  body?: InputMaybe<TextContentInput>;
  title?: InputMaybe<TextContentInput>;
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

export type Facility = {
  __typename?: 'Facility';
  _id?: Maybe<Scalars['ID']>;
  description?: Maybe<TextContent>;
  title?: Maybe<TextContent>;
};

export type FacilityInput = {
  description?: InputMaybe<TextContentInput>;
  title?: InputMaybe<TextContentInput>;
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

export type Footer = {
  __typename?: 'Footer';
  _id: Scalars['ID'];
  firstSection?: Maybe<FooterSection>;
  secondSection?: Maybe<FooterSection>;
  showContacts?: Maybe<Scalars['Boolean']>;
  thirdSection?: Maybe<FooterSection>;
};

export type FooterInput = {
  firstSection?: InputMaybe<FooterSectionInput>;
  secondSection?: InputMaybe<FooterSectionInput>;
  showContacts?: InputMaybe<Scalars['Boolean']>;
  thirdSection?: InputMaybe<FooterSectionInput>;
};

export type FooterSection = {
  __typename?: 'FooterSection';
  body?: Maybe<TextContent>;
  header?: Maybe<TextContent>;
  showBody?: Maybe<Scalars['Boolean']>;
  showHeader?: Maybe<Scalars['Boolean']>;
};

export type FooterSectionInput = {
  body?: InputMaybe<TextContentInput>;
  header?: InputMaybe<TextContentInput>;
  showBody?: InputMaybe<Scalars['Boolean']>;
  showHeader?: InputMaybe<Scalars['Boolean']>;
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

export type MainDescription = {
  __typename?: 'MainDescription';
  contacts?: Maybe<Contact>;
  text?: Maybe<TextContent>;
};

export type MainDescriptionInput = {
  contacts?: InputMaybe<ContactInput>;
  text?: InputMaybe<TextContentInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AddCalendarEvent?: Maybe<Scalars['String']>;
  AddFacility?: Maybe<Scalars['String']>;
  AddFooterData?: Maybe<Scalars['String']>;
  AddPageConfig?: Maybe<Scalars['String']>;
  AddPageNotWorkingBanner?: Maybe<Scalars['String']>;
  AddRoom?: Maybe<Scalars['String']>;
  AddSimplePage?: Maybe<Scalars['String']>;
  CreateNewPriceListElement?: Maybe<PriceListElement>;
  DeleteCalendarEvent?: Maybe<Scalars['String']>;
  DeleteFacility?: Maybe<Scalars['String']>;
  DeletePriceListElementById: Scalars['String'];
  DeleteRoom?: Maybe<Scalars['String']>;
  EditFacility?: Maybe<Scalars['String']>;
  EditFooterData?: Maybe<Scalars['String']>;
  EditPageConfig?: Maybe<Scalars['String']>;
  EditPageNotWorkingBanner?: Maybe<Scalars['String']>;
  EditRoom?: Maybe<Scalars['String']>;
  EditSimplePage?: Maybe<Scalars['String']>;
  EditToken?: Maybe<Scalars['String']>;
  Login: LoginResponse;
  RefetchLatestNews: Scalars['String'];
  SetFacilities?: Maybe<Scalars['String']>;
  SetGeneralContactInfo?: Maybe<Scalars['String']>;
  SetMainDescription?: Maybe<Scalars['String']>;
  SetObjectTimeTable?: Maybe<Scalars['String']>;
  SetPersonalContactInfo?: Maybe<Scalars['String']>;
  SetRooms?: Maybe<Scalars['String']>;
  SetSportOpportunitiesDescription?: Maybe<Scalars['String']>;
  SetTimeTable?: Maybe<Scalars['String']>;
  UpdateCalendarEvent?: Maybe<Scalars['String']>;
  UpdatePriceListElementById: PriceListElement;
  UpdateUser: Scalars['String'];
};


export type MutationAddCalendarEventArgs = {
  newEvent?: InputMaybe<CalendarEventInput>;
};


export type MutationAddFacilityArgs = {
  facility?: InputMaybe<FacilityInput>;
};


export type MutationAddFooterDataArgs = {
  newFooter?: InputMaybe<FooterInput>;
};


export type MutationAddPageConfigArgs = {
  newPageConfig?: InputMaybe<PageConfigInput>;
};


export type MutationAddPageNotWorkingBannerArgs = {
  newBanner?: InputMaybe<PageNotWorkingBannerInput>;
};


export type MutationAddRoomArgs = {
  newRoom?: InputMaybe<RoomInput>;
};


export type MutationAddSimplePageArgs = {
  newSimplePage?: InputMaybe<SimplePageInput>;
  type?: InputMaybe<Scalars['Int']>;
};


export type MutationCreateNewPriceListElementArgs = {
  newPriceListElement: PriceListElementInput;
};


export type MutationDeleteCalendarEventArgs = {
  _id?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteFacilityArgs = {
  facilityID?: InputMaybe<Scalars['ID']>;
};


export type MutationDeletePriceListElementByIdArgs = {
  _id: Scalars['String'];
};


export type MutationDeleteRoomArgs = {
  RoomIdToDelete?: InputMaybe<Scalars['ID']>;
};


export type MutationEditFacilityArgs = {
  facilityID?: InputMaybe<Scalars['ID']>;
  newFacilityData?: InputMaybe<FacilityInput>;
};


export type MutationEditFooterDataArgs = {
  updatedFooter?: InputMaybe<FooterInput>;
};


export type MutationEditPageConfigArgs = {
  newConfig?: InputMaybe<PageConfigInput>;
  pageName?: InputMaybe<Scalars['String']>;
};


export type MutationEditPageNotWorkingBannerArgs = {
  newBanner?: InputMaybe<PageNotWorkingBannerInput>;
};


export type MutationEditRoomArgs = {
  RoomIdToEdit?: InputMaybe<Scalars['ID']>;
  editedRoom?: InputMaybe<RoomInput>;
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


export type MutationSetFacilitiesArgs = {
  facilities?: InputMaybe<Array<InputMaybe<FacilityInput>>>;
};


export type MutationSetGeneralContactInfoArgs = {
  newGeneralContactsInfo?: InputMaybe<GeneralContactsInfoInput>;
};


export type MutationSetMainDescriptionArgs = {
  description?: InputMaybe<MainDescriptionInput>;
};


export type MutationSetObjectTimeTableArgs = {
  newObjectTimeTable?: InputMaybe<ObjectTimeTableInput>;
  objectName?: InputMaybe<Scalars['String']>;
};


export type MutationSetPersonalContactInfoArgs = {
  newPersonalContactsInfo?: InputMaybe<Array<InputMaybe<PersonContactInfoInput>>>;
};


export type MutationSetRoomsArgs = {
  replaceRoomsWith?: InputMaybe<Array<InputMaybe<RoomInput>>>;
};


export type MutationSetSportOpportunitiesDescriptionArgs = {
  newSportOpportunitiesDescription?: InputMaybe<SportOpportunitiesDescriptionInput>;
};


export type MutationSetTimeTableArgs = {
  newTimeTable?: InputMaybe<TimeTableInput>;
};


export type MutationUpdateCalendarEventArgs = {
  _id?: InputMaybe<Scalars['ID']>;
  newContent?: InputMaybe<CalendarEventInput>;
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

export type ObjectTimeTable = {
  __typename?: 'ObjectTimeTable';
  E?: Maybe<Array<Maybe<ObjectTimeTableEvent>>>;
  K?: Maybe<Array<Maybe<ObjectTimeTableEvent>>>;
  L?: Maybe<Array<Maybe<ObjectTimeTableEvent>>>;
  N?: Maybe<Array<Maybe<ObjectTimeTableEvent>>>;
  P?: Maybe<Array<Maybe<ObjectTimeTableEvent>>>;
  R?: Maybe<Array<Maybe<ObjectTimeTableEvent>>>;
  T?: Maybe<Array<Maybe<ObjectTimeTableEvent>>>;
};

export type ObjectTimeTableEvent = {
  __typename?: 'ObjectTimeTableEvent';
  endTime?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
  textContent?: Maybe<TextContent>;
  type?: Maybe<Scalars['String']>;
};

export type ObjectTimeTableEventInput = {
  endTime?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['String']>;
  textContent?: InputMaybe<TextContentInput>;
  type?: InputMaybe<Scalars['String']>;
};

export type ObjectTimeTableInput = {
  E?: InputMaybe<Array<InputMaybe<ObjectTimeTableEventInput>>>;
  K?: InputMaybe<Array<InputMaybe<ObjectTimeTableEventInput>>>;
  L?: InputMaybe<Array<InputMaybe<ObjectTimeTableEventInput>>>;
  N?: InputMaybe<Array<InputMaybe<ObjectTimeTableEventInput>>>;
  P?: InputMaybe<Array<InputMaybe<ObjectTimeTableEventInput>>>;
  R?: InputMaybe<Array<InputMaybe<ObjectTimeTableEventInput>>>;
  T?: InputMaybe<Array<InputMaybe<ObjectTimeTableEventInput>>>;
};

export type ObjectTimeTimeTableContainer = {
  __typename?: 'ObjectTimeTimeTableContainer';
  objectName?: Maybe<Scalars['String']>;
  timeTable?: Maybe<ObjectTimeTable>;
};

export type OptionalSingleStr = {
  __typename?: 'OptionalSingleStr';
  body?: Maybe<Scalars['String']>;
  show?: Maybe<Scalars['Boolean']>;
};

export type OptionalSingleStrInput = {
  body?: InputMaybe<Scalars['String']>;
  show?: InputMaybe<Scalars['Boolean']>;
};

export type OptionalText = {
  __typename?: 'OptionalText';
  show?: Maybe<Scalars['Boolean']>;
  text?: Maybe<TextContent>;
};

export type OptionalTextInput = {
  show?: InputMaybe<Scalars['Boolean']>;
  text?: InputMaybe<TextContentInput>;
};

export type Options = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type PageConfig = {
  __typename?: 'PageConfig';
  pageName?: Maybe<Scalars['String']>;
  showBanner?: Maybe<Scalars['Boolean']>;
};

export type PageConfigInput = {
  pageName?: InputMaybe<Scalars['String']>;
  showBanner?: InputMaybe<Scalars['Boolean']>;
};

export type PageNotWorkingBanner = {
  __typename?: 'PageNotWorkingBanner';
  body?: Maybe<OptionalText>;
  centeredText?: Maybe<OptionalText>;
  link?: Maybe<OptionalSingleStr>;
  showContacts?: Maybe<Scalars['Boolean']>;
  title?: Maybe<OptionalText>;
};

export type PageNotWorkingBannerInput = {
  body?: InputMaybe<OptionalTextInput>;
  centeredText?: InputMaybe<OptionalTextInput>;
  link?: InputMaybe<OptionalSingleStrInput>;
  showContacts?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<OptionalTextInput>;
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
  GetCalendarEventById?: Maybe<CalendarEvent>;
  GetCalendarEvents?: Maybe<Array<Maybe<CalendarEvent>>>;
  GetCalendarEventsByMonth?: Maybe<Array<Maybe<CalendarEvent>>>;
  GetFacilities?: Maybe<Array<Maybe<Facility>>>;
  GetFooter?: Maybe<Footer>;
  GetGeneralContactsInfo?: Maybe<GeneralContactsInfo>;
  GetLatestNews: NewsResponse;
  GetMainDescription?: Maybe<MainDescription>;
  GetObjectTimeTable?: Maybe<ObjectTimeTimeTableContainer>;
  GetPageConfig?: Maybe<PageConfig>;
  GetPageNotWorkingBanner?: Maybe<PageNotWorkingBanner>;
  GetPersonalContactsInfo?: Maybe<Array<Maybe<PersonContactInfo>>>;
  GetPriceList: Array<Maybe<PriceListElement>>;
  GetPriceListElementById: PriceListElement;
  GetRelevantCalendarEventsByCurrentDate?: Maybe<Array<Maybe<CalendarEvent>>>;
  GetRooms?: Maybe<Array<Maybe<Room>>>;
  GetSimplePages?: Maybe<Array<SimplePage>>;
  GetSportOpportunitiesDescription?: Maybe<SportOpportunitiesDescription>;
  GetTimeTable?: Maybe<TimeTable>;
};


export type QueryGetCalendarEventByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetCalendarEventsArgs = {
  options?: InputMaybe<Options>;
};


export type QueryGetCalendarEventsByMonthArgs = {
  monthStr?: InputMaybe<Scalars['String']>;
};


export type QueryGetObjectTimeTableArgs = {
  objectName?: InputMaybe<Scalars['String']>;
};


export type QueryGetPageConfigArgs = {
  pageName?: InputMaybe<Scalars['String']>;
};


export type QueryGetPriceListElementByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetRelevantCalendarEventsByCurrentDateArgs = {
  currentDate?: InputMaybe<Scalars['String']>;
};


export type QueryGetSimplePagesArgs = {
  type?: InputMaybe<Scalars['Int']>;
};

export type ResponseData = LatestNews | StringBox;

export type Room = {
  __typename?: 'Room';
  _id: Scalars['ID'];
  description?: Maybe<TextContent>;
  name?: Maybe<TextContent>;
};

export type RoomInput = {
  description?: InputMaybe<TextContentInput>;
  name?: InputMaybe<TextContentInput>;
};

export type SimplePage = {
  __typename?: 'SimplePage';
  _id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  pageName?: Maybe<Scalars['String']>;
  text?: Maybe<TextContent>;
  title?: Maybe<TextContent>;
  type: Scalars['Int'];
};

export type SimplePageInput = {
  image?: InputMaybe<Scalars['String']>;
  pageName?: InputMaybe<Scalars['String']>;
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

export type AddCalendarEventMutationVariables = Exact<{
  newEvent?: InputMaybe<CalendarEventInput>;
}>;


export type AddCalendarEventMutation = { __typename?: 'Mutation', AddCalendarEvent?: string | null };

export type AddFacilityMutationVariables = Exact<{
  facility?: InputMaybe<FacilityInput>;
}>;


export type AddFacilityMutation = { __typename?: 'Mutation', AddFacility?: string | null };

export type AddRoomMutationVariables = Exact<{
  newRoom?: InputMaybe<RoomInput>;
}>;


export type AddRoomMutation = { __typename?: 'Mutation', AddRoom?: string | null };

export type AddSimplePageMutationVariables = Exact<{
  type?: InputMaybe<Scalars['Int']>;
  newSimplePage?: InputMaybe<SimplePageInput>;
}>;


export type AddSimplePageMutation = { __typename?: 'Mutation', AddSimplePage?: string | null };

export type CreateNewPriceListElementMutationVariables = Exact<{
  newPriceListElement: PriceListElementInput;
}>;


export type CreateNewPriceListElementMutation = { __typename?: 'Mutation', CreateNewPriceListElement?: { __typename?: 'PriceListElement', _id: string, name: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null }, tickets?: Array<{ __typename?: 'Ticket', price: number, description: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null }, duration?: { __typename?: 'Duration', hours: number, additionalInfo?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null } | null> | null } | null };

export type DeleteCalendarEventMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type DeleteCalendarEventMutation = { __typename?: 'Mutation', DeleteCalendarEvent?: string | null };

export type DeleteFacilityMutationVariables = Exact<{
  facilityId?: InputMaybe<Scalars['ID']>;
}>;


export type DeleteFacilityMutation = { __typename?: 'Mutation', DeleteFacility?: string | null };

export type DeletePriceListElementByIdMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeletePriceListElementByIdMutation = { __typename?: 'Mutation', DeletePriceListElementById: string };

export type DeleteRoomMutationVariables = Exact<{
  roomIdToDelete?: InputMaybe<Scalars['ID']>;
}>;


export type DeleteRoomMutation = { __typename?: 'Mutation', DeleteRoom?: string | null };

export type EditFacilityMutationVariables = Exact<{
  facilityId?: InputMaybe<Scalars['ID']>;
  newFacilityData?: InputMaybe<FacilityInput>;
}>;


export type EditFacilityMutation = { __typename?: 'Mutation', EditFacility?: string | null };

export type EditFooterDataMutationVariables = Exact<{
  updatedFooter?: InputMaybe<FooterInput>;
}>;


export type EditFooterDataMutation = { __typename?: 'Mutation', EditFooterData?: string | null };

export type EditPageConfigMutationVariables = Exact<{
  pageName?: InputMaybe<Scalars['String']>;
  newConfig?: InputMaybe<PageConfigInput>;
}>;


export type EditPageConfigMutation = { __typename?: 'Mutation', EditPageConfig?: string | null };

export type EditPageNotWorkingBannerMutationVariables = Exact<{
  newBanner?: InputMaybe<PageNotWorkingBannerInput>;
}>;


export type EditPageNotWorkingBannerMutation = { __typename?: 'Mutation', EditPageNotWorkingBanner?: string | null };

export type EditRoomMutationVariables = Exact<{
  roomIdToEdit?: InputMaybe<Scalars['ID']>;
  editedRoom?: InputMaybe<RoomInput>;
}>;


export type EditRoomMutation = { __typename?: 'Mutation', EditRoom?: string | null };

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

export type SetMainDescriptionMutationVariables = Exact<{
  description?: InputMaybe<MainDescriptionInput>;
}>;


export type SetMainDescriptionMutation = { __typename?: 'Mutation', SetMainDescription?: string | null };

export type SetObjectTimeTableMutationVariables = Exact<{
  objectName?: InputMaybe<Scalars['String']>;
  newObjectTimeTable?: InputMaybe<ObjectTimeTableInput>;
}>;


export type SetObjectTimeTableMutation = { __typename?: 'Mutation', SetObjectTimeTable?: string | null };

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

export type UpdateCalendarEventMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  newContent?: InputMaybe<CalendarEventInput>;
}>;


export type UpdateCalendarEventMutation = { __typename?: 'Mutation', UpdateCalendarEvent?: string | null };

export type ChangePriceListElementByIdMutationVariables = Exact<{
  updatedPriceListElement: PriceListElementInput;
  id: Scalars['String'];
}>;


export type ChangePriceListElementByIdMutation = { __typename?: 'Mutation', UpdatePriceListElementById: { __typename?: 'PriceListElement', _id: string, name: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null }, tickets?: Array<{ __typename?: 'Ticket', price: number, description: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null }, duration?: { __typename?: 'Duration', hours: number, additionalInfo?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null } | null> | null } };

export type UpdateUserMutationVariables = Exact<{
  updatedUser: UserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', UpdateUser: string };

export type GetCalendarEventByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCalendarEventByIdQuery = { __typename?: 'Query', GetCalendarEventById?: { __typename?: 'CalendarEvent', _id: string, link?: string | null, date?: string | null, place?: string | null, startTime?: string | null, endTime?: string | null, name?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null, eventDescription?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null };

export type GetCalendarEventsQueryVariables = Exact<{
  options?: InputMaybe<Options>;
}>;


export type GetCalendarEventsQuery = { __typename?: 'Query', GetCalendarEvents?: Array<{ __typename?: 'CalendarEvent', _id: string, link?: string | null, place?: string | null, date?: string | null, startTime?: string | null, endTime?: string | null, name?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null, eventDescription?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null> | null };

export type GetCalendarEventsByMonthQueryVariables = Exact<{
  monthStr?: InputMaybe<Scalars['String']>;
}>;


export type GetCalendarEventsByMonthQuery = { __typename?: 'Query', GetCalendarEventsByMonth?: Array<{ __typename?: 'CalendarEvent', _id: string, link?: string | null, date?: string | null, place?: string | null, startTime?: string | null, endTime?: string | null, name?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null, eventDescription?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null> | null };

export type GetFacilitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFacilitiesQuery = { __typename?: 'Query', GetFacilities?: Array<{ __typename?: 'Facility', _id?: string | null, title?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null, description?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null> | null };

export type GetFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFooterQuery = { __typename?: 'Query', GetFooter?: { __typename?: 'Footer', _id: string, showContacts?: boolean | null, firstSection?: { __typename?: 'FooterSection', showHeader?: boolean | null, showBody?: boolean | null, header?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null, body?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null, secondSection?: { __typename?: 'FooterSection', showHeader?: boolean | null, showBody?: boolean | null, header?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null, body?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null, thirdSection?: { __typename?: 'FooterSection', showHeader?: boolean | null, showBody?: boolean | null, header?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null, body?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null } | null };

export type GetGeneralContactsInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGeneralContactsInfoQuery = { __typename?: 'Query', GetGeneralContactsInfo?: { __typename?: 'GeneralContactsInfo', _id?: string | null, addressField?: { __typename?: 'Field', fieldInfo?: string | null, fieldTitle?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null } | null, phoneField?: { __typename?: 'Field', fieldInfo?: string | null, fieldTitle?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null } | null, emailField?: { __typename?: 'Field', fieldInfo?: string | null, fieldTitle?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null } | null } | null };

export type GetLatestNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLatestNewsQuery = { __typename?: 'Query', GetLatestNews: { __typename?: 'NewsResponse', errorMessage?: string | null, success: boolean, data?: { __typename?: 'LatestNews', _id: string, created_time?: string | null, message?: string | null } | null } };

export type GetMainDescriptionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMainDescriptionQuery = { __typename?: 'Query', GetMainDescription?: { __typename?: 'MainDescription', text?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null, contacts?: { __typename?: 'Contact', title?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null, body?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null } | null };

export type GetObjectTimeTableQueryVariables = Exact<{
  objectName?: InputMaybe<Scalars['String']>;
}>;


export type GetObjectTimeTableQuery = { __typename?: 'Query', GetObjectTimeTable?: { __typename?: 'ObjectTimeTimeTableContainer', objectName?: string | null, timeTable?: { __typename?: 'ObjectTimeTable', E?: Array<{ __typename?: 'ObjectTimeTableEvent', id?: number | null, name?: string | null, type?: string | null, startTime?: string | null, endTime?: string | null, textContent?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null> | null, T?: Array<{ __typename?: 'ObjectTimeTableEvent', id?: number | null, name?: string | null, type?: string | null, startTime?: string | null, endTime?: string | null, textContent?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null> | null, K?: Array<{ __typename?: 'ObjectTimeTableEvent', id?: number | null, name?: string | null, type?: string | null, startTime?: string | null, endTime?: string | null, textContent?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null> | null, N?: Array<{ __typename?: 'ObjectTimeTableEvent', id?: number | null, name?: string | null, type?: string | null, startTime?: string | null, endTime?: string | null, textContent?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null> | null, R?: Array<{ __typename?: 'ObjectTimeTableEvent', id?: number | null, name?: string | null, type?: string | null, startTime?: string | null, endTime?: string | null, textContent?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null> | null, L?: Array<{ __typename?: 'ObjectTimeTableEvent', id?: number | null, name?: string | null, type?: string | null, startTime?: string | null, endTime?: string | null, textContent?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null> | null, P?: Array<{ __typename?: 'ObjectTimeTableEvent', id?: number | null, name?: string | null, type?: string | null, startTime?: string | null, endTime?: string | null, textContent?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null> | null } | null } | null };

export type GetPageConfigQueryVariables = Exact<{
  pageName?: InputMaybe<Scalars['String']>;
}>;


export type GetPageConfigQuery = { __typename?: 'Query', GetPageConfig?: { __typename?: 'PageConfig', pageName?: string | null, showBanner?: boolean | null } | null };

export type GetPageNotWorkingBannerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPageNotWorkingBannerQuery = { __typename?: 'Query', GetPageNotWorkingBanner?: { __typename?: 'PageNotWorkingBanner', showContacts?: boolean | null, title?: { __typename?: 'OptionalText', show?: boolean | null, text?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null, body?: { __typename?: 'OptionalText', show?: boolean | null, text?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null, link?: { __typename?: 'OptionalSingleStr', show?: boolean | null, body?: string | null } | null, centeredText?: { __typename?: 'OptionalText', show?: boolean | null, text?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null } | null };

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

export type GetRelevantCalendarEventsByCurrentDateQueryVariables = Exact<{
  currentDate?: InputMaybe<Scalars['String']>;
}>;


export type GetRelevantCalendarEventsByCurrentDateQuery = { __typename?: 'Query', GetRelevantCalendarEventsByCurrentDate?: Array<{ __typename?: 'CalendarEvent', _id: string, link?: string | null, date?: string | null, place?: string | null, startTime?: string | null, endTime?: string | null, name?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null, eventDescription?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null> | null };

export type GetRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRoomsQuery = { __typename?: 'Query', GetRooms?: Array<{ __typename?: 'Room', _id: string, name?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null, description?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null } | null> | null };

export type GetSimplePagesQueryVariables = Exact<{
  type?: InputMaybe<Scalars['Int']>;
}>;


export type GetSimplePagesQuery = { __typename?: 'Query', GetSimplePages?: Array<{ __typename?: 'SimplePage', _id: string, image?: string | null, pageName?: string | null, title?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null, text?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null, ENG?: string | null } | null }> | null };

export type GetSportOpportunitiesDescriptionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSportOpportunitiesDescriptionQuery = { __typename?: 'Query', GetSportOpportunitiesDescription?: { __typename?: 'SportOpportunitiesDescription', title?: { __typename?: 'TextContent', EST?: string | null, RUS?: string | null } | null, text?: { __typename?: 'TextContent', EST?: string | null, RUS?: string | null } | null } | null };

export type GetTimeTableQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTimeTableQuery = { __typename?: 'Query', GetTimeTable?: { __typename?: 'TimeTable', title?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null, SportComplex?: { __typename?: 'TimeTableBlock', timeTable1?: string | null, timeTable2?: string | null, title?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null, minTitle1?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null, minTitle2?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null } | null, SwimmingPool?: { __typename?: 'TimeTableBlock', timeTable1?: string | null, timeTable2?: string | null, title?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null, minTitle1?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null, minTitle2?: { __typename?: 'TextContent', RUS?: string | null, EST?: string | null } | null } | null } | null };


export const AddCalendarEventDocument = gql`
    mutation AddCalendarEvent($newEvent: CalendarEventInput) {
  AddCalendarEvent(newEvent: $newEvent)
}
    `;
export type AddCalendarEventMutationFn = Apollo.MutationFunction<AddCalendarEventMutation, AddCalendarEventMutationVariables>;

/**
 * __useAddCalendarEventMutation__
 *
 * To run a mutation, you first call `useAddCalendarEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCalendarEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCalendarEventMutation, { data, loading, error }] = useAddCalendarEventMutation({
 *   variables: {
 *      newEvent: // value for 'newEvent'
 *   },
 * });
 */
export function useAddCalendarEventMutation(baseOptions?: Apollo.MutationHookOptions<AddCalendarEventMutation, AddCalendarEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCalendarEventMutation, AddCalendarEventMutationVariables>(AddCalendarEventDocument, options);
      }
export type AddCalendarEventMutationHookResult = ReturnType<typeof useAddCalendarEventMutation>;
export type AddCalendarEventMutationResult = Apollo.MutationResult<AddCalendarEventMutation>;
export type AddCalendarEventMutationOptions = Apollo.BaseMutationOptions<AddCalendarEventMutation, AddCalendarEventMutationVariables>;
export const AddFacilityDocument = gql`
    mutation AddFacility($facility: FacilityInput) {
  AddFacility(facility: $facility)
}
    `;
export type AddFacilityMutationFn = Apollo.MutationFunction<AddFacilityMutation, AddFacilityMutationVariables>;

/**
 * __useAddFacilityMutation__
 *
 * To run a mutation, you first call `useAddFacilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFacilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFacilityMutation, { data, loading, error }] = useAddFacilityMutation({
 *   variables: {
 *      facility: // value for 'facility'
 *   },
 * });
 */
export function useAddFacilityMutation(baseOptions?: Apollo.MutationHookOptions<AddFacilityMutation, AddFacilityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFacilityMutation, AddFacilityMutationVariables>(AddFacilityDocument, options);
      }
export type AddFacilityMutationHookResult = ReturnType<typeof useAddFacilityMutation>;
export type AddFacilityMutationResult = Apollo.MutationResult<AddFacilityMutation>;
export type AddFacilityMutationOptions = Apollo.BaseMutationOptions<AddFacilityMutation, AddFacilityMutationVariables>;
export const AddRoomDocument = gql`
    mutation AddRoom($newRoom: RoomInput) {
  AddRoom(newRoom: $newRoom)
}
    `;
export type AddRoomMutationFn = Apollo.MutationFunction<AddRoomMutation, AddRoomMutationVariables>;

/**
 * __useAddRoomMutation__
 *
 * To run a mutation, you first call `useAddRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addRoomMutation, { data, loading, error }] = useAddRoomMutation({
 *   variables: {
 *      newRoom: // value for 'newRoom'
 *   },
 * });
 */
export function useAddRoomMutation(baseOptions?: Apollo.MutationHookOptions<AddRoomMutation, AddRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddRoomMutation, AddRoomMutationVariables>(AddRoomDocument, options);
      }
export type AddRoomMutationHookResult = ReturnType<typeof useAddRoomMutation>;
export type AddRoomMutationResult = Apollo.MutationResult<AddRoomMutation>;
export type AddRoomMutationOptions = Apollo.BaseMutationOptions<AddRoomMutation, AddRoomMutationVariables>;
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
export const DeleteCalendarEventDocument = gql`
    mutation DeleteCalendarEvent($id: ID) {
  DeleteCalendarEvent(_id: $id)
}
    `;
export type DeleteCalendarEventMutationFn = Apollo.MutationFunction<DeleteCalendarEventMutation, DeleteCalendarEventMutationVariables>;

/**
 * __useDeleteCalendarEventMutation__
 *
 * To run a mutation, you first call `useDeleteCalendarEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCalendarEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCalendarEventMutation, { data, loading, error }] = useDeleteCalendarEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCalendarEventMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCalendarEventMutation, DeleteCalendarEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCalendarEventMutation, DeleteCalendarEventMutationVariables>(DeleteCalendarEventDocument, options);
      }
export type DeleteCalendarEventMutationHookResult = ReturnType<typeof useDeleteCalendarEventMutation>;
export type DeleteCalendarEventMutationResult = Apollo.MutationResult<DeleteCalendarEventMutation>;
export type DeleteCalendarEventMutationOptions = Apollo.BaseMutationOptions<DeleteCalendarEventMutation, DeleteCalendarEventMutationVariables>;
export const DeleteFacilityDocument = gql`
    mutation DeleteFacility($facilityId: ID) {
  DeleteFacility(facilityID: $facilityId)
}
    `;
export type DeleteFacilityMutationFn = Apollo.MutationFunction<DeleteFacilityMutation, DeleteFacilityMutationVariables>;

/**
 * __useDeleteFacilityMutation__
 *
 * To run a mutation, you first call `useDeleteFacilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFacilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFacilityMutation, { data, loading, error }] = useDeleteFacilityMutation({
 *   variables: {
 *      facilityId: // value for 'facilityId'
 *   },
 * });
 */
export function useDeleteFacilityMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFacilityMutation, DeleteFacilityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFacilityMutation, DeleteFacilityMutationVariables>(DeleteFacilityDocument, options);
      }
export type DeleteFacilityMutationHookResult = ReturnType<typeof useDeleteFacilityMutation>;
export type DeleteFacilityMutationResult = Apollo.MutationResult<DeleteFacilityMutation>;
export type DeleteFacilityMutationOptions = Apollo.BaseMutationOptions<DeleteFacilityMutation, DeleteFacilityMutationVariables>;
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
export const DeleteRoomDocument = gql`
    mutation DeleteRoom($roomIdToDelete: ID) {
  DeleteRoom(RoomIdToDelete: $roomIdToDelete)
}
    `;
export type DeleteRoomMutationFn = Apollo.MutationFunction<DeleteRoomMutation, DeleteRoomMutationVariables>;

/**
 * __useDeleteRoomMutation__
 *
 * To run a mutation, you first call `useDeleteRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoomMutation, { data, loading, error }] = useDeleteRoomMutation({
 *   variables: {
 *      roomIdToDelete: // value for 'roomIdToDelete'
 *   },
 * });
 */
export function useDeleteRoomMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRoomMutation, DeleteRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRoomMutation, DeleteRoomMutationVariables>(DeleteRoomDocument, options);
      }
export type DeleteRoomMutationHookResult = ReturnType<typeof useDeleteRoomMutation>;
export type DeleteRoomMutationResult = Apollo.MutationResult<DeleteRoomMutation>;
export type DeleteRoomMutationOptions = Apollo.BaseMutationOptions<DeleteRoomMutation, DeleteRoomMutationVariables>;
export const EditFacilityDocument = gql`
    mutation EditFacility($facilityId: ID, $newFacilityData: FacilityInput) {
  EditFacility(facilityID: $facilityId, newFacilityData: $newFacilityData)
}
    `;
export type EditFacilityMutationFn = Apollo.MutationFunction<EditFacilityMutation, EditFacilityMutationVariables>;

/**
 * __useEditFacilityMutation__
 *
 * To run a mutation, you first call `useEditFacilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditFacilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editFacilityMutation, { data, loading, error }] = useEditFacilityMutation({
 *   variables: {
 *      facilityId: // value for 'facilityId'
 *      newFacilityData: // value for 'newFacilityData'
 *   },
 * });
 */
export function useEditFacilityMutation(baseOptions?: Apollo.MutationHookOptions<EditFacilityMutation, EditFacilityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditFacilityMutation, EditFacilityMutationVariables>(EditFacilityDocument, options);
      }
export type EditFacilityMutationHookResult = ReturnType<typeof useEditFacilityMutation>;
export type EditFacilityMutationResult = Apollo.MutationResult<EditFacilityMutation>;
export type EditFacilityMutationOptions = Apollo.BaseMutationOptions<EditFacilityMutation, EditFacilityMutationVariables>;
export const EditFooterDataDocument = gql`
    mutation EditFooterData($updatedFooter: FooterInput) {
  EditFooterData(updatedFooter: $updatedFooter)
}
    `;
export type EditFooterDataMutationFn = Apollo.MutationFunction<EditFooterDataMutation, EditFooterDataMutationVariables>;

/**
 * __useEditFooterDataMutation__
 *
 * To run a mutation, you first call `useEditFooterDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditFooterDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editFooterDataMutation, { data, loading, error }] = useEditFooterDataMutation({
 *   variables: {
 *      updatedFooter: // value for 'updatedFooter'
 *   },
 * });
 */
export function useEditFooterDataMutation(baseOptions?: Apollo.MutationHookOptions<EditFooterDataMutation, EditFooterDataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditFooterDataMutation, EditFooterDataMutationVariables>(EditFooterDataDocument, options);
      }
export type EditFooterDataMutationHookResult = ReturnType<typeof useEditFooterDataMutation>;
export type EditFooterDataMutationResult = Apollo.MutationResult<EditFooterDataMutation>;
export type EditFooterDataMutationOptions = Apollo.BaseMutationOptions<EditFooterDataMutation, EditFooterDataMutationVariables>;
export const EditPageConfigDocument = gql`
    mutation EditPageConfig($pageName: String, $newConfig: PageConfigInput) {
  EditPageConfig(pageName: $pageName, newConfig: $newConfig)
}
    `;
export type EditPageConfigMutationFn = Apollo.MutationFunction<EditPageConfigMutation, EditPageConfigMutationVariables>;

/**
 * __useEditPageConfigMutation__
 *
 * To run a mutation, you first call `useEditPageConfigMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPageConfigMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPageConfigMutation, { data, loading, error }] = useEditPageConfigMutation({
 *   variables: {
 *      pageName: // value for 'pageName'
 *      newConfig: // value for 'newConfig'
 *   },
 * });
 */
export function useEditPageConfigMutation(baseOptions?: Apollo.MutationHookOptions<EditPageConfigMutation, EditPageConfigMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditPageConfigMutation, EditPageConfigMutationVariables>(EditPageConfigDocument, options);
      }
export type EditPageConfigMutationHookResult = ReturnType<typeof useEditPageConfigMutation>;
export type EditPageConfigMutationResult = Apollo.MutationResult<EditPageConfigMutation>;
export type EditPageConfigMutationOptions = Apollo.BaseMutationOptions<EditPageConfigMutation, EditPageConfigMutationVariables>;
export const EditPageNotWorkingBannerDocument = gql`
    mutation EditPageNotWorkingBanner($newBanner: PageNotWorkingBannerInput) {
  EditPageNotWorkingBanner(newBanner: $newBanner)
}
    `;
export type EditPageNotWorkingBannerMutationFn = Apollo.MutationFunction<EditPageNotWorkingBannerMutation, EditPageNotWorkingBannerMutationVariables>;

/**
 * __useEditPageNotWorkingBannerMutation__
 *
 * To run a mutation, you first call `useEditPageNotWorkingBannerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPageNotWorkingBannerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPageNotWorkingBannerMutation, { data, loading, error }] = useEditPageNotWorkingBannerMutation({
 *   variables: {
 *      newBanner: // value for 'newBanner'
 *   },
 * });
 */
export function useEditPageNotWorkingBannerMutation(baseOptions?: Apollo.MutationHookOptions<EditPageNotWorkingBannerMutation, EditPageNotWorkingBannerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditPageNotWorkingBannerMutation, EditPageNotWorkingBannerMutationVariables>(EditPageNotWorkingBannerDocument, options);
      }
export type EditPageNotWorkingBannerMutationHookResult = ReturnType<typeof useEditPageNotWorkingBannerMutation>;
export type EditPageNotWorkingBannerMutationResult = Apollo.MutationResult<EditPageNotWorkingBannerMutation>;
export type EditPageNotWorkingBannerMutationOptions = Apollo.BaseMutationOptions<EditPageNotWorkingBannerMutation, EditPageNotWorkingBannerMutationVariables>;
export const EditRoomDocument = gql`
    mutation EditRoom($roomIdToEdit: ID, $editedRoom: RoomInput) {
  EditRoom(RoomIdToEdit: $roomIdToEdit, editedRoom: $editedRoom)
}
    `;
export type EditRoomMutationFn = Apollo.MutationFunction<EditRoomMutation, EditRoomMutationVariables>;

/**
 * __useEditRoomMutation__
 *
 * To run a mutation, you first call `useEditRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editRoomMutation, { data, loading, error }] = useEditRoomMutation({
 *   variables: {
 *      roomIdToEdit: // value for 'roomIdToEdit'
 *      editedRoom: // value for 'editedRoom'
 *   },
 * });
 */
export function useEditRoomMutation(baseOptions?: Apollo.MutationHookOptions<EditRoomMutation, EditRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditRoomMutation, EditRoomMutationVariables>(EditRoomDocument, options);
      }
export type EditRoomMutationHookResult = ReturnType<typeof useEditRoomMutation>;
export type EditRoomMutationResult = Apollo.MutationResult<EditRoomMutation>;
export type EditRoomMutationOptions = Apollo.BaseMutationOptions<EditRoomMutation, EditRoomMutationVariables>;
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
export const SetMainDescriptionDocument = gql`
    mutation SetMainDescription($description: MainDescriptionInput) {
  SetMainDescription(description: $description)
}
    `;
export type SetMainDescriptionMutationFn = Apollo.MutationFunction<SetMainDescriptionMutation, SetMainDescriptionMutationVariables>;

/**
 * __useSetMainDescriptionMutation__
 *
 * To run a mutation, you first call `useSetMainDescriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetMainDescriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setMainDescriptionMutation, { data, loading, error }] = useSetMainDescriptionMutation({
 *   variables: {
 *      description: // value for 'description'
 *   },
 * });
 */
export function useSetMainDescriptionMutation(baseOptions?: Apollo.MutationHookOptions<SetMainDescriptionMutation, SetMainDescriptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetMainDescriptionMutation, SetMainDescriptionMutationVariables>(SetMainDescriptionDocument, options);
      }
export type SetMainDescriptionMutationHookResult = ReturnType<typeof useSetMainDescriptionMutation>;
export type SetMainDescriptionMutationResult = Apollo.MutationResult<SetMainDescriptionMutation>;
export type SetMainDescriptionMutationOptions = Apollo.BaseMutationOptions<SetMainDescriptionMutation, SetMainDescriptionMutationVariables>;
export const SetObjectTimeTableDocument = gql`
    mutation SetObjectTimeTable($objectName: String, $newObjectTimeTable: ObjectTimeTableInput) {
  SetObjectTimeTable(
    objectName: $objectName
    newObjectTimeTable: $newObjectTimeTable
  )
}
    `;
export type SetObjectTimeTableMutationFn = Apollo.MutationFunction<SetObjectTimeTableMutation, SetObjectTimeTableMutationVariables>;

/**
 * __useSetObjectTimeTableMutation__
 *
 * To run a mutation, you first call `useSetObjectTimeTableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetObjectTimeTableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setObjectTimeTableMutation, { data, loading, error }] = useSetObjectTimeTableMutation({
 *   variables: {
 *      objectName: // value for 'objectName'
 *      newObjectTimeTable: // value for 'newObjectTimeTable'
 *   },
 * });
 */
export function useSetObjectTimeTableMutation(baseOptions?: Apollo.MutationHookOptions<SetObjectTimeTableMutation, SetObjectTimeTableMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetObjectTimeTableMutation, SetObjectTimeTableMutationVariables>(SetObjectTimeTableDocument, options);
      }
export type SetObjectTimeTableMutationHookResult = ReturnType<typeof useSetObjectTimeTableMutation>;
export type SetObjectTimeTableMutationResult = Apollo.MutationResult<SetObjectTimeTableMutation>;
export type SetObjectTimeTableMutationOptions = Apollo.BaseMutationOptions<SetObjectTimeTableMutation, SetObjectTimeTableMutationVariables>;
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
export const UpdateCalendarEventDocument = gql`
    mutation UpdateCalendarEvent($id: ID, $newContent: CalendarEventInput) {
  UpdateCalendarEvent(_id: $id, newContent: $newContent)
}
    `;
export type UpdateCalendarEventMutationFn = Apollo.MutationFunction<UpdateCalendarEventMutation, UpdateCalendarEventMutationVariables>;

/**
 * __useUpdateCalendarEventMutation__
 *
 * To run a mutation, you first call `useUpdateCalendarEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCalendarEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCalendarEventMutation, { data, loading, error }] = useUpdateCalendarEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *      newContent: // value for 'newContent'
 *   },
 * });
 */
export function useUpdateCalendarEventMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCalendarEventMutation, UpdateCalendarEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCalendarEventMutation, UpdateCalendarEventMutationVariables>(UpdateCalendarEventDocument, options);
      }
export type UpdateCalendarEventMutationHookResult = ReturnType<typeof useUpdateCalendarEventMutation>;
export type UpdateCalendarEventMutationResult = Apollo.MutationResult<UpdateCalendarEventMutation>;
export type UpdateCalendarEventMutationOptions = Apollo.BaseMutationOptions<UpdateCalendarEventMutation, UpdateCalendarEventMutationVariables>;
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
export const GetCalendarEventByIdDocument = gql`
    query GetCalendarEventById($id: ID!) {
  GetCalendarEventById(id: $id) {
    _id
    name {
      RUS
      EST
      ENG
    }
    eventDescription {
      RUS
      EST
      ENG
    }
    link
    date
    place
    startTime
    endTime
  }
}
    `;

/**
 * __useGetCalendarEventByIdQuery__
 *
 * To run a query within a React component, call `useGetCalendarEventByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCalendarEventByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCalendarEventByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCalendarEventByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCalendarEventByIdQuery, GetCalendarEventByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCalendarEventByIdQuery, GetCalendarEventByIdQueryVariables>(GetCalendarEventByIdDocument, options);
      }
export function useGetCalendarEventByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCalendarEventByIdQuery, GetCalendarEventByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCalendarEventByIdQuery, GetCalendarEventByIdQueryVariables>(GetCalendarEventByIdDocument, options);
        }
export type GetCalendarEventByIdQueryHookResult = ReturnType<typeof useGetCalendarEventByIdQuery>;
export type GetCalendarEventByIdLazyQueryHookResult = ReturnType<typeof useGetCalendarEventByIdLazyQuery>;
export type GetCalendarEventByIdQueryResult = Apollo.QueryResult<GetCalendarEventByIdQuery, GetCalendarEventByIdQueryVariables>;
export const GetCalendarEventsDocument = gql`
    query GetCalendarEvents($options: Options) {
  GetCalendarEvents(options: $options) {
    _id
    name {
      RUS
      EST
      ENG
    }
    eventDescription {
      RUS
      EST
      ENG
    }
    link
    place
    date
    startTime
    endTime
  }
}
    `;

/**
 * __useGetCalendarEventsQuery__
 *
 * To run a query within a React component, call `useGetCalendarEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCalendarEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCalendarEventsQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetCalendarEventsQuery(baseOptions?: Apollo.QueryHookOptions<GetCalendarEventsQuery, GetCalendarEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCalendarEventsQuery, GetCalendarEventsQueryVariables>(GetCalendarEventsDocument, options);
      }
export function useGetCalendarEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCalendarEventsQuery, GetCalendarEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCalendarEventsQuery, GetCalendarEventsQueryVariables>(GetCalendarEventsDocument, options);
        }
export type GetCalendarEventsQueryHookResult = ReturnType<typeof useGetCalendarEventsQuery>;
export type GetCalendarEventsLazyQueryHookResult = ReturnType<typeof useGetCalendarEventsLazyQuery>;
export type GetCalendarEventsQueryResult = Apollo.QueryResult<GetCalendarEventsQuery, GetCalendarEventsQueryVariables>;
export const GetCalendarEventsByMonthDocument = gql`
    query GetCalendarEventsByMonth($monthStr: String) {
  GetCalendarEventsByMonth(monthStr: $monthStr) {
    _id
    name {
      RUS
      EST
      ENG
    }
    eventDescription {
      RUS
      EST
      ENG
    }
    link
    date
    place
    startTime
    endTime
  }
}
    `;

/**
 * __useGetCalendarEventsByMonthQuery__
 *
 * To run a query within a React component, call `useGetCalendarEventsByMonthQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCalendarEventsByMonthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCalendarEventsByMonthQuery({
 *   variables: {
 *      monthStr: // value for 'monthStr'
 *   },
 * });
 */
export function useGetCalendarEventsByMonthQuery(baseOptions?: Apollo.QueryHookOptions<GetCalendarEventsByMonthQuery, GetCalendarEventsByMonthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCalendarEventsByMonthQuery, GetCalendarEventsByMonthQueryVariables>(GetCalendarEventsByMonthDocument, options);
      }
export function useGetCalendarEventsByMonthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCalendarEventsByMonthQuery, GetCalendarEventsByMonthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCalendarEventsByMonthQuery, GetCalendarEventsByMonthQueryVariables>(GetCalendarEventsByMonthDocument, options);
        }
export type GetCalendarEventsByMonthQueryHookResult = ReturnType<typeof useGetCalendarEventsByMonthQuery>;
export type GetCalendarEventsByMonthLazyQueryHookResult = ReturnType<typeof useGetCalendarEventsByMonthLazyQuery>;
export type GetCalendarEventsByMonthQueryResult = Apollo.QueryResult<GetCalendarEventsByMonthQuery, GetCalendarEventsByMonthQueryVariables>;
export const GetFacilitiesDocument = gql`
    query GetFacilities {
  GetFacilities {
    _id
    title {
      RUS
      EST
      ENG
    }
    description {
      RUS
      EST
      ENG
    }
  }
}
    `;

/**
 * __useGetFacilitiesQuery__
 *
 * To run a query within a React component, call `useGetFacilitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFacilitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFacilitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFacilitiesQuery(baseOptions?: Apollo.QueryHookOptions<GetFacilitiesQuery, GetFacilitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFacilitiesQuery, GetFacilitiesQueryVariables>(GetFacilitiesDocument, options);
      }
export function useGetFacilitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFacilitiesQuery, GetFacilitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFacilitiesQuery, GetFacilitiesQueryVariables>(GetFacilitiesDocument, options);
        }
export type GetFacilitiesQueryHookResult = ReturnType<typeof useGetFacilitiesQuery>;
export type GetFacilitiesLazyQueryHookResult = ReturnType<typeof useGetFacilitiesLazyQuery>;
export type GetFacilitiesQueryResult = Apollo.QueryResult<GetFacilitiesQuery, GetFacilitiesQueryVariables>;
export const GetFooterDocument = gql`
    query GetFooter {
  GetFooter {
    _id
    firstSection {
      header {
        RUS
        EST
        ENG
      }
      showHeader
      body {
        RUS
        EST
        ENG
      }
      showBody
    }
    secondSection {
      header {
        RUS
        EST
        ENG
      }
      showHeader
      body {
        RUS
        EST
        ENG
      }
      showBody
    }
    thirdSection {
      header {
        RUS
        EST
        ENG
      }
      showHeader
      body {
        RUS
        EST
        ENG
      }
      showBody
    }
    showContacts
  }
}
    `;

/**
 * __useGetFooterQuery__
 *
 * To run a query within a React component, call `useGetFooterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFooterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFooterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFooterQuery(baseOptions?: Apollo.QueryHookOptions<GetFooterQuery, GetFooterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFooterQuery, GetFooterQueryVariables>(GetFooterDocument, options);
      }
export function useGetFooterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFooterQuery, GetFooterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFooterQuery, GetFooterQueryVariables>(GetFooterDocument, options);
        }
export type GetFooterQueryHookResult = ReturnType<typeof useGetFooterQuery>;
export type GetFooterLazyQueryHookResult = ReturnType<typeof useGetFooterLazyQuery>;
export type GetFooterQueryResult = Apollo.QueryResult<GetFooterQuery, GetFooterQueryVariables>;
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
export const GetMainDescriptionDocument = gql`
    query GetMainDescription {
  GetMainDescription {
    text {
      RUS
      EST
      ENG
    }
    contacts {
      title {
        RUS
        EST
        ENG
      }
      body {
        RUS
        EST
        ENG
      }
    }
  }
}
    `;

/**
 * __useGetMainDescriptionQuery__
 *
 * To run a query within a React component, call `useGetMainDescriptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMainDescriptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMainDescriptionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMainDescriptionQuery(baseOptions?: Apollo.QueryHookOptions<GetMainDescriptionQuery, GetMainDescriptionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMainDescriptionQuery, GetMainDescriptionQueryVariables>(GetMainDescriptionDocument, options);
      }
export function useGetMainDescriptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMainDescriptionQuery, GetMainDescriptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMainDescriptionQuery, GetMainDescriptionQueryVariables>(GetMainDescriptionDocument, options);
        }
export type GetMainDescriptionQueryHookResult = ReturnType<typeof useGetMainDescriptionQuery>;
export type GetMainDescriptionLazyQueryHookResult = ReturnType<typeof useGetMainDescriptionLazyQuery>;
export type GetMainDescriptionQueryResult = Apollo.QueryResult<GetMainDescriptionQuery, GetMainDescriptionQueryVariables>;
export const GetObjectTimeTableDocument = gql`
    query GetObjectTimeTable($objectName: String) {
  GetObjectTimeTable(objectName: $objectName) {
    objectName
    timeTable {
      E {
        id
        textContent {
          RUS
          EST
          ENG
        }
        name
        type
        startTime
        endTime
      }
      T {
        id
        name
        type
        startTime
        endTime
        textContent {
          RUS
          EST
          ENG
        }
      }
      K {
        id
        name
        type
        startTime
        endTime
        textContent {
          RUS
          EST
          ENG
        }
      }
      N {
        id
        name
        type
        startTime
        endTime
        textContent {
          RUS
          EST
          ENG
        }
      }
      R {
        id
        name
        type
        startTime
        endTime
        textContent {
          RUS
          EST
          ENG
        }
      }
      L {
        id
        name
        type
        startTime
        endTime
        textContent {
          RUS
          EST
          ENG
        }
      }
      P {
        id
        name
        type
        startTime
        endTime
        textContent {
          RUS
          EST
          ENG
        }
      }
    }
  }
}
    `;

/**
 * __useGetObjectTimeTableQuery__
 *
 * To run a query within a React component, call `useGetObjectTimeTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetObjectTimeTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetObjectTimeTableQuery({
 *   variables: {
 *      objectName: // value for 'objectName'
 *   },
 * });
 */
export function useGetObjectTimeTableQuery(baseOptions?: Apollo.QueryHookOptions<GetObjectTimeTableQuery, GetObjectTimeTableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetObjectTimeTableQuery, GetObjectTimeTableQueryVariables>(GetObjectTimeTableDocument, options);
      }
export function useGetObjectTimeTableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetObjectTimeTableQuery, GetObjectTimeTableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetObjectTimeTableQuery, GetObjectTimeTableQueryVariables>(GetObjectTimeTableDocument, options);
        }
export type GetObjectTimeTableQueryHookResult = ReturnType<typeof useGetObjectTimeTableQuery>;
export type GetObjectTimeTableLazyQueryHookResult = ReturnType<typeof useGetObjectTimeTableLazyQuery>;
export type GetObjectTimeTableQueryResult = Apollo.QueryResult<GetObjectTimeTableQuery, GetObjectTimeTableQueryVariables>;
export const GetPageConfigDocument = gql`
    query GetPageConfig($pageName: String) {
  GetPageConfig(pageName: $pageName) {
    pageName
    showBanner
  }
}
    `;

/**
 * __useGetPageConfigQuery__
 *
 * To run a query within a React component, call `useGetPageConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageConfigQuery({
 *   variables: {
 *      pageName: // value for 'pageName'
 *   },
 * });
 */
export function useGetPageConfigQuery(baseOptions?: Apollo.QueryHookOptions<GetPageConfigQuery, GetPageConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPageConfigQuery, GetPageConfigQueryVariables>(GetPageConfigDocument, options);
      }
export function useGetPageConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPageConfigQuery, GetPageConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPageConfigQuery, GetPageConfigQueryVariables>(GetPageConfigDocument, options);
        }
export type GetPageConfigQueryHookResult = ReturnType<typeof useGetPageConfigQuery>;
export type GetPageConfigLazyQueryHookResult = ReturnType<typeof useGetPageConfigLazyQuery>;
export type GetPageConfigQueryResult = Apollo.QueryResult<GetPageConfigQuery, GetPageConfigQueryVariables>;
export const GetPageNotWorkingBannerDocument = gql`
    query GetPageNotWorkingBanner {
  GetPageNotWorkingBanner {
    title {
      show
      text {
        RUS
        EST
        ENG
      }
    }
    body {
      show
      text {
        RUS
        EST
        ENG
      }
    }
    link {
      show
      body
    }
    showContacts
    centeredText {
      show
      text {
        RUS
        EST
        ENG
      }
    }
  }
}
    `;

/**
 * __useGetPageNotWorkingBannerQuery__
 *
 * To run a query within a React component, call `useGetPageNotWorkingBannerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageNotWorkingBannerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageNotWorkingBannerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPageNotWorkingBannerQuery(baseOptions?: Apollo.QueryHookOptions<GetPageNotWorkingBannerQuery, GetPageNotWorkingBannerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPageNotWorkingBannerQuery, GetPageNotWorkingBannerQueryVariables>(GetPageNotWorkingBannerDocument, options);
      }
export function useGetPageNotWorkingBannerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPageNotWorkingBannerQuery, GetPageNotWorkingBannerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPageNotWorkingBannerQuery, GetPageNotWorkingBannerQueryVariables>(GetPageNotWorkingBannerDocument, options);
        }
export type GetPageNotWorkingBannerQueryHookResult = ReturnType<typeof useGetPageNotWorkingBannerQuery>;
export type GetPageNotWorkingBannerLazyQueryHookResult = ReturnType<typeof useGetPageNotWorkingBannerLazyQuery>;
export type GetPageNotWorkingBannerQueryResult = Apollo.QueryResult<GetPageNotWorkingBannerQuery, GetPageNotWorkingBannerQueryVariables>;
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
export const GetRelevantCalendarEventsByCurrentDateDocument = gql`
    query GetRelevantCalendarEventsByCurrentDate($currentDate: String) {
  GetRelevantCalendarEventsByCurrentDate(currentDate: $currentDate) {
    _id
    name {
      RUS
      EST
      ENG
    }
    eventDescription {
      RUS
      EST
      ENG
    }
    link
    date
    place
    startTime
    endTime
  }
}
    `;

/**
 * __useGetRelevantCalendarEventsByCurrentDateQuery__
 *
 * To run a query within a React component, call `useGetRelevantCalendarEventsByCurrentDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRelevantCalendarEventsByCurrentDateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRelevantCalendarEventsByCurrentDateQuery({
 *   variables: {
 *      currentDate: // value for 'currentDate'
 *   },
 * });
 */
export function useGetRelevantCalendarEventsByCurrentDateQuery(baseOptions?: Apollo.QueryHookOptions<GetRelevantCalendarEventsByCurrentDateQuery, GetRelevantCalendarEventsByCurrentDateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRelevantCalendarEventsByCurrentDateQuery, GetRelevantCalendarEventsByCurrentDateQueryVariables>(GetRelevantCalendarEventsByCurrentDateDocument, options);
      }
export function useGetRelevantCalendarEventsByCurrentDateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRelevantCalendarEventsByCurrentDateQuery, GetRelevantCalendarEventsByCurrentDateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRelevantCalendarEventsByCurrentDateQuery, GetRelevantCalendarEventsByCurrentDateQueryVariables>(GetRelevantCalendarEventsByCurrentDateDocument, options);
        }
export type GetRelevantCalendarEventsByCurrentDateQueryHookResult = ReturnType<typeof useGetRelevantCalendarEventsByCurrentDateQuery>;
export type GetRelevantCalendarEventsByCurrentDateLazyQueryHookResult = ReturnType<typeof useGetRelevantCalendarEventsByCurrentDateLazyQuery>;
export type GetRelevantCalendarEventsByCurrentDateQueryResult = Apollo.QueryResult<GetRelevantCalendarEventsByCurrentDateQuery, GetRelevantCalendarEventsByCurrentDateQueryVariables>;
export const GetRoomsDocument = gql`
    query GetRooms {
  GetRooms {
    _id
    name {
      RUS
      EST
      ENG
    }
    description {
      RUS
      EST
      ENG
    }
  }
}
    `;

/**
 * __useGetRoomsQuery__
 *
 * To run a query within a React component, call `useGetRoomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoomsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRoomsQuery(baseOptions?: Apollo.QueryHookOptions<GetRoomsQuery, GetRoomsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRoomsQuery, GetRoomsQueryVariables>(GetRoomsDocument, options);
      }
export function useGetRoomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRoomsQuery, GetRoomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRoomsQuery, GetRoomsQueryVariables>(GetRoomsDocument, options);
        }
export type GetRoomsQueryHookResult = ReturnType<typeof useGetRoomsQuery>;
export type GetRoomsLazyQueryHookResult = ReturnType<typeof useGetRoomsLazyQuery>;
export type GetRoomsQueryResult = Apollo.QueryResult<GetRoomsQuery, GetRoomsQueryVariables>;
export const GetSimplePagesDocument = gql`
    query GetSimplePages($type: Int) {
  GetSimplePages(type: $type) {
    _id
    title {
      RUS
      EST
      ENG
    }
    text {
      RUS
      EST
      ENG
    }
    image
    pageName
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