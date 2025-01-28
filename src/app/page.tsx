"use client";
import useCookies from "@/services/cookies";

function HomeRoot() {
  const { cookies, removeCookies } = useCookies();

  console.log("check auth", cookies);
  return (
    <h1
      onClick={() => {
        removeCookies("profile1", { path: "/" });
      }}>
      Home
    </h1>
  );
}

export default HomeRoot;
