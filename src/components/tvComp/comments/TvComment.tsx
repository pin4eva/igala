/* eslint-disable @next/next/no-img-element */
import React from "react";

const TvComment = (): JSX.Element => {
   return (
      <>
         {comments.map((comment, i) => (
            <div className="col comments-main " key={i}>
               <div className="card border-0 comments-main-card p-0 d-flex align-items-md-start flex-column flex-md-row">
                  <div className="comments-main-card-pic">
                     <div className="comments-main-card-pic-main overflow-hidden rounded-circle position-relative ">
                        <img
                           src="/images/Frame 1.png"
                           alt=""
                           className="position-absolute"
                        />
                     </div>
                  </div>
                  <div className="card-body p-0 comments-main-card-body">
                     <div className="card-title comments-main-card-title align-items-center d-flex justify-content-between">
                        <span className="fw-bold">{comment.title}</span>
                        <time className="text-muted">{comment.time}</time>
                     </div>
                     <p>{comment.body}</p>
                  </div>
               </div>
            </div>
         ))}
      </>
   );
};

export default TvComment;

const comments = [
   {
      title: "Emeka Chibuzor",
      body: "Nunc amet purus at amet elementum ornare tincidunt phasellus habitant. Sed dui, leo amet, tristique sed porta magnis tincidunt massa. In orci scelerisque nunc cras euismod suscipit non ut orci. Purus ac imperdiet laoreet quam fames. Nunc enim malesuada volutpat mattis. Praesent ipsum lacinia dis metus. In amet, eget tellus facilisi pellentesque. Tortor integer urna libero phasellus. Ullamcorper congue volutpat vel.",
      time: "2 Hrs ago",
   },
   {
      title: "Emeka Chibuzor",
      body: "Nunc amet purus at amet elementum ornare tincidunt phasellus habitant. Sed dui, leo amet, tristique sed porta magnis tincidunt massa. In orci scelerisque nunc cras euismod suscipit non ut orci. Purus ac imperdiet laoreet quam fames. Nunc enim malesuada volutpat mattis. Praesent ipsum lacinia dis metus. In amet, eget tellus facilisi pellentesque. Tortor integer urna libero phasellus. Ullamcorper congue volutpat vel.",
      time: "2 Hrs ago",
   },
   {
      title: "Emeka Chibuzor",
      body: "Nunc amet purus at amet elementum ornare tincidunt phasellus habitant. Sed dui, leo amet, tristique sed porta magnis tincidunt massa. In orci scelerisque nunc cras euismod suscipit non ut orci. Purus ac imperdiet laoreet quam fames. Nunc enim malesuada volutpat mattis. Praesent ipsum lacinia dis metus. In amet, eget tellus facilisi pellentesque. Tortor integer urna libero phasellus. Ullamcorper congue volutpat vel.",
      time: "2 Hrs ago",
   },
   {
      title: "Emeka Chibuzor",
      body: "Nunc amet purus at amet elementum ornare tincidunt phasellus habitant. Sed dui, leo amet, tristique sed porta magnis tincidunt massa. In orci scelerisque nunc cras euismod suscipit non ut orci. Purus ac imperdiet laoreet quam fames. Nunc enim malesuada volutpat mattis. Praesent ipsum lacinia dis metus. In amet, eget tellus facilisi pellentesque. Tortor integer urna libero phasellus. Ullamcorper congue volutpat vel.",
      time: "2 Hrs ago",
   },
   {
      title: "Emeka Chibuzor",
      body: "Nunc amet purus at amet elementum ornare tincidunt phasellus habitant. Sed dui, leo amet, tristique sed porta magnis tincidunt massa. In orci scelerisque nunc cras euismod suscipit non ut orci. Purus ac imperdiet laoreet quam fames. Nunc enim malesuada volutpat mattis. Praesent ipsum lacinia dis metus. In amet, eget tellus facilisi pellentesque. Tortor integer urna libero phasellus. Ullamcorper congue volutpat vel.",
      time: "2 Hrs ago",
   },
];
