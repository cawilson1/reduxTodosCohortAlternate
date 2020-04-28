import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";

//alternatively, you can destructure filter here and remove the ownProps. Shown on the mapDispatchToProps
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps, "ownPropsMapFilterLink");
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};
const mapDispatchToProps = (dispatch, { filter }) => {
  return {
    boundSetVisibilityFilter: () => {
      dispatch(setVisibilityFilter(filter));
    }
  };
};

console.log("mapsStateToPropsFilterLink", mapStateToProps);
const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
