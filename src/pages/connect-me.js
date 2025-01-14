import Heading from "./ui-reusables/Heading";
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

export default function Connect() {
    return (
        <div className="py-6">
        <Heading icon="/" text="Contact " line={true} />
        <div className="flex justify-between">
               <div className="w-full">
                    <p className="text-slate-400 text-1.5r">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                </div> 
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
                            
                    </div>
                </div> 
            </div>
        <div className="pt-2r">
            <Heading icon="#" text="Social Links" line={true}/>

        </div>


        
    </div>
    )
}