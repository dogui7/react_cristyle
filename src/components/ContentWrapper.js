import React from 'react';
import TopBar from './TopBar';
import Main from './Main';
import Users from './Users';
import Footer from './Footer';
function ContentWrapper(){
    return (
        <React.Fragment>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <Main />
                    <Users />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;