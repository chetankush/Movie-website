import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";
import { doc, getDoc } from "firebase/firestore";
const Details = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  useEffect(() => {
    const q = doc(db, 'movie', id);
    const moviePromise = getDoc(q);
    moviePromise.then((doc) => {
      if (doc.exists()) {
        setDetailData(doc.data());

      } else {
        console.log(' no movie Movie')
      }
    });
  }, [id]);

  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>

      <ImageTitle>
        <img src={detailData.titleImg} alt={detailData.title} />
      </ImageTitle>

      <ContentMeta>
        <Control>
          <a href={detailData.movieLink} target="_blank">
            <Player>
              <img src="/images/play-icon-black.png" alt="" />
              <span>Download</span>
            </Player>
          </a>
          <a href={detailData.trailerLink} target="_blank">
            <Trailer>
              <img src="/images/play-icon-white.png" alt="" />
              <span
                href="{detailData.trailerLink}">Trailer</span>
            </Trailer>
          </a>
          {/* <AddList>
            <img src="/images/watchlist-icon.svg" alt="" />
          </AddList>
          <GroupWatch>
            <img src="/images/group-icon.png" alt="" />
          </GroupWatch> */}
        </Control>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  )
}


const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
const ImageTitle = styled.div`
display:flex;
align-items:flex-end;
-webkit-box-pack:start;
justify-content:flex-start;
margin:0px auto;

height:32vw;
min-height:150px;
padding-bottom:24px;
width: 100%;
@media(max-width:768px){
  margin-top:260px;
}
img{
  max-width:600px;
  min-width:200px;
  width:35vw;
}
`;
const ContentMeta = styled.div`
max-width:900px;
`;

const Control = styled.div`
align-items:center;
display:flex;
flex-flow:row nowrap;
// padding: 0px 24px;
height:56px;
`;

const Player = styled.div`
font-size:14px;
margin:0px 22px 0px 0px;
padding:0px 24px;
height:56px;
border-radius: 4px;
color:black;
cursor:pointer;
display:flex;
letter-spacing:1.8px;
justify-content:center;
align-items: center;
text-align:center;
border:1px solid grey;
text-transform:uppercase;
background:rgba(255,255,255,0.8);
img{
  width:32px;
}
&:hover {
  background:rgb(249, 249, 249);
}

@media(max-width:768px){
  height:45px;
  padding: 0px 22px;
  font-size:12px;
  
  margin:0px 10px 0px 0px; 

  img{
    width:35px;
  }
}
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    background:rgb(20, 20, 20);
  }
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  img{
    width:25px;
    height:25px;
  }
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: rgba(0, 0, 0, 1);
  border: 2px solid white;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  margin-top: 20px;
  min-height: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;




export default Details