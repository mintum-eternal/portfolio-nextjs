"use client"
import useCookies from "@/services/cookies";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Header from "./header";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { cookies } = useCookies();
  return (
    <>
      {cookies.auth ? (
        <div className="antialiased h-screen w-full flex flex-row">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <div className="overflow-auto flex flex-col flex-1">
              <div className="flex-1 m-1">
                {children}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen w-full">
          {children}
        </div>
      )}
    </>
  );
}

export default Layout;
