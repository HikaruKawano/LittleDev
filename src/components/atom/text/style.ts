import styled from 'styled-components';
import Colors from '../../color/colors';

interface props {
    color?: string;
    padding?: string;
    fontSize?: string;
    margin?: string;
    display?: string;
    textAlign?: string;

    resMargin?: string;
}

export const TextStyle = styled.p<props>`
    color: ${(props) => props.color || Colors.pink};
    font-size: ${(props) => props.fontSize || 'x-large'} ;
    margin: ${(props) => props.margin || '0 45px 0 0'};
    text-align:${(props) => props.textAlign || 'justify'} ;
    padding: ${(props) => props.padding};
    display: ${(props) => props.display || 'block'} ;

    @media screen and (max-width: 990px) {
        display: block;
        font-size: 1.2rem;
        margin-right: 0px;
        margin: ${(props) => props.resMargin}
    }
`;
