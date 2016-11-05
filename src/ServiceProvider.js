'use strict';

/**
 * ioc symbol
 *
 * @type {Symbol}
 * @private
 */
const _ioc = Symbol('ioc');

/**
 * Abstract Service Provider
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
class ServiceProvider {

    /**
     * Create new service container instance
     *
     * @param {Container|Object} ioc IoC Service Container instance
     *
     * @throws {TypeError} Abstract class
     */
    constructor(ioc){
        if(new.target === ServiceProvider){
            throw new TypeError('Cannot create Service Provider instance, class is abstract');
        }

        this.ioc = ioc;
    }

    /**
     * Set ioc
     *
     * @param {Container|Object} instance IoC Service Container
     */
    set ioc(instance) {
        this[_ioc] = instance;
    }

    /**
     * Get ioc
     *
     * @return {Container|Object} IoC Service Container
     */
    get ioc() {
        return this[_ioc];
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