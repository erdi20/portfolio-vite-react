import React from "react";
import Header from "../assets/components/Header";
import saya from "../assets/img/sy1.jpg";
import BiodataCard from "../assets/components/BiodataCard";
import { FiLinkedin, FiMail, FiMap, FiPhone, FiChevronRight } from "react-icons/fi";
import { FaSchool } from "react-icons/fa";
import dataBio from "../constant/dataBio";
import ModalMenu from "../assets/components/ModalMenu";

function handleIcon(name) {
    switch (name) {
        case "phone":
            return <FiPhone />;
        case "email":
            return <FiMail />;
        case "linkdin":
            return <FiLinkedin />;
        case "map":
            return <FiMap />;
        case "school":
            return <FaSchool />;
        default:
            return <FiChevronRight />;
    }
}

const Biodata = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col p-[30px] bg-[#212121] text-orange-400 overflow-hidden max-w-[500px] mx-auto">
            <Header title={"Biodata"} />
            <div className="mt-[50px] flex flex-col justify-center items-center relative ">
                <img src={saya} alt="" className="rounded-full w-[200px] h-[200px] object-cover" />
                <div className="w-[220px] h-[220px] border-[3px] border-orange-400 rounded-full border-dashed absolute "></div>
            </div>
            <div className="flex flex-col gap-10 mt-6 mb-[100px]">
                {dataBio.map((item) => {
                    return <BiodataCard label={item.label} value={item.value} icons={item.icons && handleIcon(item.icons)} link={item.link} key={item.id} />;
                })}
            </div>
            <ModalMenu />
        </div>
    );
};

export default Biodata;
