function Resume(props) {
  return (
    <>
      <h2>{props.name} 자기소개서</h2>
      <h3>{props.hello}</h3>
      <h3>취미 : {props.hobby}</h3>
      <h3>좋아하는 음식 : {props.food}</h3>
      <h3>
        좋아하는 색 : <strong style={{ color: "blue" }}>{props.color}</strong>
      </h3>
    </>
  );
}

export default Resume;
