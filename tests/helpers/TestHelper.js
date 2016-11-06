'use strict';

import ServiceProvider from './../../src/ServiceProvider';
import DummyServiceProvider from './DummyServiceProvider';
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
     * @param {Container|Object} ioc
     *
     * @return {DummyServiceProvider}
     */
    static makeDummyServiceProvider(ioc = {}){
        return new DummyServiceProvider(ioc);
    }

    /**
     * Returns the IoC instance
     *
     * @return {Container}
     */
    static get ioc(){
        return IoC;
    }
}

export default TestHelper;