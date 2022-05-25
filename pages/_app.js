import "../styles/globals.css";
import Layout from "../components/layout/index";
import IsMobileProvider from "../context/IsMobileProvider";
import IsScrolledProvider from "../context/IsScrolledProvider";
function MyApp({ Component, pageProps }) {
  return (
    <IsMobileProvider>
      <IsScrolledProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </IsScrolledProvider>
    </IsMobileProvider>
  );
}

export default MyApp;
