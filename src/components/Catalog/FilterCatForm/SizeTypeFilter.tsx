import React from "react";
import { ISizeFilter } from "../FiltersForm";

interface ISizeTypeFilterProp {
  size: ISizeFilter;
  blur: (e: any) => void;
  toggle: (e: any) => void;
}

export const SizeTypeFilter: React.FC<ISizeTypeFilterProp> = React.memo(
  (props) => {
    return (
      <div className="active-fliter__item">
        <div className="active-fliter__title">Size</div>
        <div className="active-fliter__body active-fliter__body_size">
          <div className="active-fliter__size">
            <label className="checkbox">
              <input
                type="checkbox"
                value="xs"
                name="form[]"
                className="checkbox__input"
              />
              <span className="checkbox__text">xs</span>
            </label>
          </div>
          <div className="active-fliter__size">
            <label className="checkbox">
              <input
                type="checkbox"
                value="s"
                name="form[]"
                className="checkbox__input"
              />
              <span className="checkbox__text">s</span>
            </label>
          </div>
          <div className="active-fliter__size">
            <label className="checkbox">
              <input
                type="checkbox"
                value="m"
                name="form[]"
                className="checkbox__input"
              />
              <span className="checkbox__text">m</span>
            </label>
          </div>
          <div className="active-fliter__size">
            <label className="checkbox">
              <input
                type="checkbox"
                value="l"
                name="form[]"
                className="checkbox__input"
              />
              <span className="checkbox__text">l</span>
            </label>
          </div>
          <div className="active-fliter__size">
            <label className="checkbox">
              <input
                type="checkbox"
                value="xl"
                name="form[]"
                className="checkbox__input"
              />
              <span className="checkbox__text">xl</span>
            </label>
          </div>
          <div className="active-fliter__size">
            <label className="checkbox">
              <input
                type="checkbox"
                value="xxl"
                name="form[]"
                className="checkbox__input"
              />
              <span className="checkbox__text">xxl</span>
            </label>
          </div>
          <div className="active-fliter__size">
            <label className="checkbox">
              <input
                type="checkbox"
                value="32"
                name="form[]"
                className="checkbox__input"
              />
              <span className="checkbox__text">32</span>
            </label>
          </div>
          <div className="active-fliter__size">
            <label className="checkbox">
              <input
                type="checkbox"
                value="36"
                name="form[]"
                className="checkbox__input"
              />
              <span className="checkbox__text">36</span>
            </label>
          </div>
          <div className="active-fliter__size">
            <label className="checkbox">
              <input
                type="checkbox"
                value="38"
                name="form[]"
                className="checkbox__input"
              />
              <span className="checkbox__text">38</span>
            </label>
          </div>
          <div className="active-fliter__size">
            <label className="checkbox">
              <input
                type="checkbox"
                value="40"
                name="form[]"
                className="checkbox__input"
              />
              <span className="checkbox__text">40</span>
            </label>
          </div>
          <div className="active-fliter__size">
            <label className="checkbox">
              <input
                type="checkbox"
                value="42"
                name="form[]"
                className="checkbox__input"
              />
              <span className="checkbox__text">42</span>
            </label>
          </div>
          <div className="active-fliter__size">
            <label className="checkbox">
              <input
                type="checkbox"
                value="44"
                name="form[]"
                className="checkbox__input"
              />
              <span className="checkbox__text">44</span>
            </label>
          </div>
          <div className="active-fliter__size">
            <label className="checkbox">
              <input
                type="checkbox"
                value="46"
                name="form[]"
                className="checkbox__input"
              />
              <span className="checkbox__text">46</span>
            </label>
          </div>
          <div className="active-fliter__size">
            <label className="checkbox">
              <input
                type="checkbox"
                value="50"
                name="form[]"
                className="checkbox__input"
              />
              <span className="checkbox__text">50</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
);
