import React, { useState } from "react";
import resume from "../../../static/resume.pdf";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
//https://react-pdf-viewer.dev/docs/basic-usage/

const ResumePage = () => {
  const [defaultPdfFile, setDefaultPdfFile] = useState(resume);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className="pdf-container">
      {defaultPdfFile && (
        <>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
            <Viewer
              fileUrl={defaultPdfFile}
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </>
      )}
    </div>
  );
};

export default ResumePage;
