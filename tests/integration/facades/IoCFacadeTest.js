'use strict';

import Facade from '@aedart/js-facade';
import IoC from '@aedart/js-ioc';
import IoCFacade from '../../../src/Facades/IoCFacade';
import faker from 'faker';

describe('IoC Facade', function () {

    afterEach(() => {
        IoC.flush();

        Facade.ioc = null;
        Facade.clearResolvedInstances();
    });

    it('returns default value when no IoC set on Facade', function () {
        let defaultValue = {
            a: faker.random.uuid()
        };

        let key = faker.random.word();

        let result = IoCFacade.make(key, [], defaultValue);

        expect(result).toBe(defaultValue);
    });

    it('returns default value when IoC does not have instance bound', function () {
        Facade.ioc = IoC;

        let defaultValue = {
            a: faker.random.uuid()
        };

        let key = faker.random.word();

        let result = IoCFacade.make(key, [], defaultValue);

        expect(result).toBe(defaultValue);
    });

    it('resolves instance from the IoC', function () {
        Facade.ioc = IoC;

        let instance = null;
        let key = faker.random.word();

        IoC.bind(key, () => {
            let defaultValue = {
                a: faker.random.uuid()
            };
            instance = defaultValue;

            return defaultValue;
        });

        let result = IoCFacade.make(key);

        expect(instance).not.toBeNull('Instance should not be null');
        expect(result).toBe(instance);
    });

    it('acts as a facade for the IoC, when IoC is bound', function () {
        Facade.ioc = IoC;

        IoC.bind('ioc', () => {
            return IoC;
        });

        let instance = null;
        let key = faker.random.word();

        IoC.bind(key, () => {
            let defaultValue = {
                a: faker.random.uuid()
            };
            instance = defaultValue;

            return defaultValue;
        });

        expect(IoCFacade.bound(key)).toBe(true);
        expect(IoCFacade.make(key)).toBe(instance);
    });
});