import "./Area.css";

function Area() {
  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];

  let areas = list.map((x) => {
    return (
      <li key={x.no} className={x.visited ? "visited" : null}>
        {x.area}
      </li>
    );
  });
  return <ul>{areas}</ul>;
}

export default Area;
