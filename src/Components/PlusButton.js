import { useState } from 'react'
import '../CSS/PlusButton.css'
import { Link } from "react-router-dom";



const PlusButton = (props) => {

    const {options} = props;

    const [isOpened, setIsOpened] = useState(false);

    const toggleMenu = () => {
        setIsOpened(!isOpened);
    }

    return (
    <div>
        {isOpened?
        <>
        <div className="PlusButton" onClick={toggleMenu}>
           <p>+</p>
        </div>
        <div className="toggleMenu" onMouseLeave={toggleMenu}>
            <ul>
                {options.map((option) => {
                    return(
                    <li key={option.title}><Link to={option.link}>{option.title}</Link></li>
                    )
                })}
            </ul>
        </div>
        </>
        :
        <div className="PlusButton" onMouseEnter={toggleMenu} onClick={toggleMenu}>
           <p>+</p>
        </div>
        }
    </div>
    )
}

export default PlusButton