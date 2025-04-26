
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Page
 * 
 */
export type Page = $Result.DefaultSelection<Prisma.$PagePayload>
/**
 * Model PageElement
 * 
 */
export type PageElement = $Result.DefaultSelection<Prisma.$PageElementPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PageStatus: {
  draft: 'draft',
  published: 'published',
  archived: 'archived'
};

export type PageStatus = (typeof PageStatus)[keyof typeof PageStatus]

}

export type PageStatus = $Enums.PageStatus

export const PageStatus: typeof $Enums.PageStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pages
 * const pages = await prisma.page.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Pages
   * const pages = await prisma.page.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.page`: Exposes CRUD operations for the **Page** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pages
    * const pages = await prisma.page.findMany()
    * ```
    */
  get page(): Prisma.PageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pageElement`: Exposes CRUD operations for the **PageElement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageElements
    * const pageElements = await prisma.pageElement.findMany()
    * ```
    */
  get pageElement(): Prisma.PageElementDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Page: 'Page',
    PageElement: 'PageElement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "page" | "pageElement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Page: {
        payload: Prisma.$PagePayload<ExtArgs>
        fields: Prisma.PageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findFirst: {
            args: Prisma.PageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findMany: {
            args: Prisma.PageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          create: {
            args: Prisma.PageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          createMany: {
            args: Prisma.PageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          delete: {
            args: Prisma.PageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          update: {
            args: Prisma.PageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          deleteMany: {
            args: Prisma.PageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          upsert: {
            args: Prisma.PageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          aggregate: {
            args: Prisma.PageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePage>
          }
          groupBy: {
            args: Prisma.PageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageCountArgs<ExtArgs>
            result: $Utils.Optional<PageCountAggregateOutputType> | number
          }
        }
      }
      PageElement: {
        payload: Prisma.$PageElementPayload<ExtArgs>
        fields: Prisma.PageElementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageElementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageElementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageElementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageElementPayload>
          }
          findFirst: {
            args: Prisma.PageElementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageElementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageElementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageElementPayload>
          }
          findMany: {
            args: Prisma.PageElementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageElementPayload>[]
          }
          create: {
            args: Prisma.PageElementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageElementPayload>
          }
          createMany: {
            args: Prisma.PageElementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageElementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageElementPayload>[]
          }
          delete: {
            args: Prisma.PageElementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageElementPayload>
          }
          update: {
            args: Prisma.PageElementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageElementPayload>
          }
          deleteMany: {
            args: Prisma.PageElementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageElementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageElementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageElementPayload>[]
          }
          upsert: {
            args: Prisma.PageElementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageElementPayload>
          }
          aggregate: {
            args: Prisma.PageElementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePageElement>
          }
          groupBy: {
            args: Prisma.PageElementGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageElementGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageElementCountArgs<ExtArgs>
            result: $Utils.Optional<PageElementCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    page?: PageOmit
    pageElement?: PageElementOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PageCountOutputType
   */

  export type PageCountOutputType = {
    pageElements: number
  }

  export type PageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pageElements?: boolean | PageCountOutputTypeCountPageElementsArgs
  }

  // Custom InputTypes
  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCountOutputType
     */
    select?: PageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeCountPageElementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageElementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Page
   */

  export type AggregatePage = {
    _count: PageCountAggregateOutputType | null
    _avg: PageAvgAggregateOutputType | null
    _sum: PageSumAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  export type PageAvgAggregateOutputType = {
    id: number | null
  }

  export type PageSumAggregateOutputType = {
    id: number | null
  }

  export type PageMinAggregateOutputType = {
    id: number | null
    slug: string | null
    title_en: string | null
    title_pl: string | null
    description_en: string | null
    description_pl: string | null
    content_en: string | null
    content_pl: string | null
    metaDescription: string | null
    metaKeywords: string | null
    metaTitle: string | null
    metaImage: string | null
    metaImageAlt: string | null
    rawContent_en: string | null
    rawContent_pl: string | null
    status: $Enums.PageStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    title_en: string | null
    title_pl: string | null
    description_en: string | null
    description_pl: string | null
    content_en: string | null
    content_pl: string | null
    metaDescription: string | null
    metaKeywords: string | null
    metaTitle: string | null
    metaImage: string | null
    metaImageAlt: string | null
    rawContent_en: string | null
    rawContent_pl: string | null
    status: $Enums.PageStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageCountAggregateOutputType = {
    id: number
    slug: number
    title_en: number
    title_pl: number
    description_en: number
    description_pl: number
    content_en: number
    content_pl: number
    metaDescription: number
    metaKeywords: number
    metaTitle: number
    metaImage: number
    metaImageAlt: number
    rawContent_en: number
    rawContent_pl: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PageAvgAggregateInputType = {
    id?: true
  }

  export type PageSumAggregateInputType = {
    id?: true
  }

  export type PageMinAggregateInputType = {
    id?: true
    slug?: true
    title_en?: true
    title_pl?: true
    description_en?: true
    description_pl?: true
    content_en?: true
    content_pl?: true
    metaDescription?: true
    metaKeywords?: true
    metaTitle?: true
    metaImage?: true
    metaImageAlt?: true
    rawContent_en?: true
    rawContent_pl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageMaxAggregateInputType = {
    id?: true
    slug?: true
    title_en?: true
    title_pl?: true
    description_en?: true
    description_pl?: true
    content_en?: true
    content_pl?: true
    metaDescription?: true
    metaKeywords?: true
    metaTitle?: true
    metaImage?: true
    metaImageAlt?: true
    rawContent_en?: true
    rawContent_pl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageCountAggregateInputType = {
    id?: true
    slug?: true
    title_en?: true
    title_pl?: true
    description_en?: true
    description_pl?: true
    content_en?: true
    content_pl?: true
    metaDescription?: true
    metaKeywords?: true
    metaTitle?: true
    metaImage?: true
    metaImageAlt?: true
    rawContent_en?: true
    rawContent_pl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page to aggregate.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pages
    **/
    _count?: true | PageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageMaxAggregateInputType
  }

  export type GetPageAggregateType<T extends PageAggregateArgs> = {
        [P in keyof T & keyof AggregatePage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage[P]>
      : GetScalarType<T[P], AggregatePage[P]>
  }




  export type PageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
    orderBy?: PageOrderByWithAggregationInput | PageOrderByWithAggregationInput[]
    by: PageScalarFieldEnum[] | PageScalarFieldEnum
    having?: PageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageCountAggregateInputType | true
    _avg?: PageAvgAggregateInputType
    _sum?: PageSumAggregateInputType
    _min?: PageMinAggregateInputType
    _max?: PageMaxAggregateInputType
  }

  export type PageGroupByOutputType = {
    id: number
    slug: string
    title_en: string
    title_pl: string
    description_en: string | null
    description_pl: string | null
    content_en: string
    content_pl: string | null
    metaDescription: string | null
    metaKeywords: string | null
    metaTitle: string | null
    metaImage: string | null
    metaImageAlt: string | null
    rawContent_en: string | null
    rawContent_pl: string | null
    status: $Enums.PageStatus
    createdAt: Date
    updatedAt: Date
    _count: PageCountAggregateOutputType | null
    _avg: PageAvgAggregateOutputType | null
    _sum: PageSumAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  type GetPageGroupByPayload<T extends PageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageGroupByOutputType[P]>
            : GetScalarType<T[P], PageGroupByOutputType[P]>
        }
      >
    >


  export type PageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_pl?: boolean
    description_en?: boolean
    description_pl?: boolean
    content_en?: boolean
    content_pl?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
    metaTitle?: boolean
    metaImage?: boolean
    metaImageAlt?: boolean
    rawContent_en?: boolean
    rawContent_pl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pageElements?: boolean | Page$pageElementsArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_pl?: boolean
    description_en?: boolean
    description_pl?: boolean
    content_en?: boolean
    content_pl?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
    metaTitle?: boolean
    metaImage?: boolean
    metaImageAlt?: boolean
    rawContent_en?: boolean
    rawContent_pl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["page"]>

  export type PageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_pl?: boolean
    description_en?: boolean
    description_pl?: boolean
    content_en?: boolean
    content_pl?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
    metaTitle?: boolean
    metaImage?: boolean
    metaImageAlt?: boolean
    rawContent_en?: boolean
    rawContent_pl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["page"]>

  export type PageSelectScalar = {
    id?: boolean
    slug?: boolean
    title_en?: boolean
    title_pl?: boolean
    description_en?: boolean
    description_pl?: boolean
    content_en?: boolean
    content_pl?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
    metaTitle?: boolean
    metaImage?: boolean
    metaImageAlt?: boolean
    rawContent_en?: boolean
    rawContent_pl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title_en" | "title_pl" | "description_en" | "description_pl" | "content_en" | "content_pl" | "metaDescription" | "metaKeywords" | "metaTitle" | "metaImage" | "metaImageAlt" | "rawContent_en" | "rawContent_pl" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["page"]>
  export type PageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pageElements?: boolean | Page$pageElementsArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Page"
    objects: {
      pageElements: Prisma.$PageElementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      title_en: string
      title_pl: string
      description_en: string | null
      description_pl: string | null
      content_en: string
      content_pl: string | null
      metaDescription: string | null
      metaKeywords: string | null
      metaTitle: string | null
      metaImage: string | null
      metaImageAlt: string | null
      rawContent_en: string | null
      rawContent_pl: string | null
      status: $Enums.PageStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["page"]>
    composites: {}
  }

  type PageGetPayload<S extends boolean | null | undefined | PageDefaultArgs> = $Result.GetResult<Prisma.$PagePayload, S>

  type PageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageCountAggregateInputType | true
    }

  export interface PageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Page'], meta: { name: 'Page' } }
    /**
     * Find zero or one Page that matches the filter.
     * @param {PageFindUniqueArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageFindUniqueArgs>(args: SelectSubset<T, PageFindUniqueArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Page that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageFindUniqueOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageFindUniqueOrThrowArgs>(args: SelectSubset<T, PageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageFindFirstArgs>(args?: SelectSubset<T, PageFindFirstArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageFindFirstOrThrowArgs>(args?: SelectSubset<T, PageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pages
     * const pages = await prisma.page.findMany()
     * 
     * // Get first 10 Pages
     * const pages = await prisma.page.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageWithIdOnly = await prisma.page.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageFindManyArgs>(args?: SelectSubset<T, PageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Page.
     * @param {PageCreateArgs} args - Arguments to create a Page.
     * @example
     * // Create one Page
     * const Page = await prisma.page.create({
     *   data: {
     *     // ... data to create a Page
     *   }
     * })
     * 
     */
    create<T extends PageCreateArgs>(args: SelectSubset<T, PageCreateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pages.
     * @param {PageCreateManyArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageCreateManyArgs>(args?: SelectSubset<T, PageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pages and returns the data saved in the database.
     * @param {PageCreateManyAndReturnArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageCreateManyAndReturnArgs>(args?: SelectSubset<T, PageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Page.
     * @param {PageDeleteArgs} args - Arguments to delete one Page.
     * @example
     * // Delete one Page
     * const Page = await prisma.page.delete({
     *   where: {
     *     // ... filter to delete one Page
     *   }
     * })
     * 
     */
    delete<T extends PageDeleteArgs>(args: SelectSubset<T, PageDeleteArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Page.
     * @param {PageUpdateArgs} args - Arguments to update one Page.
     * @example
     * // Update one Page
     * const page = await prisma.page.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageUpdateArgs>(args: SelectSubset<T, PageUpdateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pages.
     * @param {PageDeleteManyArgs} args - Arguments to filter Pages to delete.
     * @example
     * // Delete a few Pages
     * const { count } = await prisma.page.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageDeleteManyArgs>(args?: SelectSubset<T, PageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageUpdateManyArgs>(args: SelectSubset<T, PageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages and returns the data updated in the database.
     * @param {PageUpdateManyAndReturnArgs} args - Arguments to update many Pages.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageUpdateManyAndReturnArgs>(args: SelectSubset<T, PageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Page.
     * @param {PageUpsertArgs} args - Arguments to update or create a Page.
     * @example
     * // Update or create a Page
     * const page = await prisma.page.upsert({
     *   create: {
     *     // ... data to create a Page
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page we want to update
     *   }
     * })
     */
    upsert<T extends PageUpsertArgs>(args: SelectSubset<T, PageUpsertArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCountArgs} args - Arguments to filter Pages to count.
     * @example
     * // Count the number of Pages
     * const count = await prisma.page.count({
     *   where: {
     *     // ... the filter for the Pages we want to count
     *   }
     * })
    **/
    count<T extends PageCountArgs>(
      args?: Subset<T, PageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PageAggregateArgs>(args: Subset<T, PageAggregateArgs>): Prisma.PrismaPromise<GetPageAggregateType<T>>

    /**
     * Group by Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageGroupByArgs['orderBy'] }
        : { orderBy?: PageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Page model
   */
  readonly fields: PageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pageElements<T extends Page$pageElementsArgs<ExtArgs> = {}>(args?: Subset<T, Page$pageElementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageElementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Page model
   */
  interface PageFieldRefs {
    readonly id: FieldRef<"Page", 'Int'>
    readonly slug: FieldRef<"Page", 'String'>
    readonly title_en: FieldRef<"Page", 'String'>
    readonly title_pl: FieldRef<"Page", 'String'>
    readonly description_en: FieldRef<"Page", 'String'>
    readonly description_pl: FieldRef<"Page", 'String'>
    readonly content_en: FieldRef<"Page", 'String'>
    readonly content_pl: FieldRef<"Page", 'String'>
    readonly metaDescription: FieldRef<"Page", 'String'>
    readonly metaKeywords: FieldRef<"Page", 'String'>
    readonly metaTitle: FieldRef<"Page", 'String'>
    readonly metaImage: FieldRef<"Page", 'String'>
    readonly metaImageAlt: FieldRef<"Page", 'String'>
    readonly rawContent_en: FieldRef<"Page", 'String'>
    readonly rawContent_pl: FieldRef<"Page", 'String'>
    readonly status: FieldRef<"Page", 'PageStatus'>
    readonly createdAt: FieldRef<"Page", 'DateTime'>
    readonly updatedAt: FieldRef<"Page", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Page findUnique
   */
  export type PageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findUniqueOrThrow
   */
  export type PageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findFirst
   */
  export type PageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findFirstOrThrow
   */
  export type PageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findMany
   */
  export type PageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Pages to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page create
   */
  export type PageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to create a Page.
     */
    data: XOR<PageCreateInput, PageUncheckedCreateInput>
  }

  /**
   * Page createMany
   */
  export type PageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Page createManyAndReturn
   */
  export type PageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Page update
   */
  export type PageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to update a Page.
     */
    data: XOR<PageUpdateInput, PageUncheckedUpdateInput>
    /**
     * Choose, which Page to update.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page updateMany
   */
  export type PageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
  }

  /**
   * Page updateManyAndReturn
   */
  export type PageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
  }

  /**
   * Page upsert
   */
  export type PageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The filter to search for the Page to update in case it exists.
     */
    where: PageWhereUniqueInput
    /**
     * In case the Page found by the `where` argument doesn't exist, create a new Page with this data.
     */
    create: XOR<PageCreateInput, PageUncheckedCreateInput>
    /**
     * In case the Page was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageUpdateInput, PageUncheckedUpdateInput>
  }

  /**
   * Page delete
   */
  export type PageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter which Page to delete.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page deleteMany
   */
  export type PageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pages to delete
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to delete.
     */
    limit?: number
  }

  /**
   * Page.pageElements
   */
  export type Page$pageElementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageElement
     */
    omit?: PageElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageElementInclude<ExtArgs> | null
    where?: PageElementWhereInput
    orderBy?: PageElementOrderByWithRelationInput | PageElementOrderByWithRelationInput[]
    cursor?: PageElementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageElementScalarFieldEnum | PageElementScalarFieldEnum[]
  }

  /**
   * Page without action
   */
  export type PageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
  }


  /**
   * Model PageElement
   */

  export type AggregatePageElement = {
    _count: PageElementCountAggregateOutputType | null
    _avg: PageElementAvgAggregateOutputType | null
    _sum: PageElementSumAggregateOutputType | null
    _min: PageElementMinAggregateOutputType | null
    _max: PageElementMaxAggregateOutputType | null
  }

  export type PageElementAvgAggregateOutputType = {
    id: number | null
    pageId: number | null
    order: number | null
  }

  export type PageElementSumAggregateOutputType = {
    id: number | null
    pageId: number | null
    order: number | null
  }

  export type PageElementMinAggregateOutputType = {
    id: number | null
    title_en: string | null
    title_pl: string | null
    description_en: string | null
    description_pl: string | null
    image: string | null
    imageAlt: string | null
    pageId: number | null
    type: string | null
    content: string | null
    order: number | null
    rawContent_en: string | null
    rawContent_pl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageElementMaxAggregateOutputType = {
    id: number | null
    title_en: string | null
    title_pl: string | null
    description_en: string | null
    description_pl: string | null
    image: string | null
    imageAlt: string | null
    pageId: number | null
    type: string | null
    content: string | null
    order: number | null
    rawContent_en: string | null
    rawContent_pl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageElementCountAggregateOutputType = {
    id: number
    title_en: number
    title_pl: number
    description_en: number
    description_pl: number
    image: number
    imageAlt: number
    pageId: number
    type: number
    content: number
    order: number
    rawContent_en: number
    rawContent_pl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PageElementAvgAggregateInputType = {
    id?: true
    pageId?: true
    order?: true
  }

  export type PageElementSumAggregateInputType = {
    id?: true
    pageId?: true
    order?: true
  }

  export type PageElementMinAggregateInputType = {
    id?: true
    title_en?: true
    title_pl?: true
    description_en?: true
    description_pl?: true
    image?: true
    imageAlt?: true
    pageId?: true
    type?: true
    content?: true
    order?: true
    rawContent_en?: true
    rawContent_pl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageElementMaxAggregateInputType = {
    id?: true
    title_en?: true
    title_pl?: true
    description_en?: true
    description_pl?: true
    image?: true
    imageAlt?: true
    pageId?: true
    type?: true
    content?: true
    order?: true
    rawContent_en?: true
    rawContent_pl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageElementCountAggregateInputType = {
    id?: true
    title_en?: true
    title_pl?: true
    description_en?: true
    description_pl?: true
    image?: true
    imageAlt?: true
    pageId?: true
    type?: true
    content?: true
    order?: true
    rawContent_en?: true
    rawContent_pl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PageElementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageElement to aggregate.
     */
    where?: PageElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageElements to fetch.
     */
    orderBy?: PageElementOrderByWithRelationInput | PageElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageElements
    **/
    _count?: true | PageElementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageElementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageElementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageElementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageElementMaxAggregateInputType
  }

  export type GetPageElementAggregateType<T extends PageElementAggregateArgs> = {
        [P in keyof T & keyof AggregatePageElement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageElement[P]>
      : GetScalarType<T[P], AggregatePageElement[P]>
  }




  export type PageElementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageElementWhereInput
    orderBy?: PageElementOrderByWithAggregationInput | PageElementOrderByWithAggregationInput[]
    by: PageElementScalarFieldEnum[] | PageElementScalarFieldEnum
    having?: PageElementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageElementCountAggregateInputType | true
    _avg?: PageElementAvgAggregateInputType
    _sum?: PageElementSumAggregateInputType
    _min?: PageElementMinAggregateInputType
    _max?: PageElementMaxAggregateInputType
  }

  export type PageElementGroupByOutputType = {
    id: number
    title_en: string
    title_pl: string
    description_en: string | null
    description_pl: string | null
    image: string | null
    imageAlt: string | null
    pageId: number
    type: string
    content: string
    order: number
    rawContent_en: string | null
    rawContent_pl: string | null
    createdAt: Date
    updatedAt: Date
    _count: PageElementCountAggregateOutputType | null
    _avg: PageElementAvgAggregateOutputType | null
    _sum: PageElementSumAggregateOutputType | null
    _min: PageElementMinAggregateOutputType | null
    _max: PageElementMaxAggregateOutputType | null
  }

  type GetPageElementGroupByPayload<T extends PageElementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageElementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageElementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageElementGroupByOutputType[P]>
            : GetScalarType<T[P], PageElementGroupByOutputType[P]>
        }
      >
    >


  export type PageElementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_en?: boolean
    title_pl?: boolean
    description_en?: boolean
    description_pl?: boolean
    image?: boolean
    imageAlt?: boolean
    pageId?: boolean
    type?: boolean
    content?: boolean
    order?: boolean
    rawContent_en?: boolean
    rawContent_pl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageElement"]>

  export type PageElementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_en?: boolean
    title_pl?: boolean
    description_en?: boolean
    description_pl?: boolean
    image?: boolean
    imageAlt?: boolean
    pageId?: boolean
    type?: boolean
    content?: boolean
    order?: boolean
    rawContent_en?: boolean
    rawContent_pl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageElement"]>

  export type PageElementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_en?: boolean
    title_pl?: boolean
    description_en?: boolean
    description_pl?: boolean
    image?: boolean
    imageAlt?: boolean
    pageId?: boolean
    type?: boolean
    content?: boolean
    order?: boolean
    rawContent_en?: boolean
    rawContent_pl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageElement"]>

  export type PageElementSelectScalar = {
    id?: boolean
    title_en?: boolean
    title_pl?: boolean
    description_en?: boolean
    description_pl?: boolean
    image?: boolean
    imageAlt?: boolean
    pageId?: boolean
    type?: boolean
    content?: boolean
    order?: boolean
    rawContent_en?: boolean
    rawContent_pl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PageElementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title_en" | "title_pl" | "description_en" | "description_pl" | "image" | "imageAlt" | "pageId" | "type" | "content" | "order" | "rawContent_en" | "rawContent_pl" | "createdAt" | "updatedAt", ExtArgs["result"]["pageElement"]>
  export type PageElementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
  }
  export type PageElementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
  }
  export type PageElementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
  }

  export type $PageElementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PageElement"
    objects: {
      page: Prisma.$PagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title_en: string
      title_pl: string
      description_en: string | null
      description_pl: string | null
      image: string | null
      imageAlt: string | null
      pageId: number
      type: string
      content: string
      order: number
      rawContent_en: string | null
      rawContent_pl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pageElement"]>
    composites: {}
  }

  type PageElementGetPayload<S extends boolean | null | undefined | PageElementDefaultArgs> = $Result.GetResult<Prisma.$PageElementPayload, S>

  type PageElementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageElementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageElementCountAggregateInputType | true
    }

  export interface PageElementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PageElement'], meta: { name: 'PageElement' } }
    /**
     * Find zero or one PageElement that matches the filter.
     * @param {PageElementFindUniqueArgs} args - Arguments to find a PageElement
     * @example
     * // Get one PageElement
     * const pageElement = await prisma.pageElement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageElementFindUniqueArgs>(args: SelectSubset<T, PageElementFindUniqueArgs<ExtArgs>>): Prisma__PageElementClient<$Result.GetResult<Prisma.$PageElementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PageElement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageElementFindUniqueOrThrowArgs} args - Arguments to find a PageElement
     * @example
     * // Get one PageElement
     * const pageElement = await prisma.pageElement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageElementFindUniqueOrThrowArgs>(args: SelectSubset<T, PageElementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageElementClient<$Result.GetResult<Prisma.$PageElementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageElement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageElementFindFirstArgs} args - Arguments to find a PageElement
     * @example
     * // Get one PageElement
     * const pageElement = await prisma.pageElement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageElementFindFirstArgs>(args?: SelectSubset<T, PageElementFindFirstArgs<ExtArgs>>): Prisma__PageElementClient<$Result.GetResult<Prisma.$PageElementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageElement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageElementFindFirstOrThrowArgs} args - Arguments to find a PageElement
     * @example
     * // Get one PageElement
     * const pageElement = await prisma.pageElement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageElementFindFirstOrThrowArgs>(args?: SelectSubset<T, PageElementFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageElementClient<$Result.GetResult<Prisma.$PageElementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PageElements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageElementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageElements
     * const pageElements = await prisma.pageElement.findMany()
     * 
     * // Get first 10 PageElements
     * const pageElements = await prisma.pageElement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageElementWithIdOnly = await prisma.pageElement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageElementFindManyArgs>(args?: SelectSubset<T, PageElementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageElementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PageElement.
     * @param {PageElementCreateArgs} args - Arguments to create a PageElement.
     * @example
     * // Create one PageElement
     * const PageElement = await prisma.pageElement.create({
     *   data: {
     *     // ... data to create a PageElement
     *   }
     * })
     * 
     */
    create<T extends PageElementCreateArgs>(args: SelectSubset<T, PageElementCreateArgs<ExtArgs>>): Prisma__PageElementClient<$Result.GetResult<Prisma.$PageElementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PageElements.
     * @param {PageElementCreateManyArgs} args - Arguments to create many PageElements.
     * @example
     * // Create many PageElements
     * const pageElement = await prisma.pageElement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageElementCreateManyArgs>(args?: SelectSubset<T, PageElementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PageElements and returns the data saved in the database.
     * @param {PageElementCreateManyAndReturnArgs} args - Arguments to create many PageElements.
     * @example
     * // Create many PageElements
     * const pageElement = await prisma.pageElement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PageElements and only return the `id`
     * const pageElementWithIdOnly = await prisma.pageElement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageElementCreateManyAndReturnArgs>(args?: SelectSubset<T, PageElementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageElementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PageElement.
     * @param {PageElementDeleteArgs} args - Arguments to delete one PageElement.
     * @example
     * // Delete one PageElement
     * const PageElement = await prisma.pageElement.delete({
     *   where: {
     *     // ... filter to delete one PageElement
     *   }
     * })
     * 
     */
    delete<T extends PageElementDeleteArgs>(args: SelectSubset<T, PageElementDeleteArgs<ExtArgs>>): Prisma__PageElementClient<$Result.GetResult<Prisma.$PageElementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PageElement.
     * @param {PageElementUpdateArgs} args - Arguments to update one PageElement.
     * @example
     * // Update one PageElement
     * const pageElement = await prisma.pageElement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageElementUpdateArgs>(args: SelectSubset<T, PageElementUpdateArgs<ExtArgs>>): Prisma__PageElementClient<$Result.GetResult<Prisma.$PageElementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PageElements.
     * @param {PageElementDeleteManyArgs} args - Arguments to filter PageElements to delete.
     * @example
     * // Delete a few PageElements
     * const { count } = await prisma.pageElement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageElementDeleteManyArgs>(args?: SelectSubset<T, PageElementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageElementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageElements
     * const pageElement = await prisma.pageElement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageElementUpdateManyArgs>(args: SelectSubset<T, PageElementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageElements and returns the data updated in the database.
     * @param {PageElementUpdateManyAndReturnArgs} args - Arguments to update many PageElements.
     * @example
     * // Update many PageElements
     * const pageElement = await prisma.pageElement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PageElements and only return the `id`
     * const pageElementWithIdOnly = await prisma.pageElement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageElementUpdateManyAndReturnArgs>(args: SelectSubset<T, PageElementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageElementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PageElement.
     * @param {PageElementUpsertArgs} args - Arguments to update or create a PageElement.
     * @example
     * // Update or create a PageElement
     * const pageElement = await prisma.pageElement.upsert({
     *   create: {
     *     // ... data to create a PageElement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageElement we want to update
     *   }
     * })
     */
    upsert<T extends PageElementUpsertArgs>(args: SelectSubset<T, PageElementUpsertArgs<ExtArgs>>): Prisma__PageElementClient<$Result.GetResult<Prisma.$PageElementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PageElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageElementCountArgs} args - Arguments to filter PageElements to count.
     * @example
     * // Count the number of PageElements
     * const count = await prisma.pageElement.count({
     *   where: {
     *     // ... the filter for the PageElements we want to count
     *   }
     * })
    **/
    count<T extends PageElementCountArgs>(
      args?: Subset<T, PageElementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageElementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageElementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PageElementAggregateArgs>(args: Subset<T, PageElementAggregateArgs>): Prisma.PrismaPromise<GetPageElementAggregateType<T>>

    /**
     * Group by PageElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageElementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PageElementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageElementGroupByArgs['orderBy'] }
        : { orderBy?: PageElementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PageElementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageElementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PageElement model
   */
  readonly fields: PageElementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageElement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageElementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    page<T extends PageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PageDefaultArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PageElement model
   */
  interface PageElementFieldRefs {
    readonly id: FieldRef<"PageElement", 'Int'>
    readonly title_en: FieldRef<"PageElement", 'String'>
    readonly title_pl: FieldRef<"PageElement", 'String'>
    readonly description_en: FieldRef<"PageElement", 'String'>
    readonly description_pl: FieldRef<"PageElement", 'String'>
    readonly image: FieldRef<"PageElement", 'String'>
    readonly imageAlt: FieldRef<"PageElement", 'String'>
    readonly pageId: FieldRef<"PageElement", 'Int'>
    readonly type: FieldRef<"PageElement", 'String'>
    readonly content: FieldRef<"PageElement", 'String'>
    readonly order: FieldRef<"PageElement", 'Int'>
    readonly rawContent_en: FieldRef<"PageElement", 'String'>
    readonly rawContent_pl: FieldRef<"PageElement", 'String'>
    readonly createdAt: FieldRef<"PageElement", 'DateTime'>
    readonly updatedAt: FieldRef<"PageElement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PageElement findUnique
   */
  export type PageElementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageElement
     */
    omit?: PageElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageElementInclude<ExtArgs> | null
    /**
     * Filter, which PageElement to fetch.
     */
    where: PageElementWhereUniqueInput
  }

  /**
   * PageElement findUniqueOrThrow
   */
  export type PageElementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageElement
     */
    omit?: PageElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageElementInclude<ExtArgs> | null
    /**
     * Filter, which PageElement to fetch.
     */
    where: PageElementWhereUniqueInput
  }

  /**
   * PageElement findFirst
   */
  export type PageElementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageElement
     */
    omit?: PageElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageElementInclude<ExtArgs> | null
    /**
     * Filter, which PageElement to fetch.
     */
    where?: PageElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageElements to fetch.
     */
    orderBy?: PageElementOrderByWithRelationInput | PageElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageElements.
     */
    cursor?: PageElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageElements.
     */
    distinct?: PageElementScalarFieldEnum | PageElementScalarFieldEnum[]
  }

  /**
   * PageElement findFirstOrThrow
   */
  export type PageElementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageElement
     */
    omit?: PageElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageElementInclude<ExtArgs> | null
    /**
     * Filter, which PageElement to fetch.
     */
    where?: PageElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageElements to fetch.
     */
    orderBy?: PageElementOrderByWithRelationInput | PageElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageElements.
     */
    cursor?: PageElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageElements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageElements.
     */
    distinct?: PageElementScalarFieldEnum | PageElementScalarFieldEnum[]
  }

  /**
   * PageElement findMany
   */
  export type PageElementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageElement
     */
    omit?: PageElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageElementInclude<ExtArgs> | null
    /**
     * Filter, which PageElements to fetch.
     */
    where?: PageElementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageElements to fetch.
     */
    orderBy?: PageElementOrderByWithRelationInput | PageElementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageElements.
     */
    cursor?: PageElementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageElements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageElements.
     */
    skip?: number
    distinct?: PageElementScalarFieldEnum | PageElementScalarFieldEnum[]
  }

  /**
   * PageElement create
   */
  export type PageElementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageElement
     */
    omit?: PageElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageElementInclude<ExtArgs> | null
    /**
     * The data needed to create a PageElement.
     */
    data: XOR<PageElementCreateInput, PageElementUncheckedCreateInput>
  }

  /**
   * PageElement createMany
   */
  export type PageElementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PageElements.
     */
    data: PageElementCreateManyInput | PageElementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PageElement createManyAndReturn
   */
  export type PageElementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageElement
     */
    omit?: PageElementOmit<ExtArgs> | null
    /**
     * The data used to create many PageElements.
     */
    data: PageElementCreateManyInput | PageElementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageElementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageElement update
   */
  export type PageElementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageElement
     */
    omit?: PageElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageElementInclude<ExtArgs> | null
    /**
     * The data needed to update a PageElement.
     */
    data: XOR<PageElementUpdateInput, PageElementUncheckedUpdateInput>
    /**
     * Choose, which PageElement to update.
     */
    where: PageElementWhereUniqueInput
  }

  /**
   * PageElement updateMany
   */
  export type PageElementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PageElements.
     */
    data: XOR<PageElementUpdateManyMutationInput, PageElementUncheckedUpdateManyInput>
    /**
     * Filter which PageElements to update
     */
    where?: PageElementWhereInput
    /**
     * Limit how many PageElements to update.
     */
    limit?: number
  }

  /**
   * PageElement updateManyAndReturn
   */
  export type PageElementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageElement
     */
    omit?: PageElementOmit<ExtArgs> | null
    /**
     * The data used to update PageElements.
     */
    data: XOR<PageElementUpdateManyMutationInput, PageElementUncheckedUpdateManyInput>
    /**
     * Filter which PageElements to update
     */
    where?: PageElementWhereInput
    /**
     * Limit how many PageElements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageElementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageElement upsert
   */
  export type PageElementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageElement
     */
    omit?: PageElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageElementInclude<ExtArgs> | null
    /**
     * The filter to search for the PageElement to update in case it exists.
     */
    where: PageElementWhereUniqueInput
    /**
     * In case the PageElement found by the `where` argument doesn't exist, create a new PageElement with this data.
     */
    create: XOR<PageElementCreateInput, PageElementUncheckedCreateInput>
    /**
     * In case the PageElement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageElementUpdateInput, PageElementUncheckedUpdateInput>
  }

  /**
   * PageElement delete
   */
  export type PageElementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageElement
     */
    omit?: PageElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageElementInclude<ExtArgs> | null
    /**
     * Filter which PageElement to delete.
     */
    where: PageElementWhereUniqueInput
  }

  /**
   * PageElement deleteMany
   */
  export type PageElementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageElements to delete
     */
    where?: PageElementWhereInput
    /**
     * Limit how many PageElements to delete.
     */
    limit?: number
  }

  /**
   * PageElement without action
   */
  export type PageElementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageElement
     */
    omit?: PageElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageElementInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PageScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title_en: 'title_en',
    title_pl: 'title_pl',
    description_en: 'description_en',
    description_pl: 'description_pl',
    content_en: 'content_en',
    content_pl: 'content_pl',
    metaDescription: 'metaDescription',
    metaKeywords: 'metaKeywords',
    metaTitle: 'metaTitle',
    metaImage: 'metaImage',
    metaImageAlt: 'metaImageAlt',
    rawContent_en: 'rawContent_en',
    rawContent_pl: 'rawContent_pl',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PageScalarFieldEnum = (typeof PageScalarFieldEnum)[keyof typeof PageScalarFieldEnum]


  export const PageElementScalarFieldEnum: {
    id: 'id',
    title_en: 'title_en',
    title_pl: 'title_pl',
    description_en: 'description_en',
    description_pl: 'description_pl',
    image: 'image',
    imageAlt: 'imageAlt',
    pageId: 'pageId',
    type: 'type',
    content: 'content',
    order: 'order',
    rawContent_en: 'rawContent_en',
    rawContent_pl: 'rawContent_pl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PageElementScalarFieldEnum = (typeof PageElementScalarFieldEnum)[keyof typeof PageElementScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'PageStatus'
   */
  export type EnumPageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PageStatus'>
    


  /**
   * Reference to a field of type 'PageStatus[]'
   */
  export type ListEnumPageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PageStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PageWhereInput = {
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    id?: IntFilter<"Page"> | number
    slug?: StringFilter<"Page"> | string
    title_en?: StringFilter<"Page"> | string
    title_pl?: StringFilter<"Page"> | string
    description_en?: StringNullableFilter<"Page"> | string | null
    description_pl?: StringNullableFilter<"Page"> | string | null
    content_en?: StringFilter<"Page"> | string
    content_pl?: StringNullableFilter<"Page"> | string | null
    metaDescription?: StringNullableFilter<"Page"> | string | null
    metaKeywords?: StringNullableFilter<"Page"> | string | null
    metaTitle?: StringNullableFilter<"Page"> | string | null
    metaImage?: StringNullableFilter<"Page"> | string | null
    metaImageAlt?: StringNullableFilter<"Page"> | string | null
    rawContent_en?: StringNullableFilter<"Page"> | string | null
    rawContent_pl?: StringNullableFilter<"Page"> | string | null
    status?: EnumPageStatusFilter<"Page"> | $Enums.PageStatus
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
    pageElements?: PageElementListRelationFilter
  }

  export type PageOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_pl?: SortOrder
    description_en?: SortOrderInput | SortOrder
    description_pl?: SortOrderInput | SortOrder
    content_en?: SortOrder
    content_pl?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    metaKeywords?: SortOrderInput | SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaImage?: SortOrderInput | SortOrder
    metaImageAlt?: SortOrderInput | SortOrder
    rawContent_en?: SortOrderInput | SortOrder
    rawContent_pl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pageElements?: PageElementOrderByRelationAggregateInput
  }

  export type PageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    title_en?: StringFilter<"Page"> | string
    title_pl?: StringFilter<"Page"> | string
    description_en?: StringNullableFilter<"Page"> | string | null
    description_pl?: StringNullableFilter<"Page"> | string | null
    content_en?: StringFilter<"Page"> | string
    content_pl?: StringNullableFilter<"Page"> | string | null
    metaDescription?: StringNullableFilter<"Page"> | string | null
    metaKeywords?: StringNullableFilter<"Page"> | string | null
    metaTitle?: StringNullableFilter<"Page"> | string | null
    metaImage?: StringNullableFilter<"Page"> | string | null
    metaImageAlt?: StringNullableFilter<"Page"> | string | null
    rawContent_en?: StringNullableFilter<"Page"> | string | null
    rawContent_pl?: StringNullableFilter<"Page"> | string | null
    status?: EnumPageStatusFilter<"Page"> | $Enums.PageStatus
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
    pageElements?: PageElementListRelationFilter
  }, "id" | "slug">

  export type PageOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_pl?: SortOrder
    description_en?: SortOrderInput | SortOrder
    description_pl?: SortOrderInput | SortOrder
    content_en?: SortOrder
    content_pl?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    metaKeywords?: SortOrderInput | SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaImage?: SortOrderInput | SortOrder
    metaImageAlt?: SortOrderInput | SortOrder
    rawContent_en?: SortOrderInput | SortOrder
    rawContent_pl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PageCountOrderByAggregateInput
    _avg?: PageAvgOrderByAggregateInput
    _max?: PageMaxOrderByAggregateInput
    _min?: PageMinOrderByAggregateInput
    _sum?: PageSumOrderByAggregateInput
  }

  export type PageScalarWhereWithAggregatesInput = {
    AND?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    OR?: PageScalarWhereWithAggregatesInput[]
    NOT?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Page"> | number
    slug?: StringWithAggregatesFilter<"Page"> | string
    title_en?: StringWithAggregatesFilter<"Page"> | string
    title_pl?: StringWithAggregatesFilter<"Page"> | string
    description_en?: StringNullableWithAggregatesFilter<"Page"> | string | null
    description_pl?: StringNullableWithAggregatesFilter<"Page"> | string | null
    content_en?: StringWithAggregatesFilter<"Page"> | string
    content_pl?: StringNullableWithAggregatesFilter<"Page"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"Page"> | string | null
    metaKeywords?: StringNullableWithAggregatesFilter<"Page"> | string | null
    metaTitle?: StringNullableWithAggregatesFilter<"Page"> | string | null
    metaImage?: StringNullableWithAggregatesFilter<"Page"> | string | null
    metaImageAlt?: StringNullableWithAggregatesFilter<"Page"> | string | null
    rawContent_en?: StringNullableWithAggregatesFilter<"Page"> | string | null
    rawContent_pl?: StringNullableWithAggregatesFilter<"Page"> | string | null
    status?: EnumPageStatusWithAggregatesFilter<"Page"> | $Enums.PageStatus
    createdAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
  }

  export type PageElementWhereInput = {
    AND?: PageElementWhereInput | PageElementWhereInput[]
    OR?: PageElementWhereInput[]
    NOT?: PageElementWhereInput | PageElementWhereInput[]
    id?: IntFilter<"PageElement"> | number
    title_en?: StringFilter<"PageElement"> | string
    title_pl?: StringFilter<"PageElement"> | string
    description_en?: StringNullableFilter<"PageElement"> | string | null
    description_pl?: StringNullableFilter<"PageElement"> | string | null
    image?: StringNullableFilter<"PageElement"> | string | null
    imageAlt?: StringNullableFilter<"PageElement"> | string | null
    pageId?: IntFilter<"PageElement"> | number
    type?: StringFilter<"PageElement"> | string
    content?: StringFilter<"PageElement"> | string
    order?: IntFilter<"PageElement"> | number
    rawContent_en?: StringNullableFilter<"PageElement"> | string | null
    rawContent_pl?: StringNullableFilter<"PageElement"> | string | null
    createdAt?: DateTimeFilter<"PageElement"> | Date | string
    updatedAt?: DateTimeFilter<"PageElement"> | Date | string
    page?: XOR<PageScalarRelationFilter, PageWhereInput>
  }

  export type PageElementOrderByWithRelationInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_pl?: SortOrder
    description_en?: SortOrderInput | SortOrder
    description_pl?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    imageAlt?: SortOrderInput | SortOrder
    pageId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    order?: SortOrder
    rawContent_en?: SortOrderInput | SortOrder
    rawContent_pl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    page?: PageOrderByWithRelationInput
  }

  export type PageElementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PageElementWhereInput | PageElementWhereInput[]
    OR?: PageElementWhereInput[]
    NOT?: PageElementWhereInput | PageElementWhereInput[]
    title_en?: StringFilter<"PageElement"> | string
    title_pl?: StringFilter<"PageElement"> | string
    description_en?: StringNullableFilter<"PageElement"> | string | null
    description_pl?: StringNullableFilter<"PageElement"> | string | null
    image?: StringNullableFilter<"PageElement"> | string | null
    imageAlt?: StringNullableFilter<"PageElement"> | string | null
    pageId?: IntFilter<"PageElement"> | number
    type?: StringFilter<"PageElement"> | string
    content?: StringFilter<"PageElement"> | string
    order?: IntFilter<"PageElement"> | number
    rawContent_en?: StringNullableFilter<"PageElement"> | string | null
    rawContent_pl?: StringNullableFilter<"PageElement"> | string | null
    createdAt?: DateTimeFilter<"PageElement"> | Date | string
    updatedAt?: DateTimeFilter<"PageElement"> | Date | string
    page?: XOR<PageScalarRelationFilter, PageWhereInput>
  }, "id">

  export type PageElementOrderByWithAggregationInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_pl?: SortOrder
    description_en?: SortOrderInput | SortOrder
    description_pl?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    imageAlt?: SortOrderInput | SortOrder
    pageId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    order?: SortOrder
    rawContent_en?: SortOrderInput | SortOrder
    rawContent_pl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PageElementCountOrderByAggregateInput
    _avg?: PageElementAvgOrderByAggregateInput
    _max?: PageElementMaxOrderByAggregateInput
    _min?: PageElementMinOrderByAggregateInput
    _sum?: PageElementSumOrderByAggregateInput
  }

  export type PageElementScalarWhereWithAggregatesInput = {
    AND?: PageElementScalarWhereWithAggregatesInput | PageElementScalarWhereWithAggregatesInput[]
    OR?: PageElementScalarWhereWithAggregatesInput[]
    NOT?: PageElementScalarWhereWithAggregatesInput | PageElementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PageElement"> | number
    title_en?: StringWithAggregatesFilter<"PageElement"> | string
    title_pl?: StringWithAggregatesFilter<"PageElement"> | string
    description_en?: StringNullableWithAggregatesFilter<"PageElement"> | string | null
    description_pl?: StringNullableWithAggregatesFilter<"PageElement"> | string | null
    image?: StringNullableWithAggregatesFilter<"PageElement"> | string | null
    imageAlt?: StringNullableWithAggregatesFilter<"PageElement"> | string | null
    pageId?: IntWithAggregatesFilter<"PageElement"> | number
    type?: StringWithAggregatesFilter<"PageElement"> | string
    content?: StringWithAggregatesFilter<"PageElement"> | string
    order?: IntWithAggregatesFilter<"PageElement"> | number
    rawContent_en?: StringNullableWithAggregatesFilter<"PageElement"> | string | null
    rawContent_pl?: StringNullableWithAggregatesFilter<"PageElement"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PageElement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PageElement"> | Date | string
  }

  export type PageCreateInput = {
    slug: string
    title_en: string
    title_pl: string
    description_en?: string | null
    description_pl?: string | null
    content_en: string
    content_pl?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    metaTitle?: string | null
    metaImage?: string | null
    metaImageAlt?: string | null
    rawContent_en?: string | null
    rawContent_pl?: string | null
    status?: $Enums.PageStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    pageElements?: PageElementCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateInput = {
    id?: number
    slug: string
    title_en: string
    title_pl: string
    description_en?: string | null
    description_pl?: string | null
    content_en: string
    content_pl?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    metaTitle?: string | null
    metaImage?: string | null
    metaImageAlt?: string | null
    rawContent_en?: string | null
    rawContent_pl?: string | null
    status?: $Enums.PageStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    pageElements?: PageElementUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_pl?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_pl?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: StringFieldUpdateOperationsInput | string
    content_pl?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaImage?: NullableStringFieldUpdateOperationsInput | string | null
    metaImageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    rawContent_en?: NullableStringFieldUpdateOperationsInput | string | null
    rawContent_pl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pageElements?: PageElementUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_pl?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_pl?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: StringFieldUpdateOperationsInput | string
    content_pl?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaImage?: NullableStringFieldUpdateOperationsInput | string | null
    metaImageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    rawContent_en?: NullableStringFieldUpdateOperationsInput | string | null
    rawContent_pl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pageElements?: PageElementUncheckedUpdateManyWithoutPageNestedInput
  }

  export type PageCreateManyInput = {
    id?: number
    slug: string
    title_en: string
    title_pl: string
    description_en?: string | null
    description_pl?: string | null
    content_en: string
    content_pl?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    metaTitle?: string | null
    metaImage?: string | null
    metaImageAlt?: string | null
    rawContent_en?: string | null
    rawContent_pl?: string | null
    status?: $Enums.PageStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_pl?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_pl?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: StringFieldUpdateOperationsInput | string
    content_pl?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaImage?: NullableStringFieldUpdateOperationsInput | string | null
    metaImageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    rawContent_en?: NullableStringFieldUpdateOperationsInput | string | null
    rawContent_pl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_pl?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_pl?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: StringFieldUpdateOperationsInput | string
    content_pl?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaImage?: NullableStringFieldUpdateOperationsInput | string | null
    metaImageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    rawContent_en?: NullableStringFieldUpdateOperationsInput | string | null
    rawContent_pl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageElementCreateInput = {
    title_en: string
    title_pl: string
    description_en?: string | null
    description_pl?: string | null
    image?: string | null
    imageAlt?: string | null
    type: string
    content: string
    order?: number
    rawContent_en?: string | null
    rawContent_pl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    page: PageCreateNestedOneWithoutPageElementsInput
  }

  export type PageElementUncheckedCreateInput = {
    id?: number
    title_en: string
    title_pl: string
    description_en?: string | null
    description_pl?: string | null
    image?: string | null
    imageAlt?: string | null
    pageId: number
    type: string
    content: string
    order?: number
    rawContent_en?: string | null
    rawContent_pl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageElementUpdateInput = {
    title_en?: StringFieldUpdateOperationsInput | string
    title_pl?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_pl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    rawContent_en?: NullableStringFieldUpdateOperationsInput | string | null
    rawContent_pl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: PageUpdateOneRequiredWithoutPageElementsNestedInput
  }

  export type PageElementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_en?: StringFieldUpdateOperationsInput | string
    title_pl?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_pl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    pageId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    rawContent_en?: NullableStringFieldUpdateOperationsInput | string | null
    rawContent_pl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageElementCreateManyInput = {
    id?: number
    title_en: string
    title_pl: string
    description_en?: string | null
    description_pl?: string | null
    image?: string | null
    imageAlt?: string | null
    pageId: number
    type: string
    content: string
    order?: number
    rawContent_en?: string | null
    rawContent_pl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageElementUpdateManyMutationInput = {
    title_en?: StringFieldUpdateOperationsInput | string
    title_pl?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_pl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    rawContent_en?: NullableStringFieldUpdateOperationsInput | string | null
    rawContent_pl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageElementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_en?: StringFieldUpdateOperationsInput | string
    title_pl?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_pl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    pageId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    rawContent_en?: NullableStringFieldUpdateOperationsInput | string | null
    rawContent_pl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumPageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PageStatus | EnumPageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PageStatus[] | ListEnumPageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PageStatus[] | ListEnumPageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPageStatusFilter<$PrismaModel> | $Enums.PageStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PageElementListRelationFilter = {
    every?: PageElementWhereInput
    some?: PageElementWhereInput
    none?: PageElementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PageElementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PageCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_pl?: SortOrder
    description_en?: SortOrder
    description_pl?: SortOrder
    content_en?: SortOrder
    content_pl?: SortOrder
    metaDescription?: SortOrder
    metaKeywords?: SortOrder
    metaTitle?: SortOrder
    metaImage?: SortOrder
    metaImageAlt?: SortOrder
    rawContent_en?: SortOrder
    rawContent_pl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PageMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_pl?: SortOrder
    description_en?: SortOrder
    description_pl?: SortOrder
    content_en?: SortOrder
    content_pl?: SortOrder
    metaDescription?: SortOrder
    metaKeywords?: SortOrder
    metaTitle?: SortOrder
    metaImage?: SortOrder
    metaImageAlt?: SortOrder
    rawContent_en?: SortOrder
    rawContent_pl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title_en?: SortOrder
    title_pl?: SortOrder
    description_en?: SortOrder
    description_pl?: SortOrder
    content_en?: SortOrder
    content_pl?: SortOrder
    metaDescription?: SortOrder
    metaKeywords?: SortOrder
    metaTitle?: SortOrder
    metaImage?: SortOrder
    metaImageAlt?: SortOrder
    rawContent_en?: SortOrder
    rawContent_pl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumPageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PageStatus | EnumPageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PageStatus[] | ListEnumPageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PageStatus[] | ListEnumPageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPageStatusWithAggregatesFilter<$PrismaModel> | $Enums.PageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPageStatusFilter<$PrismaModel>
    _max?: NestedEnumPageStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PageScalarRelationFilter = {
    is?: PageWhereInput
    isNot?: PageWhereInput
  }

  export type PageElementCountOrderByAggregateInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_pl?: SortOrder
    description_en?: SortOrder
    description_pl?: SortOrder
    image?: SortOrder
    imageAlt?: SortOrder
    pageId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    order?: SortOrder
    rawContent_en?: SortOrder
    rawContent_pl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageElementAvgOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    order?: SortOrder
  }

  export type PageElementMaxOrderByAggregateInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_pl?: SortOrder
    description_en?: SortOrder
    description_pl?: SortOrder
    image?: SortOrder
    imageAlt?: SortOrder
    pageId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    order?: SortOrder
    rawContent_en?: SortOrder
    rawContent_pl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageElementMinOrderByAggregateInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_pl?: SortOrder
    description_en?: SortOrder
    description_pl?: SortOrder
    image?: SortOrder
    imageAlt?: SortOrder
    pageId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    order?: SortOrder
    rawContent_en?: SortOrder
    rawContent_pl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageElementSumOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    order?: SortOrder
  }

  export type PageElementCreateNestedManyWithoutPageInput = {
    create?: XOR<PageElementCreateWithoutPageInput, PageElementUncheckedCreateWithoutPageInput> | PageElementCreateWithoutPageInput[] | PageElementUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageElementCreateOrConnectWithoutPageInput | PageElementCreateOrConnectWithoutPageInput[]
    createMany?: PageElementCreateManyPageInputEnvelope
    connect?: PageElementWhereUniqueInput | PageElementWhereUniqueInput[]
  }

  export type PageElementUncheckedCreateNestedManyWithoutPageInput = {
    create?: XOR<PageElementCreateWithoutPageInput, PageElementUncheckedCreateWithoutPageInput> | PageElementCreateWithoutPageInput[] | PageElementUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageElementCreateOrConnectWithoutPageInput | PageElementCreateOrConnectWithoutPageInput[]
    createMany?: PageElementCreateManyPageInputEnvelope
    connect?: PageElementWhereUniqueInput | PageElementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPageStatusFieldUpdateOperationsInput = {
    set?: $Enums.PageStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PageElementUpdateManyWithoutPageNestedInput = {
    create?: XOR<PageElementCreateWithoutPageInput, PageElementUncheckedCreateWithoutPageInput> | PageElementCreateWithoutPageInput[] | PageElementUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageElementCreateOrConnectWithoutPageInput | PageElementCreateOrConnectWithoutPageInput[]
    upsert?: PageElementUpsertWithWhereUniqueWithoutPageInput | PageElementUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: PageElementCreateManyPageInputEnvelope
    set?: PageElementWhereUniqueInput | PageElementWhereUniqueInput[]
    disconnect?: PageElementWhereUniqueInput | PageElementWhereUniqueInput[]
    delete?: PageElementWhereUniqueInput | PageElementWhereUniqueInput[]
    connect?: PageElementWhereUniqueInput | PageElementWhereUniqueInput[]
    update?: PageElementUpdateWithWhereUniqueWithoutPageInput | PageElementUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: PageElementUpdateManyWithWhereWithoutPageInput | PageElementUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: PageElementScalarWhereInput | PageElementScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PageElementUncheckedUpdateManyWithoutPageNestedInput = {
    create?: XOR<PageElementCreateWithoutPageInput, PageElementUncheckedCreateWithoutPageInput> | PageElementCreateWithoutPageInput[] | PageElementUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageElementCreateOrConnectWithoutPageInput | PageElementCreateOrConnectWithoutPageInput[]
    upsert?: PageElementUpsertWithWhereUniqueWithoutPageInput | PageElementUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: PageElementCreateManyPageInputEnvelope
    set?: PageElementWhereUniqueInput | PageElementWhereUniqueInput[]
    disconnect?: PageElementWhereUniqueInput | PageElementWhereUniqueInput[]
    delete?: PageElementWhereUniqueInput | PageElementWhereUniqueInput[]
    connect?: PageElementWhereUniqueInput | PageElementWhereUniqueInput[]
    update?: PageElementUpdateWithWhereUniqueWithoutPageInput | PageElementUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: PageElementUpdateManyWithWhereWithoutPageInput | PageElementUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: PageElementScalarWhereInput | PageElementScalarWhereInput[]
  }

  export type PageCreateNestedOneWithoutPageElementsInput = {
    create?: XOR<PageCreateWithoutPageElementsInput, PageUncheckedCreateWithoutPageElementsInput>
    connectOrCreate?: PageCreateOrConnectWithoutPageElementsInput
    connect?: PageWhereUniqueInput
  }

  export type PageUpdateOneRequiredWithoutPageElementsNestedInput = {
    create?: XOR<PageCreateWithoutPageElementsInput, PageUncheckedCreateWithoutPageElementsInput>
    connectOrCreate?: PageCreateOrConnectWithoutPageElementsInput
    upsert?: PageUpsertWithoutPageElementsInput
    connect?: PageWhereUniqueInput
    update?: XOR<XOR<PageUpdateToOneWithWhereWithoutPageElementsInput, PageUpdateWithoutPageElementsInput>, PageUncheckedUpdateWithoutPageElementsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumPageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PageStatus | EnumPageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PageStatus[] | ListEnumPageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PageStatus[] | ListEnumPageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPageStatusFilter<$PrismaModel> | $Enums.PageStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PageStatus | EnumPageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PageStatus[] | ListEnumPageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PageStatus[] | ListEnumPageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPageStatusWithAggregatesFilter<$PrismaModel> | $Enums.PageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPageStatusFilter<$PrismaModel>
    _max?: NestedEnumPageStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PageElementCreateWithoutPageInput = {
    title_en: string
    title_pl: string
    description_en?: string | null
    description_pl?: string | null
    image?: string | null
    imageAlt?: string | null
    type: string
    content: string
    order?: number
    rawContent_en?: string | null
    rawContent_pl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageElementUncheckedCreateWithoutPageInput = {
    id?: number
    title_en: string
    title_pl: string
    description_en?: string | null
    description_pl?: string | null
    image?: string | null
    imageAlt?: string | null
    type: string
    content: string
    order?: number
    rawContent_en?: string | null
    rawContent_pl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageElementCreateOrConnectWithoutPageInput = {
    where: PageElementWhereUniqueInput
    create: XOR<PageElementCreateWithoutPageInput, PageElementUncheckedCreateWithoutPageInput>
  }

  export type PageElementCreateManyPageInputEnvelope = {
    data: PageElementCreateManyPageInput | PageElementCreateManyPageInput[]
    skipDuplicates?: boolean
  }

  export type PageElementUpsertWithWhereUniqueWithoutPageInput = {
    where: PageElementWhereUniqueInput
    update: XOR<PageElementUpdateWithoutPageInput, PageElementUncheckedUpdateWithoutPageInput>
    create: XOR<PageElementCreateWithoutPageInput, PageElementUncheckedCreateWithoutPageInput>
  }

  export type PageElementUpdateWithWhereUniqueWithoutPageInput = {
    where: PageElementWhereUniqueInput
    data: XOR<PageElementUpdateWithoutPageInput, PageElementUncheckedUpdateWithoutPageInput>
  }

  export type PageElementUpdateManyWithWhereWithoutPageInput = {
    where: PageElementScalarWhereInput
    data: XOR<PageElementUpdateManyMutationInput, PageElementUncheckedUpdateManyWithoutPageInput>
  }

  export type PageElementScalarWhereInput = {
    AND?: PageElementScalarWhereInput | PageElementScalarWhereInput[]
    OR?: PageElementScalarWhereInput[]
    NOT?: PageElementScalarWhereInput | PageElementScalarWhereInput[]
    id?: IntFilter<"PageElement"> | number
    title_en?: StringFilter<"PageElement"> | string
    title_pl?: StringFilter<"PageElement"> | string
    description_en?: StringNullableFilter<"PageElement"> | string | null
    description_pl?: StringNullableFilter<"PageElement"> | string | null
    image?: StringNullableFilter<"PageElement"> | string | null
    imageAlt?: StringNullableFilter<"PageElement"> | string | null
    pageId?: IntFilter<"PageElement"> | number
    type?: StringFilter<"PageElement"> | string
    content?: StringFilter<"PageElement"> | string
    order?: IntFilter<"PageElement"> | number
    rawContent_en?: StringNullableFilter<"PageElement"> | string | null
    rawContent_pl?: StringNullableFilter<"PageElement"> | string | null
    createdAt?: DateTimeFilter<"PageElement"> | Date | string
    updatedAt?: DateTimeFilter<"PageElement"> | Date | string
  }

  export type PageCreateWithoutPageElementsInput = {
    slug: string
    title_en: string
    title_pl: string
    description_en?: string | null
    description_pl?: string | null
    content_en: string
    content_pl?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    metaTitle?: string | null
    metaImage?: string | null
    metaImageAlt?: string | null
    rawContent_en?: string | null
    rawContent_pl?: string | null
    status?: $Enums.PageStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageUncheckedCreateWithoutPageElementsInput = {
    id?: number
    slug: string
    title_en: string
    title_pl: string
    description_en?: string | null
    description_pl?: string | null
    content_en: string
    content_pl?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    metaTitle?: string | null
    metaImage?: string | null
    metaImageAlt?: string | null
    rawContent_en?: string | null
    rawContent_pl?: string | null
    status?: $Enums.PageStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageCreateOrConnectWithoutPageElementsInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutPageElementsInput, PageUncheckedCreateWithoutPageElementsInput>
  }

  export type PageUpsertWithoutPageElementsInput = {
    update: XOR<PageUpdateWithoutPageElementsInput, PageUncheckedUpdateWithoutPageElementsInput>
    create: XOR<PageCreateWithoutPageElementsInput, PageUncheckedCreateWithoutPageElementsInput>
    where?: PageWhereInput
  }

  export type PageUpdateToOneWithWhereWithoutPageElementsInput = {
    where?: PageWhereInput
    data: XOR<PageUpdateWithoutPageElementsInput, PageUncheckedUpdateWithoutPageElementsInput>
  }

  export type PageUpdateWithoutPageElementsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_pl?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_pl?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: StringFieldUpdateOperationsInput | string
    content_pl?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaImage?: NullableStringFieldUpdateOperationsInput | string | null
    metaImageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    rawContent_en?: NullableStringFieldUpdateOperationsInput | string | null
    rawContent_pl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageUncheckedUpdateWithoutPageElementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_pl?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_pl?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: StringFieldUpdateOperationsInput | string
    content_pl?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaImage?: NullableStringFieldUpdateOperationsInput | string | null
    metaImageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    rawContent_en?: NullableStringFieldUpdateOperationsInput | string | null
    rawContent_pl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageElementCreateManyPageInput = {
    id?: number
    title_en: string
    title_pl: string
    description_en?: string | null
    description_pl?: string | null
    image?: string | null
    imageAlt?: string | null
    type: string
    content: string
    order?: number
    rawContent_en?: string | null
    rawContent_pl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageElementUpdateWithoutPageInput = {
    title_en?: StringFieldUpdateOperationsInput | string
    title_pl?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_pl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    rawContent_en?: NullableStringFieldUpdateOperationsInput | string | null
    rawContent_pl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageElementUncheckedUpdateWithoutPageInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_en?: StringFieldUpdateOperationsInput | string
    title_pl?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_pl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    rawContent_en?: NullableStringFieldUpdateOperationsInput | string | null
    rawContent_pl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageElementUncheckedUpdateManyWithoutPageInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_en?: StringFieldUpdateOperationsInput | string
    title_pl?: StringFieldUpdateOperationsInput | string
    description_en?: NullableStringFieldUpdateOperationsInput | string | null
    description_pl?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    rawContent_en?: NullableStringFieldUpdateOperationsInput | string | null
    rawContent_pl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}