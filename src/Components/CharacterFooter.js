import React from "react";
import { useParams } from "react-router-dom";

export default function CharacterFooter() {
  const { id } = useParams();
  const NumId = Number(id);
  const url1 = `/details/${NumId + Number(1)}`;
  const url2 = `/details/${NumId - Number(1)}`;

  return (
    <div className="characterFooter">
      {id <= 19 && (
        <h3>
          {" "}
          <a href={url1} className="seeNext">
            {" "}
            Next Character{" "}
          </a>
        </h3>
      )}
      {id >= 2 && (
        <h3>
          {" "}
          <a href={url2} className="seePrevs">
            {" "}
            Previous Character{" "}
          </a>
        </h3>
      )}
    </div>
  );
}
