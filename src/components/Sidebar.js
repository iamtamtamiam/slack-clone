import React from 'react'
import styled from 'styled-components'

function Sidebar(){
    //3 sections: workspace, threads, channels

    return (
      

        <Container>
            inside sidebar component
            <WorkspaceContainer>
                <Name>
                    IamTam
                </Name>
                <NewMessage>

                </NewMessage>

            </WorkspaceContainer>

        </Container>

    )


}

export default Sidebar

const Container = styled.div`
    background: #3F0E40
`

const WorkspaceContainer = styled.div`
    color:white; 
    height: 64px;
`

const Name = styled.div`
   
`

const NewMessage = styled.div`
    
`