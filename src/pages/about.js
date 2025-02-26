import React from 'react';
import Heading from "./ui-reusables/Heading";
import { MdEmail } from "react-icons/md";
import {useNavigate} from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import Download from "./ui-reusables/Download";

export default function AboutMe() {
  const navigate = useNavigate();

    const redirectToLink = (path) => {
        debugger
        navigate(path)
      }
return (

   

    <div>

        <p className="pt-3r leading-tight font-extralight text-2r mb-2r">
            Hey, I'm Yuvaraj – a passionate Frontend Engineer with 6.5+ years of experience.
            I specialize in <span className='text-purple-400'>Angular, Vue.js, and React</span>, helping businesses build, optimize,
            and migrate their applications for modern web solutions.
        </p>

        <Download />

        <div className='pt-3r'>   
            <Heading icon="-" text="What Do I DO?" />  
            <ul className="list-disc ml-6 mt-3 text-2r leading-tight ">
                <li>Align technical solutions with business goals</li>
                <li>Design and develop seamless UI/UX experiences</li>
                <li>Optimize performance and ensure clean, maintainable code</li>
                <li>Conduct thorough testing and quality assurance</li>
                <li>Support deployments and post-launch improvements</li>
            </ul>
        </div>
       

        <div className='pt-6'>

            <Heading icon="-" text="My work flow" />  

            <ul className="list-disc ml-6 mt-3 text-2r leading-snug pb-2r ">
                <li><b className='text-slate-400'>Understanding Business Needs</b> – Aligning the technical implementation with business goals.</li>
                
                <li><b className='text-slate-400'>UI/UX & Design Integration</b> – Creating visually appealing and intuitive interfaces.</li>

                <li><b className='text-slate-400'>Feature Development & Code Refactoring</b> – Enhancing functionality while maintaining clean code.</li>

                <li><b className='text-slate-400'> Testing & Quality Assurance</b> – Ensuring bug-free, optimized, and scalable applications. </li>

                <li><b className='text-slate-400'>Deployment & Post-Launch Support</b> – Verifying and fine-tuning applications for real-world use.</li>
                
            </ul>
        </div>

        <div className="py-3r">
        <Heading icon="#" text="Connect me" line={true} onClick={() => redirectToLink('about')}/>  
        <div className="flex justify-between">
              
               <div className="w-full flex gap-6">
                    <div className="border border-slate-400 p-1.5r w-96">
                        <p className="text-2r pb-1r">Contact me here</p>
                        <a  href="tel:+917204447908" className="text-slate-400 text-1.5r mt-2r">+91 72044 47908</a>
                    </div>
                    <div className="border border-slate-400 p-1.5r flex-col w-96">
                        <p className="text-2r pb-1r">Message me here</p>
                        
                            <a
                                href="https://wa.me/917204447908" // Replace with your WhatsApp number
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg text-slate-400 hover:text-green-500 flex gap-2"
                            >
                            <FaWhatsapp className="text-green-500 text-3xl " />

                                Connect on WhatsApp
                            </a>

                            <a
                                href="mailto:developer@yuvidev.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg text-slate-400 hover:text-blue-500 flex items-center gap-2"
                             >
                                <MdEmail className="text-blue-500 text-3xl" />
                                Email: developer@yuvidev.in
                            </a>
                            <a
                                href="mailto:yuvarajthecoder@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg text-slate-400 hover:text-blue-500 flex items-center gap-2"
                             >
                                <MdEmail className="text-red-500 text-3xl" />
                                Gmail: yuvarajthecoder@gmail.com
                            </a>
                            
                    </div>
                </div> 
                {/* <div className="w-full">
                    <p className="text-slate-400 text-1.5r">I’m interested in developing ideas that bring life to application, if you have a opportunity that aligns with our goals let's connect!</p>
                </div>  */}
            </div>
      </div>
    
</div> 
)
}

