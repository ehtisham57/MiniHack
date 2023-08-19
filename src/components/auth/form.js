import Link from "next/link";
import { useRef } from "react";

export default function Form({ signin, onFormSubmit }) {
  const firstNameRef = useRef() ; 
  const lastNameRef = useRef() ;
  const emailRef = useRef();
  const passwordRef = useRef();
  const reppasswordRef = useRef();
  
  const onSubmitHandler = (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (signin) {
      e.preventDefault();
      onFormSubmit(email, password);
    }
    else {
      const reppassword = reppasswordRef.current.value;
      if (reppassword === password) {
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        e.preventDefault();
        onFormSubmit(firstName, lastName, email, password);
      }
      else {
        alert("Please Enter The Same Password !!!")
      }
    }
  }


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {signin ? "Sign in to your account" : "Signup for new account"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onSubmitHandler}>
            {
              !signin ? <div>
              <div>
               <label
                 htmlFor="ٖFirst Name"
                 className="block text-sm font-medium leading-6 text-gray-900"
               >
                First Name
               </label>
               <div className="mt-2">
                 <input
                   id="firstName"
                   name="firstName"
                   type="text"
                   ref={firstNameRef}
                   required
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>
 
             <div>
               <label
                 htmlFor="ٖLast Name"
                 className="block text-sm font-medium leading-6 text-gray-900"
               >
                 Last Name
               </label>
               <div className="mt-2">
                 <input
                   id="lastName"
                   name="lastName"
                   type="text"
                   ref={lastNameRef}
                   required
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>
             </div> : ""
            }
            

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  ref={emailRef}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> 

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>


              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={passwordRef}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            {
              !signin ? <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="repeatPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Repeat Password
                </label>
              </div>


              <div className="mt-2">
                <input
                  id="repeatPassword"
                  name="repeatPassword"
                  type="password"
                  ref={reppasswordRef}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>  :  ""
            }
            


            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  href={signin ? "/auth/signup" : "/auth/login"}
                  className="font-semibold text-amazon_blue hover:text-amber-400"
                >
                  {signin
                    ? "Do not have an account? Signup"
                    : "Already have an account? Sign in"}
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-amazon_blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:text-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {signin ? "Sign in" : "Sign up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
