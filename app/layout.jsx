import "./globals.css";
import Navbar from '../components/Navbar'
import Head from './head'
import Footer from '../components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      {/* <head /> */}
      <Head />
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
      <footer>
        <Footer/>
      </footer>
    </html>
  );
}
