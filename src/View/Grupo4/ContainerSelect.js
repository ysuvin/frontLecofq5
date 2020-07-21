import React, {Fragment} from 'react';
import TemporaryDrawer from './Navbar/Navbar';
import SelectUser from '../../View/Grupo4/SelectUser'

const ContainerSelect = () => {


    return(
        <Fragment>

            <div className="navbar">
                <TemporaryDrawer />
            </div>
            <SelectUser/>

        </Fragment>
        
    )
}

export default ContainerSelect;