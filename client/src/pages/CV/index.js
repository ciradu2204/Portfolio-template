import { GrDownload } from 'react-icons/gr';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import Footer from '../../components/Shared/Footer';
import "./index.css"
import resume from "../../img/Cynthia-Iradukunda-Resume.pdf"
const CV = () => {

    return (
    <>
    <div className='resumeContainer'>
    <a className='downloadResume' href={resume} download>Download Resume <GrDownload/></a>
    <Document file="Cynthia-Iradukunda-Resume.pdf" >
        <Page pageNumber={1} className="page"/>
    </Document>
   </div>
   <Footer direction="column" color="green" copyright="© 2023 - Iradukunda Cynthia. All rights reserved. Kigali, Rwanda" gap="10%" />
   </>
    )
}

export default CV;