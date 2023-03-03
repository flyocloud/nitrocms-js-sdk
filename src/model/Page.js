/**
 * Flyo Nitro CMS
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0-beta.128
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Block from './Block';
import Meta from './Meta';
import PageProperty from './PageProperty';

/**
 * The Page model module.
 * @module model/Page
 * @version 1.0.0-beta.128
 */
class Page {
    /**
     * Constructs a new <code>Page</code>.
     * @alias module:model/Page
     */
    constructor() { 
        
        Page.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Page</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Page} obj Optional instance to populate.
     * @return {module:model/Page} The populated <code>Page</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Page();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], [Block]);
            }
            if (data.hasOwnProperty('depth')) {
                obj['depth'] = ApiClient.convertToType(data['depth'], 'Number');
            }
            if (data.hasOwnProperty('is_home')) {
                obj['is_home'] = ApiClient.convertToType(data['is_home'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Number');
            }
            if (data.hasOwnProperty('is_visible')) {
                obj['is_visible'] = ApiClient.convertToType(data['is_visible'], 'Number');
            }
            if (data.hasOwnProperty('meta_json')) {
                obj['meta_json'] = Meta.constructFromObject(data['meta_json']);
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], {'String': PageProperty});
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'String');
            }
            if (data.hasOwnProperty('container')) {
                obj['container'] = ApiClient.convertToType(data['container'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Page</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Page</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['slug'] && !(typeof data['slug'] === 'string' || data['slug'] instanceof String)) {
            throw new Error("Expected the field `slug` to be a primitive type in the JSON string but got " + data['slug']);
        }
        if (data['json']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['json'])) {
                throw new Error("Expected the field `json` to be an array in the JSON data but got " + data['json']);
            }
            // validate the optional field `json` (array)
            for (const item of data['json']) {
                Block.validateJsonObject(item);
            };
        }
        // validate the optional field `meta_json`
        if (data['meta_json']) { // data not null
          Meta.validateJSON(data['meta_json']);
        }
        // ensure the json data is a string
        if (data['uid'] && !(typeof data['uid'] === 'string' || data['uid'] instanceof String)) {
            throw new Error("Expected the field `uid` to be a primitive type in the JSON string but got " + data['uid']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['target'] && !(typeof data['target'] === 'string' || data['target'] instanceof String)) {
            throw new Error("Expected the field `target` to be a primitive type in the JSON string but got " + data['target']);
        }
        // ensure the json data is a string
        if (data['container'] && !(typeof data['container'] === 'string' || data['container'] instanceof String)) {
            throw new Error("Expected the field `container` to be a primitive type in the JSON string but got " + data['container']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
Page.prototype['id'] = undefined;

/**
 * @member {String} title
 */
Page.prototype['title'] = undefined;

/**
 * @member {String} slug
 */
Page.prototype['slug'] = undefined;

/**
 * @member {Array.<module:model/Block>} json
 */
Page.prototype['json'] = undefined;

/**
 * @member {Number} depth
 */
Page.prototype['depth'] = undefined;

/**
 * @member {Number} is_home
 */
Page.prototype['is_home'] = undefined;

/**
 * @member {Number} created_at
 */
Page.prototype['created_at'] = undefined;

/**
 * @member {Number} updated_at
 */
Page.prototype['updated_at'] = undefined;

/**
 * @member {Number} is_visible
 */
Page.prototype['is_visible'] = undefined;

/**
 * @member {module:model/Meta} meta_json
 */
Page.prototype['meta_json'] = undefined;

/**
 * @member {Object.<String, module:model/PageProperty>} properties
 */
Page.prototype['properties'] = undefined;

/**
 * A unique identifier for the page
 * @member {String} uid
 */
Page.prototype['uid'] = undefined;

/**
 * Can be either a page with content (which is default behavior), email, file, url, tel
 * @member {String} type
 */
Page.prototype['type'] = undefined;

/**
 * can be either _self (which is default) or _blank
 * @member {String} target
 */
Page.prototype['target'] = undefined;

/**
 * The container this page belongs, by default all pages belong to the default container which is the main nav.
 * @member {String} container
 */
Page.prototype['container'] = undefined;






export default Page;

