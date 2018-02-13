import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

export default theme => (WrappedComponent) => {
  injectGlobal`
  ${normalize()}
  html {
    box-sizing: border-box;
    * {
      box-sizing: inherit;
    }
  }
  body {
    background: ${theme.colors.outerBg};
    color: ${theme.colors.gray};
  }
  body,
  p,
  li,
  dd,
  input,
  select,
  textarea {
    font-size: ${theme.fontSize(0)};
    @media(${theme.breakpoints.sm}) {
      font-size: ${theme.fontSize(1)};
    }
    @media(${theme.breakpoints.xl}) {
      font-size: ${theme.fontSize(2)};
    }
    @media(${theme.breakpoints.xxl}) {
      font-size: ${theme.fontSize(3)};
    }
  }
  body,
  p,
  li,
  dd {
    line-height: 1.4;
    @media (${theme.breakpoints.lg}) {
      line-height: 1.5;
    }
    @media (${theme.breakpoints.xl}) {
      line-height: 1.55;
    }
  }
  p,
  li,
  dd {
    margin-top: ${theme.spacing(1)};
    &:first-child {
      margin-top: 0;
    }
  }
  body,
  input,
  select,
  textarea {
    color: ${theme.colors.text};
    font-family: ${theme.fontFamily.default};
    -webkit-font-smoothing: antialiased;
  }
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    &:hover {
      text-decoration: line-through;
      color: ${theme.colors.dark};
    }
  }
`;
  return WrappedComponent;
};