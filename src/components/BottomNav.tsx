// import { faFaceAngry, faFaceGrin } from "@fortawesome/free-solid-svg-icons";
import {faFaceAngry, faFaceGrin} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Link} from "react-router-dom";


export const BottomNav: React.FC = () => {
    return (
        <nav style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            flex: 1,
            background: "white",
            zIndex: 999,
            paddingBlock: 'env(safe-area-inset-bottom) + 10px'
        }}>
            <Link to="/" className="w-20  	flex flex-row justify-center	">
                <FontAwesomeIcon icon={faFaceAngry} size="lg" className="m-2"/>
            </Link>
            <Link to="/Second" className="w-20 	flex flex-row justify-center">
                <FontAwesomeIcon icon={faFaceGrin} size="lg" className="m-2"/>
            </Link>
        </nav>
    );
};

export default BottomNav;
