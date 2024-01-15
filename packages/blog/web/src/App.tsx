import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Posts } from './Posts';

async function getData() {
  const data = await fetch('http://localhost:3000/api/data');

  return await data.json();
}

function App() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <>
      <Posts data={posts}>
        <Posts.FilterPanel>
          <Posts.FilterPanel.RatingFilter defaultValue={3} />
        </Posts.FilterPanel>
        <Posts.PostList />
      </Posts>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
