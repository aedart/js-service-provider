'use strict';

import IoCAware from './Mixins/IoCAware';
import mix from '@vcas/js-mixin';

/**
 * Abstract Service Provider
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
class ServiceProvider extends mix(class {}).with( IoCAware ){

    /**
     * Create new service container instance
     *
     * @param {Container|Object} ioc IoC Service Container instance
     *
     * @throws {TypeError} Abstract class
     */
    constructor(ioc){
        super();

        if(new.target === ServiceProvider){
            throw new TypeError('Cannot create Service Provider instance, class is abstract');
        }

        this.ioc = ioc;
    }

    /**
     * Register all of this provider's services
     *
     * @return {void}
     */
    register(){
        // Implement this method in sub class
    }

    /**
     * Boot this provider
     *
     * @return {void}
     */
    boot(){
        // Implement this method in sub class
    }
}

export default ServiceProvider;