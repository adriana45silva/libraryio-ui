'use client'
import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="text-center bg-[#F5F5F4] text-gray-800">
      <Component {...pageProps} />
    </div>
  )
}
