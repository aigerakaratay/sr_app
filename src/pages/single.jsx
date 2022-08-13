import React from "react";
import { Link } from "react-router-dom";
//images
import img1 from "../images/1.jpeg";

// import { useRef, Fragment } from "react";
// import ActionSheet from "actionsheet-react";

const Single = () => {
  //   const ref = useRef();

  //   const handleOpen = () => {
  //     ref.current.open();
  //   };

  //   const handleClose = () => {
  //     ref.current.close();
  //   };

  return (
    <div className="singlePage">
      <h1>
        <b>BLOG NAME 1</b>
      </h1>
      <h2>Published at 02 August, 2022</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        sodales nulla vitae luctus elementum. Pellentesque porta metus gravida,
        malesuada justo sit amet, tincidunt orci. Curabitur efficitur metus at
        magna bibendum sodales. Pellentesque nec lacus rhoncus, volutpat nisl
        non, mollis risus. Mauris iaculis lectus nunc, eu congue ipsum sodales
        a. Sed auctor ac tellus eget dignissim. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Pellentesque id
        augue laoreet, pharetra mi in, finibus nunc.
      </p>
      <img className="singleImg" src={img1} alt="fitness" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        sodales nulla vitae luctus elementum. Pellentesque porta metus gravida,
        malesuada justo sit amet, tincidunt orci. Curabitur efficitur metus at
        magna bibendum sodales. Pellentesque nec lacus rhoncus, volutpat nisl
        non, mollis risus. Mauris iaculis lectus nunc, eu congue ipsum sodales
        a. Sed auctor ac tellus eget dignissim. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Pellentesque id
        augue laoreet, pharetra mi in, finibus nunc.
      </p>

      {/* Sticky buttons */}

      <div className="flex-container">
        <i className="fi fi-rr-heart"></i>
        <i className="fi fi-rr-comment"></i>
        <i className="fi fi-rr-star"></i>
        <i className="fi fi-rr-share"></i>
      </div>

      {/* <Fragment>
        <h1>Action Sheet for web</h1>
        <button onClick={handleOpen}>Open</button>
        <ActionSheet ref={ref}>
          <div style={style.content}>
            <h4>Hi React Devs!</h4>
            <button onClick={handleClose}>Close</button>
          </div>
        </ActionSheet>
      </Fragment> */}
    </div>
  );
};
// const style = {
//   content: {
//     height: 300,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// };
export default Single;
