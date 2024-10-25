import Card from "./card";

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
      </section>
    </>
  );
};

export default FeatureSection;
