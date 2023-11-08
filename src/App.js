import CryptoForm from "./CryptoForm";
import Faq from "./Faq";
import Navbar from "./Navbar";
import Subscribe from "./Subscribe";
function App() {
  return (
    <div className="app">
      <Navbar />
      <div style={{ backgroundColor: "#F5F5F5", height: "auto" }}>
        <CryptoForm />
        <Faq />
      </div>
      <Subscribe />
    </div>
  );
}

export default App;
