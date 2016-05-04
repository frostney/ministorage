class Storage {
  constructor() {
    this.data = {};
  }

  getItem(key) {
    if (Object.hasOwnProperty.call(this.data, key)) {
      return this.data[key];
    }

    return null;
  }

  setItem(key, value) {
    this.data[key] = String(value);
  }

  removeItem(key) {
    delete this.data[key];
  }

  clear() {
    this.data = {};
  }
}

export default Storage;
