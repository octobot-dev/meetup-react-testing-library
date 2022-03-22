import styled from 'styled-components';

import { PRIMARY_COLORS } from '../../../resources/colors';

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;

  svg {
      width: 20px;
      height: 20px;
      position: absolute;
      margin-left: 4px;
      color: ${PRIMARY_COLORS.headers};
      opacity: 50%;
  }

  input {
      position: aboslute;
      padding-left: 28px;
  }
`;

export default InputContainer;
