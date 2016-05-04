# ministorage
localStorage-/sessionStorage-compatible in-memory store

MiniStorage is meant to be as compatible with localStorage/sessionStorage as possible, having the signatures and return values as its localStorage/sessionStorage counterparts.

## Installation

```
$ npm install ministorage
```

## Usage

```javascript
import Storage from 'ministorage';

const store = new Storage();

store.setItem('hello', 'world');
store.getItem('hello');

store.clear();
```

MiniStorage also includes polyfills for localStorage and sessionStorage for environments that don't support them out of the box. (The polyfills are meant to be used in CommonJS environments.)

```
require('ministorage/polyfill');
```

If you wish to only polyfill one specific storage, this can be done with:

```
require('ministorage/polyfill/localstorage');

// or

require('ministorage/polyfill/sessionstorage');
```

These also work in environments where sessionStorage or localStorage don't have any quota by default. (Firefox incognito mode or Safari incognito mode.)
While the data in those modes will not get persisted, it helps to counteract the `DOM Exception 22` errors from your own code or third-party modules.

## License

MIT
