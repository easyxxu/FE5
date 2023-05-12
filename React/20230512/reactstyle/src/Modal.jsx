import styled from "styled-components";

// Card CSS
const CardDiv = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: ${(props) => (props.className === "setting" ? "200px" : "400px")};
`;

// Card 생성
const Card = (props) => {
  return (
    <CardDiv className={props.className}>
      <h3>{props.value}</h3>
      <hr />
      <div>{props.children}</div>
    </CardDiv>
  );
};

const SettingCard = (modalClose) => {
  return (
    <>
      <button>초기화</button>
      <button>저장하기</button>
      <button onClick={modalClose}>닫기</button>
    </>
  );
};
const ShareCard = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut
        eveniet, laudantium, deleniti autem sequi molestias magni quia, aliquam
        et praesentium nostrum dolores culpa cupiditate unde doloremque labore
        beatae accusamus.
      </p>
      <div>
        <button>이미지 저장</button>
        <button>트위터</button>
        <button>페이스북</button>
      </div>
    </>
  );
};

export default function Modal({ modalClose }) {
  return (
    <>
      <Card className="setting" value="챌린지 설정">
        <SettingCard modalClose={modalClose} />
      </Card>
      <Card className="share" value="서비스 공유하기">
        <ShareCard />
      </Card>
    </>
  );
}
