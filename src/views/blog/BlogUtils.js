import React from 'react';
import BlogLink from '../../components/BlogLink';
import removeMd from 'remove-markdown'

function posts(props = { title: ""}){
    return Object.keys(props).map((key,i) =>{
        const data = props[key];
        return(
            <BlogLink
                name={data.title}
                key={i}
                discription={toTruncate(removeMd(data.body))}
                link={`#/blog/${key}`}
                date={ (data.date_modified === 'N/A') ? key : data.date_modified }
            />
        )
    })
}
function toTruncate(str ="")
{
    const sizeToTrun = 60;
    if (str.length > sizeToTrun)
        return str.substr(0,sizeToTrun) + "...";

    return str;

}


export {
    posts
}
