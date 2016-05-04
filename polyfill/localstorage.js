var localStorage = (typeof window === 'undefined') ? global.localStorage : window.localStorage;

var isSupported = require('./isSupported')(localStorage);

if (!isSupported) {
  require('./monkeypatch')(localStorage);
}
