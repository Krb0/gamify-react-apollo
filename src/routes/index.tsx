import { Route, Routes } from "react-router-dom";
import Platforms from "../pages/Platforms";
import Games from "../pages/Games";
import Game from "../pages/Game";

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
