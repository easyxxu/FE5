import { fireEvent, render, screen } from "@testing-library/react"; // 테스트를 돕는 라이브러리
import App from "./App";

test("버튼이 작동되는지 확인", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "change to blue" });
  expect(button).toHaveStyle({ backgroundColor: "red" });
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
  expect(button.textContent).toBe("change to red");
});
