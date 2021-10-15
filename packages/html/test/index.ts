import test from 'ava';

import { sanitise } from '../src';

test('undefined', async (t) => {
  const result = await sanitise(void 0);
  t.snapshot(result);
});

test('null', async (t) => {
  const result = await sanitise(null);
  t.snapshot(result);
});

test('simple', async (t) => {
  const result = await sanitise('yo<i> <b>hey</b></i>');
  t.snapshot(result);
});

test('complex', async (t) => {
  const result = await sanitise('<script>wooo</script>yo<i><!-- ignore me! --> <b>hey</b></i>');
  t.snapshot(result);
});
