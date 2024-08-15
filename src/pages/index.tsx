'use client'
import Link from "next/link"
import React from "react"
import Layout from "./layout"

export default function Home() {
  return (
    <Layout title='Libraries.io UI Home'>
      <section className="flex flex-col items-center justify-center p-4 ">
        <div className="flex flex-col items-center text-center gap-4 max-w-md">
          <h2 className="text-2xl font-bold text-gray-800">Welcome to Libraries.io UI</h2>
          <p>This is a simple UI made with NextJS, React and Typescript to wrap calls show results from Libraries.io</p>
          <p>Click on the link below to start the search</p>
          <Link href="/search/" className="underline text-gray-800 hover:text-gray-500">
            Try the search now! 🔍
          </Link>
        </div>
      </section>
    </Layout>
  )
}
