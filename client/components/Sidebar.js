const Sidebar = ({ passwords, activeId, openPasswordContainer }) => {
  return (
    <div className="w-72 border">
      {passwords.map((password) => {
        return (
          <div
            className={`card h-16 pl-4 flex justify-start items-center cursor-pointer ${
              activeId === password.id
                ? "bg-gray-100 hover:bg-gray-100 border-l-4 border-yellow-600"
                : ""
            }`}
            onClick={() => {
              openPasswordContainer(password);
            }}
          >
            <img src="/key.svg" alt="lock icon" />
            <div className="ml-4">
              <h1 className="text-sm">{password.url}</h1>
              <h1 className="text-xs">{password.username}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
