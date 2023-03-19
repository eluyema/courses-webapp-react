import axios from "axios";
import { env } from "../../common/constants/env/env.constants";

const api = axios.create({
  baseURL: env.apiUrl,
  timeout: 10000,
});

export default api;
