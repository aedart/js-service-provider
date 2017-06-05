'use strict';

import IoCAware from '../../../src/Mixins/IoCAware';
import TestHelper from '../../helpers/TestHelper';
import Facade from '@aedart/js-facade';
import IoC from '@aedart/js-ioc';
import mix from '@vcas/js-mixin';

describe('IoC Aware Mixin', function(){

    afterEach(() => {
        IoC.flush();

        Facade.ioc = null;
        Facade.clearResolvedInstances();
    });

    /********************************************************************
     * Helpers
     *******************************************************************/

    class DummyClass extends mix(Object).with(IoCAware) {}

    /********************************************************************
     * Actual tests
     *******************************************************************/

    it('has null as default registrar', function () {
        let dummy = new DummyClass();

        expect(dummy.ioc).toBeNull();
    });

    it('can get and set ioc', function () {
        let dummy = new DummyClass();

        let ioc = IoC;

        dummy.ioc = ioc;

        expect(dummy.ioc).toBe(ioc);
    });

    it('returns IoC, when IoC is available', function () {
        Facade.ioc = IoC;
        IoC.instances.set('ioc', IoC);

        let dummy = new DummyClass();

        expect(dummy.ioc).not.toBeNull();
        expect(dummy.ioc).toBe(IoC);
    });
});