import React, { Component } from "react";
// const Like = () => {
//   let classes = "fa fa-heart";
//   console.log("PROPS", this.props);
//   if (!this.props.liked) classes += "-o";
//   return (
//     <i
//       onClick={this.props.onClick}
//       style={{ cursor: "pointer" }}
//       className={classes}
//       aria-hidden="true"
//     />
//   );
// };

// export default Like;

class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
      />
    );
  }
}

export default Like;
