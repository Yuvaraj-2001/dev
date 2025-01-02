import Heading from "./ui-reusables/Heading"
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
      </div>
    </div>
}