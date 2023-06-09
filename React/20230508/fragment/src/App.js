// 각 컴포넌트들을 가지고 옵니다!
import Hello from "./Components/Hello";
import Time from "./Components/Time";
import Resume from "./Components/Resume";
import ColorText from "./Components/ColorText";
function App() {
  return (
    <div>
      <Hello name="개리" />
      <Time />
      <Resume
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />
      <ColorText color="#d6b3c4" />
      <ColorText color="#c7eebb" />
      <ColorText color="#91bdda" />
    </div>
  );
}

export default App;
