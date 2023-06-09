import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
const ImgSlider =()=>{

    let settings = {
        autoplay:true,
        dots:true,
        infinite:true,
        speed:300,
        slidesToShow:1,
        slidesToScroll:1
    };
    return (
        <Carousel {...settings}>
      

          <Wrap>
            <a>
              <img src="/images/recten.jpg" alt="" />
            </a>
          </Wrap>
          <Wrap>
            <a>
              <img src="/images/recele.jpg" alt="" />
            </a>
          </Wrap>
          <Wrap>
            <a>
              <img src="/images/recone.jpg" alt="" />
            </a>
          </Wrap>
       
          <Wrap>
            <a>
              <img src="/images/recthree.jpg" alt="" />
            </a>
          </Wrap>
           <Wrap>
            <a>
              <img src="/images/recfour.jpg" alt="" />
            </a>
          </Wrap>
      
          <Wrap>
            <a>
              <img src="/images/recsix.jpg" alt="" />
            </a>
          </Wrap>
       
          <Wrap>
            <a>
              <img src="/images/recsev.jpg" alt="" />
            </a>
          </Wrap>
       
    
          <Wrap>
            <a>
              <img src="/images/receig.jpg" alt="" />
            </a>
          </Wrap>
       
    
          <Wrap>
            <a>
              <img src="/images/recnine.jpg" alt="" />
            </a>
          </Wrap>
       
    
       
        </Carousel>
      );
    };


const Carousel = styled(Slider)`

margin-top: 20px;

& > button {
    opacity:0;
    height:100%;
    width:6vw;
    z-index:1;

    &:hover {
        opacity:1;
        transition:opacity 0.2s ease 0s;
    }
}
ul li button {
    &:before{
        font-size:10pz;
        color:rgb(150, 150, 171);
    }
}
li.slick-active button:before{
    color:white;
}

.slick-list{
    overflow:initial;
}

.slick-prev{
    left:-55px;
}

.slick-next{
    right:-55px;
}


`
const Wrap = styled.div`
  border-radius: 8px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
      @media(max-width:768px){
        width:100%;
        object-fit:cover;
        height: 170px;
        
      }
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;
export default ImgSlider