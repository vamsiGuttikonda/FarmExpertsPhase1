import React from 'react';
import { RiStarSFill } from 'react-icons/ri';
import { RiStarHalfFill } from "react-icons/ri";

const RatingIcon = ({ratingValue}) => {
   const style={ color: '#fff700', fontSize: '1.5rem', marginLeft: '1px', padding: '0px' }
   const fullStars=Math.floor(ratingValue) //to get the integer part so we can seperate
    const halfStars=ratingValue%1!==0;
    const stars=[];
    {
        for(let i =0;i<fullStars;i++){
            stars.push(
                <RiStarSFill key={i} style={style}/>
            )
        }
        if(halfStars){
            stars.push(<RiStarHalfFill key={0.5} style={{...style,fontSize:'1.2rem'}}/>)
        }
    }
  return <>{stars}</>;
};

export default RatingIcon;
