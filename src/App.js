import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer.js/CardContainer";
import EditCard from "./components/Editcard/EditCard";
import AddNewCard from "./components/NewCard/AddNewCard";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import data from "./data.json";
import { getAllGiftCards } from "./actions";
function App() {
  const { giftCards } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllGiftCards(data.people));
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={CardContainer} />
        <Route path="/edit/:id" component={EditCard} />
        <Route path="/add" component={AddNewCard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
