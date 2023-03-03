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
import ConfigResponseNav from './ConfigResponseNav';
import ConfigResponseNitro from './ConfigResponseNitro';

/**
 * The ConfigResponse model module.
 * @module model/ConfigResponse
 * @version 1.0.0-beta.128
 */
class ConfigResponse {
    /**
     * Constructs a new <code>ConfigResponse</code>.
     * @alias module:model/ConfigResponse
     */
    constructor() { 
        
        ConfigResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConfigResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigResponse} obj Optional instance to populate.
     * @return {module:model/ConfigResponse} The populated <code>ConfigResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfigResponse();

            if (data.hasOwnProperty('nitro')) {
                obj['nitro'] = ConfigResponseNitro.constructFromObject(data['nitro']);
            }
            if (data.hasOwnProperty('pages')) {
                obj['pages'] = ApiClient.convertToType(data['pages'], ['String']);
            }
            if (data.hasOwnProperty('nav')) {
                obj['nav'] = ConfigResponseNav.constructFromObject(data['nav']);
            }
            if (data.hasOwnProperty('containers')) {
                obj['containers'] = ApiClient.convertToType(data['containers'], {'String': ConfigResponseNav});
            }
            if (data.hasOwnProperty('globals')) {
                obj['globals'] = ApiClient.convertToType(data['globals'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ConfigResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConfigResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `nitro`
        if (data['nitro']) { // data not null
          ConfigResponseNitro.validateJSON(data['nitro']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['pages'])) {
            throw new Error("Expected the field `pages` to be an array in the JSON data but got " + data['pages']);
        }
        // validate the optional field `nav`
        if (data['nav']) { // data not null
          ConfigResponseNav.validateJSON(data['nav']);
        }

        return true;
    }


}



/**
 * @member {module:model/ConfigResponseNitro} nitro
 */
ConfigResponse.prototype['nitro'] = undefined;

/**
 * @member {Array.<String>} pages
 */
ConfigResponse.prototype['pages'] = undefined;

/**
 * @member {module:model/ConfigResponseNav} nav
 */
ConfigResponse.prototype['nav'] = undefined;

/**
 * @member {Object.<String, module:model/ConfigResponseNav>} containers
 */
ConfigResponse.prototype['containers'] = undefined;

/**
 * @member {Object} globals
 */
ConfigResponse.prototype['globals'] = undefined;






export default ConfigResponse;

