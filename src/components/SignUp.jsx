
import { useForm } from "react-hook-form";

const SignUp = (ToggleForm) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
      const jsonData = JSON.stringify(data);
      localStorage.setItem('formData', jsonData);
      ToggleForm()
      // console.log(localStorage.setItem('formData', jsonData));
    };
    // console.log(errorst4);
  
    return (
      <>
      <h1>Signup Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
        {errors.Name && <span>This field is required</span>}
        <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
        {errors.Email && <span>Enter a valid email</span>}
        <input type="password" placeholder="Password" {...register("Password", {required: true, min: 4, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i})} />
        {errors.Password && <span>Password should contain capital letters, small letters, numbers and symbols</span>}
        <input type="submit" />
        <h4 onClick={ () => ToggleForm()}>Already user? Login</h4>
      </form>
      </>
    )
}

export default SignUp