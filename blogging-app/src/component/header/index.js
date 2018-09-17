import React from 'react';
import FormDialog from '../dialog';
import './index.css';

class Header extends React.Component{
    state(){
        this.dialog = React.createRef();
    }

    render(){
        return(
            <div className="header-container border-style">
            <div className="header-width border-style">
                <header className="header-style"><h3>Blogging web app </h3></header>
            </div>
            <div className="div-style border-style">
                <FormDialog btnText = "Add Post" parentHFunct = {this.props.parentHFunc}/>
            </div>
             
        </div>
        )
    }
}
export default Header;
