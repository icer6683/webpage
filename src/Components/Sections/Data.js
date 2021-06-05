import { ArrowBack, ArrowRight, NoEncryption } from '@material-ui/icons';
import face from '../../Images/face.jpeg';
import walking from '../../Images/walking.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Welcome',
    headline: "Introduction",
    description: "I'm from Connecticut and I'm looking to pursue a finance concentration along with a dual degree in computer science. I'm interested in the fields of technology and finance. \n\nIn my free time, you'll find me jamming to music, experimenting in the kitchen or learning new things. Nice to meet you!",
    shape: false,
    imgStart: true,
    img: face,
    alt: 'Face',
    dark: true,
    primary: true,
    darkText: true,
    round: true,
    show: 'none'
}
export const homeObjTwo = {
    id: 'updates',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Updates',
    headline: "Current",
    description: "At Cornell, I was involved with the Student Activities Funding Commission, Association of Computer Science Undergraduates, Ascend Business Club and Cornell Undergraduate Research Board. \n \nIn addition, I served as a consultant for CS 2110: Object-Oriented Programming and Data Structures in spring 2021. ",
    shape: false,
    imgStart: false,
    img: walking,
    alt: 'Absorbed in Work',
    dark: false,
    primary: true,
    darkText: false,
    round: true,
    show: 'none'
}