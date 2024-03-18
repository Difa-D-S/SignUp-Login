
import { useForm } from "react-hook-form";


const Login = (ToggleForm, IsLoggedIn) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
      const storedDatastring = localStorage.getItem('formData');

      if (storedDatastring){
        const storedData = JSON.parse(storedDatastring); 

        if (data.Email == storedData.Email && data.Password == storedData.Password){
            IsLoggedIn();
        } else {
            alert('Enter Valid Credentials');
        }
      } else {
        alert('No data stored in local Storage.');
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
      <input type="submit" />
      <h4 onClick={ () => ToggleForm()}>Not a user? SignUp</h4>
    </form>
    </>
  )
}

export default Login