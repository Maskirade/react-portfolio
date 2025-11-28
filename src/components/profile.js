import React from 'react';

function Profile() {
  return (
    <section className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg shadow-lg">
      <img 
        src={process.env.PUBLIC_URL + "/tenio.jpg"}
  alt="Profile"
  className="w-32 h-32 rounded-full mb-4 border-2 border-gradient-accent"
      />
      <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
        John Raymart M. Tenio
      </h1>
    </section>
  );
}

export default Profile;
