const demo = ({ passwords }) => {
  return (
    <div>
      {passwords.map((password) => {
        return (
          <div className="card">
            <h1>{password.username}</h1>
            <h1>{password.password}</h1>
            <h1>{password.url}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default demo;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.api_url}/passwords`);
  const passwords = await res.json();

  // Pass data to the page via props
  return { props: { passwords } };
}
