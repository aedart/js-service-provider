'use strict';

import ServiceProvider from './ServiceProvider';
import RegistrarAware from './Mixins/RegistrarAware';
import mix from '@vcas/js-mixin';

/**
 * providers symbol
 *
 * @type {Symbol}
 * @private
 */
const _providers = Symbol('providers');

/**
 * Aggregate Service Provider
 *
 * @extends ServiceProvider
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
class AggregateServiceProvider extends mix(ServiceProvider).with(RegistrarAware) {

    constructor(ioc){
        super(ioc);
        this.providers = [];
    }

    /**
     * Set providers
     *
     * @param {Array.<ServiceProvider|function>} list List of service providers
     */
    set providers(list) {
        this[_providers] = list;
    }

    /**
     * Get providers
     *
     * @return {Array.<ServiceProvider|function>} List of service providers
     */
    get providers() {
        return this[_providers];
    }

    /**
     * @inheritDoc
     */
    register(){
        this.registrar.registerProviders(this.providers);
    }
}

export default AggregateServiceProvider;