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
import Config200ResponseNav from './Config200ResponseNav';
import Config200ResponseNitro from './Config200ResponseNitro';

/**
 * The Config200Response model module.
 * @module model/Config200Response
 * @version 1.0.0-beta.126
 */
class Config200Response {
    /**
     * Constructs a new <code>Config200Response</code>.
     * @alias module:model/Config200Response
     */
    constructor() { 
        
        Config200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Config200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Config200Response} obj Optional instance to populate.
     * @return {module:model/Config200Response} The populated <code>Config200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Config200Response();

            if (data.hasOwnProperty('nitro')) {
                obj['nitro'] = Config200ResponseNitro.constructFromObject(data['nitro']);
            }
            if (data.hasOwnProperty('pages')) {
                obj['pages'] = ApiClient.convertToType(data['pages'], Object);
            }
            if (data.hasOwnProperty('redirects')) {
                obj['redirects'] = ApiClient.convertToType(data['redirects'], Object);
            }
            if (data.hasOwnProperty('nav')) {
                obj['nav'] = Config200ResponseNav.constructFromObject(data['nav']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Config200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Config200Response</code>.
     */
    static validateJSON(data) {
        // validate the optional field `nitro`
        if (data['nitro']) { // data not null
          Config200ResponseNitro.validateJSON(data['nitro']);
        }
        // validate the optional field `nav`
        if (data['nav']) { // data not null
          Config200ResponseNav.validateJSON(data['nav']);
        }

        return true;
    }


}



/**
 * @member {module:model/Config200ResponseNitro} nitro
 */
Config200Response.prototype['nitro'] = undefined;

/**
 * @member {Object} pages
 */
Config200Response.prototype['pages'] = undefined;

/**
 * @member {Object} redirects
 */
Config200Response.prototype['redirects'] = undefined;

/**
 * @member {module:model/Config200ResponseNav} nav
 */
Config200Response.prototype['nav'] = undefined;






export default Config200Response;

