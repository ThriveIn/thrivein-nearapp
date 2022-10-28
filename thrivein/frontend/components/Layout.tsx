import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

import Header from "./Header";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "ThriveIN" }: Props) => (
  <div className='h-screen flex flex-col overflow-hidden'>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header />
    <div className='flex-grow'>{children}</div>
  </div>
);

export default Layout;
