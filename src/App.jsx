// import React from "react";
import { useEffect, useState } from "react";
import "./scss/styles.scss";

const App = () => {
  // codes
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("run");
  }, [count]);

  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  const [posts, setPosts] = useState(null);
  const [errMessage, setErrMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((ros) => {
    //     if (!ros.ok) throw new Error("page " + ros.status + "! not found");

    //     return ros.json();
    //   })
    //   .then((data) => setPosts(data))
    //   .catch((err) => setErrMessage(err.message))
    //   .finally(() => setLoading(false));

    const fetchPosts = async () => {
      try {
        const ros = await fetch(
          "https://jsonplaceholder.typicode.com/posts/wadwd",
        );

        if (!ros.ok) throw new Error("page " + ros.status + "! not found");

        const data = await ros.json();
        setPosts(data);
      } catch (err) {
        setErrMessage(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <button
        onClick={() => setCount(count - 1)}
        type="button"
        className="btn btn-danger "
      >
        -
      </button>
      <button
        onClick={() => setCount(count + 1)}
        type="button"
        className="btn btn-success ms-2"
      >
        +
      </button>

      <br />
      <br />

      <p>Count {count}</p>

      <div className="mb-3 w-25">
        <input
          type="text"
          className="form-control w-50 d-inline"
          id="exampleFormControlInput1"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <p>{name}</p>
      </div>

      <h2>window: {size}</h2>
      <br />
      <br />

      {loading && (
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {errMessage && <h2>{errMessage}</h2>}
      {posts && posts.map((post) => <h2 key={post.id}>{post.title}</h2>)}
    </>
  );
};

export default App;
