'use client';

import { useEffect, useRef, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import CardRapper from '../CardRapper';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

function ResumePage() {
  const ref=useRef<HTMLDivElement>(null)
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
    const [containerWidth, setContainerWidth] = useState<number>(0);
  const gotoPrev = () => setPageNumber((prev) => Math.max(prev - 1, 1))
  const gotoNext = () => setPageNumber((prev) => Math.min(prev + 1, numPages))
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }
  useEffect(()=>{
    if (!ref.current) return;
    const observer=new ResizeObserver(()=>{
      setContainerWidth(ref.current!.offsetWidth)
    })
    observer.observe(ref.current)
    return ()=>observer.disconnect()
  },[])
  return (
    <CardRapper>
      <div
      ref={ref}
      >
     <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page width={containerWidth} pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
      </Document>
      </div>
 
      <div className='mt-4 flex md:flex-row flex-col gap-4 md:gap-0 md:justify-between'>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <div className="flex justify-between gap-4 items-center">
          <button
            disabled={pageNumber <= 1}
            onClick={gotoPrev}
            className={`
      h-[40px] w-[120px] flex justify-center items-center text-white border border-gray-300
      ${pageNumber <= 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-700'}
    `}
          >
            Previous
          </button>

          <button
            disabled={pageNumber >= numPages}
            onClick={gotoNext}
            className={`
      h-[40px] w-[120px] flex justify-center items-center text-white border border-gray-300
      ${pageNumber >= numPages ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-700'}
    `}
          >
            Next
          </button>
        </div>


      </div>

    </CardRapper>
  );
};
export default ResumePage