import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../assests/Themes/Themes'
import product from '../../assests/images/product.png'
import rewards from '../../assests/images/rewards.png'
import search from '../../assests/images/search.png'
import tickets from '../../assests/images/tickets.png'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
    return (
        <Wrapper>
            <MainGrid>
                <Purchase>
                    <Img src={product} />
                    <TextMd>
                        Purchase
                    </TextMd>
                </Purchase>
                <Message>
                    <TextMd>
                        Message Box
                    </TextMd>
                </Message>
                <Tickets onClick={ () => navigate('/login')}>
                    <Img src={tickets} />
                    <TextMd>Tickets</TextMd>
                </Tickets>
                <Profile>
                    <TextMd>
                        Profile
                    </TextMd>
                </Profile>
                <Rewards >
                    <Img src={rewards} />
                    <TextMd>
                        My Rewards
                    </TextMd>
                </Rewards>
                <History >
                    <TextMd>
                        Purchase History
                    </TextMd>
                </History>
                <Search >
                    <Img src={search} />
                    <TextMd>Search</TextMd>
                </Search>
                <Product >
                    <Img src={product} />
                    <TextMd>Product User Guide</TextMd>
                    </Product>
            </MainGrid>
        </Wrapper>
    )
}

export default Home

const TextMd = styled.h4`
    font-size:20px;
    color:${COLORS.white};
    position: relative;
    font-weight:600;
    cursor: default;
`

const Img = styled.img`
    height:100%;
    width:100%;
    object-fit:cover;
    display:block;
    position:absolute;
    top:0;
    left:0;
`

const Wrapper = styled.div`
    height:100%;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 3rem 1rem;
`
const MainGrid = styled.div`
    display:grid;
    grid-template-areas:
    "a a b"
    "a a b"
    "c d e"
    "c d f"
    "g h f";
    gap:1rem;
    grid-template-columns: repeat(3 , minmax(250px, 394px));
    grid-template-rows: repeat(5 , 184px);
    @media (max-width:1080px) {
        grid-template-rows: repeat(5 ,140px);
    }
    @media (max-width:820px) {
        width:100%;
        grid-template-areas:
                    "a b"
                    "c d"
                    "e h"
                    "g f";
        grid-template-rows: repeat(4 ,200px);
        grid-template-columns: repeat(2 , 1fr);
    }
    @media (max-width:680px) {
        grid-template-areas:
                    "a"
                    "b"
                    "c"
                    "d"
                    "e"
                    "h"
                    "g"
                    "f";
        grid-template-rows: repeat(8 ,200px);
        grid-template-columns: repeat(1 , 1fr);
    }
    >div>img{
        transition:all .2s  ease;
    }
    >div:hover img{
        transform:scale(1.02);
    }
    >div{
        overflow:hidden;
        cursor: pointer;
    }
`


const Purchase = styled.div`
    grid-area:a;
    position: relative;
    padding:2rem;
    display:flex;
    align-items:flex-end;
`
const Message = styled.div`
    background: ${COLORS.messagebg};
    position: relative;
    grid-area:b;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (max-width:820px) {
        padding:2rem;
        display:flex;
        align-items:flex-end;
        justify-content:flex-start;
    }
`
const Tickets = styled.div`
    grid-area:c;
    position: relative;
    padding:2rem;
    display:flex;
    align-items:flex-end;
`
const Profile = styled.div`
   background: ${COLORS.profilebg};
    grid-area:d;
    position: relative;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (max-width:820px) {
        padding:2rem;
        display:flex;
        align-items:flex-end;
        justify-content:flex-start;
    }
`
const Rewards = styled.div`
    grid-area:e;
    position: relative;
    padding:2rem;
    display:flex;
    align-items:flex-end;
`
const History = styled.div`
    background: ${COLORS.purchasebg};
    grid-area:g;
    position: relative;
    display:flex;
    padding-left:3rem;
    align-items:center;
    @media (max-width:820px) {
        padding:2rem;
        display:flex;
        align-items:flex-end;
        justify-content:flex-start;
    }
`
const Search = styled.div`
    grid-area:h;
    position: relative;
    padding:2rem;
    display:flex;
    align-items:flex-end;
`
const Product = styled.div`
    grid-area:f;
    position: relative;
    padding:2rem;
    display:flex;
    align-items:flex-end;
`