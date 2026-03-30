import "./App.css";
import Banner from "./Components/Banner/Banner";
import GetStarts from "./Components/GetStarts/GetStarts";
import NavBar from "./Components/Navbar/NavBar";
import OurImpact from "./Components/OurImpact/OurImpact";
import Premium from "./Components/Premium/Premium";

const aiToolsPromise = fetch("/public/aiTool.json").then((res) => res.json());

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        <Banner></Banner>
      </header>
      <main>
        <OurImpact></OurImpact>
        <Premium aiToolsPromise={aiToolsPromise}></Premium>
        <GetStarts></GetStarts>
      </main>
    </>
  );
}

export default App;
