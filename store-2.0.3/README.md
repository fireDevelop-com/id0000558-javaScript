A feature-filled and friendly way to take advantage of localStorage and sessionStorage (JSON, namespacing, extensions, etc).

Download: [store.min.js][prod]  or  [store.js][dev]  
[NPM][npm]: ```npm install store2``` ([store was taken](#store-vs-store))  
Bower: ```bower install store```  

[prod]: https://raw.github.com/nbubna/store/master/dist/store.min.js
[dev]: https://raw.github.com/nbubna/store/master/dist/store.js
[npm]: https://npmjs.org/package/store2


## Documentation
The main store function can handle ```set```, ```get```, ```setAll```, ```getAll``` and ```clear``` actions directly. Respectively, these are called like so:

```javascript
store(key, data);
store(key);
store({key: data, key2: data2});
store();
store(false);
```

There are also more explicit and versatile functions available:

```javascript
store.set(key, data[, overwrite]); // === store(key, data);
store.setAll(data[, overwrite]);   // === store({key: data, key2: data});
store.get(key[, alt]);             // === store(key);
store.getAll();                    // === store();
store.clear();                     // === store(false);
store.has(key);                    // returns true or false
store.remove(key);                 // removes key and its data
store.each(callback);              // callback receives key, data, index args
store.keys();                      // returns array of keys
store.key(index);                  // return key at index
store.size();                      // number of keys, not length of data
store.clearAll();                  // clears *ALL* areas
```

Passing in ```false``` for the optional overwrite parameters will cause ```set``` actions to be skipped if the storage already has a value for that key. All ```set``` action methods return the previous value for that key, by default. If overwrite is ```false``` and there is a previous value, the unused new value will be returned.

All of these use the browser's localStorage (aka "local"). Using sessionStorage merely requires calling the same functions on ```store.session```:

```javascript
store.session("addMeTo", "sessionStorage");
store.local({lots: 'of', data: 'altogether'});// store.local === store :)
```
All the specific ```get```, ```set```, etc. functions are available on both ```store.session``` and ```store.local```, as well as any other storage facility registered via ```store.area(name, customStorageObject)``` by an extension, where customStorageObject must implement the [Storage interface][storage]. This is how [store.old.js][old] extends store.js to support older versions of IE and Firefox.

[storage]: http://dev.w3.org/html5/webstorage/#the-storage-interface

If you want to put stored data from different pages or areas of your site into separate namespaces, the ```store.namespace(ns)``` function is your friend:

```javascript
var cart = store.namespace('cart');
cart('total', 23.25);// stores in localStorage as 'cart.total'
console.log(store('cart.total') == cart('total'));// logs true
console.log(store.cart.getAll());// logs {total: 23.25}
cart.session('group', 'toys');// stores in sessionStorage as 'cart.group'
```

The namespace provides the same exact API as ```store``` but silently adds/removes the namespace prefix as needed. It also makes the namespaced API accessible directly via ```store[namespace]``` (e.g. ```store.cart```) as long as it does not conflict with an existing part of the store API.

The 'namespace' function is one of two "extra" functions that are also part of the "store API":

```javascript
store.namespace(prefix[, noSession]);// returns a new store API that prefixes all key-based functions
store.isFake();// is this storage persistent? (e.g. is this old IE?) 
```

If localStorage or sessionStorage are unavailable, they will be faked to prevent errors, but data stored will NOT persist beyond the life of the current document/page. Use [store.old.js][old] extension to add persistent backing for the store API in older browsers.

## Extensions & Experiments
Documentation on these is yet to be written. Some have tests in the repo already. Contributions are welcome, of course.

* [store.old.js][old] - Add working localStorage and sessionStorage polyfills for older browsers
* [store.cache.js][cache] - To make data expire, pass a number of minutes as the overwrite param on ```set()``` calls
* [store.bind.js][bind] - Better, cross-browser storage event handling (in browsers that have such events)
* [store.quota.js][quota] - Add handlers for quota errors, experiments in measuring data use
* [store.overflow.js][overflow] - Short demo extension that probably has no legitimate use case.

[old]: https://raw.github.com/nbubna/store/master/src/store.old.js
[cache]: https://raw.github.com/nbubna/store/master/src/store.cache.js
[bind]: https://raw.github.com/nbubna/store/master/src/store.bind.js
[quota]: https://raw.github.com/nbubna/store/master/src/store.quota.js
[overflow]: https://raw.github.com/nbubna/store/master/src/store.overflow.js

## Release History
* 2010-02-10 v0.1 (extraction from esha.js)
* 2010-05-25 v1.0 (internal release)
* 2013-04-09 v2.0.3 (public)

## Store vs Store
When i went to publish this on NPM i discovered another [store.js][other] by Marcus Westin.
To my surprise, even our APIs had notable overlap. His has fewer features and includes superior support
for IE 6/7 in the main lib. I contacted him with the idea of merging the featuresets, but we agreed it wouldn't work.
He sees his library as a temporary polyfill meant to fade away with IE 6/7. This project is meant 
to always be useful, as a better way to use localStorage, with polyfilling a mere extension.  I do hope
to incorporate some of the IE 6/7 improvements into store.old.js at some point, but it is not a priority.

Until such time as Marcus retires his polyfill, i will continue to publish on Bower as 'store' and NPM as 'store2'.
My apologies for any confusion this causes.

[other]: https://github.com/marcuswestin/store.js/
