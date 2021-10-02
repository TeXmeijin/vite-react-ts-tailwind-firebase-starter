import { Router } from "~/components/router/Router";
import { initializeFirebaseIfYet } from "~/lib/firebase";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSignIn, useSignOut } from "~/components/contexts/UserContext";

function App() {
  const { signIn } = useSignIn();
  const { signOut } = useSignOut();
  useEffect(() => {
    initializeFirebaseIfYet();

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        signIn(user);
      } else {
        signOut();
      }
    });
  }, []);
  return (
    <main>
      <Router></Router>
    </main>
  );
}

export default App;
