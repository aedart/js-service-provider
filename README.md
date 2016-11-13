# Js Service Provider

Service Provider abstraction that allows you to register your [IoC](https://en.wikipedia.org/wiki/Inversion_of_control) bindings.

It acts as support components for the [@aedart/js-ioc](https://www.npmjs.com/package/@aedart/js-ioc) package.
Please check it out, before you continue reading.

Furthermore, just like the [@aedart/js-ioc](https://www.npmjs.com/package/@aedart/js-ioc) package, this too is inspired by [Taylor Otwell's](https://github.com/taylorotwell) [Laravel](https://laravel.com) version of [Service Providers](https://laravel.com/docs/master/providers). 

## Contents

* [How to install](#how-to-install)
* [Quick start](#quick-start)
  * [Prerequisite](#prerequisite)
  * [Create a provider](#create-a-provider)
  * [Register and boot provider](#register-and-boot-provider)
    * [Manually](#manually)
    * [Service Registrar](#service-registrar)
* [Contribution](#contribution)
* [Acknowledgement](#acknowledgement)
* [Versioning](#versioning)
* [License](#license)


## How to install

```console
npm install @aedart/js-service-provider
```

## Quick start

### Prerequisite 

The Service Provider abstraction is meant to offer a place where you can register your IoC bindings, as well as application bootstrapping.
It has been designed to work with the [@aedart/js-ioc](https://www.npmjs.com/package/@aedart/js-ioc) package - Yet, there is no type check hereof, meaning that any Service Container can be used. 

In any case, you should have some understanding of what [IoC](https://en.wikipedia.org/wiki/Inversion_of_control) means and 

### Create a provider

```javascript
import ServiceProvider from '@aedart/js-service-provider';

class MyBoxServiceProvider extends ServiceProvider {

    register(){
        // Register box
        this.ioc.bind('my-box', (ioc, params) => {
            return new Box(params);
        });
    }

    boot(){
        // ... not shown ... //
    }
}
```

### Register and boot provider

There are two ways that you can register your provider;

1) You can register and boot your provider manually
2) You can use the Service Registrar

#### Manually

Given that you have an IoC ready to be used, somewhere in your application bootstrap logic.

```javascript
let provider = new MyBoxServiceProvider(IoC);

// Register bindings
provider.register();

// Boot the services
provider.boot();
```

#### Service Registrar

The Service Registrar allows you to register and boot a bulk of providers. It also keeps track of the provider's boot state; has boot or not!

```javascript
import { Registrar } from '@aedart/js-service-provider';

let registrar = new Registrar(IoC);

// ... Given that you have a set of service providers ... //

// Register and boot
registrar.registerProviders([
    CalculatorServiceProvider,
    MyBoxServiceProvider,
    GfxServiceProvider,
    AnimationServiceProvider
]);
```

**Delay booting of providers**

Sometimes it is useful to register your providers, but not to boot them straight away.

```javascript
import { Registrar } from '@aedart/js-service-provider';

let registrar = new Registrar(IoC);

// ... Given that you have a set of service providers ... //

// Register - but do NOT boot
registrar.registerProviders([
    CalculatorServiceProvider,
    MyBoxServiceProvider,
    GfxServiceProvider,
    AnimationServiceProvider
], false);

// Later in your application ...
registrar.bootProviders();
```

Check out the `Registrar`'s source code, for additional information. 

## Contribution

Have you found a defect ( [bug or design flaw](https://en.wikipedia.org/wiki/Software_bug) ), or do you wish improvements? In the following sections, you might find some useful information
on how you can help this project. In any case, I thank you for taking the time to help me improve this project's deliverables and overall quality.

### Bug Report

If you are convinced that you have found a bug, then at the very least you should create a new issue. In that given issue, you should as a minimum describe the following;

* Where is the defect located
* A good, short and precise description of the defect (Why is it a defect)
* How to replicate the defect
* (_A possible solution for how to resolve the defect_)

When time permits it, I will review your issue and take action upon it.

### Fork, code and send pull-request

A good and well written bug report can help me a lot. Nevertheless, if you can or wish to resolve the defect by yourself, here is how you can do so;

* Fork this project
* Create a new local development branch for the given defect-fix
* Write your code / changes
* Create executable test-cases (prove that your changes are solid!)
* Commit and push your changes to your fork-repository
* Send a pull-request with your changes
* _Drink a [Beer](https://en.wikipedia.org/wiki/Beer) - you earned it_ :)

As soon as I receive the pull-request (_and have time for it_), I will review your changes and merge them into this project. If not, I will inform you why I choose not to.

## Acknowledgement

* [Taylor Otwell](https://github.com/taylorotwell), for his [IoC](https://laravel.com/docs/master/container) and [Service Provider](https://laravel.com/docs/master/providers) implementation

## Versioning

This package follows [Semantic Versioning 2.0.0](http://semver.org/)

## License

[BSD-3-Clause](http://spdx.org/licenses/BSD-3-Clause), Read the LICENSE file included in this package