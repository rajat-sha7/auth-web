import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.jsx";
import { useDispatch } from "react-redux";
import { signInSucces } from "../redux/user/userSlice.js";

export default function OAuth() {
      const dispatch = useDispatch();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch('api/auth/google',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name :result.user.displayName,
          email :result.user.email,
          photo: result.user.photoURL,
        })

      } );
      const data = await res.json();
      dispatch(signInSucces(data));

      console.log(data )
     
    } catch (error) {
      console.log("could not login with goole ", error);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white rounded-lg p-3 uppercase
    hover:opacity-95"
    >
      Continue with google
    </button>
  );
}
