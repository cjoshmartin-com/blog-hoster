import React from 'react';
import { Col,Row } from 'react-bootstrap';
import DocumentTitle from 'react-document-title'

import BlogPost from '../../components/BlogPost';
import {posts} from "./BlogUtils";
import PropTypes from 'prop-types';
import { Route, Switch,Redirect } from 'react-router-dom'

const BlogView = (props) => {

    const contentArea = (addedProps, id=1515920692705) => (<BlogPost {...addedProps} id={id}/>);
    return (
        <DocumentTitle title={props.blogTitle || ""} >
            <div>
                <Row>
                    <Col lg={3} md={3} sm={3} xsOffset={1}>
                        <h1 style={{display:'flex'}}>Blog</h1>

                        {posts(props.post)}

                    </Col>
                    <Col lg={7} md={7} sm={6} xsOffset={0} lgOffset={0}>
                        <Switch>
			    <Route
				exact path="/blog"
				render={
				    () => (
					<Redirect
					    to={`/blog/${Object.keys(props.post)[0]}`}
					/>
				    )}
				/>
                            <Route path="/blog/:id"  render={(url) => contentArea(props,url.match.params.id)}/>
                            <Route render={() => contentArea(props)} />
                         </Switch>
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
