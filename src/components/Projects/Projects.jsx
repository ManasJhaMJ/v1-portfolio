import { useState } from 'react'

import nariyal from '../../assets/projects/nariyal.png'
import netplay from '../../assets/projects/netplay.png'
import dopegang from '../../assets/projects/dopegang.png'
import windows from '../../assets/projects/windows.png'
import justicegpt from '../../assets/projects/justicegpt.png'
import instruments from '../../assets/projects/instruments.png'
import pixelcode from '../../assets/projects/pixelcode.png'
import photography from '../../assets/projects/photography.png'
import shashtra from '../../assets/projects/shashtra.png'

import Project from './Project'
import './projects.css'

function Projects() {

    let [set, setSet] = useState(1)

    const ComponentOne = () => {
        return <>
            <Project work='Freelance' title='Nariyal' src={nariyal} />
            <Project work='Project' title='DopeGang' src={dopegang} />
            <Project work='Freelance' title='Netplay' src={netplay} />
        </>;
    };

    const ComponentTwo = () => {
        return <>
            <Project work='Internship' title='Shashtra' src={shashtra} />
            <Project work='Project' title='Windows69' src={windows} />
            <Project work='Internship' title='Photography' src={photography} />
        </>;
    };

    const ComponentThree = () => {
        return <>
            <Project work='Hackathon' title='Enstruments' src={instruments} />
            <Project work='Freelance' title='PixelCode' src={pixelcode} />
            <Project work='Hackathon' title='JusticeGPT' src={justicegpt} />
        </>;
    };

    const renderComponent = () => {
        switch (set) {
            case 1:
                return <ComponentOne />;
            case 2:
                return <ComponentTwo />;
            case 3:
                return <ComponentThree />;
            default:
                return <ComponentOne />;
        }
    };

    const getButtonStyle = (buttonState) => {
        return {
            backgroundColor: set === buttonState ? 'white' : '',
            color: set === buttonState ? 'black' : '',
        };
    };

    return (
        <section id='projects'>
            <h1>Project•Work</h1>
            <div className="project-btns">
                <button style={getButtonStyle(1)} onClick={() => { setSet(1) }}><div className="side"></div>
                    Work 1</button>
                <button style={getButtonStyle(2)} onClick={() => { setSet(2) }}><div className="side"></div>
                    Work 2</button>
                <button style={getButtonStyle(3)} onClick={() => { setSet(3) }}><div className="side"></div>
                    Work 3</button>
            </div>
            <div className='projects'>
                {renderComponent()}
            </div>
        </section>
    )
}

export default Projects