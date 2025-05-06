import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shared from "./components/Shared";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Mac from "./pages/Mac";
import Ipad from "./pages/Ipad";
import Iphone from "./pages/Iphone";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Watch from "./pages/Watch";
import Vision from "./pages/Vision";
import AirPods from "./pages/AirPods";
import Tv from "./pages/Tv";
import Entertainment from "./pages/Entertainment";
import Accessories from "./pages/Accessories";
import Support from "./pages/Support";
import Four04 from "./pages/Four04/Four04";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shared />}>
            <Route index element={<Home />} />
            <Route path="store" element={<Store />} />
            <Route path="mac" element={<Mac />} />
            <Route path="ipad" element={<Ipad />} />
            <Route path="iphone" element={<Iphone />} />
            <Route path="iphone/:id" element={<SingleProduct />} />
            <Route path="watch" element={<Watch />} />
            <Route path="vision" element={<Vision />} />
            <Route path="airpods" element={<AirPods />} />
            <Route path="tv" element={<Tv />} />
            <Route path="entertainment" element={<Entertainment />} />
            <Route path="accessories" element={<Accessories />} />
            <Route path="support" element={<Support />} />
            <Route path="*" element={<Four04 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
