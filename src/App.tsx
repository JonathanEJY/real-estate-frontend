import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
      <title>Property Listing</title>
      <div className="font-roboto flex h-screen w-screen">
        <Sidebar />
        <section className="min-w-0 flex-1 overflow-x-hidden">
          <Navbar />
          <Main />
        </section>
      </div>
    </>
  );
}

export default App;
