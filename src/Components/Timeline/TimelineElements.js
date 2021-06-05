import styled from 'styled-components'

let TimelineElements = [
    {
        id: 1,
        title: "Rest of Undegraduate @ Wharton",
        location: "Philadelphia, Pennsylvania",
        description: "Class of 2024",
        buttonText: "Wharton",
        date: "May 2021 - Present",
        icon: "school",
        link: "https://undergrad.wharton.upenn.edu/"
    },
    {
        id: 1,
        title: "Freshman year @ Cornell",
        location: "Ithaca, New York",
        description: "I was on the Economics and Computer Science double major track. ",
        buttonText: "Cornell",
        date: "Aug 2020 - May 2021",
        icon: "school",
        link: "https://www.cornell.edu/"
    },
    {
        id: 2,
        title: "Summer Intern @ Yale Center of Analytical Sciences",
        location: "New Haven, Connecticut",
        description: "A participant of the Yale Young Scholars program, I returned the following year to help organize the program. I led R programming sessions and clinical research methods as a TA. I mentored four Young Scholars, preparing students for the formal presentation on analysis of an Autism Spectrum Disorder clinical trial data set. ",
        buttonText: "Yale Center of Analytical Sciences",
        date: "Jul 2018 – Aug 18, Jul 2019 – Aug 2019",
        icon: "work",
        link: "https://publichealth.yale.edu/ycas/training/young_scholars/"
    },
    {
        id: 3,
        title: "High School Diploma @ Cheshire High School",
        location: "Cheshire, Connecticut",
        description: "Valedictorian",
        buttonText: "Cheshire High School",
        date: "Aug 2016 - Jun 2020",
        icon: "school",
        link: "https://sites.google.com/a/cheshire.k12.ct.us/chs/"
    },
];

export const BtnWrap = styled.nav`
    display: flex;
    align-items: center;        
`
export default TimelineElements;

