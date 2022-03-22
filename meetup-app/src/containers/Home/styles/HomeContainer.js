import styled from 'styled-components';

import { PRIMARY_COLORS } from '../../../resources/colors';

const HomeContainer = styled.div`
    display: flex;
    justify-contner: center;
    align-items: center;
    flex-direction: column;
    padding: 32px 24px;
    background: ${PRIMARY_COLORS.background};
    height: 100%;
    box-sizing: border-box;

    ol {
      width: 100%;
      padding: 0px;
      margin: 0px;
    }
`;

export default HomeContainer;
