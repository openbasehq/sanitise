import { Readable } from 'stream';

import { Parser } from 'htmlparser2';
import getStream from 'get-stream';

export const sanitise = (html?: string | null) => {
  if (typeof html === 'undefined') return Promise.resolve(html);
  if (html === null) return Promise.resolve(null);

  const stream = new Readable();
  const parser = new Parser({
    onend() {
      stream.push(null);
    },
    ontext(text: any) {
      stream.push(text);
    }
  });
  parser.write(html);
  parser.end();

  return getStream(stream);
};
