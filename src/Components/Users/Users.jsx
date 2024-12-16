import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const User = ({ users }) => {
  console.log(users);
  const navigate = useNavigate();
  const seeUserDetails = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full gap-5 bg-black">
      <h1 className="text-white text-4xl">Users 👇</h1>
      <ul className="flex gap-8">
        {users.map((user) => (
          <li key={user.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <button
                onClick={() => seeUserDetails(user.id)}
                className="bg-[#2F65F8] hover:bg-[#6C9BFF] text-white px-7 py-2 rounded-lg transition-all"
              >
                {user.name}
              </button>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
