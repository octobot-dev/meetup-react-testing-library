import styled from 'styled-components';
import { PRIMARY_COLORS } from '../../resources/colors';

const Input = styled.input`
  height: 38px;
  min-height: 38px;
  outline: none;
  width: 100%;
  border: 1px solid ${PRIMARY_COLORS.border};
  border-radius: 4px;
  padding: 0px 8px;
  box-sizing: border-box;
  color: ${PRIMARY_COLORS.text}
  font-size: 12px;

  &:focus, &:hover {
      border: 1px solid ${PRIMARY_COLORS.hover};
  }

`;

export default Input;
