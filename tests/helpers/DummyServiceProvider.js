'use strict';

import ServiceProvider from './../../src/ServiceProvider';

/**
 * has Registered symbol
 *
 * @type {Symbol}
 * @private
 */
const _hasRegistered = Symbol('has-registered');

/**
 * has Booted symbol
 *
 * @type {Symbol}
 * @private
 */
const _hasBooted = Symbol('has-booted');

/**
 * Dummy Service Provider
 *
 * @description FOR TESTING ONLY - does not register nor boot anything...
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
class DummyServiceProvider extends ServiceProvider{

    constructor(ioc){
        super(ioc);
        this.hasRegistered = false;
        this.hasBooted = false;
    }

    /**
     * Set has Registered
     *
     * @param {boolean} hasRegistered State of this provider
     */
    set hasRegistered(hasRegistered) {
        this[_hasRegistered] = hasRegistered;
    }

    /**
     * Get has Registered
     *
     * @return {boolean} State of this provider
     */
    get hasRegistered() {
        return this[_hasRegistered];
    }

    /**
     * Set has Booted
     *
     * @param {boolean} hasBooted State of this provider
     */
    set hasBooted(hasBooted) {
        this[_hasBooted] = hasBooted;
    }

    /**
     * Get has Booted
     *
     * @return {boolean} State of this provider
     */
    get hasBooted() {
        return this[_hasBooted];
    }

    /**
     * Register all of this provider's services
     *
     * @return {void}
     */
    register(){
        this.hasRegistered = true;
    }

    /**
     * Boot this provider
     *
     * @return {void}
     */
    boot(){
        this.hasBooted = true;
    }
}

export default DummyServiceProvider;