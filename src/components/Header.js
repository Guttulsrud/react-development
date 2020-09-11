import React from 'react';
import Proptypes from 'prop-types';

export const Header = (props ) => {
    return (
        <h1>hello {props.title}</h1>
    );
}

Header.propTypes     = {
    title: Proptypes.string.isRequired
}
export default Header;