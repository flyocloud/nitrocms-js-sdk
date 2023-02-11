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
import Entity200ResponseEntity from './Entity200ResponseEntity';

/**
 * The Entity200Response model module.
 * @module model/Entity200Response
 * @version 1.0.0-beta.126
 */
class Entity200Response {
    /**
     * Constructs a new <code>Entity200Response</code>.
     * @alias module:model/Entity200Response
     */
    constructor() { 
        
        Entity200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Entity200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Entity200Response} obj Optional instance to populate.
     * @return {module:model/Entity200Response} The populated <code>Entity200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Entity200Response();

            if (data.hasOwnProperty('entity')) {
                obj['entity'] = Entity200ResponseEntity.constructFromObject(data['entity']);
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], Object);
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Entity200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Entity200Response</code>.
     */
    static validateJSON(data) {
        // validate the optional field `entity`
        if (data['entity']) { // data not null
          Entity200ResponseEntity.validateJSON(data['entity']);
        }
        // ensure the json data is a string
        if (data['language'] && !(typeof data['language'] === 'string' || data['language'] instanceof String)) {
            throw new Error("Expected the field `language` to be a primitive type in the JSON string but got " + data['language']);
        }

        return true;
    }


}



/**
 * @member {module:model/Entity200ResponseEntity} entity
 */
Entity200Response.prototype['entity'] = undefined;

/**
 * @member {Object} model
 */
Entity200Response.prototype['model'] = undefined;

/**
 * Current language context for entite details
 * @member {String} language
 */
Entity200Response.prototype['language'] = undefined;






export default Entity200Response;

