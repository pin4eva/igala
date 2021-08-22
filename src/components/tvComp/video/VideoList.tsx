import Link from "next/link";
import React from "react";
import * as timeago from "timeago.js";

const VideoList = (): JSX.Element => {
   return (
      <>
         {videos.map((video, i) => (
            <Link href={`/tv/${video.link()}`} key={i}>
               <a className="text-decoration-none text-inherit">
                  <div className="col border-0 right-main-col">
                     <div className="card right-main-col-card bg-transparent border-0 d-flex flex-colum flex-xl-row">
                        <div className="img d-flex ratio ratio-16x9 bg-danger justify-content-end align-items-end">
                           <iframe
                              src={`https://www.youtube-nocookie.com/embed/${video.link()}`}
                              frameBorder={0}
                              className="w-100 h-100 p-0 m-0"
                              onClick={(e) => console.log(e.target)}
                              id="vod"
                              style={{ pointerEvents: "none" }}
                           ></iframe>
                        </div>
                        <div className="ms-1 rigth-card-body card-body p-0">
                           <p className="p-0 mb-2 fw-bolder fs-6">
                              {video.title}
                           </p>
                           <p className="text-end p-0 m-0 fs-6 fw-light">
                              <time>{timeago.format(video.createdAt)}</time>
                           </p>
                        </div>
                     </div>
                  </div>
               </a>
            </Link>
         ))}
      </>
   );
};

export default VideoList;

const videos = [
   {
      videoUrl: "https://youtu.be/YfIazO5XxRM",
      title: "10 MOST UNUSUAL DOGS IN THE WORLD",
      createdAt: Date.now(),
      link: function () {
         const links = this.videoUrl.slice(17);
         return links;
      },
   },
   {
      videoUrl: "https://youtu.be/f7eDOsFp3Fo",
      title: "GRAB HER BACK SIDE",
      createdAt: Date.now(),
      link: function () {
         const links = this.videoUrl.slice(17);
         return links;
      },
   },
   {
      videoUrl: "https://youtu.be/VJOxqTpbg0E",
      title: "Sabinus will never learn 😂 (oga sabinus)",
      createdAt: Date.now(),
      link: function () {
         const links = this.videoUrl.slice(17);
         return links;
      },
   },
];

export const VideoData = (): {
   data: { id: string; title: string; createdAt: number }[];
} => {
   const data = videos.map((vid) => {
      const id = vid.link();
      const title = vid.title;
      const createdAt = vid.createdAt;
      return {
         id,
         title,
         createdAt,
      };
   });
   return { data };
};
