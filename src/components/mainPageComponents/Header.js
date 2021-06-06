import React from 'react';
import HeaderService from '../../service/HeaderService.js';

const Header = (props) => {
    HeaderService.setHeader();
    
    return(<div>
                <h1 style={{textAlign: "center", margin: 100}}>{HeaderService.getHeader()}</h1>
            </div>
    );
}

export default Header;