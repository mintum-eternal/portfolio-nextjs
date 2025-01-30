"use client"
import { Helper } from "@/utils/Helpers";
import { useState } from "react";
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
const useCookies = () => {
  const getCookies = () => {
    const newCookies: Record<string, unknown> =
      {};
    try {
      document?.cookie
        .split("; ")
        .forEach((cookie) => {
          const newObject = cookie.split("=");
          newCookies[newObject[0]] =
            Helper.jsonParse(
              decodeURIComponent(newObject[1])
            );
        });

      return newCookies;
    } catch {
      return newCookies;
    }
  };
  const [cookies, setCookies] = useState<
    Record<string, unknown>
  >(getCookies());
  const setCookie = (
    name: string,
    value: string | object,
    options?: ICookieOptions
  ) => {
    const newCookiesObject: Record<
      string,
      unknown
    > = {
      [name]: encodeURIComponent(
        typeof value === "string"
          ? value
          : JSON.stringify(value)
      ),
      ...options,
    };

    const newCookiesString = Object.keys(
      newCookiesObject
    )
      .map(
        (key) => `${key}=${newCookiesObject[key]}`
      )
      .join(";");
    document.cookie = newCookiesString;
    setCookies(getCookies());
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
    cookies,
    setCookie,
    removeCookies,
  };
};
export default useCookies;
