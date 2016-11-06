'use strict';

import IoC from '@aedart/js-ioc';
import RegistrarServiceProvider from '../../../src/Providers/RegistrarServiceProvider';
import { REGISTRAR_CLASS } from '../../../src/Providers/RegistrarServiceProvider';
import Registrar from '../../../src/Registrar';

describe('Registrar Service Provider', function(){

    afterEach(() => {
        IoC.flush();
    });

    it('can register the service registrar', function () {
        let provider = new RegistrarServiceProvider(IoC);
        provider.register();

        // Fetch the registrar from the IoC
        let registrar = IoC.make(REGISTRAR_CLASS);

        expect(registrar).toBeTruthy();
        expect(registrar instanceof Registrar).toBe(true);
    });

});