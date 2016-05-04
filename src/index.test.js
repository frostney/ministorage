import test from 'ava';
import Storage from './index';

test('creating an instance', t => {
  const storage = new Storage();

  t.truthy(storage);
});

test('retreive a value', t => {
  const storage = new Storage();

  storage.setItem('hello', 'world');
  t.is(storage.getItem('hello'), 'world');

  storage.setItem('stringify-me', 42);
  t.is(storage.getItem('stringify-me'), '42');
});

test('remove a value', t => {
  const storage = new Storage();

  storage.setItem('hello', 'world');
  storage.removeItem('hello');

  t.is(storage.getItem('hello'), null);
});

test('clear the store', t => {
  const storage = new Storage();

  storage.setItem('hello', 'world');
  storage.setItem('stringify-me', 42);

  storage.clear();

  t.is(storage.getItem('hello'), null);
  t.is(storage.getItem('stringify-me'), null);
});
