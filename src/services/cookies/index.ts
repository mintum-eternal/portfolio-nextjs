import { Helper } from "@/utils/Helpers";

interface ICookieOptions {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: boolean | "none" | "lax" | "strict";
  partitioned?: boolean;
}
function useCookies() {
  const setCookie = (
    name: string,
    value: string | object,
    options?: ICookieOptions
  ) => {
    const newCookiesObject: Record<
      string,
      unknown
    > = {
      [name]:
        typeof value === "string"
          ? value
          : JSON.stringify(value),
      ...options,
    };
    const newCookiesString = Object.keys(
      newCookiesObject
    )
      .map((key) =>
        key === name &&
        String(newCookiesObject[key]).length === 0
          ? `${key}=`
          : `${key}=${String(
              newCookiesObject[key]
            )}`
      )
      .join(";");
    document.cookie = newCookiesString;
  };
  const getCookies = () => {
    const cookies: Record<string, unknown> = {};
    document.cookie
      .split("; ")
      .forEach((cookie) => {
        const newObject = cookie.split("=");
        cookies[newObject[0]] = Helper.jsonParse(
          newObject[1]
        );
      });
    return cookies;
  };
  const removeCookies = (
    name: string,
    options?: ICookieOptions
  ) => {
    setCookie(name, "", {
      ...options,
      expires: new Date(0),
    });
  };
  return {
    cookies: getCookies(),
    setCookie,
    removeCookies,
  };
}
export default useCookies;
