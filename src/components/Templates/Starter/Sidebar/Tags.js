import React from 'react';
import {Link} from 'gatsby';

const Tags = ({tags}) => {
    return (
        <div>
            <div className="bg-white pt-4 pl-4 pb-2 rounded border border-gray-400">
            <h2>Tags</h2>
            {
                tags.map( tag => {
                    return (
                    <p className="mb-1 text-gray-600"><Link to={`/tags/${tag.tag}`}>#{tag.tag}</Link></p>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Tags;