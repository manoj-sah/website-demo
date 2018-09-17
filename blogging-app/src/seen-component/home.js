import React from 'react';
import Header from '../component/header';
import PostBlock from '../component/post-block';
import './style.css';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newPostList : []
    }
  }
  getPostData = (postData) =>{
    const temp = [...this.state.newPostList]
    temp.push(postData)
    this.setState ({
      newPostList: temp
    })
    
  }


  render() {
    return (
      <div className="body-style">
          <Header parentHFunc = {this.getPostData} />
          <PostBlock postDataList = {this.state.newPostList}/>
      </div>
    );
  }
}

export default Home;
