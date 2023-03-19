interface Env {
  REACT_APP_API_URL: string;
  REACT_APP_PRODUCTION_BASENAME: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}
