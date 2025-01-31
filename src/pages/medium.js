import { medium } from '../commons/constants';
import Heading from './ui-reusables/Heading';
import MediumCard from './ui-reusables/MediumCard';
import { FaAngular, FaReact } from "react-icons/fa";
import RxJSIcon from '../icons/Rxjs';

function Medium(){


    

    
    return <div>
        <Heading icon="/" text="Medium" />

        <div>
            <Heading icon={<FaAngular color='#DD0031'/>} text="Angular" line={true} arrow="View all"/>
            <div className='flex gap-3'>
                {medium.angular.map((m, i) =>  <MediumCard props={m} border="red-400" key={i} /> )}
            </div>
        </div>

        <div className="pt-2r">
            <Heading icon={<RxJSIcon color='#F7DF1E'/>} text="Rxjs Operators" line={true} arrow="View all"/>
            <div className='flex gap-3 pt-2r'>
            {medium.angular.map((m, i) =>  <MediumCard props={m} border="pink-400"  key={i} /> )}
            </div>
        </div>
       
        <div className="pt-2r">
            <Heading icon={<FaReact color='#61DAFB'/>}  text="React" line={true} arrow="View all"/>
            <div className='flex gap-3 pt-2r'>
            {medium.angular.map((m, i) =>  <MediumCard props={m} border="blue-400" key={i} /> )}
            </div>
        </div>

        



    </div>
}

export default Medium;