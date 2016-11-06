'use strict';

import ServiceProvider from './../../src/ServiceProvider';
import TestHelper from './../helpers/TestHelper';

describe('Service Provider', function(){

    it('fails when attempting to create instance', function(){
        let f = () => {
            return new ServiceProvider({});
        };

        expect(f).toThrowError(TypeError);
    });

    it('can set and get ioc instance', function () {
        let ioc = TestHelper.ioc;
        let provider = TestHelper.makeDummyServiceProvider(ioc);

        expect(provider.ioc).toBe(ioc);
    });
});