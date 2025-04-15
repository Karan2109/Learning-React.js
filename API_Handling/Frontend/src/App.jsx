import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  // const [products, error, loading] = customReactQuery("/api/products");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products?search=" + search, {
          signal,
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled", error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })(); // IIFE (Immediately Invoked Function Expression

    //Cleanup function code
    return () => {
      controller.abort();
    };
  }, [search]);

  // if (error) {
  //   return <h1>Something Went Wrong...</h1>;
  // }
  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }
  // if (products.length === 0) {
  //   return <h1>No Products Found</h1>;
  // }

  return (
    <>
      <h1>Frontend with API in React.js</h1>

      <input
        type="text"
        placeholder="Search Products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <h1>Loading...</h1>}
      {error && <h1>Something Went Wrong...</h1>}

      <h2>Total Number of Products: {products.length}</h2>
    </>
  );
};

export default App;

// const customReactQuery = (urlPath) => {
//   return [products, error, loading];
// };
