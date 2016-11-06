'use strict';

import TestHelper from '../helpers/TestHelper';

describe('Registrar', function (){

    it('can create instance', function () {
        let registrar = TestHelper.makeRegistrar();

        expect(registrar).toBeTruthy();
    });

    /***************************************************************
     * Getters and setters Test
     **************************************************************/

    describe('Getters and Setters', function(){

        it('can get and set IoC', function () {
            let ioc = {};

            let registrar = TestHelper.makeRegistrar(ioc);

            expect(registrar.ioc).toBe(ioc);
        });

        it('can get and set has-booted', function () {
            let registrar = TestHelper.makeRegistrar();

            registrar.hasBooted = true;

            expect(registrar.hasBooted).toBe(true);
        });

        it('can get and set providers list', function () {
            let registrar = TestHelper.makeRegistrar();

            let providers = [
                TestHelper.makeDummyServiceProvider(),
                TestHelper.makeDummyServiceProvider(),
                TestHelper.makeDummyServiceProvider(),
            ];

            registrar.providers = providers;

            expect(registrar.providers).toBe(providers);
        });

        it('can set and get booted-providers', function () {
            let registrar = TestHelper.makeRegistrar();

            let a = TestHelper.makeDummyServiceProvider();
            let b = TestHelper.makeDummyServiceProvider();
            let c = TestHelper.makeDummyServiceProvider();

            let bootedProviders = new WeakSet();
            bootedProviders.add(a);
            bootedProviders.add(b);
            bootedProviders.add(c);

            registrar.bootedProviders = bootedProviders;

            expect(registrar.bootedProviders).toBe(bootedProviders, 'Incorrect booted providers');
            expect(registrar.bootedProviders.has(a)).toBe(true, 'provider A not in booted list');
            expect(registrar.bootedProviders.has(b)).toBe(true, 'provider B not in booted list');
            expect(registrar.bootedProviders.has(c)).toBe(true, 'provider C not in booted list');
        });
    });

    /***************************************************************
     * Register Service Providers Test
     **************************************************************/

    describe('Service Provider Registration', function(){

        it('can register and boot a single provider', function () {
            let ioc = TestHelper.ioc;

            let registrar = TestHelper.makeRegistrar(ioc);

            let providerA = TestHelper.getDummyServiceProvider();

            registrar.register(providerA);

            // Should have 1 registered provider
            expect(registrar.providers.length).toBe(1, 'Should have one registered provider');

            // Should have 1 booted provider
            expect(registrar.bootedProviders.has(registrar.providers[0])).toBe(true, 'Should have one booted provider');

            // Registered provider should have it's "register" and "boot" method invoked
            let registeredProvider = registrar.providers[0];
            expect(registeredProvider.hasRegistered).toBe(true, 'Register method not invoked');
            expect(registeredProvider.hasBooted).toBe(true, 'Boot method not invoked');
        });

        it('can register without booting a single provider', function () {
            let ioc = TestHelper.ioc;

            let registrar = TestHelper.makeRegistrar(ioc);

            let providerA = TestHelper.getDummyServiceProvider();

            registrar.register(providerA, false);

            // Should have 1 registered provider
            expect(registrar.providers.length).toBe(1, 'Should have one registered provider');

            // Should NOT have 1 booted provider
            expect(registrar.bootedProviders.has(registrar.providers[0])).toBe(false, 'Should NOT have booted provider');

            // Registered provider should have it's "register" method invoked, but NOT "boot"!
            let registeredProvider = registrar.providers[0];
            expect(registeredProvider.hasRegistered).toBe(true, 'Register method not invoked');
            expect(registeredProvider.hasBooted).toBe(false, 'Boot method SHOULD NOT have been invoked');
        });

        it('can register and boot multiple providers', function () {
            let ioc = TestHelper.ioc;

            let registrar = TestHelper.makeRegistrar(ioc);

            let a = TestHelper.makeDummyServiceProvider();
            let b = TestHelper.makeDummyServiceProvider();
            let c = TestHelper.makeDummyServiceProvider();

            let providers = [a, b, c];

            registrar.registerProviders(providers);

            // Provider A
            expect(a.hasRegistered).toBe(true, 'A not registered');
            expect(a.hasBooted).toBe(true, 'A not booted');

            // Provider B
            expect(b.hasRegistered).toBe(true, 'B not registered');
            expect(b.hasBooted).toBe(true, 'B not booted');

            // Provider C
            expect(c.hasRegistered).toBe(true, 'C not registered');
            expect(c.hasBooted).toBe(true, 'C not booted');
        });

        it('can register multiple providers without booting them', function () {
            let ioc = TestHelper.ioc;

            let registrar = TestHelper.makeRegistrar(ioc);

            let a = TestHelper.makeDummyServiceProvider();
            let b = TestHelper.makeDummyServiceProvider();
            let c = TestHelper.makeDummyServiceProvider();

            let providers = [a, b, c];

            registrar.registerProviders(providers, false);

            // Provider A
            expect(a.hasRegistered).toBe(true, 'A not registered');
            expect(a.hasBooted).toBe(false, 'A is booted, but should not be!');

            // Provider B
            expect(b.hasRegistered).toBe(true, 'B not registered');
            expect(b.hasBooted).toBe(false, 'B is booted, but should not be!');

            // Provider C
            expect(c.hasRegistered).toBe(true, 'C not registered');
            expect(c.hasBooted).toBe(false, 'C is booted, but should not be!');
        });

        it('can boot providers that have yet not booted', function () {
            let ioc = TestHelper.ioc;

            let registrar = TestHelper.makeRegistrar(ioc);

            let a = TestHelper.makeDummyServiceProvider();
            let b = TestHelper.makeDummyServiceProvider();
            let c = TestHelper.makeDummyServiceProvider();

            let providers = [a, b, c];

            registrar.registerProviders(providers, false, false);

            // At this point, providers should NOT be booted
            expect(a.hasBooted).toBe(false, 'A is booted, but should not be!');
            expect(b.hasBooted).toBe(false, 'B is booted, but should not be!');
            expect(c.hasBooted).toBe(false, 'C is booted, but should not be!');

            // Perform boot operation ...
            registrar.bootProviders();

            // Now providers should be booted
            expect(a.hasBooted).toBe(true, 'A not booted');
            expect(b.hasBooted).toBe(true, 'B not booted');
            expect(c.hasBooted).toBe(true, 'C not booted');
        });
    });

});