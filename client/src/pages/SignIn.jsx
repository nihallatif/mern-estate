import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from "../components/OAuth";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      //console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div class="h-screen md:flex">
	<div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
		<div>
			<h1 class="text-white font-bold text-4xl font-sans">AppName</h1>
			<p class="text-white mt-1">The most popular peer to peer lending at SEA</p>
			<button type="button" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
		</div>
		<div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form onSubmit={handleSubmit} class="bg-white w-1/2">
			<h1 class="text-gray-800 font-bold text-2xl mb-3">Welcome Back</h1>
			<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
			</svg>
				<input type="email" placeholder="Email" className="pl-2 outline-none border-none w-full" id="email" onChange={handleChange} />
      </div>
				<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
					<input type="password" placeholder="Password" className="pl-2 outline-none border-none w-full" id="password" onChange={handleChange}/>
      </div>
							
              <button disabled={loading} className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
            {!loading ? "Sign In" : <svg className="animate-spin mx-auto h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4"></circle>
       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
     </svg>}
           </button>
           <OAuth />
           <div className="flex justify-center gap-2 mt-5">
          <p className="text-slate-600">Dont have an account?</p>
         <Link to={"/sign-up"}>
            <span className="text-slate-600 hover:underline">Sign up</span>
          </Link>
       </div>
        {error && <p className='text-red-500 mt-5'>{error}</p>}
         </form>
         
      </div>
		
	</div>

    // <div className="p-3 max-w-lg mx-auto">
    //   <h1 className="text-3xl text-center font-semibold my-7 text-slate-700">Sign In</h1>
    //   <div className="bg-white p-7 rounded-2xl">
    //     <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    //       <input
    //         type="email"
    //         placeholder="Email"
    //         className="border p-3 rounded-lg"
    //         id="email"
    //         onChange={handleChange}
    //       />

    //       <input
    //         type="password"
    //         placeholder="Password"
    //         className="border p-3 rounded-lg"
    //         id="password"
    //         onChange={handleChange}
    //       />

    //       <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
    //         {!loading ? "Sign In" : <svg className="animate-spin mx-auto h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    //   <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4"></circle>
    //   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    // </svg>}
    //       </button>
    //       <OAuth />
    //     </form>
    //     <div className="flex justify-center gap-2 mt-5">
    //       <p>Dont have an account?</p>
    //       <Link to={"/sign-up"}>
    //         <span className="text-slate-900 hover:underline">Sign up</span>
    //       </Link>
    //     </div>
    //     {error && <p className='text-red-500 mt-5'>{error}</p>}
    //   </div>
    // </div>
  );
}
