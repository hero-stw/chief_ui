/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CartCreate {
  dish_id?: number;
  cart_id?: number;
  quantity?: number;
  user_id?: number;
}

export interface CartDetailResponse {
  dish_id?: number;
  cart_id?: number;
  quantity?: number;
  dish?: DishesResponse;
  id?: number;
}

export interface CartResponse {
  created_at?: string;
  updated_at?: string;
  cart_detail?: CartDetailResponse[];
  id?: number;
  user_id?: number;
}

export interface CartUpdate {
  quantity?: number;
}

export interface CategoryCreate {
  name?: string;
  slug?: string;
  image?: string;
  status?: number;
}

export interface CategoryResponse {
  name?: string;
  slug?: string;
  image?: string;
  status?: number;
  created_at?: string;
  updated_at?: string;
  id?: number;
}

export interface CategoryUpdate {
  name?: string;
  slug?: string;
  image?: string;
  status?: number;
}

export interface ChatCreate {
  message?: string;
  phone?: string;
  room_id?: number;
}

export interface ChatResponse {
  id?: number;
  sender?: UserResponse;
  content?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ChatTyping {
  typing?: string;
}

export interface ChatUpdate {
  sender_id?: number;
  receiver_id?: number;
  content?: string;
}

export interface CouponCreate {
  coupon?: string;
  description?: string;
  status?: number;
  type?: number;
  discount_percent?: number;
  discount_price?: number;
  price_sale_max?: number;
  quantity?: number;
  start_date?: string;
  end_date?: string;
}

export interface CouponResponse {
  coupon?: string;
  description?: string;
  status?: number;
  type?: number;
  discount_percent?: number;
  discount_price?: number;
  price_sale_max?: number;
  quantity?: number;
  created_at?: string;
  start_date?: string;
  end_date?: string;
  id?: number;
}

export interface CouponUpdate {
  coupon?: string;
  description?: string;
  status?: number;
  type?: number;
  discount_percent?: number;
  discount_price?: number;
  price_sale_max?: number;
  quantity?: number;
  start_date?: string;
  end_date?: string;
}

export interface DishesCreate {
  name?: string;
  slug?: string;
  price?: number;
  description?: string;
  content?: string;
  image?: object;
  quantity?: number;
  category_id?: number;
}

export interface DishesResponse {
  name?: string;
  slug?: string;
  price?: number;
  price_sale?: number;
  description?: string;
  content?: string;
  image?: string;
  quantity?: number;
  category_id?: number;
  created_at?: string;
  updated_at?: string;
  id?: number;
}

export interface DishesUpdate {
  name?: string;
  slug?: string;
  price?: number;
  description?: string;
  content?: string;
  image?: object;
  quantity?: number;
  category_id?: number;
}

export interface FileResponse {
  path?: string;
}

export interface FileUploadRequest {
  file?: object;
}

/**
 * GuestCreate
 * Guest request body data
 */
export interface GuestCreate {
  guest_name?: string;
  guest_slug?: string;
  notes?: string;
  pronoun?: string;
  prefix?: string;
  invitation_pronoun?: string;
  side?: string;
}

/**
 * GuestResponse
 * Guest request body data
 */
export interface GuestResponse {
  id?: number;
  guest_name?: string;
  guest_slug?: string;
  notes?: string;
  pronoun?: string;
  prefix?: string;
  invitation_pronoun?: string;
  side?: string;
  created_at?: string;
  updated_at?: string;
}

/**
 * MessageCreate
 * Message request body data
 */
export interface MessageCreate {
  /** @example Hero */
  name?: string;
  /** @example 0987654321 */
  phone?: string;
  /** @example Thank you for being here! */
  message?: string;
  /** @example 1 */
  confirm?: number;
  /** @example NT */
  side?: string;
  /** @example 1 */
  quantity?: number;
}

/**
 * MessageResponse
 * Message response data
 */
export interface MessageResponse {
  id?: number;
  name?: string;
  phone?: string;
  message?: string;
  confirm?: number;
  side?: string;
  quantity?: number;
  created_at?: string;
  updated_at?: string;
}

export interface LocationCreate {
  address?: string;
  distance?: number;
}

export interface LocationResponse {
  id?: number;
  address?: string;
  distance?: number;
  created_at?: string;
  updated_at?: string;
}

export interface LocationUpdate {
  address?: string;
  distance?: number;
}

/**
 * Log Data
 * Log model
 */
export interface LogResponse {
  id?: number;
  status?: string;
  change_by?: UserResponse;
  created_at?: string;
  updated_at?: string;
}

/**
 * Notification Request
 * Notification model
 */
export interface NotificationResponse {
  id?: number;
  message_template?: string;
  redirect_url?: string;
  type?: string;
  users?: UserResponse[];
  actor?: UserResponse;
  created_at?: string;
  updated_at?: string;
}

/**
 * UserNotification Response
 * Notification model
 */
export interface UserNotificationResponse {
  isSeen?: boolean;
  user?: UserResponse;
  /** Notification model */
  notification?: NotificationResponse;
  created_at?: string;
  updated_at?: string;
}

/**
 * Order Request
 * Order model
 */
export interface OrderCreate {
  phone?: string;
  note?: string;
  location_id?: number;
  total?: number;
  location_detail?: string;
  dishes?: OrderDetailRequest[];
  payment_method?: number;
  price_sale?: number;
  price_none_sale?: number;
  coupon_id?: number;
  payment_status?: number;
}

/**
 * Order Detail Request
 * Order model
 */
export interface OrderDetailRequest {
  dish_id?: number;
  quantity?: number;
  price?: number;
  price_sale?: number;
}

/**
 * Order Detail Response
 * Order model
 */
export interface OrderDetailResponse {
  dishes?: OrderDishItem[];
  logs?: LogResponse[];
  total?: string;
  created_at?: string;
  updated_at?: string;
}

/**
 * Order Dish Item
 * Order model
 */
export interface OrderDishItem {
  id?: number;
  image?: string;
  name?: string;
  slug?: string;
  quantity?: number;
  price?: number;
}

/**
 * Order Request
 * Order model
 */
export interface OrderRefundResponse {
  message?: string;
}

/**
 * Order Request
 * Order model
 */
export interface OrderResponse {
  id?: number;
  status?: number;
  code?: string;
  phone?: string;
  total?: string;
  note?: string;
  location?: LocationResponse;
  user?: UserResponse;
  payment_url?: string;
  location_detail?: string;
  price_sale?: number;
  price_none_sale?: number;
  coupon_id?: number;
  created_at?: string;
  updated_at?: string;
}

/**
 * Order Request
 * Order model
 */
export interface OrderUpdate {
  status?: number;
}

/**
 * Order Request
 * Order model
 */
export interface OrderUpdateClient {
  phone?: string;
  code?: string;
}

export interface ProgramCreate {
  title?: string;
  description?: string;
  discount_percent?: number;
  start_date?: string;
  end_date?: string;
  dish_ids?: ProgramDish[];
  banner?: string;
  status?: string;
}

export interface ProgramDish {
  dish_id?: number;
  discount_percent?: number;
}

export interface ProgramResponse {
  id?: number;
  title?: string;
  description?: string;
  discount_percent?: number;
  start_date?: string;
  end_date?: string;
  dishes?: DishesResponse[];
  banner?: string;
  status?: number;
  created_at?: string;
  updated_at?: string;
  dishes_flashSale?: DishItemFlashsale[];
  total_flashSale?: number;
}

export interface ProgramUpdate {
  title?: string;
  description?: string;
  discount_percent?: number;
  start_date?: string;
  end_date?: string;
  dish_ids?: ProgramDish[];
  banner?: string;
  status?: number;
}

export interface RoomCreate {
  user_phone?: string;
  user_name?: string;
}

export interface RoomMessageNotSeen {
  messageNotSeen?: string;
}

export interface RoomResponse {
  id?: number;
  user_phone?: string;
  user_name?: string;
  messages?: ChatResponse;
}

/**
 * Setting Request
 * Setting model
 */
export interface SettingRespone {
  name: string;
  phone?: string;
  email?: string;
  logo?: string;
  address?: string;
  created_at?: string;
  updated_at?: string;
  id?: number;
}

/**
 * Setting Update
 * Setting model
 */
export interface SettingUpdate {
  name: string;
  phone?: string;
  email?: string;
  logo?: string;
  address?: string;
  created_at?: string;
  updated_at?: string;
  id?: number;
}

export interface DishItemFlashsale {
  id?: number;
  name?: string;
  price?: number;
  image?: string;
  quantity_buy?: number;
  total?: number;
}

export interface StaticFlashsaleResponse {
  id?: number;
  status?: number;
  title?: string;
  discount_percent?: number;
  start_date?: string;
  end_date?: string;
  total_flashSale?: number;
  dish_in_flashsale?: DishItemFlashsale[];
}

export interface StatisticCategoryResponse {
  id?: number;
  name?: string;
  dishes_count?: string;
}

/**
 *  Dish Item
 *  model
 */
export interface StatisticDishItem {
  id?: number;
  name?: string;
  price?: number;
  quantity_buy?: number;
  total?: number;
}

export interface StatisticResponse {
  duration?: string;
  dishes?: StatisticDishItem[];
  total_money?: number;
}

export interface StatisticTopProductResponse {
  users?: number;
  dishes?: number;
  categories?: number;
  orders?: number;
  topSelling?: StatisticDishItem[];
}

/**
 * User Login Request
 * User Login request body data
 */
export interface UserLogin {
  phone?: string;
  password?: string;
}

/**
 * User register request
 * User register request body data
 */
export interface UserRegister {
  name: string;
  phone?: string;
  password: string;
  password_confirmation?: string;
}

export interface UserResponse {
  name?: string;
  phone?: string;
  email?: string;
  avatar?: string;
  status?: number;
  created_at?: string;
  updated_at?: string;
  id?: number;
}

/**
 * User Update Request
 * User Update request body data
 */
export interface UserUpdate {
  role?: string;
  status?: number;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "https://order-me-api.herokuapp.com/api/v1",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: Iterable<any> = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Laravel OpenApi
 * @version 1.0.0
 * @license Apache 2.0 (http://www.apache.org/licenses/LICENSE-2.0.html)
 * @baseUrl https://order-me-api.herokuapp.com/api/v1
 * @contact <admin@admin.com>
 *
 * L5 Swagger OpenApi description
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  admin = {
    /**
     * @description Returns list of category
     *
     * @tags Category
     * @name GetCategories
     * @summary Get list of category
     * @request GET:/admin/category
     */
    getCategories: (
      query?: {
        /** Category name */
        keyword?: string;
        /** Category status */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CategoryResponse, any>({
        path: `/admin/category`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns category data
     *
     * @tags Category
     * @name CreateCategory
     * @summary Create new category
     * @request POST:/admin/category
     */
    createCategory: (data: CategoryCreate, params: RequestParams = {}) =>
      this.request<CategoryResponse, any>({
        path: `/admin/category`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns category data
     *
     * @tags Category
     * @name GetCategoryById
     * @summary Get category information
     * @request GET:/admin/category/{id}
     */
    getCategoryById: (id: number, params: RequestParams = {}) =>
      this.request<CategoryResponse, any>({
        path: `/admin/category/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns updated category data
     *
     * @tags Category
     * @name UpdateCategory
     * @summary Update existing category
     * @request PUT:/admin/category/{id}
     */
    updateCategory: (id: number, data: CategoryUpdate, params: RequestParams = {}) =>
      this.request<CategoryResponse, any>({
        path: `/admin/category/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a record and returns no content
     *
     * @tags Category
     * @name DeleteCategory
     * @summary Delete existing category
     * @request DELETE:/admin/category/{id}
     */
    deleteCategory: (id: number, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/admin/category/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of Coupon
     *
     * @tags Coupon
     * @name GetCoupon
     * @summary Get list of Coupon
     * @request GET:/admin/coupon
     */
    getCoupon: (
      query?: {
        /** name coupon */
        keyword?: string;
        /** type = 1 là giá chiết khấu %, type = 2 là giá đơn hàng cố định */
        type?: number;
        /** limit page */
        limit?: string;
        /** page */
        page?: string;
        /**  sort by query vd :-id,+id,+name,-name,-price,+price */
        orderBy?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CouponResponse, any>({
        path: `/admin/coupon`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns coupon data
     *
     * @tags Coupon
     * @name CreateCoupon
     * @summary Create new coupon
     * @request POST:/admin/coupon
     */
    createCoupon: (data: CouponCreate, params: RequestParams = {}) =>
      this.request<CouponResponse, any>({
        path: `/admin/coupon`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns coupon data
     *
     * @tags Coupon
     * @name GetCouponById
     * @summary Get coupon information
     * @request GET:/admin/coupon/{id}
     */
    getCouponById: (id: number, params: RequestParams = {}) =>
      this.request<CouponResponse, any>({
        path: `/admin/coupon/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns updated coupon data
     *
     * @tags Coupon
     * @name UpdateCoupon
     * @summary Update existing coupon
     * @request PUT:/admin/coupon/{id}
     */
    updateCoupon: (id: number, data: CouponUpdate, params: RequestParams = {}) =>
      this.request<CouponResponse, any>({
        path: `/admin/coupon/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a record and returns no content
     *
     * @tags Coupon
     * @name DeleteCoupon
     * @summary Delete existing coupon
     * @request DELETE:/admin/coupon/{id}
     */
    deleteCoupon: (id: number, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/admin/coupon/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of dish
     *
     * @tags Dish
     * @name GetDishes
     * @summary Get list of dish
     * @request GET:/admin/dish
     */
    getDishes: (
      query?: {
        /** category slug */
        category?: string;
        /** dish name */
        keyword?: string;
        /** limit size  */
        limit?: string;
        /** page size  */
        page?: string;
        /**  start price */
        start_price?: number;
        /**  end price */
        end_price?: number;
        /**  sort by query vd :-id,+id,+name,-name,-price,+price */
        orderBy?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<DishesResponse, any>({
        path: `/admin/dish`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns dish data
     *
     * @tags Dish
     * @name CreateDish
     * @summary Create new dish
     * @request POST:/admin/dish
     */
    createDish: (data: DishesCreate, params: RequestParams = {}) =>
      this.request<DishesResponse, any>({
        path: `/admin/dish`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns dish data
     *
     * @tags Dish
     * @name GetDishById
     * @summary Get dish information
     * @request GET:/admin/dish/{id}
     */
    getDishById: (id: number, params: RequestParams = {}) =>
      this.request<DishesResponse, any>({
        path: `/admin/dish/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns updated dish data
     *
     * @tags Dish
     * @name UpdateDish
     * @summary Update existing dish
     * @request PUT:/admin/dish/{id}
     */
    updateDish: (id: number, data: DishesUpdate, params: RequestParams = {}) =>
      this.request<DishesResponse, any>({
        path: `/admin/dish/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a record and returns no content
     *
     * @tags Dish
     * @name DeleteDish
     * @summary Delete existing dish
     * @request DELETE:/admin/dish/{id}
     */
    deleteDish: (id: number, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/admin/dish/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of location
     *
     * @tags Location
     * @name GetLocations
     * @summary Get list of locltion
     * @request GET:/admin/location
     */
    getLocations: (
      query?: {
        /** address or distance location */
        keyword?: string;
        /** limit page */
        limit?: string;
        /** page */
        page?: string;
        /**  sort by query vd :-id,+id,+name,-name,-price,+price */
        orderBy?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<LocationResponse, any>({
        path: `/admin/location`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns location data
     *
     * @tags Location
     * @name CreateLocation
     * @summary Create new location
     * @request POST:/admin/location
     */
    createLocation: (data: LocationCreate, params: RequestParams = {}) =>
      this.request<LocationResponse, any>({
        path: `/admin/location`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns location data
     *
     * @tags Location
     * @name GetLocationById
     * @summary Get location information
     * @request GET:/admin/location/{id}
     */
    getLocationById: (id: number, params: RequestParams = {}) =>
      this.request<LocationResponse, any>({
        path: `/admin/location/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns updated location data
     *
     * @tags Location
     * @name UpdateLocation
     * @summary Update existing location
     * @request PUT:/admin/location/{id}
     */
    updateLocation: (id: number, data: LocationUpdate, params: RequestParams = {}) =>
      this.request<LocationResponse, any>({
        path: `/admin/location/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a record and returns no content
     *
     * @tags Location
     * @name DeleteLocation
     * @summary Delete existing location
     * @request DELETE:/admin/location/{id}
     */
    deleteLocation: (id: number, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/admin/location/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of notification
     *
     * @tags Notification
     * @name GetNotifies
     * @summary Get list of notification
     * @request GET:/admin/notification
     */
    getNotifies: (params: RequestParams = {}) =>
      this.request<UserNotificationResponse, any>({
        path: `/admin/notification`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of order
     *
     * @tags Order
     * @name GetOrders
     * @summary Get list of order
     * @request GET:/admin/order
     */
    getOrders: (
      query?: {
        /** code of order */
        keyword?: string;
        /** start date of order */
        start_date?: string;
        /** end date of order */
        end_date?: string;
        /** limit size  */
        limit?: string;
        /** page size  */
        page?: string;
        /** status of order */
        status?: string;
        /**  sort by query vd :-id,+id,+name,-name,-price,+price */
        orderBy?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<OrderResponse, any>({
        path: `/admin/order`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns order data
     *
     * @tags Order
     * @name CreateOrder
     * @summary Create new order
     * @request POST:/admin/order
     */
    createOrder: (data: OrderCreate, params: RequestParams = {}) =>
      this.request<OrderResponse, any>({
        path: `/admin/order`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns order data
     *
     * @tags Order
     * @name GetOrderByIdAdmin
     * @summary Get order detail information
     * @request GET:/admin/order/{id}
     */
    getOrderByIdAdmin: (id: number, params: RequestParams = {}) =>
      this.request<OrderDetailResponse, any>({
        path: `/admin/order/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns updated location data
     *
     * @tags Order
     * @name UpdateOrderAdmin
     * @summary Update existing Order
     * @request PUT:/admin/order/{id}
     */
    updateOrderAdmin: (id: number, data: OrderUpdate, params: RequestParams = {}) =>
      this.request<OrderResponse, any>({
        path: `/admin/order/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns data
     *
     * @tags Order
     * @name RefundMoneyVnp
     * @summary Refund money
     * @request PUT:/admin/order/refund/{id}
     */
    refundMoneyVnp: (id: number, params: RequestParams = {}) =>
      this.request<OrderRefundResponse, any>({
        path: `/admin/order/refund/${id}`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of program
     *
     * @tags Program
     * @name GetPrograms
     * @summary Get list of program
     * @request GET:/admin/program
     */
    getPrograms: (
      query?: {
        /** Search by name flasale */
        keyword?: string;
        /** program status */
        status?: number;
        /** nhiều trường */
        orderBy?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ProgramResponse, any>({
        path: `/admin/program`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns program data
     *
     * @tags Program
     * @name CreateProgram
     * @summary Create new program
     * @request POST:/admin/program
     */
    createProgram: (data: ProgramCreate, params: RequestParams = {}) =>
      this.request<ProgramResponse, any>({
        path: `/admin/program`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns program data
     *
     * @tags Program
     * @name GetProgramById
     * @summary Get program information
     * @request GET:/admin/program/{id}
     */
    getProgramById: (id: number, params: RequestParams = {}) =>
      this.request<ProgramResponse, any>({
        path: `/admin/program/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns updated program data
     *
     * @tags Program
     * @name UpdateProgram
     * @summary Update existing program
     * @request PUT:/admin/program/{id}
     */
    updateProgram: (id: number, data: ProgramUpdate, params: RequestParams = {}) =>
      this.request<ProgramResponse, any>({
        path: `/admin/program/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a record and returns no content
     *
     * @tags Program
     * @name DeleteProgram
     * @summary Delete existing program
     * @request DELETE:/admin/program/{id}
     */
    deleteProgram: (id: number, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/admin/program/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of setting
     *
     * @tags Setting
     * @name GetSettings
     * @summary Get list of setting
     * @request GET:/admin/setting
     */
    getSettings: (params: RequestParams = {}) =>
      this.request<SettingRespone, any>({
        path: `/admin/setting`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns updated Setting data
     *
     * @tags Setting
     * @name UpdateSetting
     * @summary Update existing Setting
     * @request PUT:/admin/setting/{id}
     */
    updateSetting: (id: number, data: SettingUpdate, params: RequestParams = {}) =>
      this.request<SettingRespone, any>({
        path: `/admin/setting/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of statistical
     *
     * @tags Statistical
     * @name GetStatistical
     * @summary Get list of statistical
     * @request GET:/admin/statistical
     */
    getStatistical: (
      query?: {
        /** filter by month , day ,week example : sort=day,moth,week */
        sort?: string;
        /** filter by duration example: duration= -7 => 7 day ago || duration= 7 => +7 day   */
        duration?: number;
        /** show by column  */
        column?: number;
        /** filter by day start_date  */
        start_date?: string;
        /** filter by day end_date */
        end_date?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<StatisticResponse, any>({
        path: `/admin/statistical`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of statistical all table
     *
     * @tags Statistical
     * @name GetStatisticalAllTable
     * @summary Get list of statistical all table
     * @request GET:/admin/statistical/all-table
     */
    getStatisticalAllTable: (
      query?: {
        /** filter by day start_date  */
        start_date?: string;
        /** filter by day end_date */
        end_date?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<StatisticTopProductResponse, any>({
        path: `/admin/statistical/all-table`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of statistical category table
     *
     * @tags Statistical
     * @name GetStatisticalCategoryTable
     * @summary Get list of statistical category table
     * @request GET:/admin/statistical/category-table
     */
    getStatisticalCategoryTable: (params: RequestParams = {}) =>
      this.request<StatisticCategoryResponse, any>({
        path: `/admin/statistical/category-table`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of statistical flash sale
     *
     * @tags Statistical
     * @name GetStatisticalFlashSale
     * @summary Get list of statistical flash sale
     * @request GET:/admin/statistical/flash-sale
     */
    getStatisticalFlashSale: (
      query?: {
        /** filter by day start_date  */
        start_date?: string;
        /** filter by day end_date */
        end_date?: string;
        /** limit size  */
        limit?: string;
        /** page size  */
        page?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<StaticFlashsaleResponse, any>({
        path: `/admin/statistical/flash-sale`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of user
     *
     * @tags User
     * @name GetUsers
     * @summary Get list of user
     * @request GET:/admin/user
     */
    getUsers: (
      query?: {
        /** Search by name, phone, email */
        keyword?: string;
        /** User status */
        status?: number;
        /** User role */
        role?: string;
        /**  sort by query vd :-id,+id,+name,-name,-price,+price */
        orderBy?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<UserResponse, any>({
        path: `/admin/user`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns updated User data
     *
     * @tags User
     * @name UpdateUser
     * @summary Update existing User
     * @request PUT:/admin/user/{id}
     */
    updateUser: (id: number, data: UserUpdate, params: RequestParams = {}) =>
      this.request<UserResponse, any>({
        path: `/admin/user/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns chat data
     *
     * @tags Chat
     * @name GetChatByRoom
     * @summary Get chat information
     * @request GET:/admin/chat-by-room/{id}
     */
    getChatByRoom: (id: number, params: RequestParams = {}) =>
      this.request<ChatResponse, any>({
        path: `/admin/chat-by-room/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of room
     *
     * @tags Room
     * @name GetRooms
     * @summary Get list of room
     * @request GET:/admin/room
     */
    getRooms: (
      query?: {
        /** user name */
        keyword?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RoomResponse, any>({
        path: `/admin/room`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  register = {
    /**
     * @description Returns user data
     *
     * @tags Authenticate
     * @name AuthRegister
     * @summary Create new
     * @request POST:/register
     */
    authRegister: (data: UserRegister, params: RequestParams = {}) =>
      this.request<UserResponse, void>({
        path: `/register`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  login = {
    /**
     * @description Login into system
     *
     * @tags Authenticate
     * @name AuthLogin
     * @summary User Login
     * @request POST:/login
     */
    authLogin: (data: UserLogin, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  logout = {
    /**
     * @description logout
     *
     * @tags Authenticate
     * @name AuthLogout
     * @summary Logout
     * @request GET:/logout
     */
    authLogout: (params: RequestParams = {}) =>
      this.request<
        any,
        {
          /** @example Unauthenticated. */
          message?: string;
        }
      >({
        path: `/logout`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  checkUserPhone = {
    /**
     * @description Check User Phone and return boolean value
     *
     * @tags Authenticate
     * @name CheckUserPhone
     * @summary Check User Phone
     * @request POST:/check-user-phone
     */
    checkUserPhone: (
      data: {
        /** @format string */
        phone?: any;
        /** @format string */
        name?: any;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @format boolean */
          isExits?: any;
        },
        any
      >({
        path: `/check-user-phone`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  me = {
    /**
     * @description Returns a single user.
     *
     * @tags Authenticate
     * @name GetProfile
     * @summary Get user
     * @request GET:/me
     */
    getProfile: (params: RequestParams = {}) =>
      this.request<
        UserResponse,
        {
          /** @example Unauthenticated. */
          message?: string;
        }
      >({
        path: `/me`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  chatByUser = {
    /**
     * @description Returns list of chat
     *
     * @tags Chat
     * @name GetChatByUser
     * @summary Get list of chat
     * @request GET:/chat-by-user/{phone}
     */
    getChatByUser: (phone: string, params: RequestParams = {}) =>
      this.request<ChatResponse, any>({
        path: `/chat-by-user/${phone}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  chat = {
    /**
     * @description Returns chat data
     *
     * @tags Chat
     * @name CreateChat
     * @summary Create new chat
     * @request POST:/chat
     */
    createChat: (data: ChatCreate, params: RequestParams = {}) =>
      this.request<ChatResponse, any>({
        path: `/chat`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns Typing chat realtime
     *
     * @tags Chat
     * @name TypingChat
     * @summary Typing chat realtime
     * @request POST:/chat/typing
     */
    typingChat: (data: ChatTyping, params: RequestParams = {}) =>
      this.request<ChatResponse, any>({
        path: `/chat/typing`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  chief = {
    /**
     * @description Returns list of order
     *
     * @tags Chief Order
     * @name GetOrdersByChief
     * @summary Get list of order
     * @request GET:/chief/order
     */
    getOrdersByChief: (
      query?: {
        /** Can search by order code, user name */
        keyword?: string;
        /** limit size  */
        limit?: string;
        /** page size  */
        page?: string;
        /** status of order */
        status?: string;
        /** can sort by multiple field vd :-id,+id,+name,-name,-code, +code */
        orderBy?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<OrderResponse, any>({
        path: `/chief/order`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns order data
     *
     * @tags Chief Order
     * @name GetOrderChiefById
     * @summary Get order information
     * @request GET:/chief/order/{id}
     */
    getOrderChiefById: (id: number, params: RequestParams = {}) =>
      this.request<OrderDetailResponse, any>({
        path: `/chief/order/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns updated location data
     *
     * @tags Chief Order
     * @name UpdateOrderChief
     * @summary Update existing Order
     * @request PUT:/chief/order/{id}
     */
    updateOrderChief: (id: number, params: RequestParams = {}) =>
      this.request<OrderResponse, any>({
        path: `/chief/order/${id}`,
        method: "PUT",
        format: "json",
        ...params,
      }),
  };
  client = {
    /**
     * @description Returns list of Cart
     *
     * @tags Cart
     * @name GetCartByUserId
     * @summary Get list of Cart
     * @request GET:/client/cart/{id}
     */
    getCartByUserId: (id: number, params: RequestParams = {}) =>
      this.request<CartResponse, any>({
        path: `/client/cart/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns updated cart data
     *
     * @tags Cart
     * @name UpdateCart
     * @summary Update existing cart
     * @request PUT:/client/cart/{id}
     */
    updateCart: (id: number, data: CartUpdate, params: RequestParams = {}) =>
      this.request<CartResponse, any>({
        path: `/client/cart/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a record and returns no content
     *
     * @tags Cart
     * @name DeleteCart
     * @summary Delete existing cart
     * @request DELETE:/client/cart/{id}
     */
    deleteCart: (id: number, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/client/cart/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns cart data
     *
     * @tags Cart
     * @name AddToCart
     * @summary Add products to cart
     * @request POST:/client/cart
     */
    addToCart: (data: CartCreate, params: RequestParams = {}) =>
      this.request<CartResponse, any>({
        path: `/client/cart`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete multiple record and returns no content
     *
     * @tags Cart
     * @name DeleteCartMultiple
     * @summary Delete existing cart
     * @request POST:/client/cart/deleteMultiple
     */
    deleteCartMultiple: (
      query: {
        /** Cart id */
        "cartIds[]": number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/client/cart/deleteMultiple`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of category
     *
     * @tags CategoryClient
     * @name GetClientCategories
     * @summary Get list of category
     * @request GET:/client/category
     */
    getClientCategories: (
      query?: {
        /** Category name */
        keyword?: string;
        /** Category status */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CategoryResponse, any>({
        path: `/client/category`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of Coupon
     *
     * @tags Coupon Client
     * @name GetCouponClient
     * @summary Get list of Coupon
     * @request GET:/client/coupon
     */
    getCouponClient: (params: RequestParams = {}) =>
      this.request<CouponResponse, any>({
        path: `/client/coupon`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns coupon data
     *
     * @tags Coupon Client
     * @name GetCouponByIdClient
     * @summary Get coupon information
     * @request GET:/client/coupon/{id}
     */
    getCouponByIdClient: (id: number, params: RequestParams = {}) =>
      this.request<CouponResponse, any>({
        path: `/client/coupon/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of dish
     *
     * @tags DishClient
     * @name GetClientDishes
     * @summary Get list of dish
     * @request GET:/client/dish
     */
    getClientDishes: (
      query?: {
        /** category slug */
        category?: string;
        /** dish name */
        keyword?: string;
        /** limit size  */
        limit?: string;
        /** page size  */
        page?: string;
        /**  start price */
        start_price?: number;
        /**  end price */
        end_price?: number;
        /**  sort by query vd :-id,+id,+name,-name,-price,+price */
        orderBy?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<DishesResponse, any>({
        path: `/client/dish`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns dish data
     *
     * @tags DishClient
     * @name GetClientDishById
     * @summary Get dish information
     * @request GET:/client/dish/{id}
     */
    getClientDishById: (id: number, params: RequestParams = {}) =>
      this.request<DishesResponse, any>({
        path: `/client/dish/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns dish data
     *
     * @tags DishClient
     * @name GetClientDishByCategory
     * @summary Get dish information
     * @request GET:/client/dish/by-category/{id}
     */
    getClientDishByCategory: (id: number, params: RequestParams = {}) =>
      this.request<DishesResponse, any>({
        path: `/client/dish/by-category/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of location
     *
     * @tags LocationClient
     * @name GetClientLocations
     * @summary Get list of locltion
     * @request GET:/client/location
     */
    getClientLocations: (
      query?: {
        /** address or distance location */
        keyword?: string;
        /** limit page */
        limit?: string;
        /** page */
        page?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<LocationResponse, any>({
        path: `/client/location`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns location data
     *
     * @tags LocationClient
     * @name GetClientLocationById
     * @summary Get location information
     * @request GET:/client/location/{id}
     */
    getClientLocationById: (id: number, params: RequestParams = {}) =>
      this.request<LocationResponse, any>({
        path: `/client/location/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns order data
     *
     * @tags Order Client
     * @name GetOrderListClient
     * @summary Get order list
     * @request GET:/client/order
     */
    getOrderListClient: (
      query: {
        /** user phone */
        phone: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<OrderResponse, any>({
        path: `/client/order`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns order data
     *
     * @tags Order Client
     * @name CreateOrderClient
     * @summary Create new order
     * @request POST:/client/order
     */
    createOrderClient: (data: OrderCreate, params: RequestParams = {}) =>
      this.request<OrderResponse, any>({
        path: `/client/order`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns order data
     *
     * @tags Order Client
     * @name GetOrderByIdClient
     * @summary Get order detail information
     * @request GET:/client/order/{id}
     */
    getOrderByIdClient: (id: number, params: RequestParams = {}) =>
      this.request<OrderDetailResponse, any>({
        path: `/client/order/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns updated location data
     *
     * @tags Order Client
     * @name UpdateOrderClient
     * @summary Update existing Order
     * @request PUT:/client/order/{id}
     */
    updateOrderClient: (id: number, data: OrderUpdateClient, params: RequestParams = {}) =>
      this.request<OrderResponse, any>({
        path: `/client/order/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of program
     *
     * @tags Program Client
     * @name GetProgramsClient
     * @summary Get list of program
     * @request GET:/client/programs
     */
    getProgramsClient: (params: RequestParams = {}) =>
      this.request<ProgramResponse, any>({
        path: `/client/programs`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns program data
     *
     * @tags Program Client
     * @name GetProgramShow
     * @summary Get program information
     * @request GET:/client/program
     */
    getProgramShow: (params: RequestParams = {}) =>
      this.request<ProgramResponse, any>({
        path: `/client/program`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  heroWedding = {
    /**
     * @description Returns list of Guest
     *
     * @tags Hero Wedding Guest
     * @name HeroGetGuest
     * @summary Get list of Guest
     * @request GET:/hero-wedding/guest
     */
    heroGetGuest: (
      query?: {
        /** slug of guest  */
        keyword?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GuestResponse, any>({
        path: `/hero-wedding/guest`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns guest data
     *
     * @tags Hero Wedding Guest
     * @name HeroAddGuest
     * @summary Create new guest
     * @request POST:/hero-wedding/guest
     */
    heroAddGuest: (data: GuestCreate, params: RequestParams = {}) =>
      this.request<GuestResponse, any>({
        path: `/hero-wedding/guest`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns Guest data
     *
     * @tags Hero Wedding Guest
     * @name HeroGetGuestById
     * @summary Get Guest information
     * @request GET:/hero-wedding/guest/{id}
     */
    heroGetGuestById: (id: number, params: RequestParams = {}) =>
      this.request<GuestResponse, any>({
        path: `/hero-wedding/guest/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of Message
     *
     * @tags Hero Wedding Message
     * @name HeroGetMessages
     * @summary Get list of Message
     * @request GET:/hero-wedding/message
     */
    heroGetMessages: (params: RequestParams = {}) =>
      this.request<MessageResponse, any>({
        path: `/hero-wedding/message`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns message data
     *
     * @tags Hero Wedding Message
     * @name HeroAddMessage
     * @summary Create new message
     * @request POST:/hero-wedding/message
     */
    heroAddMessage: (data: MessageCreate, params: RequestParams = {}) =>
      this.request<MessageResponse, any>({
        path: `/hero-wedding/message`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  room = {
    /**
     * @description Returns room data
     *
     * @tags Room
     * @name GetMessageNotSeenByUser
     * @summary Get room information
     * @request GET:/room/message-not-seen-by-user/{phone}
     */
    getMessageNotSeenByUser: (phone: string, params: RequestParams = {}) =>
      this.request<RoomResponse, any>({
        path: `/room/message-not-seen-by-user/${phone}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  shipper = {
    /**
     * @description Returns list of order
     *
     * @tags Shipper Order
     * @name GetOrdersByShipper
     * @summary Get list of order
     * @request GET:/shipper/order
     */
    getOrdersByShipper: (
      query?: {
        /** Can search by order code, user name */
        keyword?: string;
        /** limit size  */
        limit?: string;
        /** page size  */
        page?: string;
        /** status of order */
        status?: string;
        /** can sort by multiple field vd :-id,+id,+name,-name,-code, +code */
        orderBy?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<OrderResponse, any>({
        path: `/shipper/order`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns order data
     *
     * @tags Shipper Order
     * @name GetOrderShipperById
     * @summary Get order information
     * @request GET:/shipper/order/{id}
     */
    getOrderShipperById: (id: number, params: RequestParams = {}) =>
      this.request<OrderDetailResponse, any>({
        path: `/shipper/order/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns updated location data
     *
     * @tags Shipper Order
     * @name UpdateOrderShipper
     * @summary Update existing Order
     * @request PUT:/shipper/order/{id}
     */
    updateOrderShipper: (id: number, data: OrderUpdate, params: RequestParams = {}) =>
      this.request<OrderResponse, any>({
        path: `/shipper/order/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
