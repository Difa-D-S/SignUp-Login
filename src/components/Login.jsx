
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (  {ToggleForm, IsLoggedIn}  ) => {
  
  const notify = () => toast("Invalid Email and Password");
  // const notify = () => toast("Invalid Email and Password");

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
      const storedDatastring = localStorage.getItem('formData');

      if (storedDatastring){
        const storedData = JSON.parse(storedDatastring); 

        if (data.Email == storedData.Email && data.Password == storedData.Password){
            IsLoggedIn();
        } else {
            notify();
        }
      } else {
        notify();
      }
      
    };
  return (
    <>
    <h1>Login Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      {errors.Email && <span>Enter a valid email</span>}
      <input type="password" placeholder="Password" {...register("Password", {required: true, min: 4, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i})} />
      {errors.Password && <span>Password should contain capital letters, small letters, numbers and symbols</span>}
      <input type="submit" /> <ToastContainer/>
      <h4 onClick={() => ToggleForm()}>Not a user? SignUp</h4>
    </form>
    </>
  )
}

export default Login