import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";
import { Flipbook } from "../pdfFlip/Flipbook";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

/*
 const samplePDF = "https://www.hq.nasa.gov/alsj/a17/A17_FlightPlan.pdf"; 
 */
export default function PdfViewer({ file }: { file: string }): JSX.Element {
	const [numPages, setNumPages] = useState(1);
	const [pageNumber, setPageNumber] = useState(1);
	const [content_list, setContentList] = useState(false);
	const [renderstate, setRenderState] = useState(false);
	const [rect, setRect] = useState({
		width: 0,
		height: 0,
	});
	// Functions
	const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
		setNumPages(numPages);
	};
	const numContents = () => {
		const num_of_content = [];
		if (numPages) {
			for (let index = 1; index <= numPages; index++) {
				num_of_content.push(index);
			}
		}
		return num_of_content;
	};
	const numOfPages = () => {
		const num_of_pages = [];
		if (numPages) {
			for (let index = 1; index <= numPages; index++) {
				num_of_pages.push(index);
			}
		}
		return num_of_pages;
	};

	const getRect = () => {
		const elems = document.querySelector(".demoPage");
		const elem_width = elems?.getBoundingClientRect().width;
		const elem_height = elems?.getBoundingClientRect().height;
		setRect({
			...rect,
			width: Number(elem_width),
			height: Number(elem_height),
		});
	};

	useEffect(() => {
		getRect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<PDFWrapper>
			{content_list && (
				<div className="cover-dark animate__animated animate__slideInLeft">
					<div className="cover-light overflow-auto animate__animated animate__zoomInRight">
						<div className="container py-4">
							<h3 className="mb-3 fw-bolder d-flex justify-content-between align-items-center">
								<span>Contents</span>
								<button
									className="btn btn-light"
									onClick={() => setContentList(false)}
								>
									<i className="fas fa-times fa-2x"></i>
								</button>
							</h3>
							<ul className="list-group">
								{numContents().map((content, i) => (
									<li
										className={`list-group-item d-flex align-items-center border-0 c-pointer ${
											pageNumber == content ? "bg-secondary" : ""
										}`}
										key={i}
										onClick={() => {
											setPageNumber(content);
											setContentList(false);
										}}
									>
										<span className="fw-bold">-</span>
										<p className="m-0 p-0 px-2 flex-fill">
											<b className="d-block text-center fw-bolder fs-5 mb-2">
												A in nunc purus urna nulla eu gravida quisque.{" "}
											</b>
											<span className="float-end pe-5">
												Nisl, ac eget ac nibh. Vel dui auctor ultricies quisque
												a nibh.
											</span>
										</p>
										<span className="fw-bold">{content}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			)}
			<div className="container d-flex mb-4 justify-content-between align-items-center ">
				<button className="btn btn-dark" onClick={() => setContentList(true)}>
					<i className="fas fa-2x fa-bars"></i>
				</button>
			</div>
			<div className="pdf-section py-3">
				<div className="pdf-wrapper overflow-auto">
					<Document
						file={file}
						onLoadSuccess={onDocumentLoadSuccess}
						renderMode="canvas"
						className="pdf-main py-3"
					>
						<Flipbook
							width={rect.width ? rect.width : 600}
							height={rect.height ? rect.height : 845}
							render_state={renderstate}
						>
							{numOfPages().map((e, i) => (
								<div className="demoPage me-sm-2" key={i}>
									<Page
										pageNumber={e}
										className="w-100 get-rect"
										onLoadSuccess={getRect}
										onRenderSuccess={() => setRenderState(true)}
										scale={1}
										renderTextLayer={false}
									/>
								</div>
							))}
						</Flipbook>
					</Document>

					<div></div>
				</div>
			</div>
		</PDFWrapper>
	);
}

const PDFWrapper = styled.div`
	.cover-dark {
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100%;
		position: fixed;
		z-index: 2;
		background: #000000e8;
		overflow: hidden;
		.cover-light {
			width: 80%;
			max-width: 40rem;
			background: white;
			height: 100%;
			position: absolute;
			z-index: 1000000;
		}
	}
	.pdf-section {
		.pdf-wrapper {
			.pdf-main {
				min-height: fit-content;
				box-sizing: border-box;
				overflow: auto;
			}
		}
	}
`;
