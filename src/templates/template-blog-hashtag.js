import React from 'react'
export default ({ pageContext: { _edges } }) => {
    console.log("_edges from the template: ", _edges)
    return (
        <React.Fragment>
            <h1>TEMPLATE BLOG HASHTAG</h1>
            <pre>
                {_edges.map(node => {
                    return JSON.stringify(node, null, 4)
                })}
            </pre>
        </React.Fragment>
    )
}