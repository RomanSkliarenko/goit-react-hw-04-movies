import { Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import Header from "./Components/header/header";

const HomeView = lazy(() =>
  import("./views/home" /* webpackChunkName: "home-view"*/)
);
const MovieDetails = lazy(() =>
  import("./views/movieDetails" /* webpackChunkName: "movieDetails"*/)
);
const Movies = lazy(() =>
  import("./views/movies" /* webpackChunkName: "movies"*/)
);
const Default = lazy(() =>
  import("./views/default" /* webpackChunkName: "default"*/)
);

function App() {
  return (
    <div className="App">
      <Suspense fallback="">
        <Header />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/movies/:movieId" component={MovieDetails} />
          <Route path="/movies" component={Movies} />
          <Route component={Default} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
