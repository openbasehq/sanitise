interface SanitiseUriOptions {
  invalidUri?: any;
}

// eslint-disable-next-line no-control-regex
const reControlChars = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gi;
const reInvalid = /^([^\w]*)(javascript|data|vbscript)/im;
const reUri = /^([^:]+):/gm;
const defaults = {
  invalidUri: void 0
};

export const sanitise = (uri?: string | null, options?: SanitiseUriOptions) => {
  if (typeof uri === 'undefined') return uri;
  if (uri === null) return 'null';

  const { invalidUri } = { ...defaults, ...options };

  const result = uri.replace(reControlChars, '').trim();

  if (['.', '/'].indexOf(uri[0]) > -1) return result;

  const matches = result.match(reUri);
  if (!matches) return result;

  const [protocol] = matches;

  if (reInvalid.test(protocol)) return invalidUri;

  return result;
};
