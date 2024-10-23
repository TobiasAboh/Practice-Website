const Card = (props) => {
  return (
    <>
      <div id="card">
        <p id="text">{props.title}</p>
        <p>{props.content}</p>
        <div>
          <p>{props.extra}</p>
        </div>
      </div>
    </>
  );
};
export default Card;
