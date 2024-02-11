import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeCard from "./components/CoffeCard";
function App() {
  const coffes = useLoaderData();
  return (
    <div className="m-20">
      <h1 className="text-6xl text-purple-600 text-center">Total coffe type Available : {coffes.length}</h1>
      <div className="grid md:grid-cols-2 gap-4">
      {
        coffes.map(coffe => <CoffeCard key = {coffe._id} coffe={coffe}></CoffeCard>)
      }
      </div>
    </div>
  );
}

export default App;
