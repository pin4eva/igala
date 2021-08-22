/* eslint-disable @next/next/no-img-element */
import TvComment from "components/tvComp/comments/TvComment";
import VideoList, { VideoData } from "components/tvComp/video/VideoList";
import VideoPlayer from "components/tvComp/video/VideoPlayer";
import TvLayout from "Layout/TvLayout";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import * as timeago from "timeago.js";
interface IDate {
   data: {
      id: string;
      title: string;
      createdAt: number | string;
   }[];
}

const Tv = (): JSX.Element => {
   const { query } = useRouter();
   const id: string | string[] | undefined = query?.id;
   const { data }: IDate = VideoData();
   console.log(data);

   return (
      <TvLayout>
         <Tvwrapper>
            <div className="tv-body">
               <div className="container py-1 tv-body-main">
                  <div className="w-75 mx-auto py-1 mb-2 tv-search-bar">
                     <form className="d-flex align-items-center position-relative">
                        <input
                           type="search"
                           className="form-control rounded-pill border-2"
                           placeholder="Search..."
                        />
                        <button
                           className="position-absolute search-btn btn "
                           type="button"
                           aria-label="search"
                        >
                           <i className="fas fa-search" aria-hidden="true"></i>
                        </button>
                     </form>
                  </div>
                  <div className="tv-body-main-video d-flex flex-column flex-lg-row">
                     <div className="left">
                        <div className="video-container bg-dark py-3">
                           <VideoPlayer id={id} />
                        </div>
                        <div className="video-title">
                           <div className="border-bottom py-2 border-dark">
                              <p className="p-0 mb-1">
                                 {data.map((each) =>
                                    !id
                                       ? "no title"
                                       : each.id == id
                                       ? each.title
                                       : ""
                                 )}
                              </p>
                              <span className="text-muted ">
                                 {data.map((each) => {
                                    const formatedTime = timeago.format(
                                       each.createdAt
                                    );
                                    const time =
                                       each.id == id ? formatedTime : "";
                                    return time;
                                 })}
                              </span>
                           </div>
                           <div className="border-bottom mb-2 border-dark py-2">
                              <p>255 Comments</p>
                           </div>
                        </div>
                        <div className="comment-section mb-3 d-flex flex-column flex-md-row py-3">
                           <div className="profile-pic">
                              <div className="profile-pic-main position-relative rounded-pill">
                                 <img
                                    src="/images/Frame 1.png"
                                    alt=""
                                    className="position-absolute"
                                 />
                              </div>
                           </div>
                           <form>
                              <textarea
                                 cols={30}
                                 rows={10}
                                 className="form-control mb-2 border-1 border-dark"
                              ></textarea>
                              <button
                                 className="btn float-end mb-2 px-4 py-2 btn-dark"
                                 type="button"
                              >
                                 Add comment
                              </button>
                           </form>
                        </div>
                        <div className="row comments row-cols-1 g-3">
                           <TvComment />
                        </div>
                     </div>
                     <div className="right">
                        <div className="row right-main row-cols-1 g-3">
                           <VideoList />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Tvwrapper>
      </TvLayout>
   );
};

export default Tv;

const Tvwrapper = styled.div`
   min-height: 100vh;
`;
