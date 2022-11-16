import React from "react";

import Navbar from "./Navbar";

import Card from "./Card";

import data from "./data";

import "./index.css";
export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </>
  );
}
