import styled from 'styled-components';
import Colors from '../../color/colors';

interface props {
  margin?: string;
  textAlign?: string;
}

export const TitleStyle = styled.h1<props>`
      color: ${Colors.puple};
      font-size: x-large;
      margin: ${(props) => props.margin || '0 45px 10% 0'} ;
      text-align:${(props) => props.textAlign || 'justify'}  ;

      @media screen and (max-width: 990px) {
        display: block;
        font-size: 1.2rem;
        margin-right: 0px;
        text-align: center;
    }
`;
