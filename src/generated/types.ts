import { Role } from '../ts/enums';
import { StoreStatus } from '../ts/enums';
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from '../config/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};

export type AuthResult = AuthPayload | User;

export type Brand = {
  __typename?: 'Brand';
  id: Scalars['ID'];
  name: Scalars['String'];
  thumbnail: Scalars['String'];
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
  path?: Maybe<Scalars['String']>;
  products: Array<Maybe<Product>>;
};

export type Customer = {
  __typename?: 'Customer';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  default_source?: Maybe<Scalars['String']>;
  delinquent?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  invoice_prefix?: Maybe<Scalars['String']>;
  invoice_settings?: Maybe<InvoiceSettings>;
  livemode?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  next_invoice_sequence?: Maybe<Scalars['Int']>;
  object?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  preferred_locales?: Maybe<Array<Maybe<Scalars['String']>>>;
  shipping?: Maybe<Scalars['String']>;
  tax_exempt?: Maybe<Scalars['String']>;
  test_clock?: Maybe<Scalars['String']>;
};

export type Dimensions = {
  __typename?: 'Dimensions';
  color?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
};

export type DimensionsInput = {
  color?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
};

export type FileInput = {
  files?: InputMaybe<Array<Scalars['Upload']>>;
};

export type InvoiceSettings = {
  __typename?: 'InvoiceSettings';
  custom_fields?: Maybe<Scalars['String']>;
  default_payment_method?: Maybe<Scalars['String']>;
  footer?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCustomer?: Maybe<Customer>;
  addImage?: Maybe<Array<Scalars['String']>>;
  addSuper: Super;
  createBrand: Brand;
  createCategory: Category;
  createProduct: Product;
  createStore: Store;
  deleteBrand?: Maybe<Brand>;
  deleteCategory?: Maybe<Category>;
  deleteProduct?: Maybe<Product>;
  deleteStore?: Maybe<Store>;
  login?: Maybe<AuthPayload>;
  register?: Maybe<AuthPayload>;
  subscribeToSub?: Maybe<ResponseSub>;
  updatePassword?: Maybe<User>;
  updateProduct?: Maybe<Product>;
  updateRole?: Maybe<AuthResult>;
  updateStoreStatus?: Maybe<Store>;
};


export type MutationAddCustomerArgs = {
  input?: InputMaybe<InputCustomer>;
};


export type MutationAddImageArgs = {
  input?: InputMaybe<FileInput>;
};


export type MutationAddSuperArgs = {
  input?: InputMaybe<SuperInput>;
};


export type MutationCreateBrandArgs = {
  name: Scalars['String'];
  thumbnail: Scalars['String'];
};


export type MutationCreateCategoryArgs = {
  name: Scalars['String'];
  path?: InputMaybe<Scalars['String']>;
};


export type MutationCreateProductArgs = {
  input: ProductInput;
};


export type MutationCreateStoreArgs = {
  name: Scalars['String'];
  thumbnail: Scalars['String'];
};


export type MutationDeleteBrandArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['String'];
};


export type MutationDeleteStoreArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationSubscribeToSubArgs = {
  input?: InputMaybe<InputSubscribe>;
};


export type MutationUpdatePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationUpdateProductArgs = {
  id: Scalars['String'];
  input: ProductInput;
};


export type MutationUpdateRoleArgs = {
  status: Scalars['String'];
};


export type MutationUpdateStoreStatusArgs = {
  id: Scalars['ID'];
  status: StoreStatus;
};

export type Node = {
  id: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  nextCursor?: Maybe<Scalars['String']>;
};

export type PaginateEntity = {
  data: Array<Node>;
  pageInfo: PageInfo;
};

export type Product = {
  __typename?: 'Product';
  brand?: Maybe<Brand>;
  category: Array<Maybe<Category>>;
  description: Scalars['String'];
  discount: Scalars['Float'];
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  stock: Scalars['Int'];
  store: Store;
  thumbnails: Array<Maybe<Scalars['String']>>;
  variants: Array<Maybe<Variants>>;
};

export type ProductInput = {
  brand: Scalars['ID'];
  category: Array<InputMaybe<Scalars['ID']>>;
  description: Scalars['String'];
  discount: Scalars['Float'];
  name: Scalars['String'];
  price: Scalars['Float'];
  store: Scalars['ID'];
  thumbnails: Array<InputMaybe<Scalars['String']>>;
  variants: Array<InputMaybe<VariantsInput>>;
};

export type Query = {
  __typename?: 'Query';
  brand?: Maybe<Brand>;
  brands: Array<Maybe<Brand>>;
  categories: Array<Maybe<Category>>;
  getAll?: Maybe<Array<Super>>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  store?: Maybe<Store>;
  stores?: Maybe<Array<Maybe<Store>>>;
};


export type QueryBrandArgs = {
  id: Scalars['ID'];
};


export type QueryProductArgs = {
  id: Scalars['String'];
};


export type QueryStoreArgs = {
  id: Scalars['String'];
};


export type QueryStoresArgs = {
  sort?: InputMaybe<Sort>;
  status?: InputMaybe<StoreStatus>;
};

export { Role };

export enum Sort {
  Asc = 'asc',
  Desc = 'desc'
}

export type Store = {
  __typename?: 'Store';
  id: Scalars['ID'];
  name: Scalars['String'];
  owner: User;
  products: Array<Maybe<Product>>;
  status: StoreStatus;
  thumbnail: Scalars['String'];
};

export { StoreStatus };

export type Super = {
  __typename?: 'Super';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SuperInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  role: Role;
};

export type UserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type Variants = {
  __typename?: 'Variants';
  dimensions: Array<Maybe<Dimensions>>;
  price: Scalars['Float'];
  sku: Scalars['String'];
  stock: Scalars['Int'];
};

export type VariantsInput = {
  dimensions: Array<InputMaybe<DimensionsInput>>;
  price: Scalars['Float'];
  sku: Scalars['String'];
  stock: Scalars['Int'];
};

export type InputCustomer = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type InputSubscribe = {
  customerId?: InputMaybe<Scalars['String']>;
  priceId?: InputMaybe<Scalars['String']>;
};

export type Paginate = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Float']>;
};

export type ResponseSub = {
  __typename?: 'responseSub';
  clientSecret?: Maybe<Scalars['String']>;
  subscription?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  AuthResult: ResolversTypes['AuthPayload'] | ResolversTypes['User'];
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Brand: ResolverTypeWrapper<Brand>;
  CacheControlScope: CacheControlScope;
  Category: ResolverTypeWrapper<Category>;
  Customer: ResolverTypeWrapper<Customer>;
  Dimensions: ResolverTypeWrapper<Dimensions>;
  DimensionsInput: DimensionsInput;
  FileInput: FileInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  InvoiceSettings: ResolverTypeWrapper<InvoiceSettings>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: never;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PaginateEntity: never;
  Product: ResolverTypeWrapper<Product>;
  ProductInput: ProductInput;
  Query: ResolverTypeWrapper<{}>;
  Role: Role;
  Sort: Sort;
  Store: ResolverTypeWrapper<Store>;
  StoreStatus: StoreStatus;
  String: ResolverTypeWrapper<Scalars['String']>;
  Super: ResolverTypeWrapper<Super>;
  SuperInput: SuperInput;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
  Variants: ResolverTypeWrapper<Variants>;
  VariantsInput: VariantsInput;
  inputCustomer: InputCustomer;
  inputSubscribe: InputSubscribe;
  paginate: Paginate;
  responseSub: ResolverTypeWrapper<ResponseSub>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthPayload: AuthPayload;
  AuthResult: ResolversParentTypes['AuthPayload'] | ResolversParentTypes['User'];
  Boolean: Scalars['Boolean'];
  Brand: Brand;
  Category: Category;
  Customer: Customer;
  Dimensions: Dimensions;
  DimensionsInput: DimensionsInput;
  FileInput: FileInput;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  InvoiceSettings: InvoiceSettings;
  Mutation: {};
  Node: never;
  PageInfo: PageInfo;
  PaginateEntity: never;
  Product: Product;
  ProductInput: ProductInput;
  Query: {};
  Store: Store;
  String: Scalars['String'];
  Super: Super;
  SuperInput: SuperInput;
  Upload: Scalars['Upload'];
  User: User;
  UserInput: UserInput;
  Variants: Variants;
  VariantsInput: VariantsInput;
  inputCustomer: InputCustomer;
  inputSubscribe: InputSubscribe;
  paginate: Paginate;
  responseSub: ResponseSub;
};

export type CacheControlDirectiveArgs = {
  inheritMaxAge?: Maybe<Scalars['Boolean']>;
  maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>;
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = Context, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthPayloadResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AuthResult'] = ResolversParentTypes['AuthResult']> = {
  __resolveType: TypeResolveFn<'AuthPayload' | 'User', ParentType, ContextType>;
};

export type BrandResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Brand'] = ResolversParentTypes['Brand']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  balance?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  delinquent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invoice_prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invoice_settings?: Resolver<Maybe<ResolversTypes['InvoiceSettings']>, ParentType, ContextType>;
  livemode?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  next_invoice_sequence?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  object?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preferred_locales?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  shipping?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tax_exempt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  test_clock?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DimensionsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Dimensions'] = ResolversParentTypes['Dimensions']> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoiceSettingsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InvoiceSettings'] = ResolversParentTypes['InvoiceSettings']> = {
  custom_fields?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_payment_method?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  footer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addCustomer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, Partial<MutationAddCustomerArgs>>;
  addImage?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType, Partial<MutationAddImageArgs>>;
  addSuper?: Resolver<ResolversTypes['Super'], ParentType, ContextType, Partial<MutationAddSuperArgs>>;
  createBrand?: Resolver<ResolversTypes['Brand'], ParentType, ContextType, RequireFields<MutationCreateBrandArgs, 'name' | 'thumbnail'>>;
  createCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'name'>>;
  createProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'input'>>;
  createStore?: Resolver<ResolversTypes['Store'], ParentType, ContextType, RequireFields<MutationCreateStoreArgs, 'name' | 'thumbnail'>>;
  deleteBrand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType, RequireFields<MutationDeleteBrandArgs, 'id'>>;
  deleteCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'id'>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'id'>>;
  deleteStore?: Resolver<Maybe<ResolversTypes['Store']>, ParentType, ContextType, RequireFields<MutationDeleteStoreArgs, 'id'>>;
  login?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
  register?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, Partial<MutationRegisterArgs>>;
  subscribeToSub?: Resolver<Maybe<ResolversTypes['responseSub']>, ParentType, ContextType, Partial<MutationSubscribeToSubArgs>>;
  updatePassword?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdatePasswordArgs, 'newPassword' | 'oldPassword'>>;
  updateProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'id' | 'input'>>;
  updateRole?: Resolver<Maybe<ResolversTypes['AuthResult']>, ParentType, ContextType, RequireFields<MutationUpdateRoleArgs, 'status'>>;
  updateStoreStatus?: Resolver<Maybe<ResolversTypes['Store']>, ParentType, ContextType, RequireFields<MutationUpdateStoreStatusArgs, 'id' | 'status'>>;
};

export type NodeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginateEntityResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PaginateEntity'] = ResolversParentTypes['PaginateEntity']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  data?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type ProductResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  brand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType>;
  category?: Resolver<Array<Maybe<ResolversTypes['Category']>>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  discount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  stock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  store?: Resolver<ResolversTypes['Store'], ParentType, ContextType>;
  thumbnails?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  variants?: Resolver<Array<Maybe<ResolversTypes['Variants']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  brand?: Resolver<Maybe<ResolversTypes['Brand']>, ParentType, ContextType, RequireFields<QueryBrandArgs, 'id'>>;
  brands?: Resolver<Array<Maybe<ResolversTypes['Brand']>>, ParentType, ContextType>;
  categories?: Resolver<Array<Maybe<ResolversTypes['Category']>>, ParentType, ContextType>;
  getAll?: Resolver<Maybe<Array<ResolversTypes['Super']>>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  store?: Resolver<Maybe<ResolversTypes['Store']>, ParentType, ContextType, RequireFields<QueryStoreArgs, 'id'>>;
  stores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Store']>>>, ParentType, ContextType, Partial<QueryStoresArgs>>;
};

export type RoleResolvers = EnumResolverSignature<{ ADMIN?: any, SELLER?: any, USER?: any }, ResolversTypes['Role']>;

export type StoreResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Store'] = ResolversParentTypes['Store']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['StoreStatus'], ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreStatusResolvers = EnumResolverSignature<{ ACTIVE?: any, INACTIVE?: any }, ResolversTypes['StoreStatus']>;

export type SuperResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Super'] = ResolversParentTypes['Super']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VariantsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Variants'] = ResolversParentTypes['Variants']> = {
  dimensions?: Resolver<Array<Maybe<ResolversTypes['Dimensions']>>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResponseSubResolvers<ContextType = Context, ParentType extends ResolversParentTypes['responseSub'] = ResolversParentTypes['responseSub']> = {
  clientSecret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subscription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  AuthResult?: AuthResultResolvers<ContextType>;
  Brand?: BrandResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  Dimensions?: DimensionsResolvers<ContextType>;
  InvoiceSettings?: InvoiceSettingsResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PaginateEntity?: PaginateEntityResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Role?: RoleResolvers;
  Store?: StoreResolvers<ContextType>;
  StoreStatus?: StoreStatusResolvers;
  Super?: SuperResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  Variants?: VariantsResolvers<ContextType>;
  responseSub?: ResponseSubResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = Context> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};
