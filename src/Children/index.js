import React from "react";
import { Link } from "react-router-dom";

import ChildSummary from "../ChildSummary";
import AddChild from "../AddChild";

export default props => {
  return (
    <div>
      {props.kids.map((child, index) => {
        return (
          <Link
            key={index}
            to={{
              pathname: `/detail/${child.id}`,
              state: props.kids
            }}
          >
            <h2>
              {child.name} ({child.points} points)
            </h2>
          </Link>
        );
      })}
      <AddChild addChild={props.addChild} />
    </div>

    //
  );
};
