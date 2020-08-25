import React from "react";
import "./App.scss";
import { CatsBlock } from "./components";
import { useSelector, useDispatch } from "react-redux";

import { fetchTitle } from "./redux/actions/title";
import { fetchCats } from "./redux/actions/cats";

function App() {
  const dispatch = useDispatch();
  const title = useSelector(({ title }) => title.items);
  const isLoadedTitle = useSelector(({ title }) => title.isLoaded);
  const cats = useSelector(({ cats }) => cats.items);
  const isLoadedCats = useSelector(({ cats }) => cats.isLoaded);

  React.useEffect(() => {
    dispatch(fetchTitle());
    dispatch(fetchCats());
  }, [dispatch]);

  return (
    <div className="catalog">
      {isLoadedTitle ? <div className="catalog__title">{title}</div> : ""}
      <div className="catalog__list">
        {isLoadedCats
          ? cats.map((obj) => <CatsBlock key={obj.id} obj={obj} />)
          : ""}
      </div>
    </div>
  );
}

export default App;
