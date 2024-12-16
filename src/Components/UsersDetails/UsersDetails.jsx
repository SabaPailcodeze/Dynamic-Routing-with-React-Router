import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { p } from "motion/react-client";

const UsersDetails = ({ users }) => {
  const { id } = useParams();
  console.log(typeof id);
  const user = users.find((user) => user.id === parseInt(id));
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full gap-5 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="bg-[#ff1e1eb7] text-white px-7 py-2 rounded-lg transition-all flex flex-col gap-2 text-[20px]"
      >
        {user ? (
          <>
            <h1>მომხმარებლის დეტალები 👇</h1>
            <h3 className="text-center">
              User Name is: <span className="text-black">{user.name}</span>
            </h3>
            <p className="text-center">
              User Id is:
              <span className="text-black ml-1">{user.id}</span>
            </p>
          </>
        ) : (
          <p>სამწუხაროდ მომხმარებელი ვერ მოიძებნა!</p>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="bg-[#2F65F8] hover:bg-[#6C9BFF] text-white px-7 py-2 rounded-lg transition-all flex flex-col gap-2"
      >
        <button onClick={goHome}>Click to go Home!</button>
      </motion.div>
    </div>
  );
};

export default UsersDetails;
