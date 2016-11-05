'use strict';

import ServiceProvider from './../../src/ServiceProvider';

/**
 * Dummy Service Provider
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
class DummyServiceProvider extends ServiceProvider{

    constructor(ioc){
        super(ioc);
    }

}

export default DummyServiceProvider;