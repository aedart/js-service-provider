'use strict';

import RegistrarServiceProvider from '../../src/Providers/RegistrarServiceProvider';
import TestHelper from '../helpers/TestHelper';
import Facade from '@aedart/js-facade';
import IoC from '@aedart/js-ioc';

describe('Aggregate Service Provider Test', function(){

    beforeEach(() => {
        IoC.instances.set('ioc', IoC);
        Facade.ioc = IoC;

        let provider = new RegistrarServiceProvider(IoC);
        provider.register();
    });

    afterEach(() => {
        IoC.flush();

        Facade.ioc = null;
        Facade.clearResolvedInstances();
    });

    it('can register and boot multiple service providers', function () {

        let providerA = TestHelper.makeDummyServiceProvider(IoC);
        let providerB = TestHelper.makeDummyServiceProvider(IoC);
        let providerC = TestHelper.makeDummyServiceProvider(IoC);

        let aggregateProvider = TestHelper.makeDummyAggregateProvider(IoC, [
            providerA,
            providerB,
            providerC,
        ]);

        // Register the providers
        aggregateProvider.register();

        // Expecting all to have registered and booted
        expect(providerA.hasRegistered).toBe(true, 'Provider A has not registered');
        expect(providerA.hasBooted).toBe(true, 'Provider A has not booted');

        expect(providerB.hasRegistered).toBe(true, 'Provider B has not registered');
        expect(providerB.hasBooted).toBe(true, 'Provider B has not booted');

        expect(providerC.hasRegistered).toBe(true, 'Provider C has not registered');
        expect(providerC.hasBooted).toBe(true, 'Provider C has not booted');
    });

});