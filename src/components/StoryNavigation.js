import React, { useState } from 'react'
import { Link } from 'gatsby'


import AppBar from '@material-ui/core/AppBar';

import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';


import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


const LinkTab = (props) => {
    return (
            <Tab 
                component={Link}
                {...props}
            />
    )
}


const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      flexGrow: 1,
    },
  });


const StoryNavigation = ({ ...props }) => {


    const arrayLinkTabs = []

    // arrayLinkTabs.push(
    //     <LinkTab
    //         to={ `${props.pagePath}` }
    //         label={"Start"}
    //     />
    // )

    for ( let i = 1; i <= props.parts ; i++ ) {
        arrayLinkTabs.push(
            <LinkTab
                to={ `${props.pagePath}/part${i}` }
                label={i}
            />
        )
    }

    // arrayLinkTabs.push(
    //     <LinkTab
    //         to={ `${props.pagePath}/part${props.parts}` }
    //         label={"End"}
    //     />
    // )


    const classes = useStyles();


    return (
        <React.Fragment>
                {/* <hr/>
                <h3>Navigation component</h3>
                <pre>
                    {JSON.stringify(props, null, 4)}
                </pre> */}



                <hr/>
                <LinkTab
                     to={ `${props.pagePath}` }
                    label={"Start"}
                />
                
                <Tabs
                    value={0}
                    centered
                    variant="scrollable"
                    scrollButtons="on"
                >
                    {arrayLinkTabs}
                </Tabs>

                <LinkTab
                    to={ `${props.pagePath}/part${props.parts}` }
                    label={"End"}
                />











                <MobileStepper
                    variant="dots"
                    steps={6}
                    position="static"
                    activeStep={0}
                    className={classes.root}
                    nextButton={
                        <LinkTab
                            to={ `${props.pagePath}/part${props.parts}` }
                            label={"Next"}
                        />
                    }
                    backButton={
                        <LinkTab
                            to={ `${props.pagePath}` }
                            label={"Back"}
                        />
                    }
                    />







        </React.Fragment>
    )
}

export default StoryNavigation
