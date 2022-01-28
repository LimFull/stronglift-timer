// import { faFaceAngry, faFaceGrin } from "@fortawesome/free-solid-svg-icons";
import { faFaceAngry, faFaceGrin } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export const BottomNav: React.FC = () => {
  return (
    <nav className="flex flex-row justify-around fixed bottom-0 inset-x-0 bg-neutral-50 h-20 ">
      <Link
        to="/First"
        className="w-20 bg-red-400 	flex flex-row justify-center	"
      >
        <FontAwesomeIcon icon={faFaceAngry} size="lg" className="m-2" />
      </Link>
      <Link
        to="/Second"
        className="w-20 bg-red-400	flex flex-row justify-center"
      >
        <FontAwesomeIcon icon={faFaceGrin} size="lg" className="m-2" />
      </Link>
    </nav>
  );
};

export default BottomNav;
