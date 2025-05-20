import React ,{ useState } from 'react'
import AuthLayout from '../../components/Layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom'
import Entry from '../../components/Inputs/Entry'
import { validateEmail } from "../../utils/helper"
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPath'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

const Signup = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const {updateUser} = useContext(UserContext);

  const navigate = useNavigate();

  //Handle Signup Form Submit
  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    if(!fullName) {
      setError("Please enter your name");
      return;
    }

    if(!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if(!password) {
      setError("Please enter the pssword");
      return;
    }

    setError("");

    //SignUp API Call
    try {

      // Upload image if present
      if (profilePic) {
        const imgUploadRes = await uploadImage(profilePic);
        profileImageUrl = imgUploadRes.imageUrl || "";
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        password,
        profileImageUrl
      });

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <AuthLayout>
      <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Create an Account</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6 '>
          Join us today by entering your details below
        </p>

        <form onSubmit={handleSignUp}>

            <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />



          <div className='grid grid-co-1 md:grid-cols-2 gap-4'>
            <Entry
            value={fullName}
            onChange={({target}) => setFullName(target.value)}
            label="Full Name "
            type="text"
            placeholder="Enter your Name"/>

            <Entry
            value={email}
            onChange={({target}) => setEmail(target.value)}
            label="Email Address"
            type="text"
            placeholder="Enter your email"/>

            <div className='col-span-2'>
              <Entry
              value={password}
              onChange={({target}) => setPassword(target.value)}
              label="Password"
              type="password"
              placeholder="Min 8 Characters"/>
            </div>

          </div>

          {error && <p className='text-red-500 text-xs pb-2.5' >{error}</p>}
          
             <button type="submit" className='btn-primary'>
                 Sign Up
              </button>
          
              <p className='text-[13px] text-slate-800 mt-3'>
                  Already have an account?{" "}
                <Link className='font-medium text-primary underline' to="/login">
                  Login
                </Link>
          
              </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Signup