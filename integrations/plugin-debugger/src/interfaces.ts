// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { Jovo } from '@jovotech/framework';

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export interface JovoDebuggerPayload<DATA extends any = any> {
  requestId: number | string;
  data: DATA;
}

export interface JovoUpdate<KEY extends keyof Jovo | string = keyof Jovo | string> {
  key: KEY;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  value: KEY extends keyof Jovo ? Jovo[KEY] : any;
  path: KEY extends keyof Jovo ? KEY : string;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  previousValue?: KEY extends keyof Jovo ? Jovo[KEY] : any;
}
