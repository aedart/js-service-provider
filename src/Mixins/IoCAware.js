'use strict';

import IoCFacade from './../Facades/IoCFacade';
import {DeclareMixin} from '@vestergaard-company/js-mixin';

/**
 * ioc symbol
 *
 * @type {Symbol}
 * @private
 */
const _ioc = Symbol('ioc');

/**
 * IoC Aware Mixin
 *
 * @return {IoCAware}
 */
export default DeclareMixin((superClass) => class IoCAware extends superClass {

    /**
     * Set ioc
     *
     * @param {Container|null} instance IoC Service Container instance
     */
    set ioc(instance) {
        this[_ioc] = instance;
    }

    /**
     * Get ioc
     *
     * @return {Container|null} IoC Service Container instance
     */
    get ioc() {
        if (!this.hasIoc()) {
            this.ioc = this.defaultIoc;
        }
        return this[_ioc];
    }

    /**
     * Check if "ioc" has been set
     *
     * @return {boolean}
     */
    hasIoc() {
        return (this[_ioc] !== undefined && this[_ioc] !== null);
    }

    /**
     * Get a default "ioc"
     *
     * @return {Container|null} A default "ioc" value or null if none is available
     */
    get defaultIoc() {
        return IoCFacade.make('ioc');
    }
});