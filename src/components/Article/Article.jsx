import React from "react";

import './styles.css';

class Article extends React.Component {
render(){
    return (
       <article id="article">
        <img src={this.props.tumbanail} alt=""width={300} />
        <div className="article-infos">
            <h2>{this.props.title}</h2>
            <h3>{this.props.provider}</h3>
            <p>{this.props.description}</p>


        </div>
       </article> 
    )
}
}
export default Article