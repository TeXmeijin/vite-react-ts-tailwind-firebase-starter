import { useAuth } from "~/lib/firebase";

type Props = {};

export const SignOutButton = (props: Props) => {
  const handleClick = () => {
    const auth = useAuth();
    auth.signOut();
  };

  return (
    <button
      onClick={handleClick}
      type={"button"}
      className="btn btn-info normal-case"
    >
      Sign Out
    </button>
  );
};
