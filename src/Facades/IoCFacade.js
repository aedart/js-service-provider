'use strict';

import Facade from '@aedart/js-facade';

/**
 * IoC Facade
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
class IoCFacade extends Facade {

    /**
     * Create a new IoC Facade instance
     */
    constructor(){
        super('ioc');
    }

    /**
     * Resolve the registered abstract from the container
     *
     * @param {string} abstract
     * @param {Array} [parameters]
     * @param {*} [defaultReturn]
     *
     * @returns {object}
     */
    make(abstract, parameters = [], defaultReturn = null){
        if(Facade.ioc === undefined || Facade.ioc === null){
            return defaultReturn;
        }

        if(Facade.ioc.bound(abstract)){
            return Facade.ioc.make(abstract, parameters);
        }

        return defaultReturn;
    }
}

export default new IoCFacade();