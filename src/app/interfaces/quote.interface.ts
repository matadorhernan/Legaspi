export interface Quote {
  contact?: Contact;
  eventSize?: Option;
  staff?: Option;
  venue?: Option;
  table?: Option;
  tablecloth?: Option;
  chair?: Option;
  music?: Option;
  tableware?: Option;
  plates?: Option;
}

export interface Option {
  a?: boolean;
  b?: boolean;
  c?: boolean;
  d?: boolean;
  e?: boolean;

  f?: boolean;
  g?: boolean;
  h?: boolean;
  i?: boolean;
  j?: boolean;
}

export interface Contact {
  name: string;
  email: string;
}
