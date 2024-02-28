"use client";

import { GetCustomizedPackageById } from "@/app/services/admin/customizedPackageService";
import CustomPackagePDFTemplate from "@/components/admin/common/CustomPackagePDFTemplate";
import HeadingSmall from "@/components/typos/HeadingSmall";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRef } from "react";
import { useEffect, useState } from "react";
import html2pdf from "html2pdf.js";

function PdfGenerator({ customPackage }) {
  const pdfTemplate = useRef();
  const containerRef = useRef();

  const handleGeneratePDF = async () => {
    // setLoading(true);

    let containerHeight = pdfTemplate.current.getContainerHeight();

    const options = {
      margin: [0, 0, 0, 0],
      filename: `generated.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: "px",
        format: [600, containerHeight],
        orientation: "portrait",
      },
    };

    await html2pdf().set(options).from(containerRef.current).save();
    // setLoading(false);
  };

  return (
    <div>
      <div className="flex h-[65vh] overflow-auto">
        <div ref={containerRef} className="grow">
          {customPackage && (
            <CustomPackagePDFTemplate
              ref={pdfTemplate}
              customPackage={customPackage}
            />
          )}
        </div>
        <div className="sticky top-0 flex h-full items-center justify-center">
          <div>
            <button onClick={handleGeneratePDF} className="btn-primary">
              Generate PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PdfGenerator;
