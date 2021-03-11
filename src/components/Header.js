import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header(){


    return (
        //replace div with container
        //two sections: search and username
        <Container>
            <Main>
                <AccessTimeIcon/>
                <HelpOutlineIcon/>
                
            </Main>
            {/* <UserConatiner>

            </UserConatiner> */}
            inside Header component
        </Container>

    )


}

export default Header

const Container = styled.div`

`

const Main = styled.div`


`