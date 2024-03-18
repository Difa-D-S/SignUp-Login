

const Home = ({ IsLoggedIn }) => {

    const storedObject = localStorage.getItem('formData');
    const storedData = JSON.parse(storedObject);
    const user = storedData.Name;

    const HandleLogout = () => {
        // localStorage.removeItem('formData');
        IsLoggedIn();
    }
  return (
    <>
        <h2>Welcome {user} </h2>
        <button onClick={() => HandleLogout()}>Logout</button>
    </>
  )
}

export default Home