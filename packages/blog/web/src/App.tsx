import "./App.css";

function App() {
  async function getData() {
    const data = await fetch("http://localhost:3000/api/data");
    const blog = await data.json();
    console.log('blog data', blog);
  }

  getData();

  return (
    <>
      <h1>Blog</h1>
      <p>Check the console to see blog</p>
    </>
  );
}

export default App;
