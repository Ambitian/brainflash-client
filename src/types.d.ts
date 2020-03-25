export type AppAction<K, V = void> = V extends void
  ? { type: K }
  : { type: K } & V;
