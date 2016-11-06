'use strict';

import IoCFacade from './../Facades/IoCFacade';
import { REGISTRAR_CLASS } from './../Providers/RegistrarServiceProvider';
import { Mixin } from 'mixwith/src/mixwith';

/**
 * registrar symbol
 *
 * @type {Symbol}
 * @private
 */
const _registrar = Symbol('registrar');

/**
 * Registrar Aware Mixin
 *
 * @return {RegistrarAware}
 */
export default Mixin((superClass) => class RegistrarAware extends superClass {

    /**
     * Set registrar
     *
     * @param {Registrar|null} registrar Registrar instance
     */
    set registrar(registrar) {
        this[_registrar] = registrar;
    }

    /**
     * Get registrar
     *
     * @return {Registrar|null} Registrar instance
     */
    get registrar() {
        if( ! this.hasRegistrar()){
            this.registrar = this.defaultRegistrar;
        }
        return this[_registrar];
    }

    /**
     * Check if registrar has been set
     *
     * @return {boolean}
     */
    hasRegistrar(){
        return (this[_registrar] !== undefined && this[_registrar] !== null);
    }

    /**
     * Get default Registrar
     *
     * @return {Registrar|null} A default registrar instance or null if none is available
     */
    get defaultRegistrar() {
        return IoCFacade.make(REGISTRAR_CLASS);
    }
});