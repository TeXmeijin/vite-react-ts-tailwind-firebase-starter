import { useAuthState } from "~/components/contexts/UserContext";
import { SignInButton } from "~/components/domain/auth/SignInButton";
import { SignOutButton } from "~/components/domain/auth/SignOutButton";
import {Head} from "~/components/shared/Head";

function Index() {
  const { state } = useAuthState();

  return (
    <>
      <Head title={'TOP PAGE'}></Head>
      <div className="hero min-h-screen bg-gray-800">
        <div className="text-center hero-content text-3xl font-bold">
          <div>
            <h1>Vite + React + Firebase + TailwindCSS w/ daisyUI Boilerplate</h1>
            <div className="mt-4">
              {state.state === 'UNKNOWN' ? null : state.state === 'SIGNED_OUT' ? (
                <SignInButton></SignInButton>
              ) : (
                <SignOutButton></SignOutButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
