import Heading from "./ui-reusables/Heading";
import Card from "./ui-reusables/Card";
import { skills, featured } from "../commons/constants";
export default function Home(){
    return <div className="py-5r">
      <div className="py-3r flex gap-10 justify-between">
        <div className="flex flex-col justify-center w-full">
            <div>   
            <h1 className="pb-2r text-4r mob:text-mainm1">Yuvaraj, <span>Frontend Developer</span> <br/>Over 6years experience</h1>
                <p className="pb-3r leading-tight font-extralight text-2r">Crafting Responsive websites, with framework or without framework<br/> from past 6.6years</p>
                <button className="p-1r px-5 border border-solid border-purple-500 text-1.5r">Connect me!!</button>
            </div>
        </div>
        <div className="profile-pic w-full">
            <img className="h-full w-full" src="/assets/profile/yuvaraj.png"/>
        </div>
      </div>

      <div className="pt-2r">

        <Heading icon="#" text="Portfolio" line={true} arrow="View all"/>
        <div className="flex gap-5 justify-between py-2r">
          <Card props={featured.tred}/>
          <Card props={featured.pitchpro}/>
          <Card props={featured.yuvidev}/>
        </div>


        <Heading  icon="#" text="Skills" line={true}/>
        <div className="flex gap-5 justify-between">
            <div className="w-full flex-grow-0">
               <img className="pt-4 h-96" src="/assets/skill.png" />
            </div>
            <div className="w-full flex-grow">
                <div className="flex gap-2">
                  <Card  props={skills.language}/>
                  <Card  props={skills.framework}/>
                </div>
                <div className="flex gap-2 pt-2">
                  <Card props={skills.database}/>
                  <Card props={skills.npm}/>
                </div>
                <div className="flex gap-2 pt-2">
                  <Card props={skills.tools}/>
                </div>
            </div>
        </div>

        <Heading  icon="#" text="about-me" line={true}/>
        

        


      </div>
    </div>
}