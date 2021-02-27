const demo = ({ passwords }) => {
  // console.log(passwords );
  return (
    <div>
      <h1>Demo Page</h1>
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
