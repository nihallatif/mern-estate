import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };
  return (
    <button
      type="button"
      href="javascript:;"
      onClick={handleGoogleClick}
      class="block w-full bg-white-600 mt-4 py-2 rounded-2xl border border-violet-700 font-semibold mb-2 
 hover:border-violet-800 focus:bg-blue-50 active:bg-blue-100"
    >
      <div class="relative flex items-center space-x-4 justify-center">
        <img
          src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
          class="absolute left-3 w-5"
          alt="google logo"
        />
        <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
          Continue with Google
        </span>
      </div>
    </button>
  );
}
