import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { DrawerMenu } from "~/components";
import { ContextProvider } from "~/context";
import { renderHeaderComponent } from "~/utils";
import "tailwindcss/tailwind.css";
import "~/styles/global.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { pathname } = useRouter();

  return (
    <>
      <ContextProvider>
        {/* {renderHeaderComponent(pathname)} */}
        {/* <DrawerMenu /> */}
        <Component {...pageProps} />
      </ContextProvider>
    </>
  );
};

export default App;
