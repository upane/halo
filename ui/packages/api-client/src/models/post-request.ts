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


// May contain unused imports in some cases
// @ts-ignore
import { ContentUpdateParam } from './content-update-param';
// May contain unused imports in some cases
// @ts-ignore
import { Post } from './post';

/**
 * 
 * @export
 * @interface PostRequest
 */
export interface PostRequest {
    /**
     * 
     * @type {ContentUpdateParam}
     * @memberof PostRequest
     */
    'content'?: ContentUpdateParam;
    /**
     * 
     * @type {Post}
     * @memberof PostRequest
     */
    'post': Post;
}

