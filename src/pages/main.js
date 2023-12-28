import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Home from "./home";
import Cart from "./cart";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import products from "../data/products.json";

const Main = () => {
  const [data, setData] = useState(products.products);
  const [cart, setCart] = useState([]);
  const [title, setTitle] = useState("Главное");
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const filtereData = (text) => {
    const newArr = products.products.filter((elem) => elem.category === text);
    setData(newArr);
    setTitle(text);
  };

  const addProduct = (id) => {
    const newArr = products.products.find((product) => product.id === id);
    setCart([...cart, newArr]);
  };

  const deleteProduct = (index) => {
    const wind = window.confirm("are u sure?");
    if (wind) {
      setCart([...cart.filter((_, i) => i !== index)]);
    }
  };

  const homeClick = () => {
    setData(products.products);
    setTitle("Главное");
  };

  const serchClick = () => {
    const newArr = products.products.filter((elem) =>
      elem.title.toLowerCase().includes(input.toLowerCase())
    );
    setData(newArr);
    setInput("");
  };

  return (
    <div>
      <Header
        serchClick={serchClick}
        filtereData={filtereData}
        cart={cart}
        homeClick={homeClick}
        setInput={setInput}
        input={input}
      />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={data}
                addProduct={addProduct}
                cart={cart}
                title={title}
                setTitle={setTitle}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} deleteProduct={deleteProduct} />}
          />
        </Routes>
      </Container>
    </div>
  );
};
export default Main;
