/**
 * Flyo Nitro Cms
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0-beta.126
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Entity200ResponseEntityEntityMetric model module.
 * @module model/Entity200ResponseEntityEntityMetric
 * @version 1.0.0-beta.126
 */
class Entity200ResponseEntityEntityMetric {
    /**
     * Constructs a new <code>Entity200ResponseEntityEntityMetric</code>.
     * @alias module:model/Entity200ResponseEntityEntityMetric
     */
    constructor() { 
        
        Entity200ResponseEntityEntityMetric.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Entity200ResponseEntityEntityMetric</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Entity200ResponseEntityEntityMetric} obj Optional instance to populate.
     * @return {module:model/Entity200ResponseEntityEntityMetric} The populated <code>Entity200ResponseEntityEntityMetric</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Entity200ResponseEntityEntityMetric();

            if (data.hasOwnProperty('api')) {
                obj['api'] = ApiClient.convertToType(data['api'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Entity200ResponseEntityEntityMetric</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Entity200ResponseEntityEntityMetric</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['api'] && !(typeof data['api'] === 'string' || data['api'] instanceof String)) {
            throw new Error("Expected the field `api` to be a primitive type in the JSON string but got " + data['api']);
        }
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }

        return true;
    }


}



/**
 * This url can be used to send a GET request from either frontend or backend.
 * @member {String} api
 */
Entity200ResponseEntityEntityMetric.prototype['api'] = undefined;

/**
 * Use the image as image src in order to track metrics for the given resource.
 * @member {String} image
 */
Entity200ResponseEntityEntityMetric.prototype['image'] = undefined;






export default Entity200ResponseEntityEntityMetric;

