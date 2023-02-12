import "./globals.css";
import Navbar from '../components/Navbar'
import Head from './head'
import Footer from '../components/Footer'
import { AnalyticsWrapper } from './components/analytics';
import { Oswald, Birthstone } from '@next/font/google';

// If loading a variable font, you don't need to specify the font weight
const oswald = Oswald({
  variable: '--font-oswald',
});

const birthstone = Birthstone({
  variable: '--font-birthstone',
  weight: '400'
})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={oswald.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      {/* <head /> */}
      <Head />
        <header>
          <Navbar />
        </header>
        <body>
          {children}
          <AnalyticsWrapper />
        </body>
      <footer>
        <Footer/>
      </footer>
    </html>
  );
}
