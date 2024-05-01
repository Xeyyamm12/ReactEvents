import { useEffect, useState } from "react";
import "./App.css";
import { fetchClients } from "./Components/TaskRendering/FetchClients";
import ClientCard from "./Components/TaskRendering/ClientCard";

function App() {
  const [state, setState] = useState(null);
  useEffect(() => {
    fetchClients().then((client) => {
      setState(client);
    });
  }, []);
  return (
    <>
      <ClientCard {...state} />
    </>
  );
}

export default App;
