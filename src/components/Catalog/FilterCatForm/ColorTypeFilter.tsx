import React from "react";
import { IColorFilter } from "../FiltersForm";

interface IColorTypeFilterProp {
  color: IColorFilter;
  blur: (e: any) => void;
  toggle: (e: any) => void;
}

export const ColorTypeFilter: React.FC<IColorTypeFilterProp> = React.memo(
  (props) => {
    return (
      <div className="active-fliter__item">
        <div className="active-fliter__title">Color</div>
        <div className="active-fliter__body active-fliter__body_color">
          <div className="active-fliter__column">
            <div className="active-fliter__color">
              <label className="checkbox">
                <input
                  type="checkbox"
                  value="black"
                  name="form[]"
                  className="checkbox__input"
                />
                <span className="checkbox__text">Black</span>
              </label>
            </div>
            <div className="active-fliter__color">
              <label className="checkbox">
                <input
                  type="checkbox"
                  value="white"
                  name="form[]"
                  className="checkbox__input"
                />
                <span className="checkbox__text">White</span>
              </label>
            </div>
            <div className="active-fliter__color">
              <label className="checkbox">
                <input
                  type="checkbox"
                  value="red"
                  name="form[]"
                  className="checkbox__input"
                />
                <span className="checkbox__text">red</span>
              </label>
            </div>
            <div className="active-fliter__color">
              <label className="checkbox">
                <input
                  type="checkbox"
                  value="grey"
                  name="form[]"
                  className="checkbox__input"
                />
                <span className="checkbox__text">grey</span>
              </label>
            </div>
          </div>
          <div className="active-fliter__column">
            <div className="active-fliter__color">
              <label className="checkbox">
                <input
                  type="checkbox"
                  value="green"
                  name="form[]"
                  className="checkbox__input"
                />
                <span className="checkbox__text">green</span>
              </label>
            </div>
            <div className="active-fliter__color">
              <label className="checkbox">
                <input
                  type="checkbox"
                  value="brown"
                  name="form[]"
                  className="checkbox__input"
                />
                <span className="checkbox__text">brown</span>
              </label>
            </div>
            <div className="active-fliter__color">
              <label className="checkbox">
                <input
                  type="checkbox"
                  value="blue"
                  name="form[]"
                  className="checkbox__input"
                />
                <span className="checkbox__text">blue</span>
              </label>
            </div>
            <div className="active-fliter__color">
              <label className="checkbox">
                <input
                  type="checkbox"
                  value="other"
                  name="form[]"
                  className="checkbox__input"
                />
                <span className="checkbox__text">other</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
