import '../components/register-components';
import '../css/main.css';
import Head from 'next/head';
//dsds
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.svg" />
            </Head><div>aaa</div>
            <Component {...pageProps} />
        </>
    );
}
