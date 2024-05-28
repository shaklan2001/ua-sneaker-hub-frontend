// _app.js
"use client"
import "@/styles/globals.css";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Provider } from 'react-redux'
import store from "@/store/store";
import { Toaster } from "sonner";
import {usePathname} from "next/navigation"


export default function App({ Component, pageProps }) {
    const params=usePathname();
    const showHeader=params=='/login'|| params=='/register'?false:true;

    return (
        <>
            <Head>
                <title>Ua Sneakers Hub</title>
                <meta
                    name="description"
                    content="The world of snakers is here"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/logo.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Provider store={store}>
                {showHeader && <Header />}
                <Component {...pageProps} />
                <Toaster/>
               {showHeader && <Footer />}
            </Provider>
        </>
    );
}
