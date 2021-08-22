import { apollo } from "apollo";
import { GET_MAGAZINE } from "apollo/queries/magazineQuery";
import PdfViewer from "components/pdfComp/pdfviewer/PdfViewer";
import PdfViewLayout from "Layout/PdfViewLayout";
import { NextPage, NextPageContext } from "next";
import React from "react";
import { HTTP_URI } from "utils/constants";

const Pdf: NextPage<{ file: string }> = ({
	file,
}: {
	file: string;
}): JSX.Element => {
	if (!file) return <p>Loading...</p>;
	return (
		<PdfViewLayout>
			<PdfViewer file={`${HTTP_URI}${file}`} />
		</PdfViewLayout>
	);
};

export default Pdf;

Pdf.getInitialProps = async (ctx: NextPageContext) => {
	try {
		const { data } = await apollo.query({
			query: GET_MAGAZINE,
			variables: { id: ctx?.query?.id },
		});

		const file = data?.magazine?.pdf?.url;
		return {
			file,
		};
	} catch (error) {
		console.log(error);
		return {
			file: "",
		};
	}
};
