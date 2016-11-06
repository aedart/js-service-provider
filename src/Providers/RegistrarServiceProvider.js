'use strict';

import ServiceProvider from './../ServiceProvider';
import Registrar from './../Registrar';

/**
 * Registrar Class
 *
 * @type {string}
 */
export const REGISTRAR_CLASS = '@aedart/js-service-provider/Registrar';

/**
 * Registrar Service Provider
 *
 * @extends ServiceProvider
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
class RegistrarServiceProvider extends ServiceProvider{

    /**
     * @inheritDoc
     */
    constructor(ioc){
        super(ioc);
    }

    /**
     * @inheritDoc
     */
    register(){
        this.ioc.singleton(REGISTRAR_CLASS, (ioc) => {
            return new Registrar(ioc);
        });
    }
}

export default RegistrarServiceProvider;