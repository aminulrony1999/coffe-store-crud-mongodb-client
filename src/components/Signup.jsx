import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Signup = () => {
    const {newUser,setUser, setLoading} = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    newUser(email,password)
    .then(result =>{
        setUser(result.user);
        setLoading(false);
        form.reset();
        const user = {email};
        fetch('http://localhost:5000/user',{
          method : 'POST',
          headers : {
            'content-type' : 'application/json'
          },
          body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
    })
    .catch((error)=>{
        console.log(error);
    })
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign UP</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
