import Nav from "../components/Nav";
import { auth } from "../firebase";
import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./login";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  return (
    <>
      <Nav />
      {!user ? <Login /> : <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
