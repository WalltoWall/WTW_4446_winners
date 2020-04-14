export type Maybe<T> = T | undefined;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AirtableAdPerson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  table?: Maybe<Scalars['String']>;
  recordId?: Maybe<Scalars['String']>;
  queryName?: Maybe<Scalars['String']>;
  data?: Maybe<AirtableAdPersonData>;
  fields?: Maybe<AirtableAdPersonFields>;
};

export type AirtableAdPersonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableAdPersonEdge>;
  nodes: Array<AirtableAdPerson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<AirtableAdPersonGroupConnection>;
};


export type AirtableAdPersonConnectionDistinctArgs = {
  field: AirtableAdPersonFieldsEnum;
};


export type AirtableAdPersonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: AirtableAdPersonFieldsEnum;
};

export type AirtableAdPersonData = {
  name?: Maybe<Scalars['String']>;
  award?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  agency?: Maybe<Array<Maybe<AirtableAgency>>>;
  description?: Maybe<AirtableFieldtextmarkdown>;
  photo?: Maybe<AirtableFieldfileNode>;
};


export type AirtableAdPersonDataYearArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type AirtableAdPersonDataFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  award?: Maybe<StringQueryOperatorInput>;
  year?: Maybe<DateQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  agency?: Maybe<AirtableAgencyFilterListInput>;
  description?: Maybe<AirtableFieldtextmarkdownFilterInput>;
  photo?: Maybe<AirtableFieldfileNodeFilterInput>;
};

export type AirtableAdPersonEdge = {
  next?: Maybe<AirtableAdPerson>;
  node: AirtableAdPerson;
  previous?: Maybe<AirtableAdPerson>;
};

export type AirtableAdPersonFields = {
  url?: Maybe<Scalars['String']>;
};

export enum AirtableAdPersonFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Table = 'table',
  RecordId = 'recordId',
  QueryName = 'queryName',
  DataName = 'data___name',
  DataAward = 'data___award',
  DataYear = 'data___year',
  DataTitle = 'data___title',
  DataAgency = 'data___agency',
  DataAgencyId = 'data___agency___id',
  DataAgencyParentId = 'data___agency___parent___id',
  DataAgencyParentChildren = 'data___agency___parent___children',
  DataAgencyChildren = 'data___agency___children',
  DataAgencyChildrenId = 'data___agency___children___id',
  DataAgencyChildrenChildren = 'data___agency___children___children',
  DataAgencyInternalContent = 'data___agency___internal___content',
  DataAgencyInternalContentDigest = 'data___agency___internal___contentDigest',
  DataAgencyInternalDescription = 'data___agency___internal___description',
  DataAgencyInternalFieldOwners = 'data___agency___internal___fieldOwners',
  DataAgencyInternalIgnoreType = 'data___agency___internal___ignoreType',
  DataAgencyInternalMediaType = 'data___agency___internal___mediaType',
  DataAgencyInternalOwner = 'data___agency___internal___owner',
  DataAgencyInternalType = 'data___agency___internal___type',
  DataAgencyTable = 'data___agency___table',
  DataAgencyRecordId = 'data___agency___recordId',
  DataAgencyQueryName = 'data___agency___queryName',
  DataAgencyDataName = 'data___agency___data___name',
  DataAgencyDataEntries = 'data___agency___data___Entries',
  DataAgencyDataUpdatedAt = 'data___agency___data___updated_at',
  DataAgencyDataCreatedAt = 'data___agency___data___created_at',
  DataAgencyDataAdPeople = 'data___agency___data___Ad_People',
  DataAgencyDataWebsite = 'data___agency___data___website',
  DataAgencyDataInstagramHandle = 'data___agency___data___instagram_handle',
  DataAgencyDataFacebookHandle = 'data___agency___data___facebook_handle',
  DataAgencyDataLinkedinHandle = 'data___agency___data___linkedin_handle',
  DataAgencyDataTwitterHandle = 'data___agency___data___twitter_handle',
  DataAgencyFieldsUrl = 'data___agency___fields___url',
  DataDescriptionId = 'data___description___id',
  DataDescriptionParentId = 'data___description___parent___id',
  DataDescriptionParentChildren = 'data___description___parent___children',
  DataDescriptionChildren = 'data___description___children',
  DataDescriptionChildrenId = 'data___description___children___id',
  DataDescriptionChildrenChildren = 'data___description___children___children',
  DataDescriptionInternalContent = 'data___description___internal___content',
  DataDescriptionInternalContentDigest = 'data___description___internal___contentDigest',
  DataDescriptionInternalDescription = 'data___description___internal___description',
  DataDescriptionInternalFieldOwners = 'data___description___internal___fieldOwners',
  DataDescriptionInternalIgnoreType = 'data___description___internal___ignoreType',
  DataDescriptionInternalMediaType = 'data___description___internal___mediaType',
  DataDescriptionInternalOwner = 'data___description___internal___owner',
  DataDescriptionInternalType = 'data___description___internal___type',
  DataDescriptionRaw = 'data___description___raw',
  DataDescriptionChildMarkdownRemarkId = 'data___description___childMarkdownRemark___id',
  DataDescriptionChildMarkdownRemarkExcerpt = 'data___description___childMarkdownRemark___excerpt',
  DataDescriptionChildMarkdownRemarkRawMarkdownBody = 'data___description___childMarkdownRemark___rawMarkdownBody',
  DataDescriptionChildMarkdownRemarkHtml = 'data___description___childMarkdownRemark___html',
  DataDescriptionChildMarkdownRemarkHtmlAst = 'data___description___childMarkdownRemark___htmlAst',
  DataDescriptionChildMarkdownRemarkExcerptAst = 'data___description___childMarkdownRemark___excerptAst',
  DataDescriptionChildMarkdownRemarkHeadings = 'data___description___childMarkdownRemark___headings',
  DataDescriptionChildMarkdownRemarkTimeToRead = 'data___description___childMarkdownRemark___timeToRead',
  DataDescriptionChildMarkdownRemarkTableOfContents = 'data___description___childMarkdownRemark___tableOfContents',
  DataDescriptionChildMarkdownRemarkChildren = 'data___description___childMarkdownRemark___children',
  DataPhotoId = 'data___photo___id',
  DataPhotoParentId = 'data___photo___parent___id',
  DataPhotoParentChildren = 'data___photo___parent___children',
  DataPhotoChildren = 'data___photo___children',
  DataPhotoChildrenId = 'data___photo___children___id',
  DataPhotoChildrenChildren = 'data___photo___children___children',
  DataPhotoInternalContent = 'data___photo___internal___content',
  DataPhotoInternalContentDigest = 'data___photo___internal___contentDigest',
  DataPhotoInternalDescription = 'data___photo___internal___description',
  DataPhotoInternalFieldOwners = 'data___photo___internal___fieldOwners',
  DataPhotoInternalIgnoreType = 'data___photo___internal___ignoreType',
  DataPhotoInternalMediaType = 'data___photo___internal___mediaType',
  DataPhotoInternalOwner = 'data___photo___internal___owner',
  DataPhotoInternalType = 'data___photo___internal___type',
  DataPhotoRaw = 'data___photo___raw',
  DataPhotoRawId = 'data___photo___raw___id',
  DataPhotoRawUrl = 'data___photo___raw___url',
  DataPhotoRawFilename = 'data___photo___raw___filename',
  DataPhotoRawSize = 'data___photo___raw___size',
  DataPhotoRawType = 'data___photo___raw___type',
  DataPhotoLocalFiles = 'data___photo___localFiles',
  DataPhotoLocalFilesSourceInstanceName = 'data___photo___localFiles___sourceInstanceName',
  DataPhotoLocalFilesAbsolutePath = 'data___photo___localFiles___absolutePath',
  DataPhotoLocalFilesRelativePath = 'data___photo___localFiles___relativePath',
  DataPhotoLocalFilesExtension = 'data___photo___localFiles___extension',
  DataPhotoLocalFilesSize = 'data___photo___localFiles___size',
  DataPhotoLocalFilesPrettySize = 'data___photo___localFiles___prettySize',
  DataPhotoLocalFilesModifiedTime = 'data___photo___localFiles___modifiedTime',
  DataPhotoLocalFilesAccessTime = 'data___photo___localFiles___accessTime',
  DataPhotoLocalFilesChangeTime = 'data___photo___localFiles___changeTime',
  DataPhotoLocalFilesBirthTime = 'data___photo___localFiles___birthTime',
  DataPhotoLocalFilesRoot = 'data___photo___localFiles___root',
  DataPhotoLocalFilesDir = 'data___photo___localFiles___dir',
  DataPhotoLocalFilesBase = 'data___photo___localFiles___base',
  DataPhotoLocalFilesExt = 'data___photo___localFiles___ext',
  DataPhotoLocalFilesName = 'data___photo___localFiles___name',
  DataPhotoLocalFilesRelativeDirectory = 'data___photo___localFiles___relativeDirectory',
  DataPhotoLocalFilesDev = 'data___photo___localFiles___dev',
  DataPhotoLocalFilesMode = 'data___photo___localFiles___mode',
  DataPhotoLocalFilesNlink = 'data___photo___localFiles___nlink',
  DataPhotoLocalFilesUid = 'data___photo___localFiles___uid',
  DataPhotoLocalFilesGid = 'data___photo___localFiles___gid',
  DataPhotoLocalFilesRdev = 'data___photo___localFiles___rdev',
  DataPhotoLocalFilesIno = 'data___photo___localFiles___ino',
  DataPhotoLocalFilesAtimeMs = 'data___photo___localFiles___atimeMs',
  DataPhotoLocalFilesMtimeMs = 'data___photo___localFiles___mtimeMs',
  DataPhotoLocalFilesCtimeMs = 'data___photo___localFiles___ctimeMs',
  DataPhotoLocalFilesAtime = 'data___photo___localFiles___atime',
  DataPhotoLocalFilesMtime = 'data___photo___localFiles___mtime',
  DataPhotoLocalFilesCtime = 'data___photo___localFiles___ctime',
  DataPhotoLocalFilesBirthtime = 'data___photo___localFiles___birthtime',
  DataPhotoLocalFilesBirthtimeMs = 'data___photo___localFiles___birthtimeMs',
  DataPhotoLocalFilesBlksize = 'data___photo___localFiles___blksize',
  DataPhotoLocalFilesBlocks = 'data___photo___localFiles___blocks',
  DataPhotoLocalFilesUrl = 'data___photo___localFiles___url',
  DataPhotoLocalFilesId = 'data___photo___localFiles___id',
  DataPhotoLocalFilesChildren = 'data___photo___localFiles___children',
  FieldsUrl = 'fields___url'
}

export type AirtableAdPersonFieldsFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
};

export type AirtableAdPersonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  table?: Maybe<StringQueryOperatorInput>;
  recordId?: Maybe<StringQueryOperatorInput>;
  queryName?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<AirtableAdPersonDataFilterInput>;
  fields?: Maybe<AirtableAdPersonFieldsFilterInput>;
};

export type AirtableAdPersonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableAdPersonEdge>;
  nodes: Array<AirtableAdPerson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type AirtableAdPersonSortInput = {
  fields?: Maybe<Array<Maybe<AirtableAdPersonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type AirtableAgency = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  table?: Maybe<Scalars['String']>;
  recordId?: Maybe<Scalars['String']>;
  queryName?: Maybe<Scalars['String']>;
  data?: Maybe<AirtableAgencyData>;
  fields?: Maybe<AirtableAgencyFields>;
};

export type AirtableAgencyConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableAgencyEdge>;
  nodes: Array<AirtableAgency>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<AirtableAgencyGroupConnection>;
};


export type AirtableAgencyConnectionDistinctArgs = {
  field: AirtableAgencyFieldsEnum;
};


export type AirtableAgencyConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: AirtableAgencyFieldsEnum;
};

export type AirtableAgencyData = {
  name?: Maybe<Scalars['String']>;
  Entries?: Maybe<Array<Maybe<Scalars['String']>>>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  Ad_People?: Maybe<Array<Maybe<Scalars['String']>>>;
  website?: Maybe<Scalars['String']>;
  instagram_handle?: Maybe<Scalars['String']>;
  avatar?: Maybe<AirtableFieldfileNode>;
  facebook_handle?: Maybe<Scalars['String']>;
  linkedin_handle?: Maybe<Scalars['String']>;
  twitter_handle?: Maybe<Scalars['String']>;
};


export type AirtableAgencyDataUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type AirtableAgencyDataCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type AirtableAgencyDataFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  Entries?: Maybe<StringQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  Ad_People?: Maybe<StringQueryOperatorInput>;
  website?: Maybe<StringQueryOperatorInput>;
  instagram_handle?: Maybe<StringQueryOperatorInput>;
  avatar?: Maybe<AirtableFieldfileNodeFilterInput>;
  facebook_handle?: Maybe<StringQueryOperatorInput>;
  linkedin_handle?: Maybe<StringQueryOperatorInput>;
  twitter_handle?: Maybe<StringQueryOperatorInput>;
};

export type AirtableAgencyEdge = {
  next?: Maybe<AirtableAgency>;
  node: AirtableAgency;
  previous?: Maybe<AirtableAgency>;
};

export type AirtableAgencyFields = {
  url?: Maybe<Scalars['String']>;
};

export enum AirtableAgencyFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Table = 'table',
  RecordId = 'recordId',
  QueryName = 'queryName',
  DataName = 'data___name',
  DataEntries = 'data___Entries',
  DataUpdatedAt = 'data___updated_at',
  DataCreatedAt = 'data___created_at',
  DataAdPeople = 'data___Ad_People',
  DataWebsite = 'data___website',
  DataInstagramHandle = 'data___instagram_handle',
  DataAvatarId = 'data___avatar___id',
  DataAvatarParentId = 'data___avatar___parent___id',
  DataAvatarParentChildren = 'data___avatar___parent___children',
  DataAvatarChildren = 'data___avatar___children',
  DataAvatarChildrenId = 'data___avatar___children___id',
  DataAvatarChildrenChildren = 'data___avatar___children___children',
  DataAvatarInternalContent = 'data___avatar___internal___content',
  DataAvatarInternalContentDigest = 'data___avatar___internal___contentDigest',
  DataAvatarInternalDescription = 'data___avatar___internal___description',
  DataAvatarInternalFieldOwners = 'data___avatar___internal___fieldOwners',
  DataAvatarInternalIgnoreType = 'data___avatar___internal___ignoreType',
  DataAvatarInternalMediaType = 'data___avatar___internal___mediaType',
  DataAvatarInternalOwner = 'data___avatar___internal___owner',
  DataAvatarInternalType = 'data___avatar___internal___type',
  DataAvatarRaw = 'data___avatar___raw',
  DataAvatarRawId = 'data___avatar___raw___id',
  DataAvatarRawUrl = 'data___avatar___raw___url',
  DataAvatarRawFilename = 'data___avatar___raw___filename',
  DataAvatarRawSize = 'data___avatar___raw___size',
  DataAvatarRawType = 'data___avatar___raw___type',
  DataAvatarLocalFiles = 'data___avatar___localFiles',
  DataAvatarLocalFilesSourceInstanceName = 'data___avatar___localFiles___sourceInstanceName',
  DataAvatarLocalFilesAbsolutePath = 'data___avatar___localFiles___absolutePath',
  DataAvatarLocalFilesRelativePath = 'data___avatar___localFiles___relativePath',
  DataAvatarLocalFilesExtension = 'data___avatar___localFiles___extension',
  DataAvatarLocalFilesSize = 'data___avatar___localFiles___size',
  DataAvatarLocalFilesPrettySize = 'data___avatar___localFiles___prettySize',
  DataAvatarLocalFilesModifiedTime = 'data___avatar___localFiles___modifiedTime',
  DataAvatarLocalFilesAccessTime = 'data___avatar___localFiles___accessTime',
  DataAvatarLocalFilesChangeTime = 'data___avatar___localFiles___changeTime',
  DataAvatarLocalFilesBirthTime = 'data___avatar___localFiles___birthTime',
  DataAvatarLocalFilesRoot = 'data___avatar___localFiles___root',
  DataAvatarLocalFilesDir = 'data___avatar___localFiles___dir',
  DataAvatarLocalFilesBase = 'data___avatar___localFiles___base',
  DataAvatarLocalFilesExt = 'data___avatar___localFiles___ext',
  DataAvatarLocalFilesName = 'data___avatar___localFiles___name',
  DataAvatarLocalFilesRelativeDirectory = 'data___avatar___localFiles___relativeDirectory',
  DataAvatarLocalFilesDev = 'data___avatar___localFiles___dev',
  DataAvatarLocalFilesMode = 'data___avatar___localFiles___mode',
  DataAvatarLocalFilesNlink = 'data___avatar___localFiles___nlink',
  DataAvatarLocalFilesUid = 'data___avatar___localFiles___uid',
  DataAvatarLocalFilesGid = 'data___avatar___localFiles___gid',
  DataAvatarLocalFilesRdev = 'data___avatar___localFiles___rdev',
  DataAvatarLocalFilesIno = 'data___avatar___localFiles___ino',
  DataAvatarLocalFilesAtimeMs = 'data___avatar___localFiles___atimeMs',
  DataAvatarLocalFilesMtimeMs = 'data___avatar___localFiles___mtimeMs',
  DataAvatarLocalFilesCtimeMs = 'data___avatar___localFiles___ctimeMs',
  DataAvatarLocalFilesAtime = 'data___avatar___localFiles___atime',
  DataAvatarLocalFilesMtime = 'data___avatar___localFiles___mtime',
  DataAvatarLocalFilesCtime = 'data___avatar___localFiles___ctime',
  DataAvatarLocalFilesBirthtime = 'data___avatar___localFiles___birthtime',
  DataAvatarLocalFilesBirthtimeMs = 'data___avatar___localFiles___birthtimeMs',
  DataAvatarLocalFilesBlksize = 'data___avatar___localFiles___blksize',
  DataAvatarLocalFilesBlocks = 'data___avatar___localFiles___blocks',
  DataAvatarLocalFilesUrl = 'data___avatar___localFiles___url',
  DataAvatarLocalFilesId = 'data___avatar___localFiles___id',
  DataAvatarLocalFilesChildren = 'data___avatar___localFiles___children',
  DataFacebookHandle = 'data___facebook_handle',
  DataLinkedinHandle = 'data___linkedin_handle',
  DataTwitterHandle = 'data___twitter_handle',
  FieldsUrl = 'fields___url'
}

export type AirtableAgencyFieldsFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
};

export type AirtableAgencyFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  table?: Maybe<StringQueryOperatorInput>;
  recordId?: Maybe<StringQueryOperatorInput>;
  queryName?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<AirtableAgencyDataFilterInput>;
  fields?: Maybe<AirtableAgencyFieldsFilterInput>;
};

export type AirtableAgencyFilterListInput = {
  elemMatch?: Maybe<AirtableAgencyFilterInput>;
};

export type AirtableAgencyGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableAgencyEdge>;
  nodes: Array<AirtableAgency>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type AirtableAgencySortInput = {
  fields?: Maybe<Array<Maybe<AirtableAgencyFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type AirtableArchive = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  table?: Maybe<Scalars['String']>;
  recordId?: Maybe<Scalars['String']>;
  queryName?: Maybe<Scalars['String']>;
  data?: Maybe<AirtableArchiveData>;
};

export type AirtableArchiveConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableArchiveEdge>;
  nodes: Array<AirtableArchive>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<AirtableArchiveGroupConnection>;
};


export type AirtableArchiveConnectionDistinctArgs = {
  field: AirtableArchiveFieldsEnum;
};


export type AirtableArchiveConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: AirtableArchiveFieldsEnum;
};

export type AirtableArchiveData = {
  year?: Maybe<Scalars['Date']>;
  link?: Maybe<Scalars['String']>;
};


export type AirtableArchiveDataYearArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type AirtableArchiveDataFilterInput = {
  year?: Maybe<DateQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
};

export type AirtableArchiveEdge = {
  next?: Maybe<AirtableArchive>;
  node: AirtableArchive;
  previous?: Maybe<AirtableArchive>;
};

export enum AirtableArchiveFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Table = 'table',
  RecordId = 'recordId',
  QueryName = 'queryName',
  DataYear = 'data___year',
  DataLink = 'data___link'
}

export type AirtableArchiveFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  table?: Maybe<StringQueryOperatorInput>;
  recordId?: Maybe<StringQueryOperatorInput>;
  queryName?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<AirtableArchiveDataFilterInput>;
};

export type AirtableArchiveGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableArchiveEdge>;
  nodes: Array<AirtableArchive>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type AirtableArchiveSortInput = {
  fields?: Maybe<Array<Maybe<AirtableArchiveFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type AirtableCategory = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  table?: Maybe<Scalars['String']>;
  recordId?: Maybe<Scalars['String']>;
  queryName?: Maybe<Scalars['String']>;
  data?: Maybe<AirtableCategoryData>;
};

export type AirtableCategoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableCategoryEdge>;
  nodes: Array<AirtableCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<AirtableCategoryGroupConnection>;
};


export type AirtableCategoryConnectionDistinctArgs = {
  field: AirtableCategoryFieldsEnum;
};


export type AirtableCategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: AirtableCategoryFieldsEnum;
};

export type AirtableCategoryData = {
  line_2?: Maybe<Scalars['String']>;
  line_1?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  Entries?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AirtableCategoryDataFilterInput = {
  line_2?: Maybe<StringQueryOperatorInput>;
  line_1?: Maybe<StringQueryOperatorInput>;
  code?: Maybe<StringQueryOperatorInput>;
  Entries?: Maybe<StringQueryOperatorInput>;
};

export type AirtableCategoryEdge = {
  next?: Maybe<AirtableCategory>;
  node: AirtableCategory;
  previous?: Maybe<AirtableCategory>;
};

export enum AirtableCategoryFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Table = 'table',
  RecordId = 'recordId',
  QueryName = 'queryName',
  DataLine_2 = 'data___line_2',
  DataLine_1 = 'data___line_1',
  DataCode = 'data___code',
  DataEntries = 'data___Entries'
}

export type AirtableCategoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  table?: Maybe<StringQueryOperatorInput>;
  recordId?: Maybe<StringQueryOperatorInput>;
  queryName?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<AirtableCategoryDataFilterInput>;
};

export type AirtableCategoryFilterListInput = {
  elemMatch?: Maybe<AirtableCategoryFilterInput>;
};

export type AirtableCategoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableCategoryEdge>;
  nodes: Array<AirtableCategory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type AirtableCategorySortInput = {
  fields?: Maybe<Array<Maybe<AirtableCategoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type AirtableFieldfileNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  raw?: Maybe<Array<Maybe<AirtableFieldfileNodeRaw>>>;
  localFiles?: Maybe<Array<Maybe<File>>>;
};

export type AirtableFieldfileNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableFieldfileNodeEdge>;
  nodes: Array<AirtableFieldfileNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<AirtableFieldfileNodeGroupConnection>;
};


export type AirtableFieldfileNodeConnectionDistinctArgs = {
  field: AirtableFieldfileNodeFieldsEnum;
};


export type AirtableFieldfileNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: AirtableFieldfileNodeFieldsEnum;
};

export type AirtableFieldfileNodeEdge = {
  next?: Maybe<AirtableFieldfileNode>;
  node: AirtableFieldfileNode;
  previous?: Maybe<AirtableFieldfileNode>;
};

export enum AirtableFieldfileNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Raw = 'raw',
  RawId = 'raw___id',
  RawUrl = 'raw___url',
  RawFilename = 'raw___filename',
  RawSize = 'raw___size',
  RawType = 'raw___type',
  RawThumbnailsSmallUrl = 'raw___thumbnails___small___url',
  RawThumbnailsSmallWidth = 'raw___thumbnails___small___width',
  RawThumbnailsSmallHeight = 'raw___thumbnails___small___height',
  RawThumbnailsLargeUrl = 'raw___thumbnails___large___url',
  RawThumbnailsLargeWidth = 'raw___thumbnails___large___width',
  RawThumbnailsLargeHeight = 'raw___thumbnails___large___height',
  RawThumbnailsFullUrl = 'raw___thumbnails___full___url',
  RawThumbnailsFullWidth = 'raw___thumbnails___full___width',
  RawThumbnailsFullHeight = 'raw___thumbnails___full___height',
  LocalFiles = 'localFiles',
  LocalFilesSourceInstanceName = 'localFiles___sourceInstanceName',
  LocalFilesAbsolutePath = 'localFiles___absolutePath',
  LocalFilesRelativePath = 'localFiles___relativePath',
  LocalFilesExtension = 'localFiles___extension',
  LocalFilesSize = 'localFiles___size',
  LocalFilesPrettySize = 'localFiles___prettySize',
  LocalFilesModifiedTime = 'localFiles___modifiedTime',
  LocalFilesAccessTime = 'localFiles___accessTime',
  LocalFilesChangeTime = 'localFiles___changeTime',
  LocalFilesBirthTime = 'localFiles___birthTime',
  LocalFilesRoot = 'localFiles___root',
  LocalFilesDir = 'localFiles___dir',
  LocalFilesBase = 'localFiles___base',
  LocalFilesExt = 'localFiles___ext',
  LocalFilesName = 'localFiles___name',
  LocalFilesRelativeDirectory = 'localFiles___relativeDirectory',
  LocalFilesDev = 'localFiles___dev',
  LocalFilesMode = 'localFiles___mode',
  LocalFilesNlink = 'localFiles___nlink',
  LocalFilesUid = 'localFiles___uid',
  LocalFilesGid = 'localFiles___gid',
  LocalFilesRdev = 'localFiles___rdev',
  LocalFilesIno = 'localFiles___ino',
  LocalFilesAtimeMs = 'localFiles___atimeMs',
  LocalFilesMtimeMs = 'localFiles___mtimeMs',
  LocalFilesCtimeMs = 'localFiles___ctimeMs',
  LocalFilesAtime = 'localFiles___atime',
  LocalFilesMtime = 'localFiles___mtime',
  LocalFilesCtime = 'localFiles___ctime',
  LocalFilesBirthtime = 'localFiles___birthtime',
  LocalFilesBirthtimeMs = 'localFiles___birthtimeMs',
  LocalFilesBlksize = 'localFiles___blksize',
  LocalFilesBlocks = 'localFiles___blocks',
  LocalFilesUrl = 'localFiles___url',
  LocalFilesId = 'localFiles___id',
  LocalFilesParentId = 'localFiles___parent___id',
  LocalFilesParentParentId = 'localFiles___parent___parent___id',
  LocalFilesParentParentChildren = 'localFiles___parent___parent___children',
  LocalFilesParentChildren = 'localFiles___parent___children',
  LocalFilesParentChildrenId = 'localFiles___parent___children___id',
  LocalFilesParentChildrenChildren = 'localFiles___parent___children___children',
  LocalFilesParentInternalContent = 'localFiles___parent___internal___content',
  LocalFilesParentInternalContentDigest = 'localFiles___parent___internal___contentDigest',
  LocalFilesParentInternalDescription = 'localFiles___parent___internal___description',
  LocalFilesParentInternalFieldOwners = 'localFiles___parent___internal___fieldOwners',
  LocalFilesParentInternalIgnoreType = 'localFiles___parent___internal___ignoreType',
  LocalFilesParentInternalMediaType = 'localFiles___parent___internal___mediaType',
  LocalFilesParentInternalOwner = 'localFiles___parent___internal___owner',
  LocalFilesParentInternalType = 'localFiles___parent___internal___type',
  LocalFilesChildren = 'localFiles___children',
  LocalFilesChildrenId = 'localFiles___children___id',
  LocalFilesChildrenParentId = 'localFiles___children___parent___id',
  LocalFilesChildrenParentChildren = 'localFiles___children___parent___children',
  LocalFilesChildrenChildren = 'localFiles___children___children',
  LocalFilesChildrenChildrenId = 'localFiles___children___children___id',
  LocalFilesChildrenChildrenChildren = 'localFiles___children___children___children',
  LocalFilesChildrenInternalContent = 'localFiles___children___internal___content',
  LocalFilesChildrenInternalContentDigest = 'localFiles___children___internal___contentDigest',
  LocalFilesChildrenInternalDescription = 'localFiles___children___internal___description',
  LocalFilesChildrenInternalFieldOwners = 'localFiles___children___internal___fieldOwners',
  LocalFilesChildrenInternalIgnoreType = 'localFiles___children___internal___ignoreType',
  LocalFilesChildrenInternalMediaType = 'localFiles___children___internal___mediaType',
  LocalFilesChildrenInternalOwner = 'localFiles___children___internal___owner',
  LocalFilesChildrenInternalType = 'localFiles___children___internal___type',
  LocalFilesInternalContent = 'localFiles___internal___content',
  LocalFilesInternalContentDigest = 'localFiles___internal___contentDigest',
  LocalFilesInternalDescription = 'localFiles___internal___description',
  LocalFilesInternalFieldOwners = 'localFiles___internal___fieldOwners',
  LocalFilesInternalIgnoreType = 'localFiles___internal___ignoreType',
  LocalFilesInternalMediaType = 'localFiles___internal___mediaType',
  LocalFilesInternalOwner = 'localFiles___internal___owner',
  LocalFilesInternalType = 'localFiles___internal___type',
  LocalFilesChildCloudinaryAssetFixedAspectRatio = 'localFiles___childCloudinaryAsset___fixed___aspectRatio',
  LocalFilesChildCloudinaryAssetFixedBase64 = 'localFiles___childCloudinaryAsset___fixed___base64',
  LocalFilesChildCloudinaryAssetFixedHeight = 'localFiles___childCloudinaryAsset___fixed___height',
  LocalFilesChildCloudinaryAssetFixedSrc = 'localFiles___childCloudinaryAsset___fixed___src',
  LocalFilesChildCloudinaryAssetFixedSrcSet = 'localFiles___childCloudinaryAsset___fixed___srcSet',
  LocalFilesChildCloudinaryAssetFixedWidth = 'localFiles___childCloudinaryAsset___fixed___width',
  LocalFilesChildCloudinaryAssetFluidAspectRatio = 'localFiles___childCloudinaryAsset___fluid___aspectRatio',
  LocalFilesChildCloudinaryAssetFluidBase64 = 'localFiles___childCloudinaryAsset___fluid___base64',
  LocalFilesChildCloudinaryAssetFluidSizes = 'localFiles___childCloudinaryAsset___fluid___sizes',
  LocalFilesChildCloudinaryAssetFluidSrc = 'localFiles___childCloudinaryAsset___fluid___src',
  LocalFilesChildCloudinaryAssetFluidSrcSet = 'localFiles___childCloudinaryAsset___fluid___srcSet',
  LocalFilesChildCloudinaryAssetId = 'localFiles___childCloudinaryAsset___id',
  LocalFilesChildCloudinaryAssetParentId = 'localFiles___childCloudinaryAsset___parent___id',
  LocalFilesChildCloudinaryAssetParentChildren = 'localFiles___childCloudinaryAsset___parent___children',
  LocalFilesChildCloudinaryAssetChildren = 'localFiles___childCloudinaryAsset___children',
  LocalFilesChildCloudinaryAssetChildrenId = 'localFiles___childCloudinaryAsset___children___id',
  LocalFilesChildCloudinaryAssetChildrenChildren = 'localFiles___childCloudinaryAsset___children___children',
  LocalFilesChildCloudinaryAssetInternalContent = 'localFiles___childCloudinaryAsset___internal___content',
  LocalFilesChildCloudinaryAssetInternalContentDigest = 'localFiles___childCloudinaryAsset___internal___contentDigest',
  LocalFilesChildCloudinaryAssetInternalDescription = 'localFiles___childCloudinaryAsset___internal___description',
  LocalFilesChildCloudinaryAssetInternalFieldOwners = 'localFiles___childCloudinaryAsset___internal___fieldOwners',
  LocalFilesChildCloudinaryAssetInternalIgnoreType = 'localFiles___childCloudinaryAsset___internal___ignoreType',
  LocalFilesChildCloudinaryAssetInternalMediaType = 'localFiles___childCloudinaryAsset___internal___mediaType',
  LocalFilesChildCloudinaryAssetInternalOwner = 'localFiles___childCloudinaryAsset___internal___owner',
  LocalFilesChildCloudinaryAssetInternalType = 'localFiles___childCloudinaryAsset___internal___type'
}

export type AirtableFieldfileNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  raw?: Maybe<AirtableFieldfileNodeRawFilterListInput>;
  localFiles?: Maybe<FileFilterListInput>;
};

export type AirtableFieldfileNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableFieldfileNodeEdge>;
  nodes: Array<AirtableFieldfileNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type AirtableFieldfileNodeRaw = {
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  thumbnails?: Maybe<AirtableFieldfileNodeRawThumbnails>;
};

export type AirtableFieldfileNodeRawFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  filename?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  thumbnails?: Maybe<AirtableFieldfileNodeRawThumbnailsFilterInput>;
};

export type AirtableFieldfileNodeRawFilterListInput = {
  elemMatch?: Maybe<AirtableFieldfileNodeRawFilterInput>;
};

export type AirtableFieldfileNodeRawThumbnails = {
  small?: Maybe<AirtableFieldfileNodeRawThumbnailsSmall>;
  large?: Maybe<AirtableFieldfileNodeRawThumbnailsLarge>;
  full?: Maybe<AirtableFieldfileNodeRawThumbnailsFull>;
};

export type AirtableFieldfileNodeRawThumbnailsFilterInput = {
  small?: Maybe<AirtableFieldfileNodeRawThumbnailsSmallFilterInput>;
  large?: Maybe<AirtableFieldfileNodeRawThumbnailsLargeFilterInput>;
  full?: Maybe<AirtableFieldfileNodeRawThumbnailsFullFilterInput>;
};

export type AirtableFieldfileNodeRawThumbnailsFull = {
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type AirtableFieldfileNodeRawThumbnailsFullFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type AirtableFieldfileNodeRawThumbnailsLarge = {
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type AirtableFieldfileNodeRawThumbnailsLargeFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type AirtableFieldfileNodeRawThumbnailsSmall = {
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type AirtableFieldfileNodeRawThumbnailsSmallFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type AirtableFieldfileNodeSortInput = {
  fields?: Maybe<Array<Maybe<AirtableFieldfileNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type AirtableFieldtextmarkdown = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  raw?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type AirtableFieldtextmarkdownConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableFieldtextmarkdownEdge>;
  nodes: Array<AirtableFieldtextmarkdown>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<AirtableFieldtextmarkdownGroupConnection>;
};


export type AirtableFieldtextmarkdownConnectionDistinctArgs = {
  field: AirtableFieldtextmarkdownFieldsEnum;
};


export type AirtableFieldtextmarkdownConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: AirtableFieldtextmarkdownFieldsEnum;
};

export type AirtableFieldtextmarkdownEdge = {
  next?: Maybe<AirtableFieldtextmarkdown>;
  node: AirtableFieldtextmarkdown;
  previous?: Maybe<AirtableFieldtextmarkdown>;
};

export enum AirtableFieldtextmarkdownFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Raw = 'raw',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type'
}

export type AirtableFieldtextmarkdownFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  raw?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type AirtableFieldtextmarkdownGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableFieldtextmarkdownEdge>;
  nodes: Array<AirtableFieldtextmarkdown>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type AirtableFieldtextmarkdownSortInput = {
  fields?: Maybe<Array<Maybe<AirtableFieldtextmarkdownFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type AirtableImageField = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  table?: Maybe<Scalars['String']>;
  recordId?: Maybe<Scalars['String']>;
  queryName?: Maybe<Scalars['String']>;
  data?: Maybe<AirtableImageFieldData>;
};

export type AirtableImageFieldConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableImageFieldEdge>;
  nodes: Array<AirtableImageField>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<AirtableImageFieldGroupConnection>;
};


export type AirtableImageFieldConnectionDistinctArgs = {
  field: AirtableImageFieldFieldsEnum;
};


export type AirtableImageFieldConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: AirtableImageFieldFieldsEnum;
};

export type AirtableImageFieldData = {
  uid?: Maybe<Scalars['String']>;
  image?: Maybe<AirtableFieldfileNode>;
};

export type AirtableImageFieldDataFilterInput = {
  uid?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<AirtableFieldfileNodeFilterInput>;
};

export type AirtableImageFieldEdge = {
  next?: Maybe<AirtableImageField>;
  node: AirtableImageField;
  previous?: Maybe<AirtableImageField>;
};

export enum AirtableImageFieldFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Table = 'table',
  RecordId = 'recordId',
  QueryName = 'queryName',
  DataUid = 'data___uid',
  DataImageId = 'data___image___id',
  DataImageParentId = 'data___image___parent___id',
  DataImageParentChildren = 'data___image___parent___children',
  DataImageChildren = 'data___image___children',
  DataImageChildrenId = 'data___image___children___id',
  DataImageChildrenChildren = 'data___image___children___children',
  DataImageInternalContent = 'data___image___internal___content',
  DataImageInternalContentDigest = 'data___image___internal___contentDigest',
  DataImageInternalDescription = 'data___image___internal___description',
  DataImageInternalFieldOwners = 'data___image___internal___fieldOwners',
  DataImageInternalIgnoreType = 'data___image___internal___ignoreType',
  DataImageInternalMediaType = 'data___image___internal___mediaType',
  DataImageInternalOwner = 'data___image___internal___owner',
  DataImageInternalType = 'data___image___internal___type',
  DataImageRaw = 'data___image___raw',
  DataImageRawId = 'data___image___raw___id',
  DataImageRawUrl = 'data___image___raw___url',
  DataImageRawFilename = 'data___image___raw___filename',
  DataImageRawSize = 'data___image___raw___size',
  DataImageRawType = 'data___image___raw___type',
  DataImageLocalFiles = 'data___image___localFiles',
  DataImageLocalFilesSourceInstanceName = 'data___image___localFiles___sourceInstanceName',
  DataImageLocalFilesAbsolutePath = 'data___image___localFiles___absolutePath',
  DataImageLocalFilesRelativePath = 'data___image___localFiles___relativePath',
  DataImageLocalFilesExtension = 'data___image___localFiles___extension',
  DataImageLocalFilesSize = 'data___image___localFiles___size',
  DataImageLocalFilesPrettySize = 'data___image___localFiles___prettySize',
  DataImageLocalFilesModifiedTime = 'data___image___localFiles___modifiedTime',
  DataImageLocalFilesAccessTime = 'data___image___localFiles___accessTime',
  DataImageLocalFilesChangeTime = 'data___image___localFiles___changeTime',
  DataImageLocalFilesBirthTime = 'data___image___localFiles___birthTime',
  DataImageLocalFilesRoot = 'data___image___localFiles___root',
  DataImageLocalFilesDir = 'data___image___localFiles___dir',
  DataImageLocalFilesBase = 'data___image___localFiles___base',
  DataImageLocalFilesExt = 'data___image___localFiles___ext',
  DataImageLocalFilesName = 'data___image___localFiles___name',
  DataImageLocalFilesRelativeDirectory = 'data___image___localFiles___relativeDirectory',
  DataImageLocalFilesDev = 'data___image___localFiles___dev',
  DataImageLocalFilesMode = 'data___image___localFiles___mode',
  DataImageLocalFilesNlink = 'data___image___localFiles___nlink',
  DataImageLocalFilesUid = 'data___image___localFiles___uid',
  DataImageLocalFilesGid = 'data___image___localFiles___gid',
  DataImageLocalFilesRdev = 'data___image___localFiles___rdev',
  DataImageLocalFilesIno = 'data___image___localFiles___ino',
  DataImageLocalFilesAtimeMs = 'data___image___localFiles___atimeMs',
  DataImageLocalFilesMtimeMs = 'data___image___localFiles___mtimeMs',
  DataImageLocalFilesCtimeMs = 'data___image___localFiles___ctimeMs',
  DataImageLocalFilesAtime = 'data___image___localFiles___atime',
  DataImageLocalFilesMtime = 'data___image___localFiles___mtime',
  DataImageLocalFilesCtime = 'data___image___localFiles___ctime',
  DataImageLocalFilesBirthtime = 'data___image___localFiles___birthtime',
  DataImageLocalFilesBirthtimeMs = 'data___image___localFiles___birthtimeMs',
  DataImageLocalFilesBlksize = 'data___image___localFiles___blksize',
  DataImageLocalFilesBlocks = 'data___image___localFiles___blocks',
  DataImageLocalFilesUrl = 'data___image___localFiles___url',
  DataImageLocalFilesId = 'data___image___localFiles___id',
  DataImageLocalFilesChildren = 'data___image___localFiles___children'
}

export type AirtableImageFieldFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  table?: Maybe<StringQueryOperatorInput>;
  recordId?: Maybe<StringQueryOperatorInput>;
  queryName?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<AirtableImageFieldDataFilterInput>;
};

export type AirtableImageFieldGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableImageFieldEdge>;
  nodes: Array<AirtableImageField>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type AirtableImageFieldSortInput = {
  fields?: Maybe<Array<Maybe<AirtableImageFieldFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type AirtableLink = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  table?: Maybe<Scalars['String']>;
  recordId?: Maybe<Scalars['String']>;
  queryName?: Maybe<Scalars['String']>;
  data?: Maybe<AirtableLinkData>;
};

export type AirtableLinkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableLinkEdge>;
  nodes: Array<AirtableLink>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<AirtableLinkGroupConnection>;
};


export type AirtableLinkConnectionDistinctArgs = {
  field: AirtableLinkFieldsEnum;
};


export type AirtableLinkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: AirtableLinkFieldsEnum;
};

export type AirtableLinkData = {
  uid?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
};

export type AirtableLinkDataFilterInput = {
  uid?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type AirtableLinkEdge = {
  next?: Maybe<AirtableLink>;
  node: AirtableLink;
  previous?: Maybe<AirtableLink>;
};

export enum AirtableLinkFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Table = 'table',
  RecordId = 'recordId',
  QueryName = 'queryName',
  DataUid = 'data___uid',
  DataHref = 'data___href'
}

export type AirtableLinkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  table?: Maybe<StringQueryOperatorInput>;
  recordId?: Maybe<StringQueryOperatorInput>;
  queryName?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<AirtableLinkDataFilterInput>;
};

export type AirtableLinkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableLinkEdge>;
  nodes: Array<AirtableLink>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type AirtableLinkSortInput = {
  fields?: Maybe<Array<Maybe<AirtableLinkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type AirtableSponsors = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  table?: Maybe<Scalars['String']>;
  recordId?: Maybe<Scalars['String']>;
  queryName?: Maybe<Scalars['String']>;
  data?: Maybe<AirtableSponsorsData>;
};

export type AirtableSponsorsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableSponsorsEdge>;
  nodes: Array<AirtableSponsors>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<AirtableSponsorsGroupConnection>;
};


export type AirtableSponsorsConnectionDistinctArgs = {
  field: AirtableSponsorsFieldsEnum;
};


export type AirtableSponsorsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: AirtableSponsorsFieldsEnum;
};

export type AirtableSponsorsData = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Date']>;
  logo?: Maybe<AirtableFieldfileNode>;
};


export type AirtableSponsorsDataYearArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type AirtableSponsorsDataFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  year?: Maybe<DateQueryOperatorInput>;
  logo?: Maybe<AirtableFieldfileNodeFilterInput>;
};

export type AirtableSponsorsEdge = {
  next?: Maybe<AirtableSponsors>;
  node: AirtableSponsors;
  previous?: Maybe<AirtableSponsors>;
};

export enum AirtableSponsorsFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Table = 'table',
  RecordId = 'recordId',
  QueryName = 'queryName',
  DataName = 'data___name',
  DataType = 'data___type',
  DataYear = 'data___year',
  DataLogoId = 'data___logo___id',
  DataLogoParentId = 'data___logo___parent___id',
  DataLogoParentChildren = 'data___logo___parent___children',
  DataLogoChildren = 'data___logo___children',
  DataLogoChildrenId = 'data___logo___children___id',
  DataLogoChildrenChildren = 'data___logo___children___children',
  DataLogoInternalContent = 'data___logo___internal___content',
  DataLogoInternalContentDigest = 'data___logo___internal___contentDigest',
  DataLogoInternalDescription = 'data___logo___internal___description',
  DataLogoInternalFieldOwners = 'data___logo___internal___fieldOwners',
  DataLogoInternalIgnoreType = 'data___logo___internal___ignoreType',
  DataLogoInternalMediaType = 'data___logo___internal___mediaType',
  DataLogoInternalOwner = 'data___logo___internal___owner',
  DataLogoInternalType = 'data___logo___internal___type',
  DataLogoRaw = 'data___logo___raw',
  DataLogoRawId = 'data___logo___raw___id',
  DataLogoRawUrl = 'data___logo___raw___url',
  DataLogoRawFilename = 'data___logo___raw___filename',
  DataLogoRawSize = 'data___logo___raw___size',
  DataLogoRawType = 'data___logo___raw___type',
  DataLogoLocalFiles = 'data___logo___localFiles',
  DataLogoLocalFilesSourceInstanceName = 'data___logo___localFiles___sourceInstanceName',
  DataLogoLocalFilesAbsolutePath = 'data___logo___localFiles___absolutePath',
  DataLogoLocalFilesRelativePath = 'data___logo___localFiles___relativePath',
  DataLogoLocalFilesExtension = 'data___logo___localFiles___extension',
  DataLogoLocalFilesSize = 'data___logo___localFiles___size',
  DataLogoLocalFilesPrettySize = 'data___logo___localFiles___prettySize',
  DataLogoLocalFilesModifiedTime = 'data___logo___localFiles___modifiedTime',
  DataLogoLocalFilesAccessTime = 'data___logo___localFiles___accessTime',
  DataLogoLocalFilesChangeTime = 'data___logo___localFiles___changeTime',
  DataLogoLocalFilesBirthTime = 'data___logo___localFiles___birthTime',
  DataLogoLocalFilesRoot = 'data___logo___localFiles___root',
  DataLogoLocalFilesDir = 'data___logo___localFiles___dir',
  DataLogoLocalFilesBase = 'data___logo___localFiles___base',
  DataLogoLocalFilesExt = 'data___logo___localFiles___ext',
  DataLogoLocalFilesName = 'data___logo___localFiles___name',
  DataLogoLocalFilesRelativeDirectory = 'data___logo___localFiles___relativeDirectory',
  DataLogoLocalFilesDev = 'data___logo___localFiles___dev',
  DataLogoLocalFilesMode = 'data___logo___localFiles___mode',
  DataLogoLocalFilesNlink = 'data___logo___localFiles___nlink',
  DataLogoLocalFilesUid = 'data___logo___localFiles___uid',
  DataLogoLocalFilesGid = 'data___logo___localFiles___gid',
  DataLogoLocalFilesRdev = 'data___logo___localFiles___rdev',
  DataLogoLocalFilesIno = 'data___logo___localFiles___ino',
  DataLogoLocalFilesAtimeMs = 'data___logo___localFiles___atimeMs',
  DataLogoLocalFilesMtimeMs = 'data___logo___localFiles___mtimeMs',
  DataLogoLocalFilesCtimeMs = 'data___logo___localFiles___ctimeMs',
  DataLogoLocalFilesAtime = 'data___logo___localFiles___atime',
  DataLogoLocalFilesMtime = 'data___logo___localFiles___mtime',
  DataLogoLocalFilesCtime = 'data___logo___localFiles___ctime',
  DataLogoLocalFilesBirthtime = 'data___logo___localFiles___birthtime',
  DataLogoLocalFilesBirthtimeMs = 'data___logo___localFiles___birthtimeMs',
  DataLogoLocalFilesBlksize = 'data___logo___localFiles___blksize',
  DataLogoLocalFilesBlocks = 'data___logo___localFiles___blocks',
  DataLogoLocalFilesUrl = 'data___logo___localFiles___url',
  DataLogoLocalFilesId = 'data___logo___localFiles___id',
  DataLogoLocalFilesChildren = 'data___logo___localFiles___children'
}

export type AirtableSponsorsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  table?: Maybe<StringQueryOperatorInput>;
  recordId?: Maybe<StringQueryOperatorInput>;
  queryName?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<AirtableSponsorsDataFilterInput>;
};

export type AirtableSponsorsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableSponsorsEdge>;
  nodes: Array<AirtableSponsors>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type AirtableSponsorsSortInput = {
  fields?: Maybe<Array<Maybe<AirtableSponsorsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type AirtableTextField = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  table?: Maybe<Scalars['String']>;
  recordId?: Maybe<Scalars['String']>;
  queryName?: Maybe<Scalars['String']>;
  data?: Maybe<AirtableTextFieldData>;
};

export type AirtableTextFieldConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableTextFieldEdge>;
  nodes: Array<AirtableTextField>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<AirtableTextFieldGroupConnection>;
};


export type AirtableTextFieldConnectionDistinctArgs = {
  field: AirtableTextFieldFieldsEnum;
};


export type AirtableTextFieldConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: AirtableTextFieldFieldsEnum;
};

export type AirtableTextFieldData = {
  uid?: Maybe<Scalars['String']>;
  rich_text?: Maybe<AirtableFieldtextmarkdown>;
  plain_text?: Maybe<Scalars['String']>;
};

export type AirtableTextFieldDataFilterInput = {
  uid?: Maybe<StringQueryOperatorInput>;
  rich_text?: Maybe<AirtableFieldtextmarkdownFilterInput>;
  plain_text?: Maybe<StringQueryOperatorInput>;
};

export type AirtableTextFieldEdge = {
  next?: Maybe<AirtableTextField>;
  node: AirtableTextField;
  previous?: Maybe<AirtableTextField>;
};

export enum AirtableTextFieldFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Table = 'table',
  RecordId = 'recordId',
  QueryName = 'queryName',
  DataUid = 'data___uid',
  DataRichTextId = 'data___rich_text___id',
  DataRichTextParentId = 'data___rich_text___parent___id',
  DataRichTextParentChildren = 'data___rich_text___parent___children',
  DataRichTextChildren = 'data___rich_text___children',
  DataRichTextChildrenId = 'data___rich_text___children___id',
  DataRichTextChildrenChildren = 'data___rich_text___children___children',
  DataRichTextInternalContent = 'data___rich_text___internal___content',
  DataRichTextInternalContentDigest = 'data___rich_text___internal___contentDigest',
  DataRichTextInternalDescription = 'data___rich_text___internal___description',
  DataRichTextInternalFieldOwners = 'data___rich_text___internal___fieldOwners',
  DataRichTextInternalIgnoreType = 'data___rich_text___internal___ignoreType',
  DataRichTextInternalMediaType = 'data___rich_text___internal___mediaType',
  DataRichTextInternalOwner = 'data___rich_text___internal___owner',
  DataRichTextInternalType = 'data___rich_text___internal___type',
  DataRichTextRaw = 'data___rich_text___raw',
  DataRichTextChildMarkdownRemarkId = 'data___rich_text___childMarkdownRemark___id',
  DataRichTextChildMarkdownRemarkExcerpt = 'data___rich_text___childMarkdownRemark___excerpt',
  DataRichTextChildMarkdownRemarkRawMarkdownBody = 'data___rich_text___childMarkdownRemark___rawMarkdownBody',
  DataRichTextChildMarkdownRemarkHtml = 'data___rich_text___childMarkdownRemark___html',
  DataRichTextChildMarkdownRemarkHtmlAst = 'data___rich_text___childMarkdownRemark___htmlAst',
  DataRichTextChildMarkdownRemarkExcerptAst = 'data___rich_text___childMarkdownRemark___excerptAst',
  DataRichTextChildMarkdownRemarkHeadings = 'data___rich_text___childMarkdownRemark___headings',
  DataRichTextChildMarkdownRemarkTimeToRead = 'data___rich_text___childMarkdownRemark___timeToRead',
  DataRichTextChildMarkdownRemarkTableOfContents = 'data___rich_text___childMarkdownRemark___tableOfContents',
  DataRichTextChildMarkdownRemarkChildren = 'data___rich_text___childMarkdownRemark___children',
  DataPlainText = 'data___plain_text'
}

export type AirtableTextFieldFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  table?: Maybe<StringQueryOperatorInput>;
  recordId?: Maybe<StringQueryOperatorInput>;
  queryName?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<AirtableTextFieldDataFilterInput>;
};

export type AirtableTextFieldGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableTextFieldEdge>;
  nodes: Array<AirtableTextField>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type AirtableTextFieldSortInput = {
  fields?: Maybe<Array<Maybe<AirtableTextFieldFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type AirtableWinner = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  table?: Maybe<Scalars['String']>;
  recordId?: Maybe<Scalars['String']>;
  queryName?: Maybe<Scalars['String']>;
  data?: Maybe<AirtableWinnerData>;
  fields?: Maybe<AirtableWinnerFields>;
};

export type AirtableWinnerConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableWinnerEdge>;
  nodes: Array<AirtableWinner>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<AirtableWinnerGroupConnection>;
};


export type AirtableWinnerConnectionDistinctArgs = {
  field: AirtableWinnerFieldsEnum;
};


export type AirtableWinnerConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: AirtableWinnerFieldsEnum;
};

export type AirtableWinnerData = {
  name?: Maybe<Scalars['String']>;
  award?: Maybe<Scalars['String']>;
  agency?: Maybe<Array<Maybe<AirtableAgency>>>;
  year?: Maybe<Scalars['Date']>;
  client?: Maybe<Scalars['String']>;
  category?: Maybe<Array<Maybe<AirtableCategory>>>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  credits?: Maybe<AirtableFieldtextmarkdown>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  images?: Maybe<AirtableFieldfileNode>;
  description?: Maybe<Scalars['String']>;
  special_award?: Maybe<Scalars['String']>;
};


export type AirtableWinnerDataYearArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type AirtableWinnerDataUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type AirtableWinnerDataCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type AirtableWinnerDataFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  award?: Maybe<StringQueryOperatorInput>;
  agency?: Maybe<AirtableAgencyFilterListInput>;
  year?: Maybe<DateQueryOperatorInput>;
  client?: Maybe<StringQueryOperatorInput>;
  category?: Maybe<AirtableCategoryFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  credits?: Maybe<AirtableFieldtextmarkdownFilterInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  images?: Maybe<AirtableFieldfileNodeFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  special_award?: Maybe<StringQueryOperatorInput>;
};

export type AirtableWinnerEdge = {
  next?: Maybe<AirtableWinner>;
  node: AirtableWinner;
  previous?: Maybe<AirtableWinner>;
};

export type AirtableWinnerFields = {
  url?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<AirtableWinnerFieldsTags>>>;
};

export enum AirtableWinnerFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Table = 'table',
  RecordId = 'recordId',
  QueryName = 'queryName',
  DataName = 'data___name',
  DataAward = 'data___award',
  DataAgency = 'data___agency',
  DataAgencyId = 'data___agency___id',
  DataAgencyParentId = 'data___agency___parent___id',
  DataAgencyParentChildren = 'data___agency___parent___children',
  DataAgencyChildren = 'data___agency___children',
  DataAgencyChildrenId = 'data___agency___children___id',
  DataAgencyChildrenChildren = 'data___agency___children___children',
  DataAgencyInternalContent = 'data___agency___internal___content',
  DataAgencyInternalContentDigest = 'data___agency___internal___contentDigest',
  DataAgencyInternalDescription = 'data___agency___internal___description',
  DataAgencyInternalFieldOwners = 'data___agency___internal___fieldOwners',
  DataAgencyInternalIgnoreType = 'data___agency___internal___ignoreType',
  DataAgencyInternalMediaType = 'data___agency___internal___mediaType',
  DataAgencyInternalOwner = 'data___agency___internal___owner',
  DataAgencyInternalType = 'data___agency___internal___type',
  DataAgencyTable = 'data___agency___table',
  DataAgencyRecordId = 'data___agency___recordId',
  DataAgencyQueryName = 'data___agency___queryName',
  DataAgencyDataName = 'data___agency___data___name',
  DataAgencyDataEntries = 'data___agency___data___Entries',
  DataAgencyDataUpdatedAt = 'data___agency___data___updated_at',
  DataAgencyDataCreatedAt = 'data___agency___data___created_at',
  DataAgencyDataAdPeople = 'data___agency___data___Ad_People',
  DataAgencyDataWebsite = 'data___agency___data___website',
  DataAgencyDataInstagramHandle = 'data___agency___data___instagram_handle',
  DataAgencyDataFacebookHandle = 'data___agency___data___facebook_handle',
  DataAgencyDataLinkedinHandle = 'data___agency___data___linkedin_handle',
  DataAgencyDataTwitterHandle = 'data___agency___data___twitter_handle',
  DataAgencyFieldsUrl = 'data___agency___fields___url',
  DataYear = 'data___year',
  DataClient = 'data___client',
  DataCategory = 'data___category',
  DataCategoryId = 'data___category___id',
  DataCategoryParentId = 'data___category___parent___id',
  DataCategoryParentChildren = 'data___category___parent___children',
  DataCategoryChildren = 'data___category___children',
  DataCategoryChildrenId = 'data___category___children___id',
  DataCategoryChildrenChildren = 'data___category___children___children',
  DataCategoryInternalContent = 'data___category___internal___content',
  DataCategoryInternalContentDigest = 'data___category___internal___contentDigest',
  DataCategoryInternalDescription = 'data___category___internal___description',
  DataCategoryInternalFieldOwners = 'data___category___internal___fieldOwners',
  DataCategoryInternalIgnoreType = 'data___category___internal___ignoreType',
  DataCategoryInternalMediaType = 'data___category___internal___mediaType',
  DataCategoryInternalOwner = 'data___category___internal___owner',
  DataCategoryInternalType = 'data___category___internal___type',
  DataCategoryTable = 'data___category___table',
  DataCategoryRecordId = 'data___category___recordId',
  DataCategoryQueryName = 'data___category___queryName',
  DataCategoryDataLine_2 = 'data___category___data___line_2',
  DataCategoryDataLine_1 = 'data___category___data___line_1',
  DataCategoryDataCode = 'data___category___data___code',
  DataCategoryDataEntries = 'data___category___data___Entries',
  DataType = 'data___type',
  DataUpdatedAt = 'data___updated_at',
  DataCreatedAt = 'data___created_at',
  DataCreditsId = 'data___credits___id',
  DataCreditsParentId = 'data___credits___parent___id',
  DataCreditsParentChildren = 'data___credits___parent___children',
  DataCreditsChildren = 'data___credits___children',
  DataCreditsChildrenId = 'data___credits___children___id',
  DataCreditsChildrenChildren = 'data___credits___children___children',
  DataCreditsInternalContent = 'data___credits___internal___content',
  DataCreditsInternalContentDigest = 'data___credits___internal___contentDigest',
  DataCreditsInternalDescription = 'data___credits___internal___description',
  DataCreditsInternalFieldOwners = 'data___credits___internal___fieldOwners',
  DataCreditsInternalIgnoreType = 'data___credits___internal___ignoreType',
  DataCreditsInternalMediaType = 'data___credits___internal___mediaType',
  DataCreditsInternalOwner = 'data___credits___internal___owner',
  DataCreditsInternalType = 'data___credits___internal___type',
  DataCreditsRaw = 'data___credits___raw',
  DataCreditsChildMarkdownRemarkId = 'data___credits___childMarkdownRemark___id',
  DataCreditsChildMarkdownRemarkExcerpt = 'data___credits___childMarkdownRemark___excerpt',
  DataCreditsChildMarkdownRemarkRawMarkdownBody = 'data___credits___childMarkdownRemark___rawMarkdownBody',
  DataCreditsChildMarkdownRemarkHtml = 'data___credits___childMarkdownRemark___html',
  DataCreditsChildMarkdownRemarkHtmlAst = 'data___credits___childMarkdownRemark___htmlAst',
  DataCreditsChildMarkdownRemarkExcerptAst = 'data___credits___childMarkdownRemark___excerptAst',
  DataCreditsChildMarkdownRemarkHeadings = 'data___credits___childMarkdownRemark___headings',
  DataCreditsChildMarkdownRemarkTimeToRead = 'data___credits___childMarkdownRemark___timeToRead',
  DataCreditsChildMarkdownRemarkTableOfContents = 'data___credits___childMarkdownRemark___tableOfContents',
  DataCreditsChildMarkdownRemarkChildren = 'data___credits___childMarkdownRemark___children',
  DataTags = 'data___tags',
  DataImagesId = 'data___images___id',
  DataImagesParentId = 'data___images___parent___id',
  DataImagesParentChildren = 'data___images___parent___children',
  DataImagesChildren = 'data___images___children',
  DataImagesChildrenId = 'data___images___children___id',
  DataImagesChildrenChildren = 'data___images___children___children',
  DataImagesInternalContent = 'data___images___internal___content',
  DataImagesInternalContentDigest = 'data___images___internal___contentDigest',
  DataImagesInternalDescription = 'data___images___internal___description',
  DataImagesInternalFieldOwners = 'data___images___internal___fieldOwners',
  DataImagesInternalIgnoreType = 'data___images___internal___ignoreType',
  DataImagesInternalMediaType = 'data___images___internal___mediaType',
  DataImagesInternalOwner = 'data___images___internal___owner',
  DataImagesInternalType = 'data___images___internal___type',
  DataImagesRaw = 'data___images___raw',
  DataImagesRawId = 'data___images___raw___id',
  DataImagesRawUrl = 'data___images___raw___url',
  DataImagesRawFilename = 'data___images___raw___filename',
  DataImagesRawSize = 'data___images___raw___size',
  DataImagesRawType = 'data___images___raw___type',
  DataImagesLocalFiles = 'data___images___localFiles',
  DataImagesLocalFilesSourceInstanceName = 'data___images___localFiles___sourceInstanceName',
  DataImagesLocalFilesAbsolutePath = 'data___images___localFiles___absolutePath',
  DataImagesLocalFilesRelativePath = 'data___images___localFiles___relativePath',
  DataImagesLocalFilesExtension = 'data___images___localFiles___extension',
  DataImagesLocalFilesSize = 'data___images___localFiles___size',
  DataImagesLocalFilesPrettySize = 'data___images___localFiles___prettySize',
  DataImagesLocalFilesModifiedTime = 'data___images___localFiles___modifiedTime',
  DataImagesLocalFilesAccessTime = 'data___images___localFiles___accessTime',
  DataImagesLocalFilesChangeTime = 'data___images___localFiles___changeTime',
  DataImagesLocalFilesBirthTime = 'data___images___localFiles___birthTime',
  DataImagesLocalFilesRoot = 'data___images___localFiles___root',
  DataImagesLocalFilesDir = 'data___images___localFiles___dir',
  DataImagesLocalFilesBase = 'data___images___localFiles___base',
  DataImagesLocalFilesExt = 'data___images___localFiles___ext',
  DataImagesLocalFilesName = 'data___images___localFiles___name',
  DataImagesLocalFilesRelativeDirectory = 'data___images___localFiles___relativeDirectory',
  DataImagesLocalFilesDev = 'data___images___localFiles___dev',
  DataImagesLocalFilesMode = 'data___images___localFiles___mode',
  DataImagesLocalFilesNlink = 'data___images___localFiles___nlink',
  DataImagesLocalFilesUid = 'data___images___localFiles___uid',
  DataImagesLocalFilesGid = 'data___images___localFiles___gid',
  DataImagesLocalFilesRdev = 'data___images___localFiles___rdev',
  DataImagesLocalFilesIno = 'data___images___localFiles___ino',
  DataImagesLocalFilesAtimeMs = 'data___images___localFiles___atimeMs',
  DataImagesLocalFilesMtimeMs = 'data___images___localFiles___mtimeMs',
  DataImagesLocalFilesCtimeMs = 'data___images___localFiles___ctimeMs',
  DataImagesLocalFilesAtime = 'data___images___localFiles___atime',
  DataImagesLocalFilesMtime = 'data___images___localFiles___mtime',
  DataImagesLocalFilesCtime = 'data___images___localFiles___ctime',
  DataImagesLocalFilesBirthtime = 'data___images___localFiles___birthtime',
  DataImagesLocalFilesBirthtimeMs = 'data___images___localFiles___birthtimeMs',
  DataImagesLocalFilesBlksize = 'data___images___localFiles___blksize',
  DataImagesLocalFilesBlocks = 'data___images___localFiles___blocks',
  DataImagesLocalFilesUrl = 'data___images___localFiles___url',
  DataImagesLocalFilesId = 'data___images___localFiles___id',
  DataImagesLocalFilesChildren = 'data___images___localFiles___children',
  DataDescription = 'data___description',
  DataSpecialAward = 'data___special_award',
  FieldsUrl = 'fields___url',
  FieldsTags = 'fields___tags',
  FieldsTagsTag = 'fields___tags___tag',
  FieldsTagsUrl = 'fields___tags___url'
}

export type AirtableWinnerFieldsFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<AirtableWinnerFieldsTagsFilterListInput>;
};

export type AirtableWinnerFieldsTags = {
  tag?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type AirtableWinnerFieldsTagsFilterInput = {
  tag?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type AirtableWinnerFieldsTagsFilterListInput = {
  elemMatch?: Maybe<AirtableWinnerFieldsTagsFilterInput>;
};

export type AirtableWinnerFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  table?: Maybe<StringQueryOperatorInput>;
  recordId?: Maybe<StringQueryOperatorInput>;
  queryName?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<AirtableWinnerDataFilterInput>;
  fields?: Maybe<AirtableWinnerFieldsFilterInput>;
};

export type AirtableWinnerGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AirtableWinnerEdge>;
  nodes: Array<AirtableWinner>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type AirtableWinnerSortInput = {
  fields?: Maybe<Array<Maybe<AirtableWinnerFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type CloudinaryAsset = Node & {
  fixed: CloudinaryAssetFixed;
  fluid: CloudinaryAssetFluid;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type CloudinaryAssetFixedArgs = {
  base64Width?: Maybe<Scalars['Int']>;
  base64Transformations?: Maybe<Array<Scalars['String']>>;
  chained?: Maybe<Array<Scalars['String']>>;
  transformations?: Maybe<Array<Scalars['String']>>;
  width?: Maybe<Scalars['Int']>;
};


export type CloudinaryAssetFluidArgs = {
  base64Width?: Maybe<Scalars['Int']>;
  base64Transformations?: Maybe<Array<Scalars['String']>>;
  chained?: Maybe<Array<Scalars['String']>>;
  maxWidth?: Maybe<Scalars['Int']>;
  transformations?: Maybe<Array<Scalars['String']>>;
};

export type CloudinaryAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<CloudinaryAssetEdge>;
  nodes: Array<CloudinaryAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<CloudinaryAssetGroupConnection>;
};


export type CloudinaryAssetConnectionDistinctArgs = {
  field: CloudinaryAssetFieldsEnum;
};


export type CloudinaryAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: CloudinaryAssetFieldsEnum;
};

export type CloudinaryAssetEdge = {
  next?: Maybe<CloudinaryAsset>;
  node: CloudinaryAsset;
  previous?: Maybe<CloudinaryAsset>;
};

export enum CloudinaryAssetFieldsEnum {
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedBase64 = 'fixed___base64',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedWidth = 'fixed___width',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidBase64 = 'fluid___base64',
  FluidSizes = 'fluid___sizes',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type CloudinaryAssetFilterInput = {
  fixed?: Maybe<CloudinaryAssetFixedFilterInput>;
  fluid?: Maybe<CloudinaryAssetFluidFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type CloudinaryAssetFixed = {
  aspectRatio?: Maybe<Scalars['Float']>;
  base64: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type CloudinaryAssetFixedFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  base64?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
};

export type CloudinaryAssetFluid = {
  aspectRatio: Scalars['Float'];
  base64: Scalars['String'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
};

export type CloudinaryAssetFluidFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  base64?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
};

export type CloudinaryAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<CloudinaryAssetEdge>;
  nodes: Array<CloudinaryAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type CloudinaryAssetSortInput = {
  fields?: Maybe<Array<Maybe<CloudinaryAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childCloudinaryAsset?: Maybe<CloudinaryAsset>;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Url = 'url',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildCloudinaryAssetFixedAspectRatio = 'childCloudinaryAsset___fixed___aspectRatio',
  ChildCloudinaryAssetFixedBase64 = 'childCloudinaryAsset___fixed___base64',
  ChildCloudinaryAssetFixedHeight = 'childCloudinaryAsset___fixed___height',
  ChildCloudinaryAssetFixedSrc = 'childCloudinaryAsset___fixed___src',
  ChildCloudinaryAssetFixedSrcSet = 'childCloudinaryAsset___fixed___srcSet',
  ChildCloudinaryAssetFixedWidth = 'childCloudinaryAsset___fixed___width',
  ChildCloudinaryAssetFluidAspectRatio = 'childCloudinaryAsset___fluid___aspectRatio',
  ChildCloudinaryAssetFluidBase64 = 'childCloudinaryAsset___fluid___base64',
  ChildCloudinaryAssetFluidSizes = 'childCloudinaryAsset___fluid___sizes',
  ChildCloudinaryAssetFluidSrc = 'childCloudinaryAsset___fluid___src',
  ChildCloudinaryAssetFluidSrcSet = 'childCloudinaryAsset___fluid___srcSet',
  ChildCloudinaryAssetId = 'childCloudinaryAsset___id',
  ChildCloudinaryAssetParentId = 'childCloudinaryAsset___parent___id',
  ChildCloudinaryAssetParentParentId = 'childCloudinaryAsset___parent___parent___id',
  ChildCloudinaryAssetParentParentChildren = 'childCloudinaryAsset___parent___parent___children',
  ChildCloudinaryAssetParentChildren = 'childCloudinaryAsset___parent___children',
  ChildCloudinaryAssetParentChildrenId = 'childCloudinaryAsset___parent___children___id',
  ChildCloudinaryAssetParentChildrenChildren = 'childCloudinaryAsset___parent___children___children',
  ChildCloudinaryAssetParentInternalContent = 'childCloudinaryAsset___parent___internal___content',
  ChildCloudinaryAssetParentInternalContentDigest = 'childCloudinaryAsset___parent___internal___contentDigest',
  ChildCloudinaryAssetParentInternalDescription = 'childCloudinaryAsset___parent___internal___description',
  ChildCloudinaryAssetParentInternalFieldOwners = 'childCloudinaryAsset___parent___internal___fieldOwners',
  ChildCloudinaryAssetParentInternalIgnoreType = 'childCloudinaryAsset___parent___internal___ignoreType',
  ChildCloudinaryAssetParentInternalMediaType = 'childCloudinaryAsset___parent___internal___mediaType',
  ChildCloudinaryAssetParentInternalOwner = 'childCloudinaryAsset___parent___internal___owner',
  ChildCloudinaryAssetParentInternalType = 'childCloudinaryAsset___parent___internal___type',
  ChildCloudinaryAssetChildren = 'childCloudinaryAsset___children',
  ChildCloudinaryAssetChildrenId = 'childCloudinaryAsset___children___id',
  ChildCloudinaryAssetChildrenParentId = 'childCloudinaryAsset___children___parent___id',
  ChildCloudinaryAssetChildrenParentChildren = 'childCloudinaryAsset___children___parent___children',
  ChildCloudinaryAssetChildrenChildren = 'childCloudinaryAsset___children___children',
  ChildCloudinaryAssetChildrenChildrenId = 'childCloudinaryAsset___children___children___id',
  ChildCloudinaryAssetChildrenChildrenChildren = 'childCloudinaryAsset___children___children___children',
  ChildCloudinaryAssetChildrenInternalContent = 'childCloudinaryAsset___children___internal___content',
  ChildCloudinaryAssetChildrenInternalContentDigest = 'childCloudinaryAsset___children___internal___contentDigest',
  ChildCloudinaryAssetChildrenInternalDescription = 'childCloudinaryAsset___children___internal___description',
  ChildCloudinaryAssetChildrenInternalFieldOwners = 'childCloudinaryAsset___children___internal___fieldOwners',
  ChildCloudinaryAssetChildrenInternalIgnoreType = 'childCloudinaryAsset___children___internal___ignoreType',
  ChildCloudinaryAssetChildrenInternalMediaType = 'childCloudinaryAsset___children___internal___mediaType',
  ChildCloudinaryAssetChildrenInternalOwner = 'childCloudinaryAsset___children___internal___owner',
  ChildCloudinaryAssetChildrenInternalType = 'childCloudinaryAsset___children___internal___type',
  ChildCloudinaryAssetInternalContent = 'childCloudinaryAsset___internal___content',
  ChildCloudinaryAssetInternalContentDigest = 'childCloudinaryAsset___internal___contentDigest',
  ChildCloudinaryAssetInternalDescription = 'childCloudinaryAsset___internal___description',
  ChildCloudinaryAssetInternalFieldOwners = 'childCloudinaryAsset___internal___fieldOwners',
  ChildCloudinaryAssetInternalIgnoreType = 'childCloudinaryAsset___internal___ignoreType',
  ChildCloudinaryAssetInternalMediaType = 'childCloudinaryAsset___internal___mediaType',
  ChildCloudinaryAssetInternalOwner = 'childCloudinaryAsset___internal___owner',
  ChildCloudinaryAssetInternalType = 'childCloudinaryAsset___internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childCloudinaryAsset?: Maybe<CloudinaryAssetFilterInput>;
};

export type FileFilterListInput = {
  elemMatch?: Maybe<FileFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type LocalSearchIndexWinners = {
  id?: Maybe<Scalars['ID']>;
  engine?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  store?: Maybe<Scalars['String']>;
};

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN'
}

export type MarkdownHeading = {
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  FrontmatterTitle = 'frontmatter___title',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  Html = 'html',
  HtmlAst = 'htmlAst',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
};

/** A paginated collection of nodes. */
export type PaginatedCollection = Node & {
  /** Name of the collection. */
  name: Scalars['String'];
  /** Maximum number of nodes in each page. */
  pageSize: Scalars['Int'];
  /** Number of nodes in the first page. */
  firstPageSize: Scalars['Int'];
  /** Number of nodes in the last page. */
  lastPageSize: Scalars['Int'];
  /** Number of nodes in the collection. */
  nodeCount: Scalars['Int'];
  /** Number of pages in the collection. */
  pageCount: Scalars['Int'];
  /** Pages in the collection. */
  pages: Array<PaginatedCollectionPage>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PaginatedCollectionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PaginatedCollectionEdge>;
  nodes: Array<PaginatedCollection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PaginatedCollectionGroupConnection>;
};


export type PaginatedCollectionConnectionDistinctArgs = {
  field: PaginatedCollectionFieldsEnum;
};


export type PaginatedCollectionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PaginatedCollectionFieldsEnum;
};

export type PaginatedCollectionEdge = {
  /** A paginated collection of nodes. */
  next?: Maybe<PaginatedCollection>;
  node: PaginatedCollection;
  /** A paginated collection of nodes. */
  previous?: Maybe<PaginatedCollection>;
};

export enum PaginatedCollectionFieldsEnum {
  Name = 'name',
  PageSize = 'pageSize',
  FirstPageSize = 'firstPageSize',
  LastPageSize = 'lastPageSize',
  NodeCount = 'nodeCount',
  PageCount = 'pageCount',
  Pages = 'pages',
  PagesIndex = 'pages___index',
  PagesCollectionName = 'pages___collection___name',
  PagesCollectionPageSize = 'pages___collection___pageSize',
  PagesCollectionFirstPageSize = 'pages___collection___firstPageSize',
  PagesCollectionLastPageSize = 'pages___collection___lastPageSize',
  PagesCollectionNodeCount = 'pages___collection___nodeCount',
  PagesCollectionPageCount = 'pages___collection___pageCount',
  PagesCollectionPages = 'pages___collection___pages',
  PagesCollectionPagesIndex = 'pages___collection___pages___index',
  PagesCollectionPagesHasNextPage = 'pages___collection___pages___hasNextPage',
  PagesCollectionPagesHasPreviousPage = 'pages___collection___pages___hasPreviousPage',
  PagesCollectionPagesNodeCount = 'pages___collection___pages___nodeCount',
  PagesCollectionPagesNodes = 'pages___collection___pages___nodes',
  PagesCollectionPagesId = 'pages___collection___pages___id',
  PagesCollectionPagesChildren = 'pages___collection___pages___children',
  PagesCollectionId = 'pages___collection___id',
  PagesCollectionParentId = 'pages___collection___parent___id',
  PagesCollectionParentChildren = 'pages___collection___parent___children',
  PagesCollectionChildren = 'pages___collection___children',
  PagesCollectionChildrenId = 'pages___collection___children___id',
  PagesCollectionChildrenChildren = 'pages___collection___children___children',
  PagesCollectionInternalContent = 'pages___collection___internal___content',
  PagesCollectionInternalContentDigest = 'pages___collection___internal___contentDigest',
  PagesCollectionInternalDescription = 'pages___collection___internal___description',
  PagesCollectionInternalFieldOwners = 'pages___collection___internal___fieldOwners',
  PagesCollectionInternalIgnoreType = 'pages___collection___internal___ignoreType',
  PagesCollectionInternalMediaType = 'pages___collection___internal___mediaType',
  PagesCollectionInternalOwner = 'pages___collection___internal___owner',
  PagesCollectionInternalType = 'pages___collection___internal___type',
  PagesNextPageIndex = 'pages___nextPage___index',
  PagesNextPageCollectionName = 'pages___nextPage___collection___name',
  PagesNextPageCollectionPageSize = 'pages___nextPage___collection___pageSize',
  PagesNextPageCollectionFirstPageSize = 'pages___nextPage___collection___firstPageSize',
  PagesNextPageCollectionLastPageSize = 'pages___nextPage___collection___lastPageSize',
  PagesNextPageCollectionNodeCount = 'pages___nextPage___collection___nodeCount',
  PagesNextPageCollectionPageCount = 'pages___nextPage___collection___pageCount',
  PagesNextPageCollectionPages = 'pages___nextPage___collection___pages',
  PagesNextPageCollectionId = 'pages___nextPage___collection___id',
  PagesNextPageCollectionChildren = 'pages___nextPage___collection___children',
  PagesNextPageNextPageIndex = 'pages___nextPage___nextPage___index',
  PagesNextPageNextPageHasNextPage = 'pages___nextPage___nextPage___hasNextPage',
  PagesNextPageNextPageHasPreviousPage = 'pages___nextPage___nextPage___hasPreviousPage',
  PagesNextPageNextPageNodeCount = 'pages___nextPage___nextPage___nodeCount',
  PagesNextPageNextPageNodes = 'pages___nextPage___nextPage___nodes',
  PagesNextPageNextPageId = 'pages___nextPage___nextPage___id',
  PagesNextPageNextPageChildren = 'pages___nextPage___nextPage___children',
  PagesNextPageHasNextPage = 'pages___nextPage___hasNextPage',
  PagesNextPagePreviousPageIndex = 'pages___nextPage___previousPage___index',
  PagesNextPagePreviousPageHasNextPage = 'pages___nextPage___previousPage___hasNextPage',
  PagesNextPagePreviousPageHasPreviousPage = 'pages___nextPage___previousPage___hasPreviousPage',
  PagesNextPagePreviousPageNodeCount = 'pages___nextPage___previousPage___nodeCount',
  PagesNextPagePreviousPageNodes = 'pages___nextPage___previousPage___nodes',
  PagesNextPagePreviousPageId = 'pages___nextPage___previousPage___id',
  PagesNextPagePreviousPageChildren = 'pages___nextPage___previousPage___children',
  PagesNextPageHasPreviousPage = 'pages___nextPage___hasPreviousPage',
  PagesNextPageNodeCount = 'pages___nextPage___nodeCount',
  PagesNextPageNodes = 'pages___nextPage___nodes',
  PagesNextPageId = 'pages___nextPage___id',
  PagesNextPageParentId = 'pages___nextPage___parent___id',
  PagesNextPageParentChildren = 'pages___nextPage___parent___children',
  PagesNextPageChildren = 'pages___nextPage___children',
  PagesNextPageChildrenId = 'pages___nextPage___children___id',
  PagesNextPageChildrenChildren = 'pages___nextPage___children___children',
  PagesNextPageInternalContent = 'pages___nextPage___internal___content',
  PagesNextPageInternalContentDigest = 'pages___nextPage___internal___contentDigest',
  PagesNextPageInternalDescription = 'pages___nextPage___internal___description',
  PagesNextPageInternalFieldOwners = 'pages___nextPage___internal___fieldOwners',
  PagesNextPageInternalIgnoreType = 'pages___nextPage___internal___ignoreType',
  PagesNextPageInternalMediaType = 'pages___nextPage___internal___mediaType',
  PagesNextPageInternalOwner = 'pages___nextPage___internal___owner',
  PagesNextPageInternalType = 'pages___nextPage___internal___type',
  PagesHasNextPage = 'pages___hasNextPage',
  PagesPreviousPageIndex = 'pages___previousPage___index',
  PagesPreviousPageCollectionName = 'pages___previousPage___collection___name',
  PagesPreviousPageCollectionPageSize = 'pages___previousPage___collection___pageSize',
  PagesPreviousPageCollectionFirstPageSize = 'pages___previousPage___collection___firstPageSize',
  PagesPreviousPageCollectionLastPageSize = 'pages___previousPage___collection___lastPageSize',
  PagesPreviousPageCollectionNodeCount = 'pages___previousPage___collection___nodeCount',
  PagesPreviousPageCollectionPageCount = 'pages___previousPage___collection___pageCount',
  PagesPreviousPageCollectionPages = 'pages___previousPage___collection___pages',
  PagesPreviousPageCollectionId = 'pages___previousPage___collection___id',
  PagesPreviousPageCollectionChildren = 'pages___previousPage___collection___children',
  PagesPreviousPageNextPageIndex = 'pages___previousPage___nextPage___index',
  PagesPreviousPageNextPageHasNextPage = 'pages___previousPage___nextPage___hasNextPage',
  PagesPreviousPageNextPageHasPreviousPage = 'pages___previousPage___nextPage___hasPreviousPage',
  PagesPreviousPageNextPageNodeCount = 'pages___previousPage___nextPage___nodeCount',
  PagesPreviousPageNextPageNodes = 'pages___previousPage___nextPage___nodes',
  PagesPreviousPageNextPageId = 'pages___previousPage___nextPage___id',
  PagesPreviousPageNextPageChildren = 'pages___previousPage___nextPage___children',
  PagesPreviousPageHasNextPage = 'pages___previousPage___hasNextPage',
  PagesPreviousPagePreviousPageIndex = 'pages___previousPage___previousPage___index',
  PagesPreviousPagePreviousPageHasNextPage = 'pages___previousPage___previousPage___hasNextPage',
  PagesPreviousPagePreviousPageHasPreviousPage = 'pages___previousPage___previousPage___hasPreviousPage',
  PagesPreviousPagePreviousPageNodeCount = 'pages___previousPage___previousPage___nodeCount',
  PagesPreviousPagePreviousPageNodes = 'pages___previousPage___previousPage___nodes',
  PagesPreviousPagePreviousPageId = 'pages___previousPage___previousPage___id',
  PagesPreviousPagePreviousPageChildren = 'pages___previousPage___previousPage___children',
  PagesPreviousPageHasPreviousPage = 'pages___previousPage___hasPreviousPage',
  PagesPreviousPageNodeCount = 'pages___previousPage___nodeCount',
  PagesPreviousPageNodes = 'pages___previousPage___nodes',
  PagesPreviousPageId = 'pages___previousPage___id',
  PagesPreviousPageParentId = 'pages___previousPage___parent___id',
  PagesPreviousPageParentChildren = 'pages___previousPage___parent___children',
  PagesPreviousPageChildren = 'pages___previousPage___children',
  PagesPreviousPageChildrenId = 'pages___previousPage___children___id',
  PagesPreviousPageChildrenChildren = 'pages___previousPage___children___children',
  PagesPreviousPageInternalContent = 'pages___previousPage___internal___content',
  PagesPreviousPageInternalContentDigest = 'pages___previousPage___internal___contentDigest',
  PagesPreviousPageInternalDescription = 'pages___previousPage___internal___description',
  PagesPreviousPageInternalFieldOwners = 'pages___previousPage___internal___fieldOwners',
  PagesPreviousPageInternalIgnoreType = 'pages___previousPage___internal___ignoreType',
  PagesPreviousPageInternalMediaType = 'pages___previousPage___internal___mediaType',
  PagesPreviousPageInternalOwner = 'pages___previousPage___internal___owner',
  PagesPreviousPageInternalType = 'pages___previousPage___internal___type',
  PagesHasPreviousPage = 'pages___hasPreviousPage',
  PagesNodeCount = 'pages___nodeCount',
  PagesNodes = 'pages___nodes',
  PagesId = 'pages___id',
  PagesParentId = 'pages___parent___id',
  PagesParentParentId = 'pages___parent___parent___id',
  PagesParentParentChildren = 'pages___parent___parent___children',
  PagesParentChildren = 'pages___parent___children',
  PagesParentChildrenId = 'pages___parent___children___id',
  PagesParentChildrenChildren = 'pages___parent___children___children',
  PagesParentInternalContent = 'pages___parent___internal___content',
  PagesParentInternalContentDigest = 'pages___parent___internal___contentDigest',
  PagesParentInternalDescription = 'pages___parent___internal___description',
  PagesParentInternalFieldOwners = 'pages___parent___internal___fieldOwners',
  PagesParentInternalIgnoreType = 'pages___parent___internal___ignoreType',
  PagesParentInternalMediaType = 'pages___parent___internal___mediaType',
  PagesParentInternalOwner = 'pages___parent___internal___owner',
  PagesParentInternalType = 'pages___parent___internal___type',
  PagesChildren = 'pages___children',
  PagesChildrenId = 'pages___children___id',
  PagesChildrenParentId = 'pages___children___parent___id',
  PagesChildrenParentChildren = 'pages___children___parent___children',
  PagesChildrenChildren = 'pages___children___children',
  PagesChildrenChildrenId = 'pages___children___children___id',
  PagesChildrenChildrenChildren = 'pages___children___children___children',
  PagesChildrenInternalContent = 'pages___children___internal___content',
  PagesChildrenInternalContentDigest = 'pages___children___internal___contentDigest',
  PagesChildrenInternalDescription = 'pages___children___internal___description',
  PagesChildrenInternalFieldOwners = 'pages___children___internal___fieldOwners',
  PagesChildrenInternalIgnoreType = 'pages___children___internal___ignoreType',
  PagesChildrenInternalMediaType = 'pages___children___internal___mediaType',
  PagesChildrenInternalOwner = 'pages___children___internal___owner',
  PagesChildrenInternalType = 'pages___children___internal___type',
  PagesInternalContent = 'pages___internal___content',
  PagesInternalContentDigest = 'pages___internal___contentDigest',
  PagesInternalDescription = 'pages___internal___description',
  PagesInternalFieldOwners = 'pages___internal___fieldOwners',
  PagesInternalIgnoreType = 'pages___internal___ignoreType',
  PagesInternalMediaType = 'pages___internal___mediaType',
  PagesInternalOwner = 'pages___internal___owner',
  PagesInternalType = 'pages___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PaginatedCollectionFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  pageSize?: Maybe<IntQueryOperatorInput>;
  firstPageSize?: Maybe<IntQueryOperatorInput>;
  lastPageSize?: Maybe<IntQueryOperatorInput>;
  nodeCount?: Maybe<IntQueryOperatorInput>;
  pageCount?: Maybe<IntQueryOperatorInput>;
  pages?: Maybe<PaginatedCollectionPageFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PaginatedCollectionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PaginatedCollectionEdge>;
  nodes: Array<PaginatedCollection>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

/** A page in a paginated collection. */
export type PaginatedCollectionPage = Node & {
  /** Index of the page within the collection. */
  index: Scalars['Int'];
  /** The collection to which this page belongs. */
  collection: PaginatedCollection;
  /** The next page. */
  nextPage?: Maybe<PaginatedCollectionPage>;
  /** Whether or not a page exists after this page. */
  hasNextPage: Scalars['Boolean'];
  /** The previous page. */
  previousPage?: Maybe<PaginatedCollectionPage>;
  /** Whether or not a page exists before this page. */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of nodes in this page. */
  nodeCount: Scalars['Int'];
  /** Nodes in this page. */
  nodes: Array<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PaginatedCollectionPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PaginatedCollectionPageEdge>;
  nodes: Array<PaginatedCollectionPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PaginatedCollectionPageGroupConnection>;
};


export type PaginatedCollectionPageConnectionDistinctArgs = {
  field: PaginatedCollectionPageFieldsEnum;
};


export type PaginatedCollectionPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PaginatedCollectionPageFieldsEnum;
};

export type PaginatedCollectionPageEdge = {
  /** A page in a paginated collection. */
  next?: Maybe<PaginatedCollectionPage>;
  node: PaginatedCollectionPage;
  /** A page in a paginated collection. */
  previous?: Maybe<PaginatedCollectionPage>;
};

export enum PaginatedCollectionPageFieldsEnum {
  Index = 'index',
  CollectionName = 'collection___name',
  CollectionPageSize = 'collection___pageSize',
  CollectionFirstPageSize = 'collection___firstPageSize',
  CollectionLastPageSize = 'collection___lastPageSize',
  CollectionNodeCount = 'collection___nodeCount',
  CollectionPageCount = 'collection___pageCount',
  CollectionPages = 'collection___pages',
  CollectionPagesIndex = 'collection___pages___index',
  CollectionPagesCollectionName = 'collection___pages___collection___name',
  CollectionPagesCollectionPageSize = 'collection___pages___collection___pageSize',
  CollectionPagesCollectionFirstPageSize = 'collection___pages___collection___firstPageSize',
  CollectionPagesCollectionLastPageSize = 'collection___pages___collection___lastPageSize',
  CollectionPagesCollectionNodeCount = 'collection___pages___collection___nodeCount',
  CollectionPagesCollectionPageCount = 'collection___pages___collection___pageCount',
  CollectionPagesCollectionPages = 'collection___pages___collection___pages',
  CollectionPagesCollectionId = 'collection___pages___collection___id',
  CollectionPagesCollectionChildren = 'collection___pages___collection___children',
  CollectionPagesNextPageIndex = 'collection___pages___nextPage___index',
  CollectionPagesNextPageHasNextPage = 'collection___pages___nextPage___hasNextPage',
  CollectionPagesNextPageHasPreviousPage = 'collection___pages___nextPage___hasPreviousPage',
  CollectionPagesNextPageNodeCount = 'collection___pages___nextPage___nodeCount',
  CollectionPagesNextPageNodes = 'collection___pages___nextPage___nodes',
  CollectionPagesNextPageId = 'collection___pages___nextPage___id',
  CollectionPagesNextPageChildren = 'collection___pages___nextPage___children',
  CollectionPagesHasNextPage = 'collection___pages___hasNextPage',
  CollectionPagesPreviousPageIndex = 'collection___pages___previousPage___index',
  CollectionPagesPreviousPageHasNextPage = 'collection___pages___previousPage___hasNextPage',
  CollectionPagesPreviousPageHasPreviousPage = 'collection___pages___previousPage___hasPreviousPage',
  CollectionPagesPreviousPageNodeCount = 'collection___pages___previousPage___nodeCount',
  CollectionPagesPreviousPageNodes = 'collection___pages___previousPage___nodes',
  CollectionPagesPreviousPageId = 'collection___pages___previousPage___id',
  CollectionPagesPreviousPageChildren = 'collection___pages___previousPage___children',
  CollectionPagesHasPreviousPage = 'collection___pages___hasPreviousPage',
  CollectionPagesNodeCount = 'collection___pages___nodeCount',
  CollectionPagesNodes = 'collection___pages___nodes',
  CollectionPagesId = 'collection___pages___id',
  CollectionPagesParentId = 'collection___pages___parent___id',
  CollectionPagesParentChildren = 'collection___pages___parent___children',
  CollectionPagesChildren = 'collection___pages___children',
  CollectionPagesChildrenId = 'collection___pages___children___id',
  CollectionPagesChildrenChildren = 'collection___pages___children___children',
  CollectionPagesInternalContent = 'collection___pages___internal___content',
  CollectionPagesInternalContentDigest = 'collection___pages___internal___contentDigest',
  CollectionPagesInternalDescription = 'collection___pages___internal___description',
  CollectionPagesInternalFieldOwners = 'collection___pages___internal___fieldOwners',
  CollectionPagesInternalIgnoreType = 'collection___pages___internal___ignoreType',
  CollectionPagesInternalMediaType = 'collection___pages___internal___mediaType',
  CollectionPagesInternalOwner = 'collection___pages___internal___owner',
  CollectionPagesInternalType = 'collection___pages___internal___type',
  CollectionId = 'collection___id',
  CollectionParentId = 'collection___parent___id',
  CollectionParentParentId = 'collection___parent___parent___id',
  CollectionParentParentChildren = 'collection___parent___parent___children',
  CollectionParentChildren = 'collection___parent___children',
  CollectionParentChildrenId = 'collection___parent___children___id',
  CollectionParentChildrenChildren = 'collection___parent___children___children',
  CollectionParentInternalContent = 'collection___parent___internal___content',
  CollectionParentInternalContentDigest = 'collection___parent___internal___contentDigest',
  CollectionParentInternalDescription = 'collection___parent___internal___description',
  CollectionParentInternalFieldOwners = 'collection___parent___internal___fieldOwners',
  CollectionParentInternalIgnoreType = 'collection___parent___internal___ignoreType',
  CollectionParentInternalMediaType = 'collection___parent___internal___mediaType',
  CollectionParentInternalOwner = 'collection___parent___internal___owner',
  CollectionParentInternalType = 'collection___parent___internal___type',
  CollectionChildren = 'collection___children',
  CollectionChildrenId = 'collection___children___id',
  CollectionChildrenParentId = 'collection___children___parent___id',
  CollectionChildrenParentChildren = 'collection___children___parent___children',
  CollectionChildrenChildren = 'collection___children___children',
  CollectionChildrenChildrenId = 'collection___children___children___id',
  CollectionChildrenChildrenChildren = 'collection___children___children___children',
  CollectionChildrenInternalContent = 'collection___children___internal___content',
  CollectionChildrenInternalContentDigest = 'collection___children___internal___contentDigest',
  CollectionChildrenInternalDescription = 'collection___children___internal___description',
  CollectionChildrenInternalFieldOwners = 'collection___children___internal___fieldOwners',
  CollectionChildrenInternalIgnoreType = 'collection___children___internal___ignoreType',
  CollectionChildrenInternalMediaType = 'collection___children___internal___mediaType',
  CollectionChildrenInternalOwner = 'collection___children___internal___owner',
  CollectionChildrenInternalType = 'collection___children___internal___type',
  CollectionInternalContent = 'collection___internal___content',
  CollectionInternalContentDigest = 'collection___internal___contentDigest',
  CollectionInternalDescription = 'collection___internal___description',
  CollectionInternalFieldOwners = 'collection___internal___fieldOwners',
  CollectionInternalIgnoreType = 'collection___internal___ignoreType',
  CollectionInternalMediaType = 'collection___internal___mediaType',
  CollectionInternalOwner = 'collection___internal___owner',
  CollectionInternalType = 'collection___internal___type',
  NextPageIndex = 'nextPage___index',
  NextPageCollectionName = 'nextPage___collection___name',
  NextPageCollectionPageSize = 'nextPage___collection___pageSize',
  NextPageCollectionFirstPageSize = 'nextPage___collection___firstPageSize',
  NextPageCollectionLastPageSize = 'nextPage___collection___lastPageSize',
  NextPageCollectionNodeCount = 'nextPage___collection___nodeCount',
  NextPageCollectionPageCount = 'nextPage___collection___pageCount',
  NextPageCollectionPages = 'nextPage___collection___pages',
  NextPageCollectionPagesIndex = 'nextPage___collection___pages___index',
  NextPageCollectionPagesHasNextPage = 'nextPage___collection___pages___hasNextPage',
  NextPageCollectionPagesHasPreviousPage = 'nextPage___collection___pages___hasPreviousPage',
  NextPageCollectionPagesNodeCount = 'nextPage___collection___pages___nodeCount',
  NextPageCollectionPagesNodes = 'nextPage___collection___pages___nodes',
  NextPageCollectionPagesId = 'nextPage___collection___pages___id',
  NextPageCollectionPagesChildren = 'nextPage___collection___pages___children',
  NextPageCollectionId = 'nextPage___collection___id',
  NextPageCollectionParentId = 'nextPage___collection___parent___id',
  NextPageCollectionParentChildren = 'nextPage___collection___parent___children',
  NextPageCollectionChildren = 'nextPage___collection___children',
  NextPageCollectionChildrenId = 'nextPage___collection___children___id',
  NextPageCollectionChildrenChildren = 'nextPage___collection___children___children',
  NextPageCollectionInternalContent = 'nextPage___collection___internal___content',
  NextPageCollectionInternalContentDigest = 'nextPage___collection___internal___contentDigest',
  NextPageCollectionInternalDescription = 'nextPage___collection___internal___description',
  NextPageCollectionInternalFieldOwners = 'nextPage___collection___internal___fieldOwners',
  NextPageCollectionInternalIgnoreType = 'nextPage___collection___internal___ignoreType',
  NextPageCollectionInternalMediaType = 'nextPage___collection___internal___mediaType',
  NextPageCollectionInternalOwner = 'nextPage___collection___internal___owner',
  NextPageCollectionInternalType = 'nextPage___collection___internal___type',
  NextPageNextPageIndex = 'nextPage___nextPage___index',
  NextPageNextPageCollectionName = 'nextPage___nextPage___collection___name',
  NextPageNextPageCollectionPageSize = 'nextPage___nextPage___collection___pageSize',
  NextPageNextPageCollectionFirstPageSize = 'nextPage___nextPage___collection___firstPageSize',
  NextPageNextPageCollectionLastPageSize = 'nextPage___nextPage___collection___lastPageSize',
  NextPageNextPageCollectionNodeCount = 'nextPage___nextPage___collection___nodeCount',
  NextPageNextPageCollectionPageCount = 'nextPage___nextPage___collection___pageCount',
  NextPageNextPageCollectionPages = 'nextPage___nextPage___collection___pages',
  NextPageNextPageCollectionId = 'nextPage___nextPage___collection___id',
  NextPageNextPageCollectionChildren = 'nextPage___nextPage___collection___children',
  NextPageNextPageNextPageIndex = 'nextPage___nextPage___nextPage___index',
  NextPageNextPageNextPageHasNextPage = 'nextPage___nextPage___nextPage___hasNextPage',
  NextPageNextPageNextPageHasPreviousPage = 'nextPage___nextPage___nextPage___hasPreviousPage',
  NextPageNextPageNextPageNodeCount = 'nextPage___nextPage___nextPage___nodeCount',
  NextPageNextPageNextPageNodes = 'nextPage___nextPage___nextPage___nodes',
  NextPageNextPageNextPageId = 'nextPage___nextPage___nextPage___id',
  NextPageNextPageNextPageChildren = 'nextPage___nextPage___nextPage___children',
  NextPageNextPageHasNextPage = 'nextPage___nextPage___hasNextPage',
  NextPageNextPagePreviousPageIndex = 'nextPage___nextPage___previousPage___index',
  NextPageNextPagePreviousPageHasNextPage = 'nextPage___nextPage___previousPage___hasNextPage',
  NextPageNextPagePreviousPageHasPreviousPage = 'nextPage___nextPage___previousPage___hasPreviousPage',
  NextPageNextPagePreviousPageNodeCount = 'nextPage___nextPage___previousPage___nodeCount',
  NextPageNextPagePreviousPageNodes = 'nextPage___nextPage___previousPage___nodes',
  NextPageNextPagePreviousPageId = 'nextPage___nextPage___previousPage___id',
  NextPageNextPagePreviousPageChildren = 'nextPage___nextPage___previousPage___children',
  NextPageNextPageHasPreviousPage = 'nextPage___nextPage___hasPreviousPage',
  NextPageNextPageNodeCount = 'nextPage___nextPage___nodeCount',
  NextPageNextPageNodes = 'nextPage___nextPage___nodes',
  NextPageNextPageId = 'nextPage___nextPage___id',
  NextPageNextPageParentId = 'nextPage___nextPage___parent___id',
  NextPageNextPageParentChildren = 'nextPage___nextPage___parent___children',
  NextPageNextPageChildren = 'nextPage___nextPage___children',
  NextPageNextPageChildrenId = 'nextPage___nextPage___children___id',
  NextPageNextPageChildrenChildren = 'nextPage___nextPage___children___children',
  NextPageNextPageInternalContent = 'nextPage___nextPage___internal___content',
  NextPageNextPageInternalContentDigest = 'nextPage___nextPage___internal___contentDigest',
  NextPageNextPageInternalDescription = 'nextPage___nextPage___internal___description',
  NextPageNextPageInternalFieldOwners = 'nextPage___nextPage___internal___fieldOwners',
  NextPageNextPageInternalIgnoreType = 'nextPage___nextPage___internal___ignoreType',
  NextPageNextPageInternalMediaType = 'nextPage___nextPage___internal___mediaType',
  NextPageNextPageInternalOwner = 'nextPage___nextPage___internal___owner',
  NextPageNextPageInternalType = 'nextPage___nextPage___internal___type',
  NextPageHasNextPage = 'nextPage___hasNextPage',
  NextPagePreviousPageIndex = 'nextPage___previousPage___index',
  NextPagePreviousPageCollectionName = 'nextPage___previousPage___collection___name',
  NextPagePreviousPageCollectionPageSize = 'nextPage___previousPage___collection___pageSize',
  NextPagePreviousPageCollectionFirstPageSize = 'nextPage___previousPage___collection___firstPageSize',
  NextPagePreviousPageCollectionLastPageSize = 'nextPage___previousPage___collection___lastPageSize',
  NextPagePreviousPageCollectionNodeCount = 'nextPage___previousPage___collection___nodeCount',
  NextPagePreviousPageCollectionPageCount = 'nextPage___previousPage___collection___pageCount',
  NextPagePreviousPageCollectionPages = 'nextPage___previousPage___collection___pages',
  NextPagePreviousPageCollectionId = 'nextPage___previousPage___collection___id',
  NextPagePreviousPageCollectionChildren = 'nextPage___previousPage___collection___children',
  NextPagePreviousPageNextPageIndex = 'nextPage___previousPage___nextPage___index',
  NextPagePreviousPageNextPageHasNextPage = 'nextPage___previousPage___nextPage___hasNextPage',
  NextPagePreviousPageNextPageHasPreviousPage = 'nextPage___previousPage___nextPage___hasPreviousPage',
  NextPagePreviousPageNextPageNodeCount = 'nextPage___previousPage___nextPage___nodeCount',
  NextPagePreviousPageNextPageNodes = 'nextPage___previousPage___nextPage___nodes',
  NextPagePreviousPageNextPageId = 'nextPage___previousPage___nextPage___id',
  NextPagePreviousPageNextPageChildren = 'nextPage___previousPage___nextPage___children',
  NextPagePreviousPageHasNextPage = 'nextPage___previousPage___hasNextPage',
  NextPagePreviousPagePreviousPageIndex = 'nextPage___previousPage___previousPage___index',
  NextPagePreviousPagePreviousPageHasNextPage = 'nextPage___previousPage___previousPage___hasNextPage',
  NextPagePreviousPagePreviousPageHasPreviousPage = 'nextPage___previousPage___previousPage___hasPreviousPage',
  NextPagePreviousPagePreviousPageNodeCount = 'nextPage___previousPage___previousPage___nodeCount',
  NextPagePreviousPagePreviousPageNodes = 'nextPage___previousPage___previousPage___nodes',
  NextPagePreviousPagePreviousPageId = 'nextPage___previousPage___previousPage___id',
  NextPagePreviousPagePreviousPageChildren = 'nextPage___previousPage___previousPage___children',
  NextPagePreviousPageHasPreviousPage = 'nextPage___previousPage___hasPreviousPage',
  NextPagePreviousPageNodeCount = 'nextPage___previousPage___nodeCount',
  NextPagePreviousPageNodes = 'nextPage___previousPage___nodes',
  NextPagePreviousPageId = 'nextPage___previousPage___id',
  NextPagePreviousPageParentId = 'nextPage___previousPage___parent___id',
  NextPagePreviousPageParentChildren = 'nextPage___previousPage___parent___children',
  NextPagePreviousPageChildren = 'nextPage___previousPage___children',
  NextPagePreviousPageChildrenId = 'nextPage___previousPage___children___id',
  NextPagePreviousPageChildrenChildren = 'nextPage___previousPage___children___children',
  NextPagePreviousPageInternalContent = 'nextPage___previousPage___internal___content',
  NextPagePreviousPageInternalContentDigest = 'nextPage___previousPage___internal___contentDigest',
  NextPagePreviousPageInternalDescription = 'nextPage___previousPage___internal___description',
  NextPagePreviousPageInternalFieldOwners = 'nextPage___previousPage___internal___fieldOwners',
  NextPagePreviousPageInternalIgnoreType = 'nextPage___previousPage___internal___ignoreType',
  NextPagePreviousPageInternalMediaType = 'nextPage___previousPage___internal___mediaType',
  NextPagePreviousPageInternalOwner = 'nextPage___previousPage___internal___owner',
  NextPagePreviousPageInternalType = 'nextPage___previousPage___internal___type',
  NextPageHasPreviousPage = 'nextPage___hasPreviousPage',
  NextPageNodeCount = 'nextPage___nodeCount',
  NextPageNodes = 'nextPage___nodes',
  NextPageId = 'nextPage___id',
  NextPageParentId = 'nextPage___parent___id',
  NextPageParentParentId = 'nextPage___parent___parent___id',
  NextPageParentParentChildren = 'nextPage___parent___parent___children',
  NextPageParentChildren = 'nextPage___parent___children',
  NextPageParentChildrenId = 'nextPage___parent___children___id',
  NextPageParentChildrenChildren = 'nextPage___parent___children___children',
  NextPageParentInternalContent = 'nextPage___parent___internal___content',
  NextPageParentInternalContentDigest = 'nextPage___parent___internal___contentDigest',
  NextPageParentInternalDescription = 'nextPage___parent___internal___description',
  NextPageParentInternalFieldOwners = 'nextPage___parent___internal___fieldOwners',
  NextPageParentInternalIgnoreType = 'nextPage___parent___internal___ignoreType',
  NextPageParentInternalMediaType = 'nextPage___parent___internal___mediaType',
  NextPageParentInternalOwner = 'nextPage___parent___internal___owner',
  NextPageParentInternalType = 'nextPage___parent___internal___type',
  NextPageChildren = 'nextPage___children',
  NextPageChildrenId = 'nextPage___children___id',
  NextPageChildrenParentId = 'nextPage___children___parent___id',
  NextPageChildrenParentChildren = 'nextPage___children___parent___children',
  NextPageChildrenChildren = 'nextPage___children___children',
  NextPageChildrenChildrenId = 'nextPage___children___children___id',
  NextPageChildrenChildrenChildren = 'nextPage___children___children___children',
  NextPageChildrenInternalContent = 'nextPage___children___internal___content',
  NextPageChildrenInternalContentDigest = 'nextPage___children___internal___contentDigest',
  NextPageChildrenInternalDescription = 'nextPage___children___internal___description',
  NextPageChildrenInternalFieldOwners = 'nextPage___children___internal___fieldOwners',
  NextPageChildrenInternalIgnoreType = 'nextPage___children___internal___ignoreType',
  NextPageChildrenInternalMediaType = 'nextPage___children___internal___mediaType',
  NextPageChildrenInternalOwner = 'nextPage___children___internal___owner',
  NextPageChildrenInternalType = 'nextPage___children___internal___type',
  NextPageInternalContent = 'nextPage___internal___content',
  NextPageInternalContentDigest = 'nextPage___internal___contentDigest',
  NextPageInternalDescription = 'nextPage___internal___description',
  NextPageInternalFieldOwners = 'nextPage___internal___fieldOwners',
  NextPageInternalIgnoreType = 'nextPage___internal___ignoreType',
  NextPageInternalMediaType = 'nextPage___internal___mediaType',
  NextPageInternalOwner = 'nextPage___internal___owner',
  NextPageInternalType = 'nextPage___internal___type',
  HasNextPage = 'hasNextPage',
  PreviousPageIndex = 'previousPage___index',
  PreviousPageCollectionName = 'previousPage___collection___name',
  PreviousPageCollectionPageSize = 'previousPage___collection___pageSize',
  PreviousPageCollectionFirstPageSize = 'previousPage___collection___firstPageSize',
  PreviousPageCollectionLastPageSize = 'previousPage___collection___lastPageSize',
  PreviousPageCollectionNodeCount = 'previousPage___collection___nodeCount',
  PreviousPageCollectionPageCount = 'previousPage___collection___pageCount',
  PreviousPageCollectionPages = 'previousPage___collection___pages',
  PreviousPageCollectionPagesIndex = 'previousPage___collection___pages___index',
  PreviousPageCollectionPagesHasNextPage = 'previousPage___collection___pages___hasNextPage',
  PreviousPageCollectionPagesHasPreviousPage = 'previousPage___collection___pages___hasPreviousPage',
  PreviousPageCollectionPagesNodeCount = 'previousPage___collection___pages___nodeCount',
  PreviousPageCollectionPagesNodes = 'previousPage___collection___pages___nodes',
  PreviousPageCollectionPagesId = 'previousPage___collection___pages___id',
  PreviousPageCollectionPagesChildren = 'previousPage___collection___pages___children',
  PreviousPageCollectionId = 'previousPage___collection___id',
  PreviousPageCollectionParentId = 'previousPage___collection___parent___id',
  PreviousPageCollectionParentChildren = 'previousPage___collection___parent___children',
  PreviousPageCollectionChildren = 'previousPage___collection___children',
  PreviousPageCollectionChildrenId = 'previousPage___collection___children___id',
  PreviousPageCollectionChildrenChildren = 'previousPage___collection___children___children',
  PreviousPageCollectionInternalContent = 'previousPage___collection___internal___content',
  PreviousPageCollectionInternalContentDigest = 'previousPage___collection___internal___contentDigest',
  PreviousPageCollectionInternalDescription = 'previousPage___collection___internal___description',
  PreviousPageCollectionInternalFieldOwners = 'previousPage___collection___internal___fieldOwners',
  PreviousPageCollectionInternalIgnoreType = 'previousPage___collection___internal___ignoreType',
  PreviousPageCollectionInternalMediaType = 'previousPage___collection___internal___mediaType',
  PreviousPageCollectionInternalOwner = 'previousPage___collection___internal___owner',
  PreviousPageCollectionInternalType = 'previousPage___collection___internal___type',
  PreviousPageNextPageIndex = 'previousPage___nextPage___index',
  PreviousPageNextPageCollectionName = 'previousPage___nextPage___collection___name',
  PreviousPageNextPageCollectionPageSize = 'previousPage___nextPage___collection___pageSize',
  PreviousPageNextPageCollectionFirstPageSize = 'previousPage___nextPage___collection___firstPageSize',
  PreviousPageNextPageCollectionLastPageSize = 'previousPage___nextPage___collection___lastPageSize',
  PreviousPageNextPageCollectionNodeCount = 'previousPage___nextPage___collection___nodeCount',
  PreviousPageNextPageCollectionPageCount = 'previousPage___nextPage___collection___pageCount',
  PreviousPageNextPageCollectionPages = 'previousPage___nextPage___collection___pages',
  PreviousPageNextPageCollectionId = 'previousPage___nextPage___collection___id',
  PreviousPageNextPageCollectionChildren = 'previousPage___nextPage___collection___children',
  PreviousPageNextPageNextPageIndex = 'previousPage___nextPage___nextPage___index',
  PreviousPageNextPageNextPageHasNextPage = 'previousPage___nextPage___nextPage___hasNextPage',
  PreviousPageNextPageNextPageHasPreviousPage = 'previousPage___nextPage___nextPage___hasPreviousPage',
  PreviousPageNextPageNextPageNodeCount = 'previousPage___nextPage___nextPage___nodeCount',
  PreviousPageNextPageNextPageNodes = 'previousPage___nextPage___nextPage___nodes',
  PreviousPageNextPageNextPageId = 'previousPage___nextPage___nextPage___id',
  PreviousPageNextPageNextPageChildren = 'previousPage___nextPage___nextPage___children',
  PreviousPageNextPageHasNextPage = 'previousPage___nextPage___hasNextPage',
  PreviousPageNextPagePreviousPageIndex = 'previousPage___nextPage___previousPage___index',
  PreviousPageNextPagePreviousPageHasNextPage = 'previousPage___nextPage___previousPage___hasNextPage',
  PreviousPageNextPagePreviousPageHasPreviousPage = 'previousPage___nextPage___previousPage___hasPreviousPage',
  PreviousPageNextPagePreviousPageNodeCount = 'previousPage___nextPage___previousPage___nodeCount',
  PreviousPageNextPagePreviousPageNodes = 'previousPage___nextPage___previousPage___nodes',
  PreviousPageNextPagePreviousPageId = 'previousPage___nextPage___previousPage___id',
  PreviousPageNextPagePreviousPageChildren = 'previousPage___nextPage___previousPage___children',
  PreviousPageNextPageHasPreviousPage = 'previousPage___nextPage___hasPreviousPage',
  PreviousPageNextPageNodeCount = 'previousPage___nextPage___nodeCount',
  PreviousPageNextPageNodes = 'previousPage___nextPage___nodes',
  PreviousPageNextPageId = 'previousPage___nextPage___id',
  PreviousPageNextPageParentId = 'previousPage___nextPage___parent___id',
  PreviousPageNextPageParentChildren = 'previousPage___nextPage___parent___children',
  PreviousPageNextPageChildren = 'previousPage___nextPage___children',
  PreviousPageNextPageChildrenId = 'previousPage___nextPage___children___id',
  PreviousPageNextPageChildrenChildren = 'previousPage___nextPage___children___children',
  PreviousPageNextPageInternalContent = 'previousPage___nextPage___internal___content',
  PreviousPageNextPageInternalContentDigest = 'previousPage___nextPage___internal___contentDigest',
  PreviousPageNextPageInternalDescription = 'previousPage___nextPage___internal___description',
  PreviousPageNextPageInternalFieldOwners = 'previousPage___nextPage___internal___fieldOwners',
  PreviousPageNextPageInternalIgnoreType = 'previousPage___nextPage___internal___ignoreType',
  PreviousPageNextPageInternalMediaType = 'previousPage___nextPage___internal___mediaType',
  PreviousPageNextPageInternalOwner = 'previousPage___nextPage___internal___owner',
  PreviousPageNextPageInternalType = 'previousPage___nextPage___internal___type',
  PreviousPageHasNextPage = 'previousPage___hasNextPage',
  PreviousPagePreviousPageIndex = 'previousPage___previousPage___index',
  PreviousPagePreviousPageCollectionName = 'previousPage___previousPage___collection___name',
  PreviousPagePreviousPageCollectionPageSize = 'previousPage___previousPage___collection___pageSize',
  PreviousPagePreviousPageCollectionFirstPageSize = 'previousPage___previousPage___collection___firstPageSize',
  PreviousPagePreviousPageCollectionLastPageSize = 'previousPage___previousPage___collection___lastPageSize',
  PreviousPagePreviousPageCollectionNodeCount = 'previousPage___previousPage___collection___nodeCount',
  PreviousPagePreviousPageCollectionPageCount = 'previousPage___previousPage___collection___pageCount',
  PreviousPagePreviousPageCollectionPages = 'previousPage___previousPage___collection___pages',
  PreviousPagePreviousPageCollectionId = 'previousPage___previousPage___collection___id',
  PreviousPagePreviousPageCollectionChildren = 'previousPage___previousPage___collection___children',
  PreviousPagePreviousPageNextPageIndex = 'previousPage___previousPage___nextPage___index',
  PreviousPagePreviousPageNextPageHasNextPage = 'previousPage___previousPage___nextPage___hasNextPage',
  PreviousPagePreviousPageNextPageHasPreviousPage = 'previousPage___previousPage___nextPage___hasPreviousPage',
  PreviousPagePreviousPageNextPageNodeCount = 'previousPage___previousPage___nextPage___nodeCount',
  PreviousPagePreviousPageNextPageNodes = 'previousPage___previousPage___nextPage___nodes',
  PreviousPagePreviousPageNextPageId = 'previousPage___previousPage___nextPage___id',
  PreviousPagePreviousPageNextPageChildren = 'previousPage___previousPage___nextPage___children',
  PreviousPagePreviousPageHasNextPage = 'previousPage___previousPage___hasNextPage',
  PreviousPagePreviousPagePreviousPageIndex = 'previousPage___previousPage___previousPage___index',
  PreviousPagePreviousPagePreviousPageHasNextPage = 'previousPage___previousPage___previousPage___hasNextPage',
  PreviousPagePreviousPagePreviousPageHasPreviousPage = 'previousPage___previousPage___previousPage___hasPreviousPage',
  PreviousPagePreviousPagePreviousPageNodeCount = 'previousPage___previousPage___previousPage___nodeCount',
  PreviousPagePreviousPagePreviousPageNodes = 'previousPage___previousPage___previousPage___nodes',
  PreviousPagePreviousPagePreviousPageId = 'previousPage___previousPage___previousPage___id',
  PreviousPagePreviousPagePreviousPageChildren = 'previousPage___previousPage___previousPage___children',
  PreviousPagePreviousPageHasPreviousPage = 'previousPage___previousPage___hasPreviousPage',
  PreviousPagePreviousPageNodeCount = 'previousPage___previousPage___nodeCount',
  PreviousPagePreviousPageNodes = 'previousPage___previousPage___nodes',
  PreviousPagePreviousPageId = 'previousPage___previousPage___id',
  PreviousPagePreviousPageParentId = 'previousPage___previousPage___parent___id',
  PreviousPagePreviousPageParentChildren = 'previousPage___previousPage___parent___children',
  PreviousPagePreviousPageChildren = 'previousPage___previousPage___children',
  PreviousPagePreviousPageChildrenId = 'previousPage___previousPage___children___id',
  PreviousPagePreviousPageChildrenChildren = 'previousPage___previousPage___children___children',
  PreviousPagePreviousPageInternalContent = 'previousPage___previousPage___internal___content',
  PreviousPagePreviousPageInternalContentDigest = 'previousPage___previousPage___internal___contentDigest',
  PreviousPagePreviousPageInternalDescription = 'previousPage___previousPage___internal___description',
  PreviousPagePreviousPageInternalFieldOwners = 'previousPage___previousPage___internal___fieldOwners',
  PreviousPagePreviousPageInternalIgnoreType = 'previousPage___previousPage___internal___ignoreType',
  PreviousPagePreviousPageInternalMediaType = 'previousPage___previousPage___internal___mediaType',
  PreviousPagePreviousPageInternalOwner = 'previousPage___previousPage___internal___owner',
  PreviousPagePreviousPageInternalType = 'previousPage___previousPage___internal___type',
  PreviousPageHasPreviousPage = 'previousPage___hasPreviousPage',
  PreviousPageNodeCount = 'previousPage___nodeCount',
  PreviousPageNodes = 'previousPage___nodes',
  PreviousPageId = 'previousPage___id',
  PreviousPageParentId = 'previousPage___parent___id',
  PreviousPageParentParentId = 'previousPage___parent___parent___id',
  PreviousPageParentParentChildren = 'previousPage___parent___parent___children',
  PreviousPageParentChildren = 'previousPage___parent___children',
  PreviousPageParentChildrenId = 'previousPage___parent___children___id',
  PreviousPageParentChildrenChildren = 'previousPage___parent___children___children',
  PreviousPageParentInternalContent = 'previousPage___parent___internal___content',
  PreviousPageParentInternalContentDigest = 'previousPage___parent___internal___contentDigest',
  PreviousPageParentInternalDescription = 'previousPage___parent___internal___description',
  PreviousPageParentInternalFieldOwners = 'previousPage___parent___internal___fieldOwners',
  PreviousPageParentInternalIgnoreType = 'previousPage___parent___internal___ignoreType',
  PreviousPageParentInternalMediaType = 'previousPage___parent___internal___mediaType',
  PreviousPageParentInternalOwner = 'previousPage___parent___internal___owner',
  PreviousPageParentInternalType = 'previousPage___parent___internal___type',
  PreviousPageChildren = 'previousPage___children',
  PreviousPageChildrenId = 'previousPage___children___id',
  PreviousPageChildrenParentId = 'previousPage___children___parent___id',
  PreviousPageChildrenParentChildren = 'previousPage___children___parent___children',
  PreviousPageChildrenChildren = 'previousPage___children___children',
  PreviousPageChildrenChildrenId = 'previousPage___children___children___id',
  PreviousPageChildrenChildrenChildren = 'previousPage___children___children___children',
  PreviousPageChildrenInternalContent = 'previousPage___children___internal___content',
  PreviousPageChildrenInternalContentDigest = 'previousPage___children___internal___contentDigest',
  PreviousPageChildrenInternalDescription = 'previousPage___children___internal___description',
  PreviousPageChildrenInternalFieldOwners = 'previousPage___children___internal___fieldOwners',
  PreviousPageChildrenInternalIgnoreType = 'previousPage___children___internal___ignoreType',
  PreviousPageChildrenInternalMediaType = 'previousPage___children___internal___mediaType',
  PreviousPageChildrenInternalOwner = 'previousPage___children___internal___owner',
  PreviousPageChildrenInternalType = 'previousPage___children___internal___type',
  PreviousPageInternalContent = 'previousPage___internal___content',
  PreviousPageInternalContentDigest = 'previousPage___internal___contentDigest',
  PreviousPageInternalDescription = 'previousPage___internal___description',
  PreviousPageInternalFieldOwners = 'previousPage___internal___fieldOwners',
  PreviousPageInternalIgnoreType = 'previousPage___internal___ignoreType',
  PreviousPageInternalMediaType = 'previousPage___internal___mediaType',
  PreviousPageInternalOwner = 'previousPage___internal___owner',
  PreviousPageInternalType = 'previousPage___internal___type',
  HasPreviousPage = 'hasPreviousPage',
  NodeCount = 'nodeCount',
  Nodes = 'nodes',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type PaginatedCollectionPageFilterInput = {
  index?: Maybe<IntQueryOperatorInput>;
  collection?: Maybe<PaginatedCollectionFilterInput>;
  nextPage?: Maybe<PaginatedCollectionPageFilterInput>;
  hasNextPage?: Maybe<BooleanQueryOperatorInput>;
  previousPage?: Maybe<PaginatedCollectionPageFilterInput>;
  hasPreviousPage?: Maybe<BooleanQueryOperatorInput>;
  nodeCount?: Maybe<IntQueryOperatorInput>;
  nodes?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PaginatedCollectionPageFilterListInput = {
  elemMatch?: Maybe<PaginatedCollectionPageFilterInput>;
};

export type PaginatedCollectionPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PaginatedCollectionPageEdge>;
  nodes: Array<PaginatedCollectionPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PaginatedCollectionPageSortInput = {
  fields?: Maybe<Array<Maybe<PaginatedCollectionPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PaginatedCollectionSortInput = {
  fields?: Maybe<Array<Maybe<PaginatedCollectionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  paginatedCollection?: Maybe<PaginatedCollection>;
  allPaginatedCollection: PaginatedCollectionConnection;
  paginatedCollectionPage?: Maybe<PaginatedCollectionPage>;
  allPaginatedCollectionPage: PaginatedCollectionPageConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  cloudinaryAsset?: Maybe<CloudinaryAsset>;
  allCloudinaryAsset: CloudinaryAssetConnection;
  airtableAdPerson?: Maybe<AirtableAdPerson>;
  allAirtableAdPerson: AirtableAdPersonConnection;
  airtableAgency?: Maybe<AirtableAgency>;
  allAirtableAgency: AirtableAgencyConnection;
  airtableImageField?: Maybe<AirtableImageField>;
  allAirtableImageField: AirtableImageFieldConnection;
  airtableCategory?: Maybe<AirtableCategory>;
  allAirtableCategory: AirtableCategoryConnection;
  airtableTextField?: Maybe<AirtableTextField>;
  allAirtableTextField: AirtableTextFieldConnection;
  airtableLink?: Maybe<AirtableLink>;
  allAirtableLink: AirtableLinkConnection;
  airtableArchive?: Maybe<AirtableArchive>;
  allAirtableArchive: AirtableArchiveConnection;
  airtableFieldfileNode?: Maybe<AirtableFieldfileNode>;
  allAirtableFieldfileNode: AirtableFieldfileNodeConnection;
  airtableSponsors?: Maybe<AirtableSponsors>;
  allAirtableSponsors: AirtableSponsorsConnection;
  airtableFieldtextmarkdown?: Maybe<AirtableFieldtextmarkdown>;
  allAirtableFieldtextmarkdown: AirtableFieldtextmarkdownConnection;
  airtableWinner?: Maybe<AirtableWinner>;
  allAirtableWinner: AirtableWinnerConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  localSearchWinners?: Maybe<LocalSearchIndexWinners>;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childCloudinaryAsset?: Maybe<CloudinaryAssetFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPaginatedCollectionArgs = {
  name?: Maybe<StringQueryOperatorInput>;
  pageSize?: Maybe<IntQueryOperatorInput>;
  firstPageSize?: Maybe<IntQueryOperatorInput>;
  lastPageSize?: Maybe<IntQueryOperatorInput>;
  nodeCount?: Maybe<IntQueryOperatorInput>;
  pageCount?: Maybe<IntQueryOperatorInput>;
  pages?: Maybe<PaginatedCollectionPageFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPaginatedCollectionArgs = {
  filter?: Maybe<PaginatedCollectionFilterInput>;
  sort?: Maybe<PaginatedCollectionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPaginatedCollectionPageArgs = {
  index?: Maybe<IntQueryOperatorInput>;
  collection?: Maybe<PaginatedCollectionFilterInput>;
  nextPage?: Maybe<PaginatedCollectionPageFilterInput>;
  hasNextPage?: Maybe<BooleanQueryOperatorInput>;
  previousPage?: Maybe<PaginatedCollectionPageFilterInput>;
  hasPreviousPage?: Maybe<BooleanQueryOperatorInput>;
  nodeCount?: Maybe<IntQueryOperatorInput>;
  nodes?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPaginatedCollectionPageArgs = {
  filter?: Maybe<PaginatedCollectionPageFilterInput>;
  sort?: Maybe<PaginatedCollectionPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryCloudinaryAssetArgs = {
  fixed?: Maybe<CloudinaryAssetFixedFilterInput>;
  fluid?: Maybe<CloudinaryAssetFluidFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllCloudinaryAssetArgs = {
  filter?: Maybe<CloudinaryAssetFilterInput>;
  sort?: Maybe<CloudinaryAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryAirtableAdPersonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  table?: Maybe<StringQueryOperatorInput>;
  recordId?: Maybe<StringQueryOperatorInput>;
  queryName?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<AirtableAdPersonDataFilterInput>;
  fields?: Maybe<AirtableAdPersonFieldsFilterInput>;
};


export type QueryAllAirtableAdPersonArgs = {
  filter?: Maybe<AirtableAdPersonFilterInput>;
  sort?: Maybe<AirtableAdPersonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryAirtableAgencyArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  table?: Maybe<StringQueryOperatorInput>;
  recordId?: Maybe<StringQueryOperatorInput>;
  queryName?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<AirtableAgencyDataFilterInput>;
  fields?: Maybe<AirtableAgencyFieldsFilterInput>;
};


export type QueryAllAirtableAgencyArgs = {
  filter?: Maybe<AirtableAgencyFilterInput>;
  sort?: Maybe<AirtableAgencySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryAirtableImageFieldArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  table?: Maybe<StringQueryOperatorInput>;
  recordId?: Maybe<StringQueryOperatorInput>;
  queryName?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<AirtableImageFieldDataFilterInput>;
};


export type QueryAllAirtableImageFieldArgs = {
  filter?: Maybe<AirtableImageFieldFilterInput>;
  sort?: Maybe<AirtableImageFieldSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryAirtableCategoryArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  table?: Maybe<StringQueryOperatorInput>;
  recordId?: Maybe<StringQueryOperatorInput>;
  queryName?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<AirtableCategoryDataFilterInput>;
};


export type QueryAllAirtableCategoryArgs = {
  filter?: Maybe<AirtableCategoryFilterInput>;
  sort?: Maybe<AirtableCategorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryAirtableTextFieldArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  table?: Maybe<StringQueryOperatorInput>;
  recordId?: Maybe<StringQueryOperatorInput>;
  queryName?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<AirtableTextFieldDataFilterInput>;
};


export type QueryAllAirtableTextFieldArgs = {
  filter?: Maybe<AirtableTextFieldFilterInput>;
  sort?: Maybe<AirtableTextFieldSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryAirtableLinkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  table?: Maybe<StringQueryOperatorInput>;
  recordId?: Maybe<StringQueryOperatorInput>;
  queryName?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<AirtableLinkDataFilterInput>;
};


export type QueryAllAirtableLinkArgs = {
  filter?: Maybe<AirtableLinkFilterInput>;
  sort?: Maybe<AirtableLinkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryAirtableArchiveArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  table?: Maybe<StringQueryOperatorInput>;
  recordId?: Maybe<StringQueryOperatorInput>;
  queryName?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<AirtableArchiveDataFilterInput>;
};


export type QueryAllAirtableArchiveArgs = {
  filter?: Maybe<AirtableArchiveFilterInput>;
  sort?: Maybe<AirtableArchiveSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryAirtableFieldfileNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  raw?: Maybe<AirtableFieldfileNodeRawFilterListInput>;
  localFiles?: Maybe<FileFilterListInput>;
};


export type QueryAllAirtableFieldfileNodeArgs = {
  filter?: Maybe<AirtableFieldfileNodeFilterInput>;
  sort?: Maybe<AirtableFieldfileNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryAirtableSponsorsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  table?: Maybe<StringQueryOperatorInput>;
  recordId?: Maybe<StringQueryOperatorInput>;
  queryName?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<AirtableSponsorsDataFilterInput>;
};


export type QueryAllAirtableSponsorsArgs = {
  filter?: Maybe<AirtableSponsorsFilterInput>;
  sort?: Maybe<AirtableSponsorsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryAirtableFieldtextmarkdownArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  raw?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllAirtableFieldtextmarkdownArgs = {
  filter?: Maybe<AirtableFieldtextmarkdownFilterInput>;
  sort?: Maybe<AirtableFieldtextmarkdownSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryAirtableWinnerArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  table?: Maybe<StringQueryOperatorInput>;
  recordId?: Maybe<StringQueryOperatorInput>;
  queryName?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<AirtableWinnerDataFilterInput>;
  fields?: Maybe<AirtableWinnerFieldsFilterInput>;
};


export type QueryAllAirtableWinnerArgs = {
  filter?: Maybe<AirtableWinnerFilterInput>;
  sort?: Maybe<AirtableWinnerSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  category?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Date']>;
  recordId?: Maybe<Scalars['String']>;
  previousRecordId?: Maybe<Scalars['String']>;
  nextRecordId?: Maybe<Scalars['String']>;
  paginatedCollectionName?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  category?: Maybe<StringQueryOperatorInput>;
  categoryId?: Maybe<StringQueryOperatorInput>;
  year?: Maybe<DateQueryOperatorInput>;
  recordId?: Maybe<StringQueryOperatorInput>;
  previousRecordId?: Maybe<StringQueryOperatorInput>;
  nextRecordId?: Maybe<StringQueryOperatorInput>;
  paginatedCollectionName?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextCategory = 'context___category',
  ContextCategoryId = 'context___categoryId',
  ContextYear = 'context___year',
  ContextRecordId = 'context___recordId',
  ContextPreviousRecordId = 'context___previousRecordId',
  ContextNextRecordId = 'context___nextRecordId',
  ContextPaginatedCollectionName = 'context___paginatedCollectionName',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
  PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
  PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
  PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
  PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
  PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  PluginCreatorPluginOptionsDisplayName = 'pluginCreator___pluginOptions___displayName',
  PluginCreatorPluginOptionsApiKey = 'pluginCreator___pluginOptions___apiKey',
  PluginCreatorPluginOptionsConcurrency = 'pluginCreator___pluginOptions___concurrency',
  PluginCreatorPluginOptionsTables = 'pluginCreator___pluginOptions___tables',
  PluginCreatorPluginOptionsTablesBaseId = 'pluginCreator___pluginOptions___tables___baseId',
  PluginCreatorPluginOptionsTablesTableName = 'pluginCreator___pluginOptions___tables___tableName',
  PluginCreatorPluginOptionsTablesTableLinks = 'pluginCreator___pluginOptions___tables___tableLinks',
  PluginCreatorPluginOptionsTablesQueryName = 'pluginCreator___pluginOptions___tables___queryName',
  PluginCreatorPluginOptionsTablesSeparateNodeType = 'pluginCreator___pluginOptions___tables___separateNodeType',
  PluginCreatorPluginOptionsTablesSeparateMapType = 'pluginCreator___pluginOptions___tables___separateMapType',
  PluginCreatorPluginOptionsCloudName = 'pluginCreator___pluginOptions___cloudName',
  PluginCreatorPluginOptionsApiSecret = 'pluginCreator___pluginOptions___apiSecret',
  PluginCreatorPluginOptionsUploadFolder = 'pluginCreator___pluginOptions___uploadFolder',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsEngine = 'pluginCreator___pluginOptions___engine',
  PluginCreatorPluginOptionsQuery = 'pluginCreator___pluginOptions___query',
  PluginCreatorPluginOptionsIndex = 'pluginCreator___pluginOptions___index',
  PluginCreatorPluginOptionsStore = 'pluginCreator___pluginOptions___store',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsDisplayName = 'pluginOptions___displayName',
  PluginOptionsApiKey = 'pluginOptions___apiKey',
  PluginOptionsConcurrency = 'pluginOptions___concurrency',
  PluginOptionsTables = 'pluginOptions___tables',
  PluginOptionsTablesBaseId = 'pluginOptions___tables___baseId',
  PluginOptionsTablesTableName = 'pluginOptions___tables___tableName',
  PluginOptionsTablesTableLinks = 'pluginOptions___tables___tableLinks',
  PluginOptionsTablesQueryName = 'pluginOptions___tables___queryName',
  PluginOptionsTablesSeparateNodeType = 'pluginOptions___tables___separateNodeType',
  PluginOptionsTablesMappingImages = 'pluginOptions___tables___mapping___images',
  PluginOptionsTablesMappingCredits = 'pluginOptions___tables___mapping___credits',
  PluginOptionsTablesMappingAvatar = 'pluginOptions___tables___mapping___avatar',
  PluginOptionsTablesMappingPhoto = 'pluginOptions___tables___mapping___photo',
  PluginOptionsTablesMappingDescription = 'pluginOptions___tables___mapping___description',
  PluginOptionsTablesMappingRichText = 'pluginOptions___tables___mapping___rich_text',
  PluginOptionsTablesMappingImage = 'pluginOptions___tables___mapping___image',
  PluginOptionsTablesMappingLogo = 'pluginOptions___tables___mapping___logo',
  PluginOptionsTablesSeparateMapType = 'pluginOptions___tables___separateMapType',
  PluginOptionsCloudName = 'pluginOptions___cloudName',
  PluginOptionsApiSecret = 'pluginOptions___apiSecret',
  PluginOptionsUploadFolder = 'pluginOptions___uploadFolder',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsEngine = 'pluginOptions___engine',
  PluginOptionsQuery = 'pluginOptions___query',
  PluginOptionsIndex = 'pluginOptions___index',
  PluginOptionsStore = 'pluginOptions___store',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  displayName?: Maybe<Scalars['Boolean']>;
  apiKey?: Maybe<Scalars['String']>;
  concurrency?: Maybe<Scalars['Int']>;
  tables?: Maybe<Array<Maybe<SitePluginPluginOptionsTables>>>;
  cloudName?: Maybe<Scalars['String']>;
  apiSecret?: Maybe<Scalars['String']>;
  uploadFolder?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  engine?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  index?: Maybe<Array<Maybe<Scalars['String']>>>;
  store?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  displayName?: Maybe<BooleanQueryOperatorInput>;
  apiKey?: Maybe<StringQueryOperatorInput>;
  concurrency?: Maybe<IntQueryOperatorInput>;
  tables?: Maybe<SitePluginPluginOptionsTablesFilterListInput>;
  cloudName?: Maybe<StringQueryOperatorInput>;
  apiSecret?: Maybe<StringQueryOperatorInput>;
  uploadFolder?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  engine?: Maybe<StringQueryOperatorInput>;
  query?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<StringQueryOperatorInput>;
  store?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPlugins = {
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsTables = {
  baseId?: Maybe<Scalars['String']>;
  tableName?: Maybe<Scalars['String']>;
  tableLinks?: Maybe<Array<Maybe<Scalars['String']>>>;
  queryName?: Maybe<Scalars['String']>;
  separateNodeType?: Maybe<Scalars['Boolean']>;
  mapping?: Maybe<SitePluginPluginOptionsTablesMapping>;
  separateMapType?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsTablesFilterInput = {
  baseId?: Maybe<StringQueryOperatorInput>;
  tableName?: Maybe<StringQueryOperatorInput>;
  tableLinks?: Maybe<StringQueryOperatorInput>;
  queryName?: Maybe<StringQueryOperatorInput>;
  separateNodeType?: Maybe<BooleanQueryOperatorInput>;
  mapping?: Maybe<SitePluginPluginOptionsTablesMappingFilterInput>;
  separateMapType?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsTablesFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsTablesFilterInput>;
};

export type SitePluginPluginOptionsTablesMapping = {
  images?: Maybe<Scalars['String']>;
  credits?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  rich_text?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsTablesMappingFilterInput = {
  images?: Maybe<StringQueryOperatorInput>;
  credits?: Maybe<StringQueryOperatorInput>;
  avatar?: Maybe<StringQueryOperatorInput>;
  photo?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  rich_text?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type CloudinaryAssetFluidFragment = Pick<CloudinaryAssetFluid, 'aspectRatio' | 'base64' | 'sizes' | 'src' | 'srcSet'>;

export type CloudinaryAssetFixedFragment = Pick<CloudinaryAssetFixed, 'base64' | 'height' | 'src' | 'srcSet' | 'width'>;

export type LogoImageQueryVariables = {};


export type LogoImageQuery = { airtableImageField?: Maybe<{ data?: Maybe<{ image?: Maybe<{ localFiles?: Maybe<Array<Maybe<{ childCloudinaryAsset?: Maybe<{ fluid: CloudinaryAssetFluidFragment }> }>>> }> }> }> };

export type AboutPageQueryVariables = {};


export type AboutPageQuery = { aboutHeroText?: Maybe<{ data?: Maybe<{ rich_text?: Maybe<{ childMarkdownRemark?: Maybe<Pick<MarkdownRemark, 'html'>> }> }> }>, aboutHeroImage?: Maybe<{ data?: Maybe<{ image?: Maybe<{ localFiles?: Maybe<Array<Maybe<{ childCloudinaryAsset?: Maybe<{ fluid: CloudinaryAssetFluidFragment }> }>>> }> }> }>, aboutWhiteColoredBox?: Maybe<{ data?: Maybe<{ rich_text?: Maybe<{ childMarkdownRemark?: Maybe<Pick<MarkdownRemark, 'html'>> }> }> }>, aboutCtaText?: Maybe<{ data?: Maybe<{ rich_text?: Maybe<{ childMarkdownRemark?: Maybe<Pick<MarkdownRemark, 'html'>> }> }> }>, aboutButtonText?: Maybe<{ data?: Maybe<Pick<AirtableTextFieldData, 'plain_text'>> }>, aboutButtonHref?: Maybe<{ data?: Maybe<Pick<AirtableLinkData, 'href'>> }>, aboutSponsors: { nodes: Array<{ data?: Maybe<(
        Pick<AirtableSponsorsData, 'name' | 'type'>
        & { logo?: Maybe<{ localFiles?: Maybe<Array<Maybe<Pick<File, 'url'>>>> }> }
      )> }> } };

export type AdPeoplePageQueryVariables = {};


export type AdPeoplePageQuery = { allAirtableAdPerson: { nodes: Array<{ data?: Maybe<(
        Pick<AirtableAdPersonData, 'name' | 'title' | 'award'>
        & { agency?: Maybe<Array<Maybe<{ fields?: Maybe<Pick<AirtableAgencyFields, 'url'>>, data?: Maybe<Pick<AirtableAgencyData, 'name'>> }>>>, description?: Maybe<{ childMarkdownRemark?: Maybe<Pick<MarkdownRemark, 'html'>> }>, photo?: Maybe<{ localFiles?: Maybe<Array<Maybe<{ childCloudinaryAsset?: Maybe<{ fluid: CloudinaryAssetFluidFragment }> }>>> }> }
      )> }> } };

export type CollegePageQueryVariables = {};


export type CollegePageQuery = { paginatedCollectionPage?: Maybe<(
    Pick<PaginatedCollectionPage, 'id' | 'nodes'>
    & { nextPage?: Maybe<Pick<PaginatedCollectionPage, 'id'>>, collection: Pick<PaginatedCollection, 'id' | 'nodeCount'> }
  )> };

export type HighSchoolPageQueryVariables = {};


export type HighSchoolPageQuery = { paginatedCollectionPage?: Maybe<(
    Pick<PaginatedCollectionPage, 'id' | 'nodes'>
    & { nextPage?: Maybe<Pick<PaginatedCollectionPage, 'id'>>, collection: Pick<PaginatedCollection, 'id' | 'nodeCount'> }
  )> };

export type IndexPageQueryVariables = {};


export type IndexPageQuery = { bestOfWinners: { nodes: Array<SpecialAwardWinnerFragment> }, adPeople: { nodes: Array<{ fields?: Maybe<Pick<AirtableAdPersonFields, 'url'>>, data?: Maybe<(
        Pick<AirtableAdPersonData, 'name' | 'title' | 'award'>
        & { agency?: Maybe<Array<Maybe<{ data?: Maybe<Pick<AirtableAgencyData, 'name'>> }>>>, photo?: Maybe<{ localFiles?: Maybe<Array<Maybe<{ childCloudinaryAsset?: Maybe<{ fluid: CloudinaryAssetFluidFragment }> }>>> }> }
      )> }> }, judgesWinners: { nodes: Array<SpecialAwardWinnerFragment> }, homeCtaText?: Maybe<{ data?: Maybe<{ rich_text?: Maybe<{ childMarkdownRemark?: Maybe<Pick<MarkdownRemark, 'html'>> }> }> }>, homeButtonText?: Maybe<{ data?: Maybe<Pick<AirtableTextFieldData, 'plain_text'>> }>, homeButtonHref?: Maybe<{ data?: Maybe<Pick<AirtableLinkData, 'href'>> }>, homeHeroText?: Maybe<{ data?: Maybe<{ rich_text?: Maybe<{ childMarkdownRemark?: Maybe<Pick<MarkdownRemark, 'html'>> }> }> }>, homeHeroImage?: Maybe<{ data?: Maybe<{ image?: Maybe<{ localFiles?: Maybe<Array<Maybe<{ childCloudinaryAsset?: Maybe<{ fluid: CloudinaryAssetFluidFragment }> }>>> }> }> }>, archives: { nodes: Array<{ data?: Maybe<Pick<AirtableArchiveData, 'link' | 'year'>> }> } };

export type SpecialAwardWinnerFragment = { fields?: Maybe<Pick<AirtableWinnerFields, 'url'>>, data?: Maybe<(
    Pick<AirtableWinnerData, 'name' | 'award' | 'special_award'>
    & { agency?: Maybe<Array<Maybe<{ fields?: Maybe<Pick<AirtableAgencyFields, 'url'>>, data?: Maybe<(
        Pick<AirtableAgencyData, 'name'>
        & { avatar?: Maybe<{ localFiles?: Maybe<Array<Maybe<{ childCloudinaryAsset?: Maybe<{ fluid: CloudinaryAssetFluidFragment }> }>>> }> }
      )> }>>>, images?: Maybe<{ localFiles?: Maybe<Array<Maybe<{ childCloudinaryAsset?: Maybe<{ fluid: CloudinaryAssetFluidFragment }> }>>> }> }
  )> };

export type AgencyTemplateQueryVariables = {
  recordId: Scalars['String'];
  paginatedCollectionName: Scalars['String'];
};


export type AgencyTemplateQuery = { airtableAgency?: Maybe<{ data?: Maybe<(
      Pick<AirtableAgencyData, 'name' | 'website' | 'facebook_handle' | 'twitter_handle' | 'instagram_handle' | 'linkedin_handle'>
      & { avatar?: Maybe<{ localFiles?: Maybe<Array<Maybe<{ childCloudinaryAsset?: Maybe<{ fluid: CloudinaryAssetFluidFragment }> }>>> }> }
    )> }>, paginatedCollectionPage?: Maybe<(
    Pick<PaginatedCollectionPage, 'id' | 'nodes'>
    & { nextPage?: Maybe<Pick<PaginatedCollectionPage, 'id'>>, collection: Pick<PaginatedCollection, 'nodeCount'> }
  )> };

export type AllWinnersTemplateQueryVariables = {};


export type AllWinnersTemplateQuery = { paginatedCollectionPage?: Maybe<(
    Pick<PaginatedCollectionPage, 'id' | 'nodes'>
    & { nextPage?: Maybe<Pick<PaginatedCollectionPage, 'id'>>, collection: Pick<PaginatedCollection, 'id' | 'nodeCount'> }
  )>, allPaginatedCollectionPage: { nodes: Array<(
      Pick<PaginatedCollectionPage, 'id'>
      & { collection: Pick<PaginatedCollection, 'id' | 'name'> }
    )> }, bestOfWinners: { nodes: Array<SpecialAwardWinnerFragment> }, judgesWinners: { nodes: Array<SpecialAwardWinnerFragment> } };

export type SpecialAwardWinnerFragment = { fields?: Maybe<Pick<AirtableWinnerFields, 'url'>>, data?: Maybe<(
    Pick<AirtableWinnerData, 'name' | 'award' | 'special_award'>
    & { agency?: Maybe<Array<Maybe<{ fields?: Maybe<Pick<AirtableAgencyFields, 'url'>>, data?: Maybe<(
        Pick<AirtableAgencyData, 'name'>
        & { avatar?: Maybe<{ localFiles?: Maybe<Array<Maybe<{ childCloudinaryAsset?: Maybe<{ fluid: CloudinaryAssetFluidFragment }> }>>> }> }
      )> }>>>, images?: Maybe<{ localFiles?: Maybe<Array<Maybe<{ childCloudinaryAsset?: Maybe<{ fluid: CloudinaryAssetFluidFragment }> }>>> }> }
  )> };

export type TagTemplateQueryVariables = {
  paginatedCollectionName: Scalars['String'];
};


export type TagTemplateQuery = { paginatedCollectionPage?: Maybe<(
    Pick<PaginatedCollectionPage, 'id' | 'nodes'>
    & { nextPage?: Maybe<Pick<PaginatedCollectionPage, 'id'>>, collection: Pick<PaginatedCollection, 'name' | 'nodeCount'> }
  )> };

export type WinnerTemplateQueryVariables = {
  recordId: Scalars['String'];
  nextRecordId?: Maybe<Scalars['String']>;
  previousRecordId?: Maybe<Scalars['String']>;
};


export type WinnerTemplateQuery = { airtableWinner?: Maybe<{ fields?: Maybe<{ tags?: Maybe<Array<Maybe<Pick<AirtableWinnerFieldsTags, 'tag' | 'url'>>>> }>, data?: Maybe<(
      Pick<AirtableWinnerData, 'name' | 'type' | 'year' | 'award' | 'special_award' | 'client'>
      & { category?: Maybe<Array<Maybe<{ data?: Maybe<Pick<AirtableCategoryData, 'line_1' | 'line_2'>> }>>>, agency?: Maybe<Array<Maybe<{ fields?: Maybe<Pick<AirtableAgencyFields, 'url'>>, data?: Maybe<(
          Pick<AirtableAgencyData, 'name'>
          & { avatar?: Maybe<{ localFiles?: Maybe<Array<Maybe<{ childCloudinaryAsset?: Maybe<{ fluid: CloudinaryAssetFluidFragment }> }>>> }> }
        )> }>>>, credits?: Maybe<{ childMarkdownRemark?: Maybe<Pick<MarkdownRemark, 'html'>> }>, images?: Maybe<{ localFiles?: Maybe<Array<Maybe<{ childCloudinaryAsset?: Maybe<{ fluid: CloudinaryAssetFluidFragment }> }>>> }> }
    )> }>, nextAirtableWinner?: Maybe<{ fields?: Maybe<Pick<AirtableWinnerFields, 'url'>>, data?: Maybe<Pick<AirtableWinnerData, 'name'>> }>, previousAirtableWinner?: Maybe<{ fields?: Maybe<Pick<AirtableWinnerFields, 'url'>>, data?: Maybe<Pick<AirtableWinnerData, 'name'>> }>, winnerCtaText?: Maybe<{ data?: Maybe<{ rich_text?: Maybe<{ childMarkdownRemark?: Maybe<Pick<MarkdownRemark, 'html'>> }> }> }>, winnerButtonText?: Maybe<{ data?: Maybe<Pick<AirtableTextFieldData, 'plain_text'>> }>, winnerButtonHref?: Maybe<{ data?: Maybe<Pick<AirtableLinkData, 'href'>> }> };

export type WinnersTemplateQueryVariables = {
  categoryId: Scalars['String'];
};


export type WinnersTemplateQuery = { paginatedCollectionPage?: Maybe<(
    Pick<PaginatedCollectionPage, 'id' | 'nodes'>
    & { nextPage?: Maybe<Pick<PaginatedCollectionPage, 'id'>>, collection: Pick<PaginatedCollection, 'id' | 'nodeCount'> }
  )>, allPaginatedCollectionPage: { nodes: Array<(
      Pick<PaginatedCollectionPage, 'id'>
      & { collection: Pick<PaginatedCollection, 'id' | 'name'> }
    )> } };
