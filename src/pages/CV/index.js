import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import Footer from '../../components/SharedComponents/Footer';
import "./index.css"
const CV = () => {

    return (
    <div >
    <Document file="MyResume.pdf" >
        <Page pageNumber={1} className="page"/>
    </Document>
   <Footer direction="column" color="green" copyright="© 2023 - Iradukunda Cynthia. All rights reserved. Kigali, Rwanda" gap="10%" />
   </div>

    )
}

export default CV;