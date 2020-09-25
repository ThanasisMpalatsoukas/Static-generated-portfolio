import React from 'react';
import {Link} from 'gatsby'

export const Pagination = ({numPages, currentPage}) => {
    let content = [];

    // Last page
    if (currentPage !== 1) {
        const lastLink = currentPage === 2 ? `/` : `/blog/${currentPage-2}`;
        content.push(
            <div>
                <p className="text-blue-500"><Link to={lastLink}>last page</Link></p>
            </div>
        )
    } else {
        content.push(<div></div>)
    }

    // Middle page
    content.push(<div className="text-center">page {currentPage}</div>);

    // Last page
    if (currentPage < numPages) {
        content.push(
            <div>
                <p className="text-right text-blue-500"><Link to={`/blog/${parseInt(currentPage)}`}>next page</Link></p>
            </div>
        ) 
    }
    return (
        <div className="grid grid-cols-3 mt-3">
            {
                content.map(item => {
                    return item
                })
            }
        </div>
    )
}

