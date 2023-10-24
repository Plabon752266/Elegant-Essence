
import { useContext } from 'react';
import { UserContext } from './../authProvider/AuthProvider';


const Register = () => {

    const authData = useContext(UserContext)
    const {registration,setUser}= authData
    // console.log(authData)

    const handleForm= (e)=>{
        e.preventDefault()
        const email = e.target.email.value 
        const password = e.target.password.value 
        // const text = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)

        registration(email,password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            setUser(user)
            console.log(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });

        console.log(email , password)


    }

    return (
        <div>
            {/* <!-- component --> */}
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    {/* <p>User name: {UserSignUp.name} </p> */}
                    <form onSubmit={handleForm}>
                  
                    {/* <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" /> */}

                    <input 
                        type="email"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    {/* <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" /> */}

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-white bg-black hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>
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
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue " href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;