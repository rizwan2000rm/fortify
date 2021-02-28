import { useState, useEffect } from "react";

const PasswordContainer = ({ activeId }) => {
  const [password, setPassword] = useState();
  useEffect(() => {
    const fetchPassword = async () => {
      const res = await fetch(`http://localhost:3002/passwords/${activeId}`);
      const password = await res.json();
      setPassword(password);
    };

    fetchPassword();
  }, [password]);

  return password ? (
    <div className="w-full p-10">
      <div className="flex justify-between w-3/5 pb-4 mb-8 border-b">
        <h1>{password.url}</h1>
        <div className="flex">
          <p>Edit</p>
          <p className="ml-4">Delete</p>
        </div>
      </div>
      <div className="mb-6">
        <h1>Website Address</h1>
        <p className="text-sm text-yellow-500 cursor-pointer">{password.url}  </p>
      </div>
      <div className="mb-6">
        <h1>Username</h1>
        <div className="flex items-center">
          <p className="text-sm">{password.username}.</p>
          <span className="text-sm ml-4 text-yellow-500 cursor-pointer">
            Copy
          </span>
        </div>
      </div>
      <div className="mb-6">
        <h1>Password</h1>
        <div className="flex items-center">
          <p className="text-sm">{password.password}</p>
          <span className="text-sm ml-4 text-yellow-500 cursor-pointer">
            Copy
          </span>
        </div>
      </div>
    </div>
  ) : null;
};

export default PasswordContainer;
