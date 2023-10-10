import { useEffect, useRef } from "react";
import "../../../src/App.css";
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
      mapRef.current.children[0].style.width = "250px";
      mapRef.current.children[0].style.height = "250px";
    }
  }, [source]);
  return (
    <>
      {source ? (
        <div
          ref={mapRef}
          className={"w-auto smallmap ml-3 map-container"}
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
