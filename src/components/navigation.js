import React, { useState } from 'react'
import { Link } from 'gatsby'


import AppBar from '@material-ui/core/AppBar';

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


const Navigation = () => {
    const [value, setValue] = useState(0)
    return (
        <React.Fragment>
            <h3>Navigation component</h3>
            

                <AppBar positios="static">
                    <Tabs
                        value={value}

                    >
                        
                        <LinkTab
                            to="/home"
                            label="Home"
                        />
                        <LinkTab
                            to="/shop"
                            label="Shop"
                        />
                         
                    </Tabs>
                </AppBar>

        </React.Fragment>
    )
}

export default Navigation