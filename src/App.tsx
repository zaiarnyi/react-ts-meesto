import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Header } from "./components/General/Header/Header";
import { AlertAdvertising } from "./components/General/AlertAdvertising";
import { Footer } from "./components/General/Footer";
import { Home } from "./components/Pages/Home";
import { NoMatch } from "./components/Pages/NoMatch";
import { Product } from "./components/Pages/Product";
const Catalog = React.lazy(() => import("./components/Pages/Catalog"));

export interface IParamsCatalog {
  gender: string;
  category?: string;
  product?: string;
}

function App() {
  const [delivery, setDelivery] = useState(true);
  return (
    <Router>
      <div className="wrapper">
        <AlertAdvertising delivery={delivery} toggleDelivery={setDelivery} />
        <Header delivery={delivery} />
        <main className="page">
          <React.Suspense fallback={<div>Загрузка...</div>}>
            <Switch>
              <Route path={"/"} exact component={Home} />
              <Route
                path={"/catalog/:gender/:category?"}
                exact
                component={Catalog}
              />
              <Route
                path={"/catalog/:gender/:category/:product"}
                component={Product}
              />
              <Route path={"*"} exact component={NoMatch} />
            </Switch>
          </React.Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
