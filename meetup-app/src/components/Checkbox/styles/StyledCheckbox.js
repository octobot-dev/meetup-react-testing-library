import styled from 'styled-components';
import { PRIMARY_COLORS } from '../../../resources/colors';

import Icon from './Icon';

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: ${props => (props.checked ? PRIMARY_COLORS.selected : PRIMARY_COLORS.unSelected)};
  border-radius: 4px;
  transition: all 150ms;

  &:hover {
      background: ${PRIMARY_COLORS.selected};
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`;

export default StyledCheckbox;
