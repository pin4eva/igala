/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import TitleComp from "../TitleComp";

const EducationComp = (): JSX.Element => {
  return (
    <Wrapper className="container">
      <TitleComp title="Education" />
      <Link href="/articles/education">
        <a className="text-inherit text-decoration-none">
          <div className="bg-dark flex-wrapper ">
            <div className="left">
              <img src="/images/Rectangle 26.png" alt="" />
            </div>
            <div className="right">
              <div className="inner text-light container ">
                <div className="text-center mb-3">
                  <p className="mb-0 fs-2">Interview</p>
                  <div className="line-thin bg-warning w-50 mx-auto " />
                </div>

                <div>
                  <p className="fs-1 fw-bold">The Sitdown </p>
                  <p className="fs-3">With</p>
                  <p className="fs-1 fw-bold mb-0">Dr. Michael Doug</p>
                  <p> Ceo. klint group inc.</p>
                </div>
                <p>by Sola Oyebanji</p>
              </div>
            </div>
          </div>
        </a>
      </Link>

      {/* <div className="mt-5">
				<div className="row">
					{articles.slice(0, 3).map((article, i) => (
						<div className="col-md-4" key={i}>
							<PostPreviewComp article={article} />
						</div>
					))}
				</div>
			</div>

			<div className="my-4 text-center">
				<button className="btn btn-outline-dark fw-bold">Load More</button>
			</div> */}
    </Wrapper>
  );
};

export default EducationComp;
const Wrapper = styled.section`
  .flex-wrapper {
    img {
      width: 100%;
    }
    .right {
      height: 100%;
      /* background-color: yellow; */
      display: grid;
      place-content: center;
      .inner {
        /* background-color: green; */
        text-align: center;
      }
    }
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-column-gap: 1rem;
    }
  }
`;
