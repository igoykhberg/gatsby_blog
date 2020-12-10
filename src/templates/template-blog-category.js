import React from 'react'
export default ({ pageContext: { _edges } }) => {
    return (
        <React.Fragment>
            <h1>TEMPLATE BLOG CATEGORY</h1>
            <pre>
                {_edges.map(node => {
                    return JSON.stringify(node, null, 4)
                })}
            </pre>
        </React.Fragment>
    )
}