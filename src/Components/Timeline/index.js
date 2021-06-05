import React from 'react'

import TimelineElements from './TimelineElements';

import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import './Timeline.css'
import {BtnWrap} from './TimelineElements';
const Timeline = () => {

    let workIconStyles = {background: "#06BF71"};
    let schoolIconStyles = {background: "#65E4FF"};
    return (
        <div id= "experiences">
            <p className = 'topline'>experiences</p>
            <h1 className="title">Timeline</h1>
            <VerticalTimeline className = "custom-line">
                {
                TimelineElements.map(element =>{
                        let isWorkIcon = element.icon ==="work";
                        let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== "";
                        return(
                            <VerticalTimelineElement
                                key = {element.key}
                                date = {element.date}
                                dateClassName="date"
                                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                icon={isWorkIcon ? <BusinessCenterIcon/> : <SchoolIcon/>}
                            >
                                <h3 className = "vertical-timeline-element-title">{element.title}</h3>
                                <h5 className = "vertical-timeline-element-subtitle">{element.location}</h5>
                                <p id="description">{element.description}</p>
                                <div>{showButton && (<BtnWrap><a className={`buttonTime ${isWorkIcon ? "workButton" : "schoolButton"}`}
                                href= {element.link} target = "_blank" rel="noreferrer">{element.buttonText}</a></BtnWrap>)}</div>
                            </VerticalTimelineElement>

                        );
                    })}
            </VerticalTimeline>
        </div>
    )
}

export default Timeline
