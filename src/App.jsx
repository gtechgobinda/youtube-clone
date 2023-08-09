import "./App.css";
import { AppContext } from "./context/contextApi.jsx";
function App() {
  return (
    <>
      <AppContext>
        <h1 className="text-3xl font-bold underline">Hello World</h1>
      </AppContext>
    </>
  );
}

export default App;
