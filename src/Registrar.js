'use strict';

/**
 * Registrar
 *
 * @description Registers and boots service providers
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
class Registrar {

    /**
     * Register a service provider
     *
     * If this registrar has booted previous providers, the given provider
     * will automatically be booted
     *
     * @param {ServiceProvider|function} provider Instance of service provider or function which will be newed up
     * @param {boolean} [force] If true, provider's "register" method will be triggered
     * @param {boolean} [boot] If true, provider's "boot" method will be triggered.
     *                         APPLIES ONLY if "force" is true.
     *
     * @return {ServiceProvider} The booted provider instance
     */
    register(provider, force = false, boot = false){}

    /**
     * Register a collection of service providers
     *
     * If this registrar has booted previous providers, the given provider
     * will automatically be booted
     *
     * @param {Array<ServiceProvider|function>} providers Instances of service provider or functions which will be newed up
     * @param {boolean} [force]     If true, provider's "register" method will be triggered
     * @param {boolean} [delayBoot] If true, all providers are registered first and only then are booted.
     *                              APPLIES ONLY registrar has booted previous providers. If false, then
     *                              each given provider is booted as soon as it has been registered.
     *
     * @return {void}
     */
    registerProviders(providers, force = false, delayBoot = true){}

    /**
     * Check if given provider has been registered
     *
     * @param {ServiceProvider|function} provider
     *
     * @return {boolean}
     */
    hasRegistered(provider){}

    /**
     * Boot all registered service providers
     *
     * Method will invoke "register" on all providers that have
     * yet to register their services.
     *
     * Method will invoke "boot" on all providers.
     *
     * @return {void}
     */
    bootProviders(){}

    /**
     * Check if registrar has booted it's providers
     *
     * @see bootProviders()
     *
     * @return {boolean}
     */
    hasBooted(){}
}

export default Registrar;