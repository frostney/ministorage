module.exports = function (storage) {
  var item = 'storage';

  if (!storage) {
    return false;
  }

  try {
    storage.setItem(item, item);
    storage.removeItem(item);
    return true;
  } catch (e) {
    return false;
  }
};
