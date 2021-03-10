import { Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import Header from "./Components/header/Header";

const HomeView = lazy(() =>
  import("./Views/Home" /* webpackChunkName: "home-view"*/)
);
const MovieDetails = lazy(() =>
  import("./Views/MovieDetails" /* webpackChunkName: "movieDetails"*/)
);
const Movies = lazy(() =>
  import("./Views/Movies" /* webpackChunkName: "movies"*/)
);
const Default = lazy(() =>
  import("./Views/Default" /* webpackChunkName: "default"*/)
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
