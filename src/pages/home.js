import Heading from "./ui-reusables/Heading";
import Card from "./ui-reusables/Card";
import { skills, featured } from "../commons/constants";
export default function Home(){
    return <div className="">
      <div className="py-3r flex gap-10 justify-between">
        <div className="flex flex-col justify-center w-full">
            <div>   
            <h1 className="pb-2r text-4r mob:text-mainm1">Yuvaraj, <span>Frontend Developer</span> <br/>Over 6years experience</h1>
                <p className="pb-3r leading-tight font-extralight text-2r">Crafting Responsive websites, with framework or without framework<br/> from past 6.6years</p>
                <button className="p-1r px-5 border border-solid border-purple-500 text-1.5r">Connect me!!</button>
            </div>
        </div>
        <div className="profile-pic w-full">
            <img className="h-full w-full" alt="yuvaraj" src="/assets/profile/yuvaraj.png"/>
        </div>
      </div>

      <div className="pt-2r">

        <Heading icon="#" text="Portfolio" line={true} arrow="View all"/>
        <div className="flex gap-5 justify-between py-2r">
          <Card props={featured.tred}/>
          <Card props={featured.pitchpro}/>
          <Card props={featured.yuvidev}/>
        </div>


      <div className="pt-2r">
       <Heading  icon="#" text="Skills" line={true}/>
          <div className="pt-2r flex gap-5 justify-between">
              <div className="w-full flex-grow-0">
                <img className="pt-4 h-96" alt="skill" src="/assets/skill.png" />
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
      </div>

      <div className="py-3r">
        <Heading icon="#" text="about-me" line={true}/>  
        <div className="flex pt-2r"> 
          <div className="w-full">
              <p className="pt-4r text-1.5r">Hey, i'm Yuvaraj, Frontend developer. If you are looking forward to develop, migrate business application then you are here in right spot.</p>
              <p className="pt-4r text-1.5r">Firstly I have specifically experienced 6.5 Years now. Mainly my specialization is in 3 Frameworks, Angular, Vue and React. Also I have mastered state management as well, ie, NGRX, REDUX, PINIA</p>
              <p className="pt-4r text-1.5r">Let's see mey Workflow</p>
              <p className="pt-4r text-1.5r">Design, Functionalities, Development, Code Refactoring Testing and Deployment Verification.</p>
          </div>
          <div className="w-full">
            <img className="h-full w-full" alt="yuvaraj" src="/assets/profile/yuvaraj.png"/>
          </div>
        </div>
      </div>
      </div>
    </div>
}