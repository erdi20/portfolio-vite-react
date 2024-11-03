import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ModalMenu() {
    const [show, setShow] = useState(false);
    const handleShowModal = () => {
        setShow(!show);
    };
    return (
        <>
            {show && (
                <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#212121]/90 fixed top-0 left-0 z-[200]">
                    <Link to={"/Biodata"} className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        Biodata
                    </Link>
                    <Link to={"/skill"} className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        Skill
                    </Link>
                    <Link to={"tel:+6208797"} className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        Contact
                    </Link>
                    <a href={"https://www.linkedin.com/in/erdiry/"} target="_blank" className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        Linkdin
                    </a>
                    <a href={"https://github.com/erdirygithub"} target="_blank" className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        Github
                    </a>
                </div>
            )}
            <div className="w-[80px] h-[80px] bg-orange-400 text-gray-800 rounded-full fixed -bottom-4 -right-4 flex justify-center items-center z-[250]" onClick={handleShowModal}>
                <FiMenu />
            </div>
        </>
    );
}
