import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <NavBar />

      <Router>
        <Switch>
          <Route exact path="/" component={ItemListContainer} />

          <Route exact path="/detalle/" component={ItemDetailContainer} />
          <Route exact path="/cart/" component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
