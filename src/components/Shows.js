import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectShow } from "../features/movie/movieSlice";

const Shows = (props) => {
  const movies = useSelector(selectShow);
  console.log(movies, ":🛢️");

  return (
    <Container id="shows">
      <h4>Shows of Mysteries and Universe</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {movie.id}
              <Link to={`/details/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title}/>
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
padding: 0 0 26px;

`;

const Content = styled.div`
display:grid;
grid-gap: 12px;
gap: 12px;
grid-template-columns: repeat(6, minmax(0, 1fr));

@media (max-width:768px){
    grid-template-columns: repeat(2,minmax(0, 1fr));
}`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 5%) 0px 26px 30px -10px,
    rgb(0 0 0 / 5%) 5px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 0.2px solid rgba(5, 5, 5, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 40%) 0px 40px 58px -16px,
      rgb(0 0 0 / 32%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.5);
  }
`;

export default Shows;
