import styled from 'styled-components';
import { space, layout } from 'styled-system';

const Button = styled.button`
  padding: 18px 36px;
  background: linear-gradient(#8932f6, #a15bf9);
  box-sizing: border-box;
  font-family: Public Sans;
  font-weight: 600;
  font-style: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  width: 140px;
  height: 56px;
  border-radius: 8px;
  border: 1px;

  ${layout}
  ${space}

  ${({ theme }) => theme.mediaQueries.xl} {
  }
`;

export default Button;
