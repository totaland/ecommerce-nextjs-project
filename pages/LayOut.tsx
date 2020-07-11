import Head from 'next/head';
import Footer from './Footer';
import React from 'react';

interface ILayout {
	children: React.ReactNode;
}
function Layout({ children }: ILayout) {
	return (
		<>
			<Head>
				<title>Learn React</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>{children}</main>
			<Footer />
		</>
	);
}

export default Layout;
