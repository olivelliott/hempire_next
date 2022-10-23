import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar data-theme='mytheme'/>
      <Component data-theme='mytheme' {...pageProps} />
    </>
  );
}

export default MyApp;
