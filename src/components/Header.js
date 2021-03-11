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
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="search..."></input>
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon/>
                
            </Main>
            <UserConatiner>
                <Name>Tam</Name>
                <UserImage>
                    <img src="https://i.imgur.com/6VBx3io.png"></img>
                </UserImage>
            </UserConatiner>
            
        </Container>

    )


}

export default Header

const Container = styled.div`
    background: #350d36;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 10;
    box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);

`
//space between pushes items as far apart as possible

const Main = styled.div`
    display: flex;
    margin-right: 16px;
    margin-left: 16px;
`
//flex allows us to order things ... make everything align horizontally

const SearchContainer = styled.div`
    min-width: 400px;
    margin-left: 16px;
    margin-right: 16px;
    
    
`
//margin (outside of search element)
const Search = styled.div`
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    width:100%;
    border-radius: 6px;

    input {
        background-color: transparent;
        border: none;
        padding-left: 8px;
        padding-right: 8px;
        color: white;
        padding-top: 4px;
        padding-bottom: 4px;
    }

    input:focus{
        outline: none;
    }

`
//width: 100%of the search container

const UserConatiner = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
    position: absolute;
    right: 0;
`
//padding is amount of space within element, margin is space outside element
//take the user container out of context and made it absolute to the container
    //will always be right no matter what

const Name = styled.div`
    padding-right:16px; 
`

const UserImage = styled.div`
    width: 28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 3px;

    img{
        width:100%;
    }
`