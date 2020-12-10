import React from 'react'


import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



import StoryNavigation from '../components/StoryNavigation'



export default ({ pageContext: { node, pagePath } }) => {

    const { frontmatter, html } = node
    const { parts, slug, type } = frontmatter
    return (
        <React.Fragment>
            {/* <pre>
                <hr />
                <hr />
                <h3>node ----> </h3>
                {JSON.stringify(node, null, 4)}
                <hr />
            </pre>
            <hr /> */}





            <CssBaseline />
            <Container maxWidth="md">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', padding: '15px', border: '1px solid green' }} >
                
                
                <Typography component="div" className="storyHtml" style={{ border: '1px solid green', padding: '15px' }} >

                    <section dangerouslySetInnerHTML={{ __html: html }} />
                </Typography>


                </Typography>
            </Container>




   


        </React.Fragment>
    )

}


