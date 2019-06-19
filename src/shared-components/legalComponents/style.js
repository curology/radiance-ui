import styled from '@emotion/styled';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { SPACER, FONTS } from '../../constants';

// eslint-disable-next-line import/prefer-default-export
export const LegalContainer = styled.div`
  & * {
    font-family: ${FONTS.baseFont};
  }

  & h1 {
    ${TYPOGRAPHY_STYLE.display};
    margin: 0;
  }
  
  & h2 {
    ${TYPOGRAPHY_STYLE.heading};
    margin: ${SPACER.x2large} 0 0;
  }
  
  & h3 {
    ${TYPOGRAPHY_STYLE.title};
    margin: ${SPACER.x2large} 0 0;
  }
  
  & p {
    ${TYPOGRAPHY_STYLE.body};
    margin: ${SPACER.medium} 0 0;
  }
  
  & a {
    ${TYPOGRAPHY_STYLE.link};
  }
  
  & time {
    ${TYPOGRAPHY_STYLE.caption};
    margin: ${SPACER.medium} 0 0;
  }
  
  & em {
    text-transform: uppercase;
    font-size: 16px;
    font-style: normal;
    letter-spacing: .25px;
  }
  
  & li {
    ${TYPOGRAPHY_STYLE.body};
    margin: ${SPACER.medium} 0 0;
  }
  
  & ul {
    list-style: disc;
    padding-left: ${SPACER.large};
    margin: ${SPACER.medium} 0 0 ${SPACER.medium};
    
    & > li {
      text-indent: 0;
    }
  }
  
  & ol {
    margin-top: ${SPACER.large};
    margin-left: ${SPACER.large};
    padding: 0;
    counter-reset: item;
  
    > li {
      padding: 0 0 0 ${SPACER.large};
      text-indent: -${SPACER.large};
      list-style-type: none;
      counter-increment: item;
    
      &::before {
        display: inline-block;
        padding-right: ${SPACER.medium};
        font-weight: bold;
        text-align: right;
        content: counter(item) ".";
        width: ${SPACER.large};
      }
    }
  }
`;
