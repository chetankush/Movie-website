import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";


const Header = (props) => {


  const diffToast = () => {
    alert("sorry! just not available now");
  }
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);


  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        Navigate("/home");
      }
    });
  }, [userName]);
  const auth = getAuth();
  const handleAuth = (user) => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          setUser(result.user);
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }
    else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          Navigate(-2);
        })
        .catch((error) => alert(error.message))
    }
  }
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      })
    )
  }
  return (
    <Nav>
      <Logo>
        <a href="/home">
          MANIFOLD
        </a>
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth} > Login </Login>
      ) : (<>

        <NavMenu>
          <a href="/home">
            <img src="/images/home-icon.svg" alt="HOME" />
            <span>HOME</span>
          </a>
          <a >
          <button onClick={diffToast}>
            <img src="/images/search-icon.svg" alt="SEARCH" />
            <span>SEARCH</span>
            </button>
          </a>
          <a>   
          <button onClick={diffToast}>
            <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
            <span>WATCHLIST</span>
          </button>
          </a>
      
        </NavMenu>

        

        <AboutMe>

        <a>
         Beta
        </a>
        </AboutMe>
        <SignOut>
          <UserImg src={userPhoto} alt={userName} />
          <DropDown> 
            <UserName>
              see ya -&nbsp;
              {userName}
            </UserName>
            <span onClick={handleAuth}>Sign out</span>
          </DropDown>
        </SignOut>
      </>
      )}
    </Nav>
  );
};



const Nav = styled.nav`
position:fixed;
top:0;
left:0;
right:0;
height:60px;

display:flex;
justify-content: space-between;
align-items: center;
padding:0 23px;
letter-spacing:2px;
z-index:3;


backdrop-filter: blur(25px) saturate(180%);
-webkit-backdrop-filter: blur(25px) saturate(180%);
background-color: rgba(0, 0, 0, 0.80);




// @media(max-width:768px){
//   padding:0 13px;
//   height:40px;
// }
`


const Logo = styled.p`
padding: 0;
width: 80px;
max-height: 70px;
font-size: 18px;
font-weight: bold;
display: inline-block;
@media(max-width:768px){
   font-size:14px;
  }
`

const NavMenu = styled.div`
align-items:center;
display:flex;
flex-flow:row nowrap;
height:100%;
justify-content:flex-end;
margin:0px;
padding:0px;
position:relative;
margin-right:auto;
margin-left:50px;

a{



    button{
      background-color:transparent;
      color: transparent;
      border:none;
      display:flex;
      justify-content: center;
      align-items:center;
      cursor: pointer;
    }
    display: flex;
    align-items: center;
    padding: 0 12px;
    
    img{
        height: 20px;
        min-width: 20px;
        width: 20px; 
    }

    span {
        color: rgb(249, 249, 249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;

      
        &:before {
          background-color: rgb(249, 249, 249);
          border-radius: 0px 0px 4px 4px;
          bottom: -6px;
          content: "";
          height: 2px;
          left: 0px;
          opacity: 0;
          position: absolute;
          right: 0px;
          transform-origin: left center;
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          visibility: hidden;
          width: auto;
        }
        

        
 
  
      }
  
      &:hover {
        span:before {
          transform: scaleX(1);
          visibility: visible;
          opacity: 1 !important;
        }
      }
    }





@media(max-width:768px){
    display:none;
}
`

const AboutMe = styled.div`
display:flex;
justify-content: center;
text-align: center;
align-items:center;
font-size: 12px;
margin-right: 10px;
@media(max-width:768px){
  display:none;
}
`;


const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  cursor:pointer;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  
  @media(max-width:768px){
    padding: 5px 10px;
    font-size: 12px;
}


  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 38px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 300px;
  display:none;

`;
const UserName = styled.p`
font-size:14px;
margin-top:-.2px;
color:f9f9f9;
padding-bottom:10px;
border-bottom: 1px solid grey;
`;
const SignOut = styled.div`
  position: relative;
  height: 38px;
  width: 38px;
  font-size: 14px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition-duration:1s;

  @media(max-width:768px){
    height: 35px;
    width: 35px;
    font-size: 12px;
}



  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      display: grid;
    }
  }


  span{
    &:hover {
      color:red;
      transition-duration: .2s;
    }
  }



`;



export default Header