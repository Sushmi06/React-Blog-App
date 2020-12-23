import {Component} from 'react';
import ReactJson from './../reactPage.json';
import ReactPage from './ReactPageComponents/ReactPage';
import ReactFooterJson from './../footer.json';
import ReactFooter from './ReactPageComponents/ReactFooter';
import './../css/react.css';

class ReactPageComponent extends Component{
    state = {
        reactPageDetails : ReactJson,
        footerDetails : ReactFooterJson
    }

    render(){
        return(
            <>
            <div className = "react-page-container">
                <h2>5 ways to animate a React app</h2>
                <ReactPage pageDetails = {this.state.reactPageDetails}/>
            </div>
            <div>
                <h2>More the Siren</h2>
                <hr/>
                <ReactFooter footerDetails = {this.state.footerDetails} />
            </div>
            </>
        )
    }
}

export default ReactPageComponent;