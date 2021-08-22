"use-strict";
(function () {
   const url = "https://www.zok.com/pdf/msds/44-ZOK_27_SDS4524.pdf";
   let pdfDoc = null,
      pageNum = 1,
      pageIsRendering = false,
      pageNumIsPending = null;
   setPrpgress = 0;

   const scale = 1;

   const canvas = document.querySelector("#pdf-render");
   const ctx = canvas?.getContext("2d");

   //Render the page
   const renderPage = (num) => {
      pageIsRendering = true;

      //Get Page
      pdfDoc.getPage(num).then((page) => {
         //Set Scale
         const viewport = page.getViewport({ scale });
         canvas.height = viewport.height;
         canvas.width = viewport.width;

         const renderCtx = {
            canvasContext: ctx,
            viewport,
         };

         page.render(renderCtx).promise.then(() => {
            pageIsRendering = false;

            if (pageNumIsPending !== null) {
               renderPage(pageNumIsPending);
               pageNumIsPending = null;
            }
         });

         // Output current page
         document.querySelector("#page-num").textContent = num;
      });
   };

   // Check for pages rendering
   const queueRenderPage = (num) => {
      if (pageIsRendering) {
         pageNumIsPending = num;
      } else {
         renderPage(num);
      }
   };

   // show prev page
   const showPrevPage = () => {
      if (pageNum <= 1) {
         return;
      }
      pageNum--;
      queueRenderPage(pageNum);
   };

   // show next page
   const showNextPage = () => {
      if (pageNum >= pdfDoc.numPages) {
         return;
      }
      pageNum++;
      queueRenderPage(pageNum);
   };

   //setBar
   const setBar = () => {
      const barwidth = (pageNum / pdfDoc.numPages) * 100;
      document.querySelector(".progress-bar").style?.width = `${barwidth}%`;
      document.querySelector(".percent-read").textContent =
         Math.floor(barwidth);
   };

   //Get Document
   pdfjsLib
      .getDocument(url)
      .promise.then((pdfDoc_) => {
         pdfDoc = pdfDoc_;

         document.querySelector("#page-count").textContent = pdfDoc.numPages;

         renderPage(pageNum);
      })
      .catch((err) => {
         //Display err
         const div = document.createElement("div");
         div.className = "error";
         div.appendChild(document.createTextNode(err.message));
         document.querySelector("body").insertBefore(div, canvas);
         //Remove the top bar
         document.querySelector(".top-bar").style?.display = "none";
      });

   //Button Events
   document.querySelector("#prev-page").addEventListener("click", showPrevPage);
   document.querySelector("#next-page").addEventListener("click", showNextPage);
   document.querySelector("#prev-page").addEventListener("click", setBar);
   document.querySelector("#next-page").addEventListener("click", setBar);
})();

console.log(window);
