/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.17.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { AnnotationSetting } from '../models';
// @ts-ignore
import { AnnotationSettingList } from '../models';
// @ts-ignore
import { JsonPatchInner } from '../models';
/**
 * AnnotationSettingV1alpha1Api - axios parameter creator
 * @export
 */
export const AnnotationSettingV1alpha1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create AnnotationSetting
         * @param {AnnotationSetting} [annotationSetting] Fresh annotationsetting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAnnotationSetting: async (annotationSetting?: AnnotationSetting, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1alpha1/annotationsettings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(annotationSetting, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete AnnotationSetting
         * @param {string} name Name of annotationsetting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAnnotationSetting: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteAnnotationSetting', 'name', name)
            const localVarPath = `/api/v1alpha1/annotationsettings/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get AnnotationSetting
         * @param {string} name Name of annotationsetting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAnnotationSetting: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getAnnotationSetting', 'name', name)
            const localVarPath = `/api/v1alpha1/annotationsettings/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List AnnotationSetting
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAnnotationSetting: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1alpha1/annotationsettings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Patch AnnotationSetting
         * @param {string} name Name of annotationsetting
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchAnnotationSetting: async (name: string, jsonPatchInner?: Array<JsonPatchInner>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('patchAnnotationSetting', 'name', name)
            const localVarPath = `/api/v1alpha1/annotationsettings/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(jsonPatchInner, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update AnnotationSetting
         * @param {string} name Name of annotationsetting
         * @param {AnnotationSetting} [annotationSetting] Updated annotationsetting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAnnotationSetting: async (name: string, annotationSetting?: AnnotationSetting, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateAnnotationSetting', 'name', name)
            const localVarPath = `/api/v1alpha1/annotationsettings/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(annotationSetting, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AnnotationSettingV1alpha1Api - functional programming interface
 * @export
 */
export const AnnotationSettingV1alpha1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AnnotationSettingV1alpha1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Create AnnotationSetting
         * @param {AnnotationSetting} [annotationSetting] Fresh annotationsetting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAnnotationSetting(annotationSetting?: AnnotationSetting, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AnnotationSetting>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAnnotationSetting(annotationSetting, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AnnotationSettingV1alpha1Api.createAnnotationSetting']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete AnnotationSetting
         * @param {string} name Name of annotationsetting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAnnotationSetting(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAnnotationSetting(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AnnotationSettingV1alpha1Api.deleteAnnotationSetting']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get AnnotationSetting
         * @param {string} name Name of annotationsetting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAnnotationSetting(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AnnotationSetting>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAnnotationSetting(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AnnotationSettingV1alpha1Api.getAnnotationSetting']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List AnnotationSetting
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAnnotationSetting(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AnnotationSettingList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAnnotationSetting(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AnnotationSettingV1alpha1Api.listAnnotationSetting']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Patch AnnotationSetting
         * @param {string} name Name of annotationsetting
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchAnnotationSetting(name: string, jsonPatchInner?: Array<JsonPatchInner>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AnnotationSetting>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchAnnotationSetting(name, jsonPatchInner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AnnotationSettingV1alpha1Api.patchAnnotationSetting']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update AnnotationSetting
         * @param {string} name Name of annotationsetting
         * @param {AnnotationSetting} [annotationSetting] Updated annotationsetting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAnnotationSetting(name: string, annotationSetting?: AnnotationSetting, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AnnotationSetting>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateAnnotationSetting(name, annotationSetting, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AnnotationSettingV1alpha1Api.updateAnnotationSetting']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AnnotationSettingV1alpha1Api - factory interface
 * @export
 */
export const AnnotationSettingV1alpha1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AnnotationSettingV1alpha1ApiFp(configuration)
    return {
        /**
         * Create AnnotationSetting
         * @param {AnnotationSettingV1alpha1ApiCreateAnnotationSettingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAnnotationSetting(requestParameters: AnnotationSettingV1alpha1ApiCreateAnnotationSettingRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AnnotationSetting> {
            return localVarFp.createAnnotationSetting(requestParameters.annotationSetting, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete AnnotationSetting
         * @param {AnnotationSettingV1alpha1ApiDeleteAnnotationSettingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAnnotationSetting(requestParameters: AnnotationSettingV1alpha1ApiDeleteAnnotationSettingRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteAnnotationSetting(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get AnnotationSetting
         * @param {AnnotationSettingV1alpha1ApiGetAnnotationSettingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAnnotationSetting(requestParameters: AnnotationSettingV1alpha1ApiGetAnnotationSettingRequest, options?: RawAxiosRequestConfig): AxiosPromise<AnnotationSetting> {
            return localVarFp.getAnnotationSetting(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List AnnotationSetting
         * @param {AnnotationSettingV1alpha1ApiListAnnotationSettingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAnnotationSetting(requestParameters: AnnotationSettingV1alpha1ApiListAnnotationSettingRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AnnotationSettingList> {
            return localVarFp.listAnnotationSetting(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch AnnotationSetting
         * @param {AnnotationSettingV1alpha1ApiPatchAnnotationSettingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchAnnotationSetting(requestParameters: AnnotationSettingV1alpha1ApiPatchAnnotationSettingRequest, options?: RawAxiosRequestConfig): AxiosPromise<AnnotationSetting> {
            return localVarFp.patchAnnotationSetting(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(axios, basePath));
        },
        /**
         * Update AnnotationSetting
         * @param {AnnotationSettingV1alpha1ApiUpdateAnnotationSettingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAnnotationSetting(requestParameters: AnnotationSettingV1alpha1ApiUpdateAnnotationSettingRequest, options?: RawAxiosRequestConfig): AxiosPromise<AnnotationSetting> {
            return localVarFp.updateAnnotationSetting(requestParameters.name, requestParameters.annotationSetting, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createAnnotationSetting operation in AnnotationSettingV1alpha1Api.
 * @export
 * @interface AnnotationSettingV1alpha1ApiCreateAnnotationSettingRequest
 */
export interface AnnotationSettingV1alpha1ApiCreateAnnotationSettingRequest {
    /**
     * Fresh annotationsetting
     * @type {AnnotationSetting}
     * @memberof AnnotationSettingV1alpha1ApiCreateAnnotationSetting
     */
    readonly annotationSetting?: AnnotationSetting
}

/**
 * Request parameters for deleteAnnotationSetting operation in AnnotationSettingV1alpha1Api.
 * @export
 * @interface AnnotationSettingV1alpha1ApiDeleteAnnotationSettingRequest
 */
export interface AnnotationSettingV1alpha1ApiDeleteAnnotationSettingRequest {
    /**
     * Name of annotationsetting
     * @type {string}
     * @memberof AnnotationSettingV1alpha1ApiDeleteAnnotationSetting
     */
    readonly name: string
}

/**
 * Request parameters for getAnnotationSetting operation in AnnotationSettingV1alpha1Api.
 * @export
 * @interface AnnotationSettingV1alpha1ApiGetAnnotationSettingRequest
 */
export interface AnnotationSettingV1alpha1ApiGetAnnotationSettingRequest {
    /**
     * Name of annotationsetting
     * @type {string}
     * @memberof AnnotationSettingV1alpha1ApiGetAnnotationSetting
     */
    readonly name: string
}

/**
 * Request parameters for listAnnotationSetting operation in AnnotationSettingV1alpha1Api.
 * @export
 * @interface AnnotationSettingV1alpha1ApiListAnnotationSettingRequest
 */
export interface AnnotationSettingV1alpha1ApiListAnnotationSettingRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof AnnotationSettingV1alpha1ApiListAnnotationSetting
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof AnnotationSettingV1alpha1ApiListAnnotationSetting
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof AnnotationSettingV1alpha1ApiListAnnotationSetting
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof AnnotationSettingV1alpha1ApiListAnnotationSetting
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof AnnotationSettingV1alpha1ApiListAnnotationSetting
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for patchAnnotationSetting operation in AnnotationSettingV1alpha1Api.
 * @export
 * @interface AnnotationSettingV1alpha1ApiPatchAnnotationSettingRequest
 */
export interface AnnotationSettingV1alpha1ApiPatchAnnotationSettingRequest {
    /**
     * Name of annotationsetting
     * @type {string}
     * @memberof AnnotationSettingV1alpha1ApiPatchAnnotationSetting
     */
    readonly name: string

    /**
     * 
     * @type {Array<JsonPatchInner>}
     * @memberof AnnotationSettingV1alpha1ApiPatchAnnotationSetting
     */
    readonly jsonPatchInner?: Array<JsonPatchInner>
}

/**
 * Request parameters for updateAnnotationSetting operation in AnnotationSettingV1alpha1Api.
 * @export
 * @interface AnnotationSettingV1alpha1ApiUpdateAnnotationSettingRequest
 */
export interface AnnotationSettingV1alpha1ApiUpdateAnnotationSettingRequest {
    /**
     * Name of annotationsetting
     * @type {string}
     * @memberof AnnotationSettingV1alpha1ApiUpdateAnnotationSetting
     */
    readonly name: string

    /**
     * Updated annotationsetting
     * @type {AnnotationSetting}
     * @memberof AnnotationSettingV1alpha1ApiUpdateAnnotationSetting
     */
    readonly annotationSetting?: AnnotationSetting
}

/**
 * AnnotationSettingV1alpha1Api - object-oriented interface
 * @export
 * @class AnnotationSettingV1alpha1Api
 * @extends {BaseAPI}
 */
export class AnnotationSettingV1alpha1Api extends BaseAPI {
    /**
     * Create AnnotationSetting
     * @param {AnnotationSettingV1alpha1ApiCreateAnnotationSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnnotationSettingV1alpha1Api
     */
    public createAnnotationSetting(requestParameters: AnnotationSettingV1alpha1ApiCreateAnnotationSettingRequest = {}, options?: RawAxiosRequestConfig) {
        return AnnotationSettingV1alpha1ApiFp(this.configuration).createAnnotationSetting(requestParameters.annotationSetting, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete AnnotationSetting
     * @param {AnnotationSettingV1alpha1ApiDeleteAnnotationSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnnotationSettingV1alpha1Api
     */
    public deleteAnnotationSetting(requestParameters: AnnotationSettingV1alpha1ApiDeleteAnnotationSettingRequest, options?: RawAxiosRequestConfig) {
        return AnnotationSettingV1alpha1ApiFp(this.configuration).deleteAnnotationSetting(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get AnnotationSetting
     * @param {AnnotationSettingV1alpha1ApiGetAnnotationSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnnotationSettingV1alpha1Api
     */
    public getAnnotationSetting(requestParameters: AnnotationSettingV1alpha1ApiGetAnnotationSettingRequest, options?: RawAxiosRequestConfig) {
        return AnnotationSettingV1alpha1ApiFp(this.configuration).getAnnotationSetting(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List AnnotationSetting
     * @param {AnnotationSettingV1alpha1ApiListAnnotationSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnnotationSettingV1alpha1Api
     */
    public listAnnotationSetting(requestParameters: AnnotationSettingV1alpha1ApiListAnnotationSettingRequest = {}, options?: RawAxiosRequestConfig) {
        return AnnotationSettingV1alpha1ApiFp(this.configuration).listAnnotationSetting(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch AnnotationSetting
     * @param {AnnotationSettingV1alpha1ApiPatchAnnotationSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnnotationSettingV1alpha1Api
     */
    public patchAnnotationSetting(requestParameters: AnnotationSettingV1alpha1ApiPatchAnnotationSettingRequest, options?: RawAxiosRequestConfig) {
        return AnnotationSettingV1alpha1ApiFp(this.configuration).patchAnnotationSetting(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update AnnotationSetting
     * @param {AnnotationSettingV1alpha1ApiUpdateAnnotationSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnnotationSettingV1alpha1Api
     */
    public updateAnnotationSetting(requestParameters: AnnotationSettingV1alpha1ApiUpdateAnnotationSettingRequest, options?: RawAxiosRequestConfig) {
        return AnnotationSettingV1alpha1ApiFp(this.configuration).updateAnnotationSetting(requestParameters.name, requestParameters.annotationSetting, options).then((request) => request(this.axios, this.basePath));
    }
}

