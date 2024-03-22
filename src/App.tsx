import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Root from "./scenes/layout/root";
import Home from "./scenes/home";
import Results from "./scenes/results";
import HowToInstall from "./scenes/howtoinstall";
import Support from "./scenes/support";
import NotFound from "./scenes/layout/notfound";
import useMediaQuery from "./scenes/hooks/useMediaQuery";
import SearchConsole from "./scenes/serachconsole";

import bg from "./assets/bg.png";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="results" element={<Results />}></Route>
      <Route path="HowToInstall" element={<HowToInstall />}></Route>
      <Route path="Support" element={<Support />}></Route>
      <Route path="SearchConsole" element={<SearchConsole />}></Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <img
          src={bg}
          className={`object-cover ${isAboveMediumScreens ? "" : "w-full h-full"}`}
        />
      </div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
