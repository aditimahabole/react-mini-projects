import { useState } from "react";
import PropTypes from "prop-types";

const Folder = ({ folders }) => {
  const [expand, setExpand] = useState(false);

  if (folders && folders.isaFolder) {
    console.log("Is folder");
    return (
      <div
        style={{
          backgroundColor: "#1F2544",
          color: "#FFD0EC",
          padding: "5px",
        }}
      >
        <br></br>
        <span
          onClick={() => setExpand(!expand)}
          style={{
            cursor: "pointer",
            padding: "5px 10px",
            backgroundColor: "#81689D",
            borderRadius: "5px",
          }}
        >
         {expand?'-':'+'} {folders.name}
        </span>
        <br></br>{" "}
        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "20px" }}
        >
          {folders.items.map((f, i) => {
            return <Folder key={i + 1} folders={f} />;
          })}
        </div>
      </div>
    );
  } else {
    console.log("Is file");
    return (
      <span>
        -&gt; {folders.name}
        <br></br>
      </span>
    );
  }
};

Folder.propTypes = {
  folders: PropTypes.shape({
    isaFolder: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        isaFolder: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(PropTypes.object),
      })
    ),
  }),
};

export default Folder;
