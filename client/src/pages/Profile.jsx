import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="P-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          className="h-24 w-24 self-center cursor-pointer rounded-full object-cover"
          src={currentUser.profilePicture}
          alt="profile"
        />
        <input
          type="text"
          defaultValue={currentUser.username}
          id="username"
          placeholder="UserName"
          className="bg-slate-100 rounded-lg p-3"
        />

        <input
          type="email"
          defaultValue={currentUser.email}
          id="email"
          placeholder="email"
          className="bg-slate-100 rounded-lg p-3"
        />

        <input
          type="password"
          defaultValue={currentUser.password}
          id="password"
          placeholder="password"
          className="bg-slate-100 rounded-lg p-3"
        />

        <button className="disabled:opacity-80 hover:opacity-95 bg-slate-700 text-white p-3 rounded-lg uppercase">update</button>
      </form>

      <div className="flex justify-between mt-5">
         <span className="text-red-700 cursor-pointer" >
          Delete Account
         </span>

         <span className="text-red-700 cursor-pointer" >
          SignOut
         </span>

      </div>
    </div>
  );
}
