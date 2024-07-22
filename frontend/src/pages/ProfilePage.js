import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${id}`);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full h-52 bg-cover bg-center" style={{ backgroundImage: `url(${user.coverPhotoURL})` }}></div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl mt-8">
        <div className="flex flex-col items-center p-16">
          
          <img className="w-48 h-38 rounded-full border-4 border-white -mt-16" src={user.photoURL} alt="Profile" />
          
          <h1 className="text-2xl font-bold mt-4">{user.name}</h1>
          <div className="text-gray-600 mt-4">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
          </div>
          <button 
            onClick={handleSignOut} 
            className="mt-6 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
