import React from "react";


const Card = (props) => {
  const { imageUrl, title, content, extra, isSmall } = props;
  const smallCard = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgb(30, 30, 30, 0.5)",
    borderRadius: "50px",
    paddingLeft: "30px",
    paddingRight: "30px",
    marginTop: "10px",
    marginBottom: "10px",
    height: "350px",
    width: "500px",
    
  }
  const bigCard = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "rgb(30, 30, 30, 0.5)",
    borderRadius: "50px",
    paddingLeft: "30px",
    paddingRight: "30px",
    height: "700px",
    width: "400px",
    
  }
  return (
    <div id="card" style={isSmall ? smallCard : bigCard}>
      <p id="text" className="title">
        {title}
      </p>
      <p id="text" className="content">
        {content}
      </p>
      <div>
        <p id="text" className="extra">
          {extra}
        </p>
      </div>
    </div>
  );
};

export default Card;
