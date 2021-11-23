import { BrowserRouter, Switch, Route } from "react-router-dom";
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
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
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
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
