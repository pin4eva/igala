/* eslint-disable @next/next/no-img-element */
import Advertisement from "components/Advertisement";
import ArticleRightView from "components/articles/ArticleRightView";
import SubscribeComp from "components/articles/home/SubscribeComp";
import Image from "next/image";
import ArticleLayout from "Layout/ArticleLayout";
import styled from "styled-components";
import { articles } from "utils/fakeArticles";

export default function Home(): JSX.Element {
  return (
    <ArticleLayout>
      <>
        <MainArticleWrapper className="container">
          <Advertisement />
          <section className="section-2 py-3 mb-4">
            <div className="section-2-container  d-flex flex-column flex-md-row">
              <div className="left ">
                <p className="big-head">
                  Alhaji Yahaya Bello, recieves man of the year.
                </p>
                <div className="left-position-relative">
                  <img loading="lazy" src="images/Rectangle 4.png" alt="" />
                </div>
                <p className="p-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  pharetra lacinia ut varius phasellus commodo etiam tellus.
                  Risus nulla quisque integer aliquam amet, venenatis. Tempor
                  congue tempor enim, maecenas arcu. Senectus risus at turpis
                  leo ut risus proin. In non habitant sit neque vestibulum
                  pellentesque vestibulum placerat luctus. Dui faucibus elit sit
                  rhoncus euismod. In nisi suspendisse adipiscing laoreet in.
                  Et, sit felis, natoque pellentesque. Convallis id sodales
                  laoreet sem nulla fermentum integer nibh ac. Neque, eget nisi,
                  diam integer lectus in. Urna, eget morbi massa lacinia
                  pharetra proin nisl, nibh phasellus. Risus feugiat et,
                  pellentesque dui egestas purus diam in. Pretium pharetra at
                  gravida consequat habitant vestibulum. Nulla quam nascetur
                  cursus nulla nisl. Imperdiet arcu, odio condimentum bibendum
                  amet quam. Sit sit mi leo, vel. In morbi pellentesque ornare.
                </p>
              </div>
              <div className="right">
                <div className="row right-row mb-3 row-cols-1 g-4">
                  {articles.slice(0, 3).map((article, i) => (
                    <ArticleRightView key={i} article={article} />
                  ))}
                </div>
                <button className="btn btn-dark mx-auto d-block px-4 py-2">
                  Read more
                </button>
              </div>
            </div>
          </section>
          <section className="section-3 py-3 mb-4">
            <div className="d-flex mb-3 align-items-center justify-content-center">
              <div className="line-thin px-5  p-0 bg-dark"></div>
              <h4 className="mx-5 fw-bold fs-1 georgia">Latest</h4>
              <div className="line-thin px-5  bg-dark"></div>
            </div>
            <div className="section-3-container d-flex flex-column flex-md-row">
              <div className="left">
                <div className="left-row row mb-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-3 g-4">
                  {articles.slice(0, 3).map((article, i) => (
                    <div className="col left-row-col" key={i}>
                      <div className="card left-card  border-0">
                        <div className="card-img left-card-img">
                          <img
                            loading="lazy"
                            src="images/Frame 2.png"
                            alt=""
                            className=""
                          />
                        </div>
                        <div className="card-body p-0 py-2">
                          <p className="p-0 mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Tellus dui maecenas bibendum feugiat
                          </p>
                          <div className="line mb-3 bg-warning w-75 pt-1"></div>
                          <span className="d-inline-block">
                            By Sola Oyebanji
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="btn btn-dark d-block mx-auto px-4 py-2">
                  Go to magazine
                </button>
              </div>
              <div className="right">
                <p className="p-0 fw-bold fs-1">Advertisement</p>
              </div>
            </div>
          </section>
          <section className="section-4 py-3 mb-4">
            <div className="d-flex mb-4 align-items-center justify-content-center">
              <div className="line-thin px-5  p-0 bg-dark"></div>
              <h4 className="mx-5 fw-bold fs-1 georgia">Entertainment</h4>
              <div className="line-thin px-5  bg-dark"></div>
            </div>
            <div className="section-4-container d-flex flex-column flex-md-row">
              <div className="left overflow-hidden">
                <div className=" overflow-hidden">
                  <Image
                    src="/images/Rectangle 19.png"
                    height={1200}
                    width={`${1000}%`}
                    layout="responsive"
                    alt=""
                  />
                </div>
                <p className="georgia fs-2 p-0 fw-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="right">
                {articles.slice(0, 7).map((article, i) => (
                  <div
                    className="entertainment-card mb-3 d-flex flex-column flex-xl-row"
                    key={i}
                  >
                    <div className="entertainment-card-left overflow-hidden">
                      <Image
                        src="/images/Rectangle 20.png"
                        height={500}
                        width={`${1000}%`}
                        layout="responsive"
                        alt=""
                      />
                    </div>
                    <div className="entertainment-card-right">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Luctus ornare arcu dui lacus.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="section-5 py-3 mb-4">
            <div className="section-5-main">
              <div className="d-flex mb-4 align-items-center justify-content-center">
                <div className="line-thin px-5  p-0 bg-dark"></div>
                <h4 className="mx-5 fw-bold fs-1 georgia">
                  Culture and tourism
                </h4>
                <div className="line-thin px-5  bg-dark"></div>
              </div>
              <p className="fw-bold georgia fs-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                nunc felis accumsan.
              </p>
              <div className="">
                <Image
                  src="/images/Rectangle 24.png"
                  height={500}
                  width={`${1000}%`}
                  layout="responsive"
                  alt=""
                />
              </div>
              <p className="p-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
                integer amet, viverra tristique amet. Amet enim, et dignissim
                vel dui sed. Erat egestas non lacinia sed viverra nisl nisl. Non
                auctor feugiat tortor, et et dis cursus malesuada dolor. In
                lorem nibh vitae velit. Mauris vulputate mauris tristique sit
                eget habitant feugiat nibh. Eget eu nunc dictum at a. Etiam
                pellentesque facilisis neque, ornare nulla bibendum. Proin leo
                felis lorem dui sem cursus sit metus. Mauris in quis amet, ut.
                Eget nunc tortor rhoncus dictumst lacus suspendisse ut justo,
                nullam. Felis aenean at etiam magna integer faucibus ultrices
                sit. In mauris phasellus eget quam aliquam proin. Scelerisque
                posuere tempus facilisis ut. Sagittis, lectus mauris mollis dui
                viverra nibh integer auctor. Massa nunc tristique porta
                suspendisse molestie arcu nunc. Sodales convallis amet praesent
                quam aliquam morbi amet. Viverra cursus porta dolor eleifend. In
                diam, duis semper ut. Suscipit amet, molestie pellentesque nibh
                in venenatis, vitae. Pulvinar eget faucibus faucibus in. In
                egestas orci nec libero. Mauris magna erat et sed. Morbi aliquam
                turpis in feugiat suspendisse at. Ac ultricies eu rhoncus nulla.
                At vulputate pellentesque molestie viverra quis sit vel purus.
                Malesuada quis sit vel nunc nisi habitant. Fusce in amet odio
                scelerisque scelerisque. Convallis amet nunc facilisi
                consectetur enim et posuere. Sed turpis ac imperdiet mattis
                augue lobortis. Faucibus in vivamus integer luctus bibendum.
                Elit velit fringilla id sed mattis auctor.
              </p>
              <div className="d-flex mb-5 justify-content-end py-1">
                <button className="btn">
                  Read article <i className="fas fa-arrow-right"></i>
                </button>
              </div>
              <div className="section-5-main-card d-flex flex-column flex-md-row">
                <div className="left">
                  <div className="left-row row mb-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-3 g-4">
                    {articles.slice(0, 7).map((article, i) => (
                      <div className="col left-row-col" key={i}>
                        <div className="card left-card  border-0">
                          <div className="card-img left-card-img">
                            <img
                              loading="lazy"
                              src="images/Frame 2.png"
                              alt=""
                              className=""
                            />
                          </div>
                          <div className="card-body p-0 py-2">
                            <p className="p-0 mb-3">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Tellus dui maecenas bibendum feugiat
                            </p>
                            <div className="line mb-3 bg-warning w-75 pt-1"></div>
                            <span className="d-inline-block">
                              By Sola Oyebanji
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="right">
                  <p className="p-0 fw-bold fs-1"></p>
                </div>
              </div>
            </div>
          </section>
        </MainArticleWrapper>
        <SecondArticleWrapper className="section-6">
          <div className="">
            <article className="article-1 py-1">
              <div className="d-flex mb-4 align-items-center justify-content-center">
                <div className="line-thin px-5  p-0 bg-dark bg-gradients"></div>
                <h4 className="mx-5 fw-bold fs-1 georgia">Education</h4>
                <div className="line-thin px-5  bg-dark"></div>
              </div>
              <div className="article-1-main mb-4 bg-dark">
                <div className="d-flex container flex-column flex-md-row article-1-main-wrapper">
                  <div className="left">
                    <img src="images/Rectangle 26.png" alt="" loading="lazy" />
                  </div>
                  <div className="right py-4 text-white">
                    <div className="right-main">
                      <div className="text-center mb-5">
                        <span className="d-inline-block fs-4 fw-bold mb-3">
                          Interview
                        </span>
                        <div className="line mx-auto px-4 w-25 bg-warning"></div>
                      </div>
                      <p className="text-center fw-bold fs-3">
                        The Sitdown <br />
                        <span className="fw-light fs-6">With </span> <br />
                        Dr. Michael Doug
                        <br />
                        <span className="fw-light fs-6">
                          Ceo. klint group inc.
                        </span>
                      </p>
                    </div>
                    <span className="text-center d-block fw-light">
                      by Sola Oyebanji
                    </span>
                  </div>
                </div>
              </div>
            </article>
            <article className="container mb-5 article-2 py-1">
              <div className="row article-2-row mb-5 row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {articles.slice(0, 7).map((article, i) => (
                  <div className="col article-2-row-col" key={i}>
                    <div className="card article-2-card border-0">
                      <div className="card-img article-2-card-img mb-1 overflow-hidden">
                        <img
                          src="images/Rectangle 15.png"
                          alt=""
                          loading="lazy"
                        />
                      </div>
                      <div className="card-body article-2-card-body p-0">
                        <p className="p-0 mb-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Risus nibh tristique velit,{" "}
                        </p>
                        <div className="line bg-warning w-50 mb-2"></div>
                        <span>By Sola Oyebanji</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn px-4 py-2 border-3 border-dark fw-bold d-block mx-auto">
                Load more articles
              </button>
            </article>
            <SubscribeComp />
          </div>
        </SecondArticleWrapper>
      </>
    </ArticleLayout>
  );
}

const MainArticleWrapper = styled.div`
  .section-2 {
    &-container {
      gap: 3rem;
      .left {
        flex: 0.6;
        &-position-relative {
          position: relative;
          overflow: hidden;
          min-height: 25rem;
          img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
      .right {
        flex: 0.4;
        &-row {
          &-col {
            .right-card {
              &-img {
                position: relative;
                min-height: 10rem;
                overflow: hidden;
                border-radius: 15px;
                @media screen and (min-width: 768px) {
                  min-width: 15rem;
                }
                img {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }
            }
          }
        }
      }
    }
  }
  .section-3 {
    &-container {
      gap: 3rem;
      .left {
        flex: 0.75;
        &-row {
          &-col {
            .left-card {
              &-img {
                width: 100%;
                position: relative;
                min-height: 12rem;
                overflow: hidden;
                border-radius: 15px;
                @media screen and (min-width: 768px) {
                  min-width: 15rem;
                }
                img {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }
            }
          }
        }
      }
      .right {
        flex: 0.25;
        min-height: 35.125rem;
        position: relative;
        /* background: red; */
        overflow: hidden;
        background: url("images/Rectangle 16.png") no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        word-break: break-all;
      }
    }
  }
  .section-4 {
    &-container {
      gap: 3rem;
      .left {
        flex: 0.5;
        .img {
          min-height: 40rem;
          position: relative;
          overflow: hidden;
          img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      .right {
        flex: 0.5;
        gap: 1rem;
        .entertainment-card {
          gap: 1rem;
          &-left {
            flex: 0.5;
            min-height: 13rem;
            position: relative;
            overflow: hidden;
            img {
              position: absolute;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          &-right {
            flex: 0.5;
          }
        }
      }
    }
  }
  .section-5 {
    &-main {
      .img {
        position: relative;
        overflow-y: hidden;
        min-height: 35rem;
        img {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
      &-card {
        gap: 3rem;
        .left {
          flex: 0.75;
          &-row {
            &-col {
              .left-card {
                &-img {
                  width: 100%;
                  position: relative;
                  min-height: 12rem;
                  overflow: hidden;
                  border-radius: 15px;
                  @media screen and (min-width: 768px) {
                    min-width: 15rem;
                  }
                  img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                  }
                }
              }
            }
          }
        }
        .right {
          flex: 0.25;
          min-height: 35.125rem;
          position: relative;
          overflow: hidden;
          background: url("images/Rectangle 16.png") no-repeat;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          word-break: break-all;
        }
      }
    }
  }
`;
const SecondArticleWrapper = styled.div`
  .article-1 {
    &-main {
      &-wrapper {
        min-height: 45rem;
        gap: 3rem;
        .left {
          flex: 1;
          position: relative;
          overflow: hidden;
          min-height: 45rem;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
          }
        }
        .right {
          flex: 1;
          @media screen and (min-width: 768px) {
            min-height: inherit;
          }
          &-main {
            height: inherit;
            min-height: inherit;
          }
        }
      }
    }
  }
  .article-2 {
    &-row {
      &-col {
        .article-2-card {
          &-img {
            min-height: 18rem;
            position: relative;
            overflow: hidden;
            width: 100%;
            border-radius: 15px;
            img {
              position: absolute;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
`;
