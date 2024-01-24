import { Toaster } from "react-hot-toast";
import { NavbarDefault } from "./components/Navbar";
import { TabsWithIcon } from "./components/Tabs";

function App() {
  return (
    <div className="max-w-[1140px] mx-auto">
      <NavbarDefault />
      <TabsWithIcon />
      <Toaster />
    </div>
  );
}

export default App;
