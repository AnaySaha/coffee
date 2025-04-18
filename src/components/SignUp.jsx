import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {

  const {createUser} = useContext(AuthContext);

    const handleSignUp = e =>{
        e.preventDefault();
        console.log('form sign up')

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
      console.log(email,password)
        createUser(email, password)
        .then(result => {
          console.log('user create at fb', result.user);
          const createdAt = result?.user?.metadata?.creationTime;
        })
        .catch(error => {
          console.log('error', error)

          const newUser = {name, email, createdAt}
          
          // using axios

          axios.post('http://localhost:5000/user', user)
          .then(data => {
            console.log(data.data)
          })
          
          
          
          
          
          // using fetch
          // save new user info to the database
          fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(newUser)
          })
          .then(res => res.json())
          .then(data => {
            if(data.insertedId){
              
            }
            console.log('user created to db', data);
          })
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name= "password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;