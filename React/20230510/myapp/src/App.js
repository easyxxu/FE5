import { useState } from "react";
import Counter from "./components/Counter";
import Detail from "./components/Detail";
import QA from "./components/QA";
import Review from "./components/Review";

function App() {
  const [datas, setDatas] = useState([
    {
      title: "개발자 무릎 담요",
      price: 17500,
      id: 101,
    },
    {
      title: "Hack Your Life 개발자 노트북 파우치",
      price: 29000,
      id: 102,
    },
    {
      title: "우당탕탕 라이켓의 실험실 스티커북",
      price: 29000,
      id: 103,
    },
    {
      title: "버그를 Java라 버그잡는 개리씨 키링",
      price: 29000,
      id: 104,
    },
  ]);

  // React는 state 함수 호출의 일관성을 유지하기 위해서 내부적으로 동일한 내용의 state 함수 호출이 여러번 반복되면 하나의 업데이트로 취급하여 처리함
  function itemDelete(id) {
    /*직접 DOM을 건드리는 삭제 방법 : 리액트엔 위배되나 성능은 좋긴함
     * e.target.closest("li").remove();
     */
    // setDatas(
    //   datas.filter((data) => {
    //     return id !== data.id;
    //   })
    // );
    setDatas((prevDatas) => {
      return prevDatas.filter((item) => {
        return id !== item.id;
      });
    });
  }
  function Contents({ listname }) {
    if (listname === "detail") {
      return <Detail />;
    } else if (listname === "qa") {
      return <QA />;
    } else if (listname === "review") {
      return <Review />;
    }
  }
  const [listname, setListname] = useState("detail");
  const checkId = (e) => {
    setListname(e.target.id);
  };
  return (
    <div>
      {/* {datas.map((item, index) => {
        return (
          <li key={item.id}>
            <h2>
              {index + 1}. {item.title}
            </h2>
            <p>가격 : {item.price}</p>
            <button
              onClick={() => {
                itemDelete(item.id);
              }}
            >
              삭제
            </button>
          </li>
        );
      })} */}
      {/* <Counter /> */}
      <ul>
        <li
          id="detail"
          onClick={checkId}
          style={listname === "detail" ? { color: "red" } : { color: "black" }}
        >
          상세정보
        </li>
        <li
          id="qa"
          onClick={checkId}
          style={listname === "qa" ? { color: "red" } : { color: "black" }}
        >
          Q&A
        </li>
        <li
          id="review"
          onClick={checkId}
          style={listname === "review" ? { color: "red" } : { color: "black" }}
        >
          리뷰
        </li>
      </ul>
      <Contents listname={listname} />
    </div>
  );
}
export default App;
