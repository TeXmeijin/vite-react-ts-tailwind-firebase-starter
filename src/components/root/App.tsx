import {HelmetProvider} from "react-helmet-async";
import {AuthProvider} from "~/components/contexts/UserContext";
import Main from "~/components/root/Main";

export const App = () => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </HelmetProvider>
  )
};
