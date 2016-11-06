'use strict';

import RegistrarAware from '../../../src/Mixins/RegistrarAware';
import RegistrarServiceProvider from '../../../src/Providers/RegistrarServiceProvider';
import TestHelper from '../../helpers/TestHelper';
import Facade from '@aedart/js-facade';
import IoC from '@aedart/js-ioc';
import { mix } from 'mixwith/src/mixwith';

describe('Registrar Aware Mixin', function(){

    afterEach(() => {
        IoC.flush();

        Facade.ioc = null;
        Facade.clearResolvedInstances();
    });

    /********************************************************************
     * Helpers
     *******************************************************************/

    class DummyClass extends mix(Object).with(RegistrarAware) {}

    /********************************************************************
     * Actual tests
     *******************************************************************/

    it('has null as default registrar', function () {
        let dummy = new DummyClass();

        expect(dummy.registrar).toBeNull();
    });

    it('can get and set registrar', function () {
        let dummy = new DummyClass();

        let registrar = TestHelper.makeRegistrar();

        dummy.registrar = registrar;

        expect(dummy.registrar).toBe(registrar);
    });

    it('returns IoC bound registrar, when IoC is available', function () {
        Facade.ioc = IoC;
        IoC.instances.set('ioc', IoC);

        let provider = new RegistrarServiceProvider(IoC);
        provider.register();

        let dummy = new DummyClass();

        expect(dummy.registrar).not.toBeNull();
    });
});