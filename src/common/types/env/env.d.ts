interface Env {
  REACT_APP_API_URL: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}
