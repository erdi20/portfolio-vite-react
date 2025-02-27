import React from "react";
import { useParams } from "react-router-dom";
import Header from "./../assets/components/Header";
import dataDetailSkill from "../constant/dataDetailSkill";
import ModalMenu from "./../assets/components/ModalMenu";
import SkillCard from "./../assets/components/SkillCard";

export default function DetailSkill() {
    const { item } = useParams();
    return (
        <div className="w-screen min-h-screen flex flex-col p-[30px] bg-slate-100  overflow-hidden max-w-[500px] mx-auto">
            <Header title={item} />
            <div className="mt-12 flex flex-col gap-4">
                <img src={dataDetailSkill[item].bannerImg} alt="" className="w-full h-[200px] object-cover rounded-lg" />
                <p>{dataDetailSkill[item].description}</p>
                <div className="flex flex-col gap-4 mt-4">
                    {dataDetailSkill[item].data.map((v) => {
                        return <SkillCard title={item} content={v.title} img={v.img} multiLink={v.multiLink} key={v.id} />;
                    })}
                </div>
            </div>
            <ModalMenu />
        </div>
    );
}
