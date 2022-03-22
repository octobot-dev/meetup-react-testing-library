import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox';
import CardContainer from './styles/CardContainer';
import CardDescription from './styles/CardDescription';
import CardTitle from './styles/CardTitle';
import CardInfo from './styles/CardInfo';
import FlexContainer from './styles/FlexContainer';

function ToDoCard({
  id, title, description, checked,
}) {
  const [isChecked, setIsChecked] = useState(checked);

  const checkedHandler = () => {
    setIsChecked(oldChecked => !oldChecked);
  };

  return (
    <CardContainer key={id} aria-labelledby={`title-${id}`}>
      <FlexContainer>
        <Checkbox checked={isChecked} onChange={() => checkedHandler()} label="Is done" />
        <CardInfo direction="column">
          <CardTitle id={`title-${id}`}>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardInfo>
      </FlexContainer>
    </CardContainer>
  );
}

ToDoCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default ToDoCard;
