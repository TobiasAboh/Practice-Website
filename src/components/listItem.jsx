const ListItem = (props) => {
  const { number, text } = props;
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          alignItems: "center",
          borderRadius: "25px",
          backgroundColor: "rgb(45, 44, 44)",
          padding: "0 25px",
          marginTop: "10px",
          marginBottom: "10px",
          width: "fit-content",
          height: "16%"
        }}
      >
        <p style={{ fontSize: "55px", paddingRight: "20px"}}>{number}</p>
        <p>{text}</p>
      </div>
    </>
  );
};

export default ListItem;
