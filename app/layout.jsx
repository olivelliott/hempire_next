import "./globals.css";
import Navbar from '../components/Navbar'
import Head from './head'
import Footer from '../components/Footer'

import { Oswald } from '@next/font/google';

// If loading a variable font, you don't need to specify the font weight
const oswald = Oswald({
  variable: '--font-oswald',
});

// export default function RootLayout({ children }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={inter.className}>
//       <body>{children}</body>
//     </html>
//   );
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={oswald.variable}>
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
        <body>{children}</body>
      </body>
      <footer>
        <Footer/>
      </footer>
    </html>
  );
}
