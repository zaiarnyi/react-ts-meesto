import React from "react";
import { Link } from "react-router-dom";

interface ITagsCatalogProp {}

const tags = [
  "sneakers",
  "trainers",
  "running",
  "sport",
  "casual",
  "t-shirt",
  "clothing",
  "shoes",
  "collection",
  "sale",
  "exclusive",
]; //TODO заменить на данные из Redux

export const TagsCatalog: React.FC<ITagsCatalogProp> = React.memo((props) => {
  let name;
  return (
    <div className={"tags-page"}>
      <ul className="tags-page__list">
        {tags.map((item) => {
          name = item.substring(0, 1).toUpperCase();
          name += item.substring(1);
          return (
            <li key={item}>
              <Link to={`/catalog/${item}`} className="tags-page__link">
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
