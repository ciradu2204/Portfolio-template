import { GrDownload } from 'react-icons/gr';
import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import Footer from '../../components/Shared/Footer';
import "./index.css"
import MyResume from "../../img/Cynthia-Iradukunda-Resume.pdf"
import { Button } from '@mui/material';

const CV = () => {
    const [numPages, setNumPages] = React.useState();
    const [pageNumber, setPageNumber] = React.useState(1);
    const [renderNavButtons, setRenderNavButtons] = React.useState(false);
    const changePage = (offset) => {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    const previousPage = () => { changePage(-1); }
    const nextPage = () => { changePage(+1); }

    return (
    <>
    <div className='resumeContainer'>
    <div>
     <a className='downloadResume' href={MyResume} download>Download Resume <GrDownload/></a>
    <Document
        file={MyResume}
        onLoadSuccess={({ numPages }) => {
            setNumPages(numPages);
            setRenderNavButtons(true);
          }}
        >
        <Page pageNumber={pageNumber} className="page"/>
    </Document>
    </div>
    {renderNavButtons &&
        <div className="buttonc">
          <Button
            disabled={pageNumber <= 1}
            onClick={previousPage}
            variant='primary'
          >
            Previous Page
          </Button>
          {"  "}
          <Button
            disabled={pageNumber === numPages}
            onClick={nextPage}
            variant='primary'
          >
            Next Page
          </Button>
        </div>}
   </div>
   <Footer direction="column" color="green" copyright="© 2023 - Iradukunda Cynthia. All rights reserved. Kigali, Rwanda" gap="10%" />
   </>
    )
}

export default CV;