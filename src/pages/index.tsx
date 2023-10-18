import Head from 'next/head';
import { Inter } from '@next/font/google';
import Home from '@/home';

const inter = Inter({ subsets: ['latin'] });

function Login() {
  return (
    <>
      <Head>
        <title>HOME</title>
      </Head>
      <main className={inter.className}>
        <Home />
      </main>
    </>
  );
}

export default Login;
