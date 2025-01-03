import Heading from "./ui-reusables/Heading";
import Card from "./ui-reusables/Card";
export default function Home(){
    return <div className="p-20">
      <div className="flex gap-10 justify-between">
        <div className="flex flex-col justify-center">
            <div>   
            <h1 className="pb-10 text-2xl">Yuvaraj, <span>Frontend Developer</span></h1>
                <p className="pb-5 text-l font-extralight">Crafting Responsive websites, with framework or without framework<br/> from past 6.6years</p>
                <button className="p-2 px-5 border border-solid border-purple-500">Connect me!!</button>
            </div>
        </div>
        <div className="profile-pic">
            <img className="h-96" src="https://yuvidev.in/img/landing-page.svg" />
        </div>
      </div>

      <div className="">

        <Heading icon="#" text="Portfolio" line={true} arrow="ViewAll"/>
        <div className="flex gap-5 justify-between pt-4 pb-10">
            <Card link="https://www.yuvidev.in" btnText="Live" heading='Languages' mainHeading='Flask' subtitle="Craft me through" img='https://yuvidev.in/img/landing-page.svg' skills={['HTML','CSS', 'JAVASCRIPT']}/>
            <Card link="https://www.yuvidev.in" btnText="Live" heading='Languages' mainHeading='Flask' subtitle="Craft me through" img='https://yuvidev.in/img/landing-page.svg' skills={['HTML','CSS', 'JAVASCRIPT']}/>
            <Card link="https://www.yuvidev.in" btnText="Live" heading='Languages' mainHeading='Flask' subtitle="Craft me through" img='https://yuvidev.in/img/landing-page.svg' skills={['HTML','CSS', 'JAVASCRIPT']}/>
        </div>


        <Heading  icon="#" text="Skills" line={true}/>
        <div className="flex gap-5 justify-between">
            <div className="w-full flex-grow-0">
               <img className="pt-4 h-96" src="https://yuvidev.in/img/landing-page.svg" />
            </div>
            <div className="w-full flex-grow">
                <div className="flex gap-2">
                  <Card  heading='Languages' skills={['HTML','CSS', 'JAVASCRIPT', 'TYPESCRIPT']}/>
                  <Card  heading='Frameworks' skills={['ANGULAR','REACT', 'VUE']}/>
                </div>
                <div className="flex gap-2 pt-2">
                  <Card  heading='Database Familiar' skills={['SQL','POSTGRESQL', 'MONGO']}/>
                  <Card  heading='npm packages' skills={['lodash','chartjs', 'express', 'axios']}/>
                </div>
                <div className="flex gap-2 pt-2">
                  <Card  heading='Tools' skills={['FIGMA','VSCODE', 'GIT']}/>
                </div>
            </div>
        </div>

        <Heading  icon="#" text="about-me" line={true}/>
        

        


      </div>
    </div>
}