import { useCallback, useEffect, useState } from "react";
import { AuthEndpoints } from "../common/constants/endpoints/auth.endpints";
import { TokenResponse } from "../common/types/auth/tokenResponse";
import api from "../helpers/api/api.helper";

const useToken = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(!token);

  const fetchToken = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await api.get<TokenResponse>(AuthEndpoints.token);
      const data = response.data;

      setToken(data.token);
      localStorage.setItem("token", data.token);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (!storedToken) {
      fetchToken();
    }
  }, []);

  return { token, isError, isLoading, refetchToken: fetchToken };
};

export { useToken };
