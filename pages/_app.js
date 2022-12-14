import BasicLayout from "../components/layout/BasicLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  );
}

export default MyApp;
