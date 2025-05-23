
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
 * Model SessionNote
 * 
 */
export type SessionNote = $Result.DefaultSelection<Prisma.$SessionNotePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SessionNotes
 * const sessionNotes = await prisma.sessionNote.findMany()
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
   * // Fetch zero or more SessionNotes
   * const sessionNotes = await prisma.sessionNote.findMany()
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
   * `prisma.sessionNote`: Exposes CRUD operations for the **SessionNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionNotes
    * const sessionNotes = await prisma.sessionNote.findMany()
    * ```
    */
  get sessionNote(): Prisma.SessionNoteDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    SessionNote: 'SessionNote'
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
      modelProps: "sessionNote"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SessionNote: {
        payload: Prisma.$SessionNotePayload<ExtArgs>
        fields: Prisma.SessionNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionNotePayload>
          }
          findFirst: {
            args: Prisma.SessionNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionNotePayload>
          }
          findMany: {
            args: Prisma.SessionNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionNotePayload>[]
          }
          create: {
            args: Prisma.SessionNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionNotePayload>
          }
          createMany: {
            args: Prisma.SessionNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionNotePayload>[]
          }
          delete: {
            args: Prisma.SessionNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionNotePayload>
          }
          update: {
            args: Prisma.SessionNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionNotePayload>
          }
          deleteMany: {
            args: Prisma.SessionNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionNotePayload>[]
          }
          upsert: {
            args: Prisma.SessionNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionNotePayload>
          }
          aggregate: {
            args: Prisma.SessionNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionNote>
          }
          groupBy: {
            args: Prisma.SessionNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionNoteCountArgs<ExtArgs>
            result: $Utils.Optional<SessionNoteCountAggregateOutputType> | number
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
    sessionNote?: SessionNoteOmit
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
   * Models
   */

  /**
   * Model SessionNote
   */

  export type AggregateSessionNote = {
    _count: SessionNoteCountAggregateOutputType | null
    _min: SessionNoteMinAggregateOutputType | null
    _max: SessionNoteMaxAggregateOutputType | null
  }

  export type SessionNoteMinAggregateOutputType = {
    id: string | null
    rawText: string | null
    generatedNote: string | null
    title: string | null
    createdAt: Date | null
  }

  export type SessionNoteMaxAggregateOutputType = {
    id: string | null
    rawText: string | null
    generatedNote: string | null
    title: string | null
    createdAt: Date | null
  }

  export type SessionNoteCountAggregateOutputType = {
    id: number
    rawText: number
    generatedNote: number
    title: number
    createdAt: number
    _all: number
  }


  export type SessionNoteMinAggregateInputType = {
    id?: true
    rawText?: true
    generatedNote?: true
    title?: true
    createdAt?: true
  }

  export type SessionNoteMaxAggregateInputType = {
    id?: true
    rawText?: true
    generatedNote?: true
    title?: true
    createdAt?: true
  }

  export type SessionNoteCountAggregateInputType = {
    id?: true
    rawText?: true
    generatedNote?: true
    title?: true
    createdAt?: true
    _all?: true
  }

  export type SessionNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionNote to aggregate.
     */
    where?: SessionNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionNotes to fetch.
     */
    orderBy?: SessionNoteOrderByWithRelationInput | SessionNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionNotes
    **/
    _count?: true | SessionNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionNoteMaxAggregateInputType
  }

  export type GetSessionNoteAggregateType<T extends SessionNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionNote[P]>
      : GetScalarType<T[P], AggregateSessionNote[P]>
  }




  export type SessionNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionNoteWhereInput
    orderBy?: SessionNoteOrderByWithAggregationInput | SessionNoteOrderByWithAggregationInput[]
    by: SessionNoteScalarFieldEnum[] | SessionNoteScalarFieldEnum
    having?: SessionNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionNoteCountAggregateInputType | true
    _min?: SessionNoteMinAggregateInputType
    _max?: SessionNoteMaxAggregateInputType
  }

  export type SessionNoteGroupByOutputType = {
    id: string
    rawText: string
    generatedNote: string | null
    title: string
    createdAt: Date
    _count: SessionNoteCountAggregateOutputType | null
    _min: SessionNoteMinAggregateOutputType | null
    _max: SessionNoteMaxAggregateOutputType | null
  }

  type GetSessionNoteGroupByPayload<T extends SessionNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionNoteGroupByOutputType[P]>
            : GetScalarType<T[P], SessionNoteGroupByOutputType[P]>
        }
      >
    >


  export type SessionNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rawText?: boolean
    generatedNote?: boolean
    title?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sessionNote"]>

  export type SessionNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rawText?: boolean
    generatedNote?: boolean
    title?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sessionNote"]>

  export type SessionNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rawText?: boolean
    generatedNote?: boolean
    title?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sessionNote"]>

  export type SessionNoteSelectScalar = {
    id?: boolean
    rawText?: boolean
    generatedNote?: boolean
    title?: boolean
    createdAt?: boolean
  }

  export type SessionNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rawText" | "generatedNote" | "title" | "createdAt", ExtArgs["result"]["sessionNote"]>

  export type $SessionNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionNote"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rawText: string
      generatedNote: string | null
      title: string
      createdAt: Date
    }, ExtArgs["result"]["sessionNote"]>
    composites: {}
  }

  type SessionNoteGetPayload<S extends boolean | null | undefined | SessionNoteDefaultArgs> = $Result.GetResult<Prisma.$SessionNotePayload, S>

  type SessionNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionNoteCountAggregateInputType | true
    }

  export interface SessionNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionNote'], meta: { name: 'SessionNote' } }
    /**
     * Find zero or one SessionNote that matches the filter.
     * @param {SessionNoteFindUniqueArgs} args - Arguments to find a SessionNote
     * @example
     * // Get one SessionNote
     * const sessionNote = await prisma.sessionNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionNoteFindUniqueArgs>(args: SelectSubset<T, SessionNoteFindUniqueArgs<ExtArgs>>): Prisma__SessionNoteClient<$Result.GetResult<Prisma.$SessionNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionNoteFindUniqueOrThrowArgs} args - Arguments to find a SessionNote
     * @example
     * // Get one SessionNote
     * const sessionNote = await prisma.sessionNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionNoteClient<$Result.GetResult<Prisma.$SessionNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionNoteFindFirstArgs} args - Arguments to find a SessionNote
     * @example
     * // Get one SessionNote
     * const sessionNote = await prisma.sessionNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionNoteFindFirstArgs>(args?: SelectSubset<T, SessionNoteFindFirstArgs<ExtArgs>>): Prisma__SessionNoteClient<$Result.GetResult<Prisma.$SessionNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionNoteFindFirstOrThrowArgs} args - Arguments to find a SessionNote
     * @example
     * // Get one SessionNote
     * const sessionNote = await prisma.sessionNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionNoteClient<$Result.GetResult<Prisma.$SessionNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionNotes
     * const sessionNotes = await prisma.sessionNote.findMany()
     * 
     * // Get first 10 SessionNotes
     * const sessionNotes = await prisma.sessionNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionNoteWithIdOnly = await prisma.sessionNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionNoteFindManyArgs>(args?: SelectSubset<T, SessionNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionNote.
     * @param {SessionNoteCreateArgs} args - Arguments to create a SessionNote.
     * @example
     * // Create one SessionNote
     * const SessionNote = await prisma.sessionNote.create({
     *   data: {
     *     // ... data to create a SessionNote
     *   }
     * })
     * 
     */
    create<T extends SessionNoteCreateArgs>(args: SelectSubset<T, SessionNoteCreateArgs<ExtArgs>>): Prisma__SessionNoteClient<$Result.GetResult<Prisma.$SessionNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionNotes.
     * @param {SessionNoteCreateManyArgs} args - Arguments to create many SessionNotes.
     * @example
     * // Create many SessionNotes
     * const sessionNote = await prisma.sessionNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionNoteCreateManyArgs>(args?: SelectSubset<T, SessionNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionNotes and returns the data saved in the database.
     * @param {SessionNoteCreateManyAndReturnArgs} args - Arguments to create many SessionNotes.
     * @example
     * // Create many SessionNotes
     * const sessionNote = await prisma.sessionNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionNotes and only return the `id`
     * const sessionNoteWithIdOnly = await prisma.sessionNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionNote.
     * @param {SessionNoteDeleteArgs} args - Arguments to delete one SessionNote.
     * @example
     * // Delete one SessionNote
     * const SessionNote = await prisma.sessionNote.delete({
     *   where: {
     *     // ... filter to delete one SessionNote
     *   }
     * })
     * 
     */
    delete<T extends SessionNoteDeleteArgs>(args: SelectSubset<T, SessionNoteDeleteArgs<ExtArgs>>): Prisma__SessionNoteClient<$Result.GetResult<Prisma.$SessionNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionNote.
     * @param {SessionNoteUpdateArgs} args - Arguments to update one SessionNote.
     * @example
     * // Update one SessionNote
     * const sessionNote = await prisma.sessionNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionNoteUpdateArgs>(args: SelectSubset<T, SessionNoteUpdateArgs<ExtArgs>>): Prisma__SessionNoteClient<$Result.GetResult<Prisma.$SessionNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionNotes.
     * @param {SessionNoteDeleteManyArgs} args - Arguments to filter SessionNotes to delete.
     * @example
     * // Delete a few SessionNotes
     * const { count } = await prisma.sessionNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionNoteDeleteManyArgs>(args?: SelectSubset<T, SessionNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionNotes
     * const sessionNote = await prisma.sessionNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionNoteUpdateManyArgs>(args: SelectSubset<T, SessionNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionNotes and returns the data updated in the database.
     * @param {SessionNoteUpdateManyAndReturnArgs} args - Arguments to update many SessionNotes.
     * @example
     * // Update many SessionNotes
     * const sessionNote = await prisma.sessionNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionNotes and only return the `id`
     * const sessionNoteWithIdOnly = await prisma.sessionNote.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionNote.
     * @param {SessionNoteUpsertArgs} args - Arguments to update or create a SessionNote.
     * @example
     * // Update or create a SessionNote
     * const sessionNote = await prisma.sessionNote.upsert({
     *   create: {
     *     // ... data to create a SessionNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionNote we want to update
     *   }
     * })
     */
    upsert<T extends SessionNoteUpsertArgs>(args: SelectSubset<T, SessionNoteUpsertArgs<ExtArgs>>): Prisma__SessionNoteClient<$Result.GetResult<Prisma.$SessionNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionNoteCountArgs} args - Arguments to filter SessionNotes to count.
     * @example
     * // Count the number of SessionNotes
     * const count = await prisma.sessionNote.count({
     *   where: {
     *     // ... the filter for the SessionNotes we want to count
     *   }
     * })
    **/
    count<T extends SessionNoteCountArgs>(
      args?: Subset<T, SessionNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionNoteAggregateArgs>(args: Subset<T, SessionNoteAggregateArgs>): Prisma.PrismaPromise<GetSessionNoteAggregateType<T>>

    /**
     * Group by SessionNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionNoteGroupByArgs} args - Group by arguments.
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
      T extends SessionNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionNoteGroupByArgs['orderBy'] }
        : { orderBy?: SessionNoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionNote model
   */
  readonly fields: SessionNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SessionNote model
   */
  interface SessionNoteFieldRefs {
    readonly id: FieldRef<"SessionNote", 'String'>
    readonly rawText: FieldRef<"SessionNote", 'String'>
    readonly generatedNote: FieldRef<"SessionNote", 'String'>
    readonly title: FieldRef<"SessionNote", 'String'>
    readonly createdAt: FieldRef<"SessionNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SessionNote findUnique
   */
  export type SessionNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionNote
     */
    select?: SessionNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionNote
     */
    omit?: SessionNoteOmit<ExtArgs> | null
    /**
     * Filter, which SessionNote to fetch.
     */
    where: SessionNoteWhereUniqueInput
  }

  /**
   * SessionNote findUniqueOrThrow
   */
  export type SessionNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionNote
     */
    select?: SessionNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionNote
     */
    omit?: SessionNoteOmit<ExtArgs> | null
    /**
     * Filter, which SessionNote to fetch.
     */
    where: SessionNoteWhereUniqueInput
  }

  /**
   * SessionNote findFirst
   */
  export type SessionNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionNote
     */
    select?: SessionNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionNote
     */
    omit?: SessionNoteOmit<ExtArgs> | null
    /**
     * Filter, which SessionNote to fetch.
     */
    where?: SessionNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionNotes to fetch.
     */
    orderBy?: SessionNoteOrderByWithRelationInput | SessionNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionNotes.
     */
    cursor?: SessionNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionNotes.
     */
    distinct?: SessionNoteScalarFieldEnum | SessionNoteScalarFieldEnum[]
  }

  /**
   * SessionNote findFirstOrThrow
   */
  export type SessionNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionNote
     */
    select?: SessionNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionNote
     */
    omit?: SessionNoteOmit<ExtArgs> | null
    /**
     * Filter, which SessionNote to fetch.
     */
    where?: SessionNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionNotes to fetch.
     */
    orderBy?: SessionNoteOrderByWithRelationInput | SessionNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionNotes.
     */
    cursor?: SessionNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionNotes.
     */
    distinct?: SessionNoteScalarFieldEnum | SessionNoteScalarFieldEnum[]
  }

  /**
   * SessionNote findMany
   */
  export type SessionNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionNote
     */
    select?: SessionNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionNote
     */
    omit?: SessionNoteOmit<ExtArgs> | null
    /**
     * Filter, which SessionNotes to fetch.
     */
    where?: SessionNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionNotes to fetch.
     */
    orderBy?: SessionNoteOrderByWithRelationInput | SessionNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionNotes.
     */
    cursor?: SessionNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionNotes.
     */
    skip?: number
    distinct?: SessionNoteScalarFieldEnum | SessionNoteScalarFieldEnum[]
  }

  /**
   * SessionNote create
   */
  export type SessionNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionNote
     */
    select?: SessionNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionNote
     */
    omit?: SessionNoteOmit<ExtArgs> | null
    /**
     * The data needed to create a SessionNote.
     */
    data: XOR<SessionNoteCreateInput, SessionNoteUncheckedCreateInput>
  }

  /**
   * SessionNote createMany
   */
  export type SessionNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionNotes.
     */
    data: SessionNoteCreateManyInput | SessionNoteCreateManyInput[]
  }

  /**
   * SessionNote createManyAndReturn
   */
  export type SessionNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionNote
     */
    select?: SessionNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionNote
     */
    omit?: SessionNoteOmit<ExtArgs> | null
    /**
     * The data used to create many SessionNotes.
     */
    data: SessionNoteCreateManyInput | SessionNoteCreateManyInput[]
  }

  /**
   * SessionNote update
   */
  export type SessionNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionNote
     */
    select?: SessionNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionNote
     */
    omit?: SessionNoteOmit<ExtArgs> | null
    /**
     * The data needed to update a SessionNote.
     */
    data: XOR<SessionNoteUpdateInput, SessionNoteUncheckedUpdateInput>
    /**
     * Choose, which SessionNote to update.
     */
    where: SessionNoteWhereUniqueInput
  }

  /**
   * SessionNote updateMany
   */
  export type SessionNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionNotes.
     */
    data: XOR<SessionNoteUpdateManyMutationInput, SessionNoteUncheckedUpdateManyInput>
    /**
     * Filter which SessionNotes to update
     */
    where?: SessionNoteWhereInput
    /**
     * Limit how many SessionNotes to update.
     */
    limit?: number
  }

  /**
   * SessionNote updateManyAndReturn
   */
  export type SessionNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionNote
     */
    select?: SessionNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionNote
     */
    omit?: SessionNoteOmit<ExtArgs> | null
    /**
     * The data used to update SessionNotes.
     */
    data: XOR<SessionNoteUpdateManyMutationInput, SessionNoteUncheckedUpdateManyInput>
    /**
     * Filter which SessionNotes to update
     */
    where?: SessionNoteWhereInput
    /**
     * Limit how many SessionNotes to update.
     */
    limit?: number
  }

  /**
   * SessionNote upsert
   */
  export type SessionNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionNote
     */
    select?: SessionNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionNote
     */
    omit?: SessionNoteOmit<ExtArgs> | null
    /**
     * The filter to search for the SessionNote to update in case it exists.
     */
    where: SessionNoteWhereUniqueInput
    /**
     * In case the SessionNote found by the `where` argument doesn't exist, create a new SessionNote with this data.
     */
    create: XOR<SessionNoteCreateInput, SessionNoteUncheckedCreateInput>
    /**
     * In case the SessionNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionNoteUpdateInput, SessionNoteUncheckedUpdateInput>
  }

  /**
   * SessionNote delete
   */
  export type SessionNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionNote
     */
    select?: SessionNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionNote
     */
    omit?: SessionNoteOmit<ExtArgs> | null
    /**
     * Filter which SessionNote to delete.
     */
    where: SessionNoteWhereUniqueInput
  }

  /**
   * SessionNote deleteMany
   */
  export type SessionNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionNotes to delete
     */
    where?: SessionNoteWhereInput
    /**
     * Limit how many SessionNotes to delete.
     */
    limit?: number
  }

  /**
   * SessionNote without action
   */
  export type SessionNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionNote
     */
    select?: SessionNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionNote
     */
    omit?: SessionNoteOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SessionNoteScalarFieldEnum: {
    id: 'id',
    rawText: 'rawText',
    generatedNote: 'generatedNote',
    title: 'title',
    createdAt: 'createdAt'
  };

  export type SessionNoteScalarFieldEnum = (typeof SessionNoteScalarFieldEnum)[keyof typeof SessionNoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type SessionNoteWhereInput = {
    AND?: SessionNoteWhereInput | SessionNoteWhereInput[]
    OR?: SessionNoteWhereInput[]
    NOT?: SessionNoteWhereInput | SessionNoteWhereInput[]
    id?: StringFilter<"SessionNote"> | string
    rawText?: StringFilter<"SessionNote"> | string
    generatedNote?: StringNullableFilter<"SessionNote"> | string | null
    title?: StringFilter<"SessionNote"> | string
    createdAt?: DateTimeFilter<"SessionNote"> | Date | string
  }

  export type SessionNoteOrderByWithRelationInput = {
    id?: SortOrder
    rawText?: SortOrder
    generatedNote?: SortOrderInput | SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionNoteWhereInput | SessionNoteWhereInput[]
    OR?: SessionNoteWhereInput[]
    NOT?: SessionNoteWhereInput | SessionNoteWhereInput[]
    rawText?: StringFilter<"SessionNote"> | string
    generatedNote?: StringNullableFilter<"SessionNote"> | string | null
    title?: StringFilter<"SessionNote"> | string
    createdAt?: DateTimeFilter<"SessionNote"> | Date | string
  }, "id">

  export type SessionNoteOrderByWithAggregationInput = {
    id?: SortOrder
    rawText?: SortOrder
    generatedNote?: SortOrderInput | SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    _count?: SessionNoteCountOrderByAggregateInput
    _max?: SessionNoteMaxOrderByAggregateInput
    _min?: SessionNoteMinOrderByAggregateInput
  }

  export type SessionNoteScalarWhereWithAggregatesInput = {
    AND?: SessionNoteScalarWhereWithAggregatesInput | SessionNoteScalarWhereWithAggregatesInput[]
    OR?: SessionNoteScalarWhereWithAggregatesInput[]
    NOT?: SessionNoteScalarWhereWithAggregatesInput | SessionNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionNote"> | string
    rawText?: StringWithAggregatesFilter<"SessionNote"> | string
    generatedNote?: StringNullableWithAggregatesFilter<"SessionNote"> | string | null
    title?: StringWithAggregatesFilter<"SessionNote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SessionNote"> | Date | string
  }

  export type SessionNoteCreateInput = {
    id?: string
    rawText: string
    generatedNote?: string | null
    title?: string
    createdAt?: Date | string
  }

  export type SessionNoteUncheckedCreateInput = {
    id?: string
    rawText: string
    generatedNote?: string | null
    title?: string
    createdAt?: Date | string
  }

  export type SessionNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    generatedNote?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    generatedNote?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionNoteCreateManyInput = {
    id?: string
    rawText: string
    generatedNote?: string | null
    title?: string
    createdAt?: Date | string
  }

  export type SessionNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    generatedNote?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawText?: StringFieldUpdateOperationsInput | string
    generatedNote?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionNoteCountOrderByAggregateInput = {
    id?: SortOrder
    rawText?: SortOrder
    generatedNote?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    rawText?: SortOrder
    generatedNote?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionNoteMinOrderByAggregateInput = {
    id?: SortOrder
    rawText?: SortOrder
    generatedNote?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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