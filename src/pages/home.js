import Heading from "./ui-reusables/Heading";
import Card from "./ui-reusables/Card";
import { skills, featured } from "../commons/constants";
export default function Home(){
  const handleDownload = () => {
    const resumeUrl = "/assets/YUVARAJ_FRONTEND_DEVELOPER.pdf"; // Path relative to public folder
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "YUVARAJ_FRONTEND_DEVELOPER.pdf"; // Set custom file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

    return <div className="">
      <div className="py-3r flex gap-10 justify-between">
        <div className="flex flex-col justify-center w-full">
            <div>   
            <h1 className="pb-2r text-4r mob:text-mainm1">Hi, I'm <span className="text-purple-400">Yuvaraj </span> – Frontend Engineer & UI Specialist</h1>
                <p className="pb-3r leading-tight font-extralight text-2r">With <span className="text-purple-400">6.5+ years</span> of experience in frontend development, I specialize in crafting high-performance, scalable, and user-friendly web applications. My expertise spans across <span className="text-purple-400">Angular</span>, <span className="text-purple-400">Vue.js</span>, and <span className="text-purple-400">React</span>, ensuring businesses can build, optimize, or migrate old application to new UI framework.</p>
                <button className="p-1r px-5 border border-solid bg-purple-500 text-1.5r" onClick={handleDownload}>Download Resume</button>
                <button className="p-1r px-5 border border-solid border-purple-500 text-1.5r ml-5">Connect me!!</button>
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
        <div className="flex pt-2r gap-4"> 
          <div className="w-full">
              <p className="text-2r leading-snug">I focus on aligning web technical solutions with business UI goals, ensuring that every project meets both functionality and UI needs. From crafting intuitive user interfaces to writing clean, maintainable code, I prioritize efficiency and user experience at every stage.</p>
              <p className="pt-4r text-2r leading-snug">Beyond development, I emphasize quality assurance, performance optimization, and seamless deployments. Whether it’s refining existing features or launching new applications, I ensure everything runs smoothly, delivering scalable and reliable solutions for easy long term suport.</p>
              <p className="pt-2r text-2r text-purple-400 leading-snug">Click here to learn more about me and my workflow</p>
          </div>
          <div className="w-full">
            <img className="h-full w-full" alt="yuvaraj" src="/assets/profile/yuvaraj.png"/>
          </div>
        </div>
      </div>
      </div>
    </div>
}