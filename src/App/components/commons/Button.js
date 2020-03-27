import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ButtonCT = ({ onClick, color, disabled, icon, type, children }) => {
    return (
        <Button startIcon={icon} onClick={onClick} variant="outlined" color={color} disabled={disabled} type={type} >
            {children}
        </Button>
    )
}

ButtonCT.propTypes = {
    onClick: PropTypes.func,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.any,
    type: PropTypes.string,
    children: PropTypes.any
}

ButtonCT.defaultProps = {
    onClick: null,
    color: "primary",
    disabled: false,
    icon: null,
    type: null,
    children: null
}

export default ButtonCT;