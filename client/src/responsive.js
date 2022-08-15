import {css} from 'styled-components';

export const mobile = (props)=>{
    return css`
    ////// Tablets and under
    @media  screen and (max-width:500px) {
        ${props}
    }
    `;
}
export const tablet = (props)=>{
    return css`
    ////// Tablets and under
    @media  only screen and (max-width:765px) and (min-width:501px)  
     {
        ${props}
    }
    `;
}