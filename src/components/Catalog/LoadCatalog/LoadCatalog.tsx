import React, { useState } from "react";
import { Loading } from "../Loading/Loading";

interface ILoadCatalogProp {
  isLoading: boolean;
}

export const LoadCatalog: React.FC<ILoadCatalogProp> = React.memo((props) => {
  const [allItems, setAllItems] = useState(250); // TODO заменить на данные из Redux
  const [currentItems, setCurrentItems] = useState(40); // TODO заменить на данные из Redux
  return (
    <div className="item-load">
      <div className="item-load__number">
        {`${currentItems} of ${allItems} items was view`}
        <div className="item-load__progress">
          <div className="progress-load">
            <progress
              max={allItems}
              value={(currentItems * 100) / allItems}
            ></progress>
            <div className="progress-load__bg">
              <div className="progress-load__bar"></div>
            </div>
          </div>
        </div>
      </div>
      {!props.isLoading ? (
        <button className="item-load__btn btn-anim">Load More</button>
      ) : (
        <Loading />
      )}
    </div>
  );
});
