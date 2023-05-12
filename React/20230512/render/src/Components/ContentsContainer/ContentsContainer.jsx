import Detail from "./Detail/Detail";
import Question from "./Question/Question";
import Review from "./Review/Review";

const ContentsContainer = ({ listName }) => {
  if (listName === "detail") {
    return <Detail />;
  } else if (listName === "qa") {
    return <Question />;
  } else if (listName === "review") {
    return <Review />;
  }
};
export default ContentsContainer;
