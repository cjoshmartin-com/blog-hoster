
import React from 'react';

import marked from "marked"
// import moment from "moment";
import DocumentTitle from 'react-document-title'
import DisqusThread from './DisqusThread.js'
const BlogPost =(props)=> {
    const {
        post,
        id
    } = props;

    if(post){
        return (

            <DocumentTitle title={`Josh Martin - Blog / ${post[id].title}`} >
                <div>
                    <div>
                        <h1 style={{ fontSize: '4.5rem', marginBottom: 0 }}>{post[id].title}</h1>
                    </div>
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: marked(post[id].body) }} />
                    </div>
                    <DisqusThread id={id} title={post[id].title} path={`blog/#/${id}`}/>
                </ div>
            </DocumentTitle>
        )
    }
// eslint-disable-next-line
    return (<div>Loading blog post...<span role="img">🤔</span></div>)
}


export default BlogPost
