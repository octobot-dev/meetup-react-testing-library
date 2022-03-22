import styled from 'styled-components';

import { PRIMARY_COLORS, SHADOWS } from '../../../resources/colors';

const CardContainer = styled.li`
    disply: flex;
    flex-direction: row;
    width: 100%;
    background: ${PRIMARY_COLORS.white};
    border-radius: 4px;
    padding: 16px;
    box-sizing: border-box;
    box-shadow: ${SHADOWS.card};
    transition: 0.3s all ease-out;
    list-style-type: none;
    margin-bottom: 16px;

    &:hover {
        box-shadow: ${SHADOWS.cardHover};
    }
`;


export default CardContainer;
