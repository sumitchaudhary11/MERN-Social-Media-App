import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import axios from 'axios';


const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [coverPhotoURL, setCoverPhotoURL] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data to MongoDB
      await axios.post('http://localhost:5000/api/users', {
        uid: user.uid,
        name,
        email,
        phoneNumber,
        photoURL,
        coverPhotoURL
      });

      navigate(`/profile/${user.uid}`);
    } catch (error) {
      alert("Email Already registered");
      console.error('Error signing up:', error);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Save user data to MongoDB
      await axios.post('http://localhost:5000/api/users', {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        phoneNumber: '',
        photoURL: user.photoURL,
        coverPhotoURL: ''
      });

      navigate(`/profile/${user.uid}`);
    } catch (error) {
      console.error('Error with Google signup:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-0">Sign Up</h1>
        <form onSubmit={handleSignup}>
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            required 
            className="block w-full mb-4 p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
            className="block w-full mb-4 p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
            className="block w-full mb-4 p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input 
            type="text" 
            placeholder="Phone Number" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            required
            className="block w-full mb-4 p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input 
            type="text" 
            placeholder="Profile Photo URL" 
            value={photoURL} 
            onChange={(e) => setPhotoURL(e.target.value)} 
            required
            className="block w-full mb-4 p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input 
            type="text" 
            placeholder="Cover Photo URL" 
            value={coverPhotoURL} 
            onChange={(e) => setCoverPhotoURL(e.target.value)} 
            required
            className="block w-full mb-4 p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Sign Up</button>
          <div className="text-center text-blue-800 py-2">
            Already have an Account? <a href="/login" className="text-red-500 font-bold">Log In</a>
          </div>
          <div className="text-center py-0">
          <div className="flex items-center justify-center mb-4">
            <hr className="w-full border-gray-400" />
            <span className="mx-6 text-gray-900">or continue with</span>
            <hr className="w-full border-gray-400" />
          </div>
          <div 
            onClick={handleGoogleSignup} 
            className="cursor-pointer text-center text-red-500"
            aria-label="Sign Up with Google"
          >
            <i className="fab fa-google text-2xl"></i>
          </div>
          </div>


        </form>
      </div>
    </div>
  );
};

export default SignupPage;
