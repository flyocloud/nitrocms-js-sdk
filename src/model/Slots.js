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

/**
 * The Slots model module.
 * @module model/Slots
 * @version 1.0.0-beta.128
 */
class Slots {
    /**
     * Constructs a new <code>Slots</code>.
     * @alias module:model/Slots
     */
    constructor() { 
        
        Slots.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Slots</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Slots} obj Optional instance to populate.
     * @return {module:model/Slots} The populated <code>Slots</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Slots();

            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], [Block]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Slots</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Slots</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['identifier'] && !(typeof data['identifier'] === 'string' || data['identifier'] instanceof String)) {
            throw new Error("Expected the field `identifier` to be a primitive type in the JSON string but got " + data['identifier']);
        }
        if (data['content']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['content'])) {
                throw new Error("Expected the field `content` to be an array in the JSON data but got " + data['content']);
            }
            // validate the optional field `content` (array)
            for (const item of data['content']) {
                Block.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * The unique identifier of the slot
 * @member {String} identifier
 */
Slots.prototype['identifier'] = undefined;

/**
 * @member {Array.<module:model/Block>} content
 */
Slots.prototype['content'] = undefined;






export default Slots;

