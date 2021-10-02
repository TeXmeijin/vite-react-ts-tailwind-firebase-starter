import {HelmetProvider} from "react-helmet-async";
import {AuthProvider} from "~/components/contexts/UserContext";
import App from "~/components/root/App";

export const GlobalProviders = () => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </HelmetProvider>
  )
};
