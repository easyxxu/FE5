describe("jasmine test bundle", () => {
  // it : 함수 테스트 유닛. 첫번째 인자로 테스트할 함수에 대한 설명, 두번째로 테스트할 코드를 전달
  it("plus one", () => {
    let num = 0;
    expect(plusOne(num)).toBe(num + 1);
  });
});
