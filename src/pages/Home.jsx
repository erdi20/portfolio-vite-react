import React from "react";
import saya from "../assets/img/sy1.jpg";
import { FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";

const home = () => {
    return (
        <div className="w-screen h-screen flex flex-col p-[30px] bg-[#212121] text-orange-400 overflow-hidden max-w-[500px] mx-auto">
            <h1 className="text-[36px] font-light">Hallo...</h1>
            <div className="my-8 relative flex flex-col items-center">
                <div className=" w-[500px] h-[500px] rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${saya})` }}></div>
                <div className="border-orange-400 border-[6px] rounded-full w-[530px] h-[530px] absolute -top-[15px]"></div>
            </div>
            <h1 className="text-[36px] font-light">
                Saya <br /> Erdi Masyudi
            </h1>
            <p className="text-[16px] font-light">Informatics Student</p>
            <Link to={"/Biodata"} className="w-[80px] h-[80px] bg-orange-400 text-gray-800 rounded-full fixed -bottom-4 -right-4 flex justify-center items-center">
                <FiPlay className="text-[42px]" />
            </Link>
        </div>
    );
};

export default home;
