import type { Metadata } from "next";
import "./globals.css";
import ComponentProvider from "@/components";
import { lazy, Suspense } from "react";
import LoadingComponent from "@/components/loading";
const Layout = lazy(() => import("@/components/layout"));
export const metadata: Metadata = {
  title: "Mintum Office",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ComponentProvider>
          <Suspense
            fallback={<LoadingComponent />}>
            <Layout>{children}</Layout>
          </Suspense>
        </ComponentProvider>
      </body>
    </html>
  );
}
