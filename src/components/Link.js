import React from "react";
const Link = ({ active, children, boundSetVisibilityFilter }) => {
  if (active) {
    console.log(children, "children");
    return <h3 style={{ color: "green" }}>{children}</h3>;
  }

  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault();
        boundSetVisibilityFilter();
      }}
    >
      {children}
    </a>
  );
};

export default Link;
