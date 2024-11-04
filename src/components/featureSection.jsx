import Card from "./card";

import ListItem from "./listItem";

const FeatureSection = () => {
  return (
    <>
      <section className="feature-section">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              color: "white",
              fontSize: "54px",
              marginBottom: "2px",
            }}
          >
            Quick Glance at What We Do Best
          </h2>
          <h5
            style={{
              color: "white",
              fontSize: "18px",
              marginTop: "2px",
            }}
          >
            From oil changes to engine repairs, we’ve got the tools, the talent,
            and the love for cars to get the job done right.
          </h5>
        </div>
        <div className="grid">
          <div className="column">
            <Card
              title="Oil & Filter Change"
              content="Fast, efficient, and vital for your engine’s health."
              extra="Save 20% on Your Next Oil Change!"
              imageUrl="./src/assets/Card1.png"
              isSmall={true}
            />
            <Card
              title="Tire Services:"
              content="Grip the road with confidence. We’ve got tires and alignments covered."
              extra="100% Satisfaction Guaranteed!"
              imageUrl="./src/assets/Card2.png"
              isSmall={true}
            />
          </div>
          <Card
            title="Engine Diagnostics"
            content="We pinpoint problems, so you don’t have to worry about a thing."
            extra="50% Off Diagnostics with Any Repair!"
            imageUrl="./src/assets/Card3.png"
            isSmall={false}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row", marginInline: "auto", marginTop: "7%", paddingLeft: "11%"}}>
          <div style={{ display: "flex", flexDirection: "column", marginTop: "5%"}}>
            <p
              style={{
                border: "1px solid white",
                borderRadius: "50px",
                padding: "10px",
                marginBottom: "2%",
                width: "fit-content",
              }}
              id="text"
            >
              over 1500+ parts replaced
            </p>
            <h1 style={{ fontSize: "50px", marginTop: "2%", marginBottom: "2%"}} id="text">
              Offering you top-notch maintenance
            </h1>
            <div style={{ marginTop: "2%"}}>
              <ListItem number="60%" text="Lower than standard repair costs" />
              <ListItem
                number="x2"
                text="More likely to a free maintenance check"
              />
              <ListItem number="150+" text="Replaceable high quality parts " />
            </div>
          </div>
          <img className= "car" src="./src/assets/Car.png" alt="car" />
          <div></div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
