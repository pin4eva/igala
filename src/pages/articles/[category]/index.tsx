/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { apollo } from "apollo";
import { GET_ARTICLES_BY_CATEGORY } from "apollo/queries/articleQuery";
import { GET_CATEGORY } from "apollo/queries/categoryQuery";
import Advertisement from "components/Advertisement";
import SubscribeComp from "components/articles/home/SubscribeComp";
// import { categories } from "components/articles/ArticleHeaderComp";
import ArticleLayout from "Layout/ArticleLayout";
import { NextPage, NextPageContext } from "next";
import React from "react";
import { IArticle, ICategory } from "types/interface";

interface IProps {
  category: ICategory | null;
  articles: IArticle[] | null;
}

const Article: NextPage<IProps> = ({
  category,
  articles,
}: IProps): JSX.Element => {
  console.log(articles);
  return (
    <ArticleLayout>
      <main className="artilce-main">
        <section className="first-article mb-4">
          <div className="container first-article-main">
            <div className="text-center first-article-main-title mb-3">
              <h1 className="georgia text-capitalize">{category?.name}</h1>
              <div className="line-thin w-75 mx-auto bg-warning"></div>
            </div>
            <div className="d-flex first-article-main-body flex-column flex-md-row">
              <div className="one">
                <div className="row row-cols-1 one-row g-3">
                  {num.slice(7).map((e) => (
                    <div className="col one-col" key={e}>
                      <div className="card border-0 rounded-0 one-card">
                        <div className="one-card-img rounded-0 card-img mb-2">
                          <img
                            loading="lazy"
                            src="/images/Rectangle 29.png"
                            alt=""
                          />
                        </div>
                        <div className="one-card-body card-body p-0">
                          <p className="georgia p-0 mb-2 fw-bold">
                            Lacus in quam odio lectus. Nam tellus commodo metus.
                          </p>
                          <div className="d-inline-block py-1 border-top border-dark border-2">
                            By Emeka Alice
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="two">
                <div className="two-row row row-cols-1">
                  <div className="two-col col">
                    <div className="two-card border-0 rounded-0 card">
                      <div className="two-card-img rounded-0 card-img mb-2">
                        <img
                          loading="lazy"
                          src="/images/Rectangle 28.png"
                          alt=""
                        />
                      </div>
                      <div className="two-card-body card-body p-0">
                        <p className="p-0 fw-bold georgia mb-2">
                          Rutrum ac, placerat purus aliquam nulla magna nisl
                          volutpat a. At lectus malesuada sed urna a amet non.
                        </p>
                        <div className="d-inline-block py-1 border-top border-dark border-2">
                          By Emeka Alice
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="three">
                <div className="row row-cols-1 three-row g-3">
                  {num.slice(7).map((e) => (
                    <div className="col three-col" key={e}>
                      <div className="card border-0 rounded-0 three-card">
                        <div className="three-card-img rounded-0 card-img mb-2">
                          <img
                            loading="lazy"
                            src="/images/Rectangle 29.png"
                            alt=""
                          />
                        </div>
                        <div className="three-card-body card-body p-0">
                          <p className="georgia p-0 mb-2 fw-bold">
                            Lacus in quam odio lectus. Nam tellus commodo metus.
                          </p>
                          <div className="d-inline-block py-1 border-top border-dark border-2">
                            By Emeka Alice
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mb-3 py-1">
          <Advertisement />
        </div>
        <section className="second-article mb-5">
          <div className="container second-article-main">
            <div className="second-article-main-head py-3 mb-4 text-center">
              <h1 className="pb-3 d-inline-block fw-bold  border-bottom border-warning georgia border-2">
                Sub-heading
              </h1>
            </div>
            <div className="second-article-main-body">
              <div className="second-article-row row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                {num.slice(1).map((e) => (
                  <div className="second-article-col col" key={e}>
                    <div className="second-article-card card rounded-0 border-0">
                      <div className="second-article-card-img card-img rounded-0 mb-2">
                        <img
                          loading="lazy"
                          src="/images/Rectangle 27.png"
                          alt=""
                        />
                      </div>
                      <div className="card-body p-0">
                        <p className="p-0 mb-2 georgia fw-bold">
                          Lacus in quam odio lectus. Nam tellus commodo metus.
                        </p>
                        <span className="d-inline-block border-dark py-1 border-top border-2">
                          By Emeka Alice
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ---- @START --------*/}
        <section className="second-article mb-5">
          <div className="container second-article-main">
            <div className="second-article-main-head py-3 mb-4 text-center">
              <h1 className="pb-3 d-inline-block fw-bold  border-bottom border-warning georgia border-2">
                Sub-heading
              </h1>
            </div>
            <div className="second-article-main-body">
              <div className="second-article-row row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                {num.slice(1).map((e) => (
                  <div className="second-article-col col" key={e}>
                    <div className="second-article-card card rounded-0 border-0">
                      <div className="second-article-card-img card-img rounded-0 mb-2">
                        <img
                          loading="lazy"
                          src="/images/Rectangle 27.png"
                          alt=""
                        />
                      </div>
                      <div className="card-body p-0">
                        <p className="p-0 mb-2 georgia fw-bold">
                          Lacus in quam odio lectus. Nam tellus commodo metus.
                        </p>
                        <span className="d-inline-block border-dark py-1 border-top border-2">
                          By Emeka Alice
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ----- ** @STOP  **-------  */}
        <div>
          <Advertisement />
        </div>
        {/* ---- @START --------*/}
        <section className="second-article mb-5">
          <div className="container second-article-main">
            <div className="second-article-main-head py-3 mb-4 text-center">
              <h1 className="pb-3 d-inline-block fw-bold  border-bottom border-warning georgia border-2">
                Sub-heading
              </h1>
            </div>
            <div className="second-article-main-body">
              <div className="second-article-row row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                {num.slice(1).map((e) => (
                  <div className="second-article-col col" key={e}>
                    <div className="second-article-card card rounded-0 border-0">
                      <div className="second-article-card-img card-img rounded-0 mb-2">
                        <img
                          loading="lazy"
                          src="/images/Rectangle 27.png"
                          alt=""
                        />
                      </div>
                      <div className="card-body p-0">
                        <p className="p-0 mb-2 georgia fw-bold">
                          Lacus in quam odio lectus. Nam tellus commodo metus.
                        </p>
                        <span className="d-inline-block border-dark py-1 border-top border-2">
                          By Emeka Alice
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ----- ** @STOP  **-------  */}
        <div>
          <SubscribeComp />
        </div>
      </main>
    </ArticleLayout>
  );
};

export default Article;

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Article.getInitialProps = async (ctx: NextPageContext): Promise<IProps> => {
  const getCategory = async () => {
    try {
      const { data } = await apollo.query({
        query: GET_CATEGORY,
        variables: { slug: ctx?.query?.category },
      });
      return data?.categories?.[0];
    } catch (error) {
      throw error;
    }
  };
  const getArticles = async () => {
    try {
      const { data } = await apollo.query({
        query: GET_ARTICLES_BY_CATEGORY,
        variables: { slug: ctx?.query?.category },
      });
      return data?.articles;
    } catch (error) {
      throw error;
    }
  };
  try {
    return {
      category: await getCategory(),
      articles: await getArticles(),
    };
  } catch (error) {
    console.log(error);
    return {
      category: null,
      articles: null,
    };
  }
};
