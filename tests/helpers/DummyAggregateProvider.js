'use strict';

import AggregateServiceProvider from '../../src/AggregateServiceProvider';

/**
 * Dummy Aggregate Provider
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
class DummyAggregateProvider extends AggregateServiceProvider{

    /**
     * Create a new dummy aggregate provider instance
     *
     * @param {Container|object} ioc
     * @param {Array.<ServiceProvider|function>} [providers]
     */
    constructor(ioc, providers = []){
        super(ioc);
        this.providers = providers;
    }
}

export default DummyAggregateProvider;