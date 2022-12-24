import "../styles/globals.css";
import { AppPropsWithLayout } from "../interfaces/common";
import {
  QueryClientProvider,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import { useRouter } from "next/router";
import OApi from "../services";
// import AuthLoader from "../components/AuthLoader";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <QueryClientProvider client={queryClient}>
      {/* <AuthLoader> */}
      <Component {...pageProps} />
      {/* </AuthLoader> */}
    </QueryClientProvider>
  );
}

export default MyApp;
