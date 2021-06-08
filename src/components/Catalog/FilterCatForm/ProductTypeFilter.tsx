import React from "react";
import { IProductFilter } from "../FiltersForm";

interface IProductTypeFilterProp {
  product: IProductFilter;
  blur: (e: any) => void;
  toggle: (e: any) => void;
}

export const ProductTypeFilter: React.FC<IProductTypeFilterProp> = React.memo(
  (props) => {
    let name, checked;
    return (
      <div className="active-fliter__item">
        <div className="active-fliter__title">Product type</div>
        <div className="active-fliter__body">
          {Object.keys(props.product).map((item) => {
            name = item.split("")[0].toUpperCase();
            name += item.substring(1);
            // name
            // @ts-ignore
            checked = props.product[item];
            return (
              <div className="active-fliter__product" key={item}>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    value={item}
                    name={item}
                    id={item}
                    checked={checked}
                    className="checkbox__input"
                    onChange={props.toggle}
                    onBlur={props.blur}
                  />
                  <span className="checkbox__text">
                    {name} <span>102</span>
                  </span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

// <div className="active-fliter__product" key={item}>
//     <label className="checkbox">
//         <input
//             type="checkbox"
//             // value={props.product[item]}
//             name=""
//             className="checkbox__input"
//         />
//         <span className="checkbox__text">
//                     Accessories<span>102</span>
//                   </span>
{
  /*    </label>*/
}
{
  /*</div>*/
}
