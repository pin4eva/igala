/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import { IArticles } from "types/articles";

const ArticleRightView = ({ article }: { article: IArticles }): JSX.Element => {
  return (
    <Wrapper className="col right-row-col">
      <div className="card border-0 right-card py-0 d-flex flex-column flex-xl-row">
        <div className="card-img right-card-img w-100">
          <img loading="lazy" src={article.image} alt="" />
        </div>
        <div className="right-card-body ms-md-1 card-body  p-0 ps-1">
          <p className="card-title fw-bold p-0 fs-5">{article.title}</p>
          <p>{article.excerpt}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default ArticleRightView;

const Wrapper = styled.div`
  .title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 27px;
  }
  .excerpt {
    font-size: 0.875rem;
  }
`;
