import { useState } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PasswordContainer from "../components/PasswordContainer";

const demo = ({ passwords }) => {
  const passwordsArray = Object.values(passwords);
  const [activeId, setActiveId] = useState(2);

  const openPasswordContainer = (password) => {
    setActiveId(password.id);
  };

  return (
    <>
      <Header />
      <div className="h-screen flex">
        <Sidebar
          passwords={passwordsArray}
          activeId={activeId}
          openPasswordContainer={openPasswordContainer}
        />
        <PasswordContainer activeId={activeId} />
      </div>
    </>
  );
};

export default demo;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_api_url}/passwords`);
  const passwords = await res.json();

  // Pass data to the page via props
  return { props: { passwords } };
}
