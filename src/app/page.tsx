"use client";
import useCookies from "@/services/cookies";
import { useEffect } from "react";

function HomeRoot() {
  const { cookies, removeCookies, setCookie } =
    useCookies();
  useEffect(() => {
    // setCookie("profile1", exampleProfile, {
    //   path: "/",
    //   expires: new Date(
    //     exampleProfile.expireDate
    //   ),
    // });
  }, [setCookie]);
  console.log("check auth", cookies);
  return (
    <h1
      onClick={() =>{
        removeCookies("profile1", { path: "/" });
        console.log("check after", cookies);}
      }>
      Home
    </h1>
  );
}

export default HomeRoot;
