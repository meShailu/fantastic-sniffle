import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Shailu" />
      <Greeting name="Yair" />
    </div>
  );
}

function Greeting({ name }) {
  return (
    <div>
      {name === "Yair" ? <h1>Hello Coach!</h1> : <h1>Hello {name}!</h1>}
    </div>
  );
}
