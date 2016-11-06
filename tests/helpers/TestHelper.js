'use strict';

import ServiceProvider from './../../src/ServiceProvider';
import Registrar from '../../src/Registrar';
import DummyServiceProvider from './DummyServiceProvider';
import DummyAggregateProvider from './DummyAggregateProvider';
import IoC from '@aedart/js-ioc';

/**
 * Test Helper
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
class TestHelper {

    /**
     * Returns a new dummy service provider instance
     *
     * @param {Container|Object} [ioc]
     *
     * @return {DummyServiceProvider}
     */
    static makeDummyServiceProvider(ioc = {}){
        return new DummyServiceProvider(ioc);
    }

    /**
     * Returns reference to a dummy service provider
     *
     * (Not instantiated)
     *
     * @return {DummyServiceProvider|function}
     */
    static getDummyServiceProvider(){
        return DummyServiceProvider;
    }

    /**
     * Returns a new dummy aggregate provider instance
     *
     * @param {Container|object} ioc
     * @param {Array.<ServiceProvider|function>} [providers]
     *
     * @return {DummyAggregateProvider}
     */
    static makeDummyAggregateProvider(ioc = {}, providers = []){
        return new DummyAggregateProvider(ioc, providers);
    }

    /**
     * Returns the IoC instance
     *
     * @return {Container}
     */
    static get ioc(){
        return IoC;
    }

    /**
     * Returns a new Registrar instance
     *
     * @param {Container|Object} [ioc]
     *
     * @return {Registrar}
     */
    static makeRegistrar(ioc = {}){
        return new Registrar(ioc);
    }
}

export default TestHelper;