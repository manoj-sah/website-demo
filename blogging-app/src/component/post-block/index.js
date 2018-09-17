import React from 'react';
import './index.css';

class PostBlock extends React.Component{

    render(){
        return(
            <div className="post-container">
                {this.props.postDataList.map(item => 
                    <div className="post-block-style">
                        <h3><lable>Title : </lable>{item.title}</h3>
                        <h5><label>Author Name : </label>{item.authorName}</h5>
                        <p><lable>Article : </lable>{item.description}</p>
                    </div>
                )}
            </div>
        )
    }
}
export default PostBlock;
