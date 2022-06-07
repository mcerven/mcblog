import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>MC Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap py-4">
          <nav className="navbar bg-base-100">
            <div className="sticky top-0 p-4 w-full backdrop-blur">
              <ul className="flex flex-col overflow-hidden">
                <li>
                  <Link href="/">
                    <a className="btn btn-ghost normal-case">Home</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
              {children}
          </main>
        </div>
      </div>
      <footer className="mt-auto">
        Footer
      </footer>
    </div>
  )
}
