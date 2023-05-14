import { signIn } from "next-auth/react";

function login() {
  return (
    <div className="flex items-center justify-center">
      <button onClick={() => signIn("spotify", { callbackUrl: "/" })}>
        LogIn com Spotify
      </button>
    </div>
  );
}

export default login;
