import React, { useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import styled from 'styled-components';
const Star = ({stars, reviews}) => {
    if (stars < 5 && stars > 4) { // means 4.1 to 4.9
        return (<Wrapper>
            <FaStar className='single-star' size="30px" />
            <FaStar className='single-star' size="30px" />
            <FaStar className='single-star' size="30px" />
            <FaStar className='single-star' size="30px" />
            <FaStarHalfAlt className='single-star' size="30px" />
        </Wrapper>)
    } else if (stars == 5) {
        return (<Wrapper>
            <FaStar className='single-star' size="30px" />
            <FaStar className='single-star' size="30px" />
            <FaStar className='single-star' size="30px" />
            <FaStar className='single-star' size="30px" />
            <FaStar className='single-star' size="30px" />
        </Wrapper>)
    } else if (stars < 4 && stars > 3) { // means 3.1 to 3.9
        return (<Wrapper>
            <FaStar className='single-star' size="30px" />
            <FaStar className='single-star' size="30px" />
            <FaStar className='single-star' size="30px" />
            <FaStarHalfAlt className='single-star' size="30px" />
            <FaRegStar className='single-star' size="30px" />
        </Wrapper>)
    } else if (stars == 4) {
        return (<Wrapper>
            <FaStar className='single-star' size="30px" />
            <FaStar className='single-star' size="30px" />
            <FaStar className='single-star' size="30px" />
            <FaStar className='single-star' size="30px" />
            <FaRegStar className='single-star' size="30px" />
        </Wrapper>)
    } else if (stars < 3 && stars > 2) { // means 2.1 to 2.9
        return (<Wrapper>
            <FaStar className='single-star' size="30px" />
            <FaStar className='single-star' size="30px" />
            <FaStarHalfAlt className='single-star' size="30px" />
            <FaRegStar className='single-star' size="30px" />
            <FaRegStar className='single-star' size="30px" />
        </Wrapper>)
    } else if (stars == 3) {
        return (<Wrapper>
            <FaStar className='single-star' size="30px" />
            <FaStar className='single-star' size="30px" />
            <FaStar className='single-star' size="30px" />
            <FaRegStar className='single-star' size="30px" />
            <FaRegStar className='single-star' size="30px" />
        </Wrapper>)
    } else if (stars < 2 && stars > 1) { // means 1.1 to 1.9
        return (<Wrapper>
            <FaStar className='single-star' size="30px" />
            <FaStarHalfAlt className='single-star' size="30px" />
            <FaRegStar className='single-star' size="30px" />
            <FaRegStar className='single-star' size="30px" />
            <FaRegStar className='single-star' size="30px" />
        </Wrapper>)
    } else if (stars == 2) {
        return (<Wrapper>
            <FaStar className='single-star' size="30px" />
            <FaStar className='single-star' size="30px" />
            <FaRegStar className='single-star' size="30px" />
            <FaRegStar className='single-star' size="30px" />
            <FaRegStar className='single-star' size="30px" />
        </Wrapper>)
    } else if (stars < 1 && stars > 0) { // means 0.1 to 0.9
        return (<Wrapper>
            <FaStarHalfAlt className='single-star' size="30px" />
            <FaRegStar className='single-star' size="30px" />
            <FaRegStar className='single-star' size="30px" />
            <FaRegStar className='single-star' size="30px" />
            <FaRegStar className='single-star' size="30px" />
        </Wrapper>)
    } else if (stars == 1) {
        return (<Wrapper>
            <FaStar className='single-star' size="30px" />
            <FaRegStar className='single-star' size="30px" />
            <FaRegStar className='single-star' size="30px" />
            <FaRegStar className='single-star' size="30px" />
            <FaRegStar className='single-star' size="30px" />
        </Wrapper>)
    }
}
const Wrapper = styled.div`
    .single-star{
        color: orange;
    }
`;

export default Star;
