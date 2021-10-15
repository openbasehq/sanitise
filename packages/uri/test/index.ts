import test from 'ava';

import { sanitise } from '../src';

test('empty input', (t) => {
  t.is(sanitise(''), '');
  t.is(sanitise(null), 'null');
  t.is(sanitise(), void 0);
});

test('no modification', (t) => {
  t.snapshot(sanitise('http://bat.cave/front:door'));
  t.snapshot(sanitise('http://bat.cave:4567/front:door'));
  t.snapshot(sanitise('https://bat.cave'));
  t.snapshot(sanitise('https://bat.cave:4567/front:door'));
  t.snapshot(sanitise('./path/to/my.json'));
  t.snapshot(sanitise('/path/to/my.json'));
  t.snapshot(sanitise('//google.com/robots.txt'));
  t.snapshot(sanitise('www.bat.cave'));
  t.snapshot(sanitise('com.braintreepayments.demo://example'));
  t.snapshot(sanitise('mailto:test@bat.cave?subject=hello+world'));
  t.snapshot(sanitise('www.bat.cave/with-áccêntš'));
  t.snapshot(sanitise('www.bat.cave/лот.рфшишкиü–'));
});

test('control characters', (t) => {
  t.snapshot(sanitise('www.bat.cave/\u200D\u0000\u001F\x00\x1F\uFEFFfoo'));
});

test('whitespace', (t) => {
  t.snapshot(sanitise('   http://bat.cave/front:door    '));
});

['javascript', 'data', 'vbscript'].forEach((protocol) => {
  test(`${protocol}`, (t) => {
    t.snapshot(sanitise(`${protocol}:alert('batman')`));
    t.snapshot(sanitise(`${protocol}:alert('batman')`, { invalidUri: 'robin' }));
    t.snapshot(sanitise(`x${protocol}:alert('batman')`));
    t.snapshot(sanitise(`&!*${protocol}:alert('batman')`));
    t.snapshot(sanitise(decodeURIComponent(`%20%20%20%20${protocol}:alert('batman')`)));
    t.snapshot(sanitise(`    ${protocol}:alert('batman')`));
    t.snapshot(sanitise(`http://bat.cave#${protocol}:foo`));
  });
});
