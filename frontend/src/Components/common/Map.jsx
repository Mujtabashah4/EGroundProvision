// import { useEffect, useRef } from "react";

// function Map(props) {
//   const { source } = props;
//   const mapRef = useRef(null);

//   const myStyles = {
//     iframe: {
//       // width: "100%",
//       //height: "100%",
//       border: "0", // Remove the iframe border
//       width: "100%",
//       height: "100%",
//       margin: "0 auto", // Centers the map horizontally
//       border: "2px solid #ccc",
//       textAlign: "center",
//     },
//   };

//   useEffect(() => {
//     if (mapRef.current && mapRef.current.children[0]) {
//       // Check if mapRef.current and its children[0] exist
//       mapRef.current.children[0].style.width = "100%";
//       mapRef.current.children[0].style.height = "100%";
//     }
//   }, [source]);

//   return (
//     <>
//       {source ? (
//         <div
//           ref={mapRef}
//           className='w-auto smallmap'
//           id='smallmap'
//           dangerouslySetInnerHTML={{
//             __html: source,
//           }}
//         ></div>
//       ) : null}
//     </>
//   );
// }

// export default Map;

import { useEffect, useRef } from "react";

function Map(props) {
  const { source } = props;
  const mapRef = useRef(null); // Create a ref to access the DOM element

  const myStyles = {
    iframe: {
      width: "200px",
      height: "350px",
      border: "0",
    },
  };

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.children[0].style.width = "200px";
      mapRef.current.children[0].style.height = "250px";
    }
  }, [source]);
  return (
    <>
      {source ? (
        <div
          ref={mapRef}
          className={"w-auto smallmap"}
          id={"smallmap"}
          dangerouslySetInnerHTML={{
            __html: source,
          }}
        ></div>
      ) : null}
    </>
  );
}
export default Map;
