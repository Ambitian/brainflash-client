/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_SERVER_PROTOCOL: string;
    REACT_APP_SERVER_HOST: string;
    REACT_APP_SERVER_PORT: number;
  }
}
