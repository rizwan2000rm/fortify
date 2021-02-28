import { useState, useEffect, useRef } from "react";

const PasswordContainer = ({ activeId }) => {
  const [password, setPassword] = useState();
  const [isEditing, setIsEditing] = useState(false);

  const [state, setState] = useState({
    url: "",
    username: "",
    password: ""
  });

  const userRef = useRef();
  const passRef = useRef();

  useEffect(() => {
    const fetchPassword = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_api_url}/passwords/${activeId}`
      );
      const password = await res.json();
      setPassword(password);
    };

    fetchPassword();
  }, []);

  const copyElement = (ref) => {
    const el = ref;
    navigator.clipboard.writeText(el.current.value);
  };

  const handleInputChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    fetch(`${process.env.NEXT_PUBLIC_api_url}/passwords/${activeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setIsEditing(false);
  };

  return password ? (
    isEditing ? (
      <div className="sm:hidden md:block lg:w-full md:w-1/2 p-10">
        <div className="w-3/5 md:w-full pb-4 mb-8 border-b  ">
          <h1>{password.url}</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h1 className="mb-4 ml-2">Website Address</h1>
            <input
              className="border-2 border-yellow-500 rounded-2xl py-2 px-4"
              type="text"
              name="url"
              value={state.url}
              placeholder={password.url}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <h1 className="mb-4 ml-2">Username</h1>
            <input
              className="border-2 border-yellow-500 rounded-2xl py-2 px-4"
              type="text"
              name="username"
              value={state.username}
              placeholder={password.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <h1 className="mb-4 ml-2">Password</h1>
            <input
              className="border-2 border-yellow-500 rounded-2xl py-2 px-4"
              type="password"
              name="password"
              value={state.password}
              placeholder={password.password}
              onChange={handleInputChange}
            />
          </div>
          <button
            className="mt-2 rounded-2xl px-4 py-2 text-white bg-yellow-400 cursor-pointer hover:bg-yellow-500"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    ) : (
      <div className="sm:hidden md:block lg:w-full md:w-1/2 p-10">
        <div className="flex justify-between w-3/5 md:w-full pb-4 mb-8 border-b">
          <h1>{password.url}</h1>
          <div className="flex">
            <p
              onClick={() => setIsEditing(true)}
              className="flex items-center text-yellow-500 hover:text-yellow-600 cursor-pointer"
            >
              <svg
                className="mt-1 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-edit-2"
              >
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
              </svg>
              Edit
            </p>
            <p className="flex items-center ml-8 text-yellow-500 hover:text-yellow-600 cursor-pointer">
              <svg
                className="mt-1 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-trash"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
              Delete
            </p>
          </div>
        </div>
        <div className="mb-6">
          <h1>Website Address</h1>
          <p className="text-sm text-yellow-500 hover:text-yellow-600 cursor-pointer">
            <a href={password.url}>{password.url}</a>
          </p>
        </div>
        <div className="mb-6">
          <h1>Username</h1>
          <div className="flex items-center">
            <input
              className="focus:outline-none w-52"
              type="text"
              value={password.username}
              ref={userRef}
              readOnly
            />
            <span
              onClick={() => copyElement(userRef)}
              className="text-sm ml-4 text-yellow-500 hover:text-yellow-600 cursor-pointer"
            >
              Copy
            </span>
          </div>
        </div>
        <div className="mb-6">
          <h1>Password</h1>
          <div className="flex items-center">
            <input
              className="focus:outline-none w-52"
              type="password"
              value={password.password}
              ref={passRef}
              readOnly
            />
            <span
              onClick={() => copyElement(passRef)}
              className="text-sm ml-4 text-yellow-500 hover:text-yellow-600 cursor-pointer"
            >
              Copy
            </span>
          </div>
        </div>
      </div>
    )
  ) : null;
};

export default PasswordContainer;
