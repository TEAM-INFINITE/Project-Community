import styled, { css } from 'styled-components';

const setSize = (size) => {
  switch (size) {
    case 'large':
      return css`
        padding: 13px 0;
        border-radius: 44px;
      `;
    case 'medium':
      return css`
        padding: 8px 0;
        border-radius: 34px;
      `;
    case 'ms':
      return css`
        border-radius: 32px;
      `;
    default:
      return css`
        border-radius: 28px;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
      `;
  }
};

const Button = styled.button`
  ${({ theme }) => {
    return css`
      width: ${(props) => props.width};
      background-color: ${theme.colors.colorMain};
      font-size: ${theme.fontSizes.base};
      padding: 7px 0;
      font-weight: 500;
      line-height: 18px;
      color: ${theme.colors.colorWhite};
    `;
  }}

  ${({ size }) => setSize(size)}

  &:disabled {
    ${({ theme }) => {
      return css`
        background-color: ${theme.colors.colorBorder};
        cursor: not-allowed;
      `;
    }}
  }

  ${({ theme }) => {
    return css`
      border: 1px solid ${theme.colors.colorBorder};
    `;
  }}

  &.active {
    ${({ theme }) => {
      return css`
        background-color: ${theme.colors.colorBg};
        border: 1px solid ${theme.colors.colorBorder};
      `;
    }}
  }
`;

export default Button;
