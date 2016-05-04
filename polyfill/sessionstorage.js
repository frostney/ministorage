var sessionStorage =
  (typeof window === 'undefined') ? global.sessionStorage : window.sessionStorage;

var isSupported = require('./isSupported')(sessionStorage);

if (!isSupported) {
  require('./monkeypatch')(sessionStorage);
}
