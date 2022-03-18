import { Route, Routes } from "react-router-dom";
import Game from "../pages/Game";
import Games from "../pages/Games";
import Platforms from "../pages/Platforms";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Games />} />
      <Route path="/game/:id" element={<Game />} />
      <Route path="/platforms" element={<Platforms />} />
    </Routes>
  );
};

export default routes;
