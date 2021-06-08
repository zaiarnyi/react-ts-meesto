import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/General/Header/Header";
import { AlertAdvertising } from "./components/General/AlertAdvertising";
import { Footer } from "./components/General/Footer";
import { Home } from "./components/Pages/Home";
const Catalog = React.lazy(() => import("./components/Pages/Catalog"));

function App() {
  const [delivery, setDelivery] = useState(true);
  // const deliveryRef = useRef(null);
  return (
    <Router>
      <div className="wrapper">
        <AlertAdvertising delivery={delivery} toggleDelivery={setDelivery} />
        <Header delivery={delivery} />
        <main className="page">
          <React.Suspense fallback={<div>Загрузка...</div>}>
            <Switch>
              <Route path={"/"} exact component={Home} />
              <Route path={"/catalog:slag?"} exact component={Catalog} />
            </Switch>
          </React.Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
