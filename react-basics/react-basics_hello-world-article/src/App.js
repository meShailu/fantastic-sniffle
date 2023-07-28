import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}
function HelloWorldArticle() {
  return (
    <section>
      <h1> Hello World</h1>
      <p>How are you today?</p>
    </section>
  );
}
