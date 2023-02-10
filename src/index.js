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


import ApiClient from './ApiClient';
import Block from './model/Block';
import BlockSlotsInner from './model/BlockSlotsInner';
import Config200Response from './model/Config200Response';
import Config200ResponseNav from './model/Config200ResponseNav';
import Config200ResponseNitro from './model/Config200ResponseNitro';
import Page from './model/Page';
import PagesInner from './model/PagesInner';
import ConfigApi from './api/ConfigApi';
import PagesApi from './api/PagesApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Nitrocms = require('index'); // See note below*.
* var xxxSvc = new Nitrocms.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Nitrocms.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Nitrocms.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Nitrocms.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0-beta.126
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Block model constructor.
     * @property {module:model/Block}
     */
    Block,

    /**
     * The BlockSlotsInner model constructor.
     * @property {module:model/BlockSlotsInner}
     */
    BlockSlotsInner,

    /**
     * The Config200Response model constructor.
     * @property {module:model/Config200Response}
     */
    Config200Response,

    /**
     * The Config200ResponseNav model constructor.
     * @property {module:model/Config200ResponseNav}
     */
    Config200ResponseNav,

    /**
     * The Config200ResponseNitro model constructor.
     * @property {module:model/Config200ResponseNitro}
     */
    Config200ResponseNitro,

    /**
     * The Page model constructor.
     * @property {module:model/Page}
     */
    Page,

    /**
     * The PagesInner model constructor.
     * @property {module:model/PagesInner}
     */
    PagesInner,

    /**
    * The ConfigApi service constructor.
    * @property {module:api/ConfigApi}
    */
    ConfigApi,

    /**
    * The PagesApi service constructor.
    * @property {module:api/PagesApi}
    */
    PagesApi
};
