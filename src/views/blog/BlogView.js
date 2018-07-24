import React from 'react';
import { Col,Row } from 'react-bootstrap';
import DocumentTitle from 'react-document-title'

import BlogPost from '../../components/BlogPost';
import {posts} from "./BlogUtils";
import PropTypes from 'prop-types';
import { Route, Switch,Redirect } from 'react-router-dom'

const BlogView = (props) => {
    return (
        <DocumentTitle title={props.blogTitle || ""} >
            <div>
                <Row>
                    <Col lg={3} md={3} sm={3} xsOffset={1}>
                        <h1 style={{display:'flex'}}>Blog</h1>

                        {posts(props.post)}

                    </Col>
                    <Col lg={7} md={7} sm={6} xsOffset={0} lgOffset={0}>
                             <BlogPost {...props} id={props.id || 1515920692705}/>
                    </Col>
                </Row>

            </div>
        </DocumentTitle>
    );
}

BlogView.propTypes = {
  blogTitle: PropTypes.string
}

export default BlogView
