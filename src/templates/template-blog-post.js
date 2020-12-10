import React from 'react'
export default ({ pageContext: { node } }) => {
    return (
        <React.Fragment>
            <h1>TEMPLATE BLOG POST</h1>
            <pre>
                {JSON.stringify(node, null, 4)}
            </pre>
        </React.Fragment>
    )
}