import React from 'react';

const Header = ({match}) => {

    return (<div className="card headerCard">Welcome to the Movie library</div>)
}

export default React.memo(Header);