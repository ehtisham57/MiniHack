import TopNav from "@/components/TopNav";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>

      <TopNav>
      <Component {...pageProps} />
      </TopNav>
      
    </>
  );
}
