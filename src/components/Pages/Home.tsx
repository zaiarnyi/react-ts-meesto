import React from "react";
import { FullSlider } from "../Home/FullSlider/FullSlider";
import { Collections } from "../Home/Collections";
import { Deals } from "../General/Deals/Deals";
import { Sales } from "../Home/Sales";
import { Looks } from "../Home/Looks/Looks";
import { Subscribe } from "../Home/Subscribe";
import { Categories } from "../Home/Categories";
import { Shop } from "../Home/Shop";

interface IHomeProp {}

export const Home: React.FC<IHomeProp> = React.memo((props) => {
  return (
    <>
      <FullSlider />
      <Collections />
      <Deals />
      <Sales />
      <Looks />
      <Subscribe />
      <Categories />
      <Shop />
    </>
  );
});
