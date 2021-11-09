import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartContextProvider from "./Context/CartContext";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path>
              <ItemListContainer />
            </Route>
            <Route
              exact
              path="/categoria/:categoriaId"
              component={ItemListContainer}
            />
            <Route
              exact
              path="/detalle/:detalleId"
              component={ItemDetailContainer}
            />
            <Route exact path="/cart/" component={Cart} />
          </Switch>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
