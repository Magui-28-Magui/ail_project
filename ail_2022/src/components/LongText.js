import React, { useState } from "react";

const LongText = ({ content, limit }) => {
  const [showAll, setShowAll] = useState(false);

  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);

  if (content.length <= limit) {
    // there is nothing more to show
    return <div>{content}</div>;
  }
  // if (showAll) {
  //     // We show the extended text and a link to reduce it
  //     return <div>
  //         <button className="btn btn-primary">Read less</button>
  //         <br />
  //         {content}
  //     </div>
  // }
  const toShow = content.substring(0, limit) + "...";
  return (
    <div>
      {toShow}
      <p
        style={{
          cursor: "pointer",
          textDecoration: "underline",
          color: "#2F6BA1",
          fontWeight: "bold",
          textAlign: 'center'
        }}
        data-bs-toggle="modal"
        data-bs-target="#modal"
      >
        Read more
      </p>
    </div>
  );
};

export default LongText;
