import Image from "next/image";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../firebase";

function Nav() {
  const router = useRouter();
  const [user] = useAuthState(auth);

  const login = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-[70px] bg-[#090b13] flex justify-between items-center px-9 tracking-[16px] z-10">
      <div
        className="w-20 mt-1 max-h-[70px] cursor-pointer"
        // onClick={() => router.replace("/", "", { scroll: false })}
        onClick={() => router.back()}
      >
        <Image
          src="https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/8d8e67a6e4069a67b43dd9031faac3c4d5dc77e0/public/images/logo.svg"
          width={150}
          height={120}
          objectFit="contain"
        />
      </div>

      <div className="hidden items-center h-full justify-end relative mr-auto ml-6 md:flex">
        <div
          onClick={() => router.push("/", "", { scroll: false })}
          className="flex items-center px-3 cursor-pointer group"
        >
          <Image
            src="https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/8d8e67a6e4069a67b43dd9031faac3c4d5dc77e0/public/images/home-icon.svg"
            width={20}
            height={20}
          />
          <span className="nav-link">HOME</span>
        </div>

        <div
          onClick={() => router.push("/")}
          className="flex items-center px-3 cursor-pointer group"
        >
          <Image
            src="https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/8d8e67a6e4069a67b43dd9031faac3c4d5dc77e0/public/images/search-icon.svg"
            width={20}
            height={20}
          />
          <span className="nav-link">SEARCH</span>
        </div>

        <div
          onClick={() => router.push("/")}
          className="flex items-center px-3 cursor-pointer group"
        >
          <Image
            src="https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/8d8e67a6e4069a67b43dd9031faac3c4d5dc77e0/public/images/watchlist-icon.svg"
            width={20}
            height={20}
          />
          <span className="nav-link">WATCHLIST</span>
        </div>

        <div
          onClick={() => router.push("/")}
          className="flex items-center px-3 cursor-pointer group"
        >
          <Image
            src="https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/8d8e67a6e4069a67b43dd9031faac3c4d5dc77e0/public/images/original-icon.svg"
            width={20}
            height={20}
          />
          <span className="nav-link">ORIGINALS</span>
        </div>

        <div
          onClick={() => router.push("/")}
          className="flex items-center px-3 cursor-pointer group"
        >
          <Image
            src="https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/8d8e67a6e4069a67b43dd9031faac3c4d5dc77e0/public/images/movie-icon.svg"
            width={20}
            height={20}
          />
          <span className="nav-link">MOVIES</span>
        </div>

        <div
          onClick={() => router.push("/")}
          className="flex items-center px-3 cursor-pointer group"
        >
          <Image
            src="https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/8d8e67a6e4069a67b43dd9031faac3c4d5dc77e0/public/images/series-icon.svg"
            width={20}
            height={20}
          />
          <span className="nav-link">SERIES</span>
        </div>
      </div>

      {user ? (
        <div className="relative h-12 w-12 flex cursor-pointer items-center justify-center group">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="rounded-full w-full h-full"
          />
          <div className="absolute top-10 right-0 bg-[#131313] border border-[#979797] border-opacity-30 rounded shadow-md p-[10px] text-sm tracking-[3px] w-[100px] opacity-0 group-hover:opacity-100 duration-1000">
            <span onClick={() => auth.signOut()}>Sign out</span>
          </div>
        </div>
      ) : (
        <button
          className="bg-opacity-60 py-2 px-4 uppercase tracking-widest border border-[#f9f9f9] rounded transition-all duration-200 ease-out hover:bg-[#f9f9f9] hover:text-black hover:border-transparent"
          onClick={login}
        >
          Login
        </button>
      )}
    </nav>
  );
}

export default Nav;
