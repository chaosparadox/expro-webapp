import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { AuthContextProvider } from "../context/AuthContext";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="white" />
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  );
}
