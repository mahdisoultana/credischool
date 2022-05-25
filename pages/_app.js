import "../styles/globals.css";
import Layout from "../components/layout/index";
import IsMobileProvider from "../context/IsMobileProvider";
function MyApp({ Component, pageProps }) {
  return (
    <IsMobileProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IsMobileProvider>
  );
}

export default MyApp;
