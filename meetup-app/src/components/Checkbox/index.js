import React from 'react';
import PropTypes from 'prop-types';

import CheckboxContainer from './styles/CheckboxContainer';
import HiddenCheckbox from './styles/HiddenCheckbox';
import StyledCheckbox from './styles/StyledCheckbox';
import Icon from './styles/Icon';

function Checkbox({ checked, onChange, label }) {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={onChange} aria-label={label} />
      <StyledCheckbox checked={checked} onClick={onChange}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Checkbox;
