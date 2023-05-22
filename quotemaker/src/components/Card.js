import React from 'react'
import styled, { keyframes } from "styled-components";

const flickerAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

const NeonText = styled.h1`
  color: #fff;
  font-size: 20px;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de,
    0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
  animation: ${flickerAnimation} 1.5s infinite alternate;
`;
const neonAnimation = keyframes`
  0% {
    color: red;
    text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red;
  }
  50% {
    color: yellow;
    text-shadow: 0 0 10px yellow, 0 0 20px yellow, 0 0 30px yellow;
  }
  100% {
    color: red;
    text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red;
  }
`;

const NeonText2 = styled.h1`
  font-size: 20px;
  animation: ${neonAnimation} 2s infinite;
`;

export default function Card({ quote, author, update,color }) {
    const tweet=`https://twitter.com/intent/tweet?text=${quote}`
    return (
        <div>
            <div className="card w-50" style={{ height: "18rem", margin: "auto" }} >
                <div className="card-header" style={{backgroundColor:"black",border:"2px solid white"}}>
                   <NeonText2>Quote of the Day!</NeonText2> 
                </div>
                <div className="card-body" style={{backgroundColor:"black",border:"2px solid white"}}>
                    <blockquote className="blockquote mb-0">
                        <p style={{"fontFamily": "'Pangolin', cursive"}}><NeonText2>"{quote}</NeonText2></p>
                        <footer className="blockquote-footer" style={{"fontFamily": "'Pangolin', cursive",color: color}}><cite title="Source Title"><NeonText>{author}</NeonText></cite></footer>
                    </blockquote>
                    <a className="twitter-share-button"
                        href={tweet}
                        data-size="large">
                        <i className="fab fa-twitter"></i>

                    </a>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button className="btn btn-primary btn-sm me-md-2" type="button" onClick={update}>Generate</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
