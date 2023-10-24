import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../authProvider/AuthProvider";



const Login = () => {


    const data = useContext(UserContext)
    const { existingUser ,setUser} = data

    const handleForm = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)


        existingUser(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user)
            // ...
          })
          .catch((error) => {
            console.log('password milena')
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }

   
    // console.log(data)
    

    return (
        <div>
            {/* <!-- component --> */}
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign In</h1>
                        {/* <p>Name : {username.name}</p> */}

                        <form onSubmit={handleForm}>


                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" />

                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" />


                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-green text-white bg-black hover:bg-green-dark focus:outline-none my-1"
                            >Login</button>
                        </form>

                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Do not have an account?
                        <Link to={'/register'} className="no-underline border-b border-blue text-blue " href="../login/">
                            Sign in
                        </Link>.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;