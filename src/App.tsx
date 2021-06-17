import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/General/Header/Header";
import { AlertAdvertising } from "./components/General/AlertAdvertising";
import { Footer } from "./components/General/Footer";
import { Home } from "./components/Pages/Home";
import { CSSTransition } from "react-transition-group";
const Catalog = React.lazy(() => import("./components/Pages/Catalog"));
const Checkout = React.lazy(() => import("./components/Pages/Checkout"));
const NoMatch = React.lazy(() => import("./components/Pages/NoMatch"));
const Product = React.lazy(() => import("./components/Pages/Product"));
export interface IParamsCatalog {
  gender: string;
  category?: string;
  product?: string;
}

function App() {
  const [delivery, setDelivery] = useState(true);

  return (
    <Router>
      <>
        <AlertAdvertising delivery={delivery} toggleDelivery={setDelivery} />
        <Header delivery={delivery} />
        <main className="page">
          <React.Suspense fallback={<div>Загрузка...</div>}>
            <Switch>
              <Route path={"/"} exact component={Home} />
              <Route
                path={"/catalog/:gender?/:category?"}
                exact
                component={Catalog}
              />
              <Route
                path={"/catalog/:gender/:category/:product"}
                component={Product}
              />
              <Route path={"/checkout"} exact component={Checkout} />
              <Route path={"*"} exact component={NoMatch} />
            </Switch>
          </React.Suspense>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
