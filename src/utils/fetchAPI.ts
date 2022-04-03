import type { AxiosError, AxiosRequestConfig } from "axios";
import axios from "axios";
import jwt from "jsonwebtoken";

type OptionsType = {
  method?: "get" | "post" | "put" | "delete";
  data?: any;
  params?: any;
  auth?: boolean;
};

const fetchAPI = async (
  url: string,
  options?: OptionsType
): Promise<{
  res?: any;
  error?: string | any;
}> => {
  const auth = options?.auth || false;

  const config: AxiosRequestConfig = { method: options?.method || "get" };

  if (options?.data) config.data = options.data;
  if (options?.params) config.params = options.params;

  if (auth && typeof window !== undefined) {
    const token = jwt.sign({}, process.env.APP_SECRET || "", {
      expiresIn: "15m",
    });

    config.headers = { Authorization: "Bearer " + token };
  }

  try {
    const res = await axios(new URL(url, process.env.API_URL).href, config);

    return {
      res: res.data,
    };
  } catch (err) {
    console.error(err);

    const errorMessage = (err as AxiosError)?.response?.data?.message;

    return {
      error: errorMessage || "Server Error",
    };
  }
};

export default fetchAPI;
