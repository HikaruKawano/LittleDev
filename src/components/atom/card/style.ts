import styled from 'styled-components';
import Colors from '../../color/colors';

interface props {
    width?: string;
    height?: string;
    flexDirection?: string;
    align?: string;
    margin?: string;
    justify?: string;

    resWidth?: string;
    resHeight?: string;
    resFlexDirection?: string;
    resMargin?: string;
    resPadding?: string;
    resAlign?: string;
}

export const CardStyle = styled.div<props>`
    display: flex;
    align-items:${(props)=>props.align || 'center'} ;
    justify-content:${(props) => props.justify || 'center'} ;
    width: ${(props) => props.width || '80%'} ;
    height:${(props) => props.height || '80%'};
    background-color: ${Colors.background2};
    border-radius: 15px;
    padding-right: 45px;
    padding-left: 55px;
    flex-direction: ${(props) => props.flexDirection || 'row'};
    margin: ${(props) => props.margin};

    @media only screen and (max-width: 990px) {
    display: flex;
    flex-direction:${(props) => props.resFlexDirection || 'column'} ;
    align-items:${(props) => props.resAlign || 'center'} ;
    justify-content: center;
    height:${(props) => props.resHeight || '90%'} ;
    padding: ${(props) => props.resPadding || '0'};
    width: ${(props) => props.resWidth};
    margin: ${(props) => props.resMargin};
    .btnDonwload{
        width: 100%;
    }

    &#Login{
        background-color: antiquewhite;
    }
        
    }
    
`;
