import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
  margin: 40px;
`;

const ContentH2 = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

const Question = () => {
  return (
    <ContentDiv>
      <ContentH2>Question</ContentH2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo iste,
        quia fugiat, itaque perspiciatis eligendi autem hic obcaecati
        necessitatibus recusandae sit minima possimus natus nam qui fugit, magni
        earum molestias!
      </p>
    </ContentDiv>
  );
};

export default Question;
