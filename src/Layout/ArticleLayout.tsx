import FooterComp from "components/FooterComp";
import HeaderComp from "components/articles/ArticleHeaderComp";
import React from "react";
import styled from "styled-components";

const ArticleLayout = ({
  children,
}: {
  children: React.ReactChild;
}): JSX.Element => {
  return (
    <Main id="article-layout">
      <HeaderComp />
      <main>{children}</main>
      <FooterComp />
    </Main>
  );
};

export default ArticleLayout;

const Main = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
