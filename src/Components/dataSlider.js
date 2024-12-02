import { v4 as uuidv4 } from "uuid"; 
import Agnes from '../Images/Agnes.mp3'
import ACEC from '../Images/ACEC.mp3';
import AVF from '../Images/AVF.mp4';
import Forpuck from '../Images/Forpuck.mp3';
import NGCS from '../Images/NGCS.wav'; 
import Inescapable_One from '../Images/Inescapable_One.mp3'

const video = false;
const image = true; 

const dataSlider = [
    {
        id: uuidv4(),
        title: "Agnes",
        text: "Piano Solo, written November 2023",
        type: video,
        vid: Agnes
    },
    {
        id: uuidv4(),
        title: "A Clown's Existential Crisis",
        text: "Duet for Cello and Piano, written January 2024",
        type: video,
        vid: ACEC
    },
    {
        id: uuidv4(),
        title: "A Variegated Farewell",
        text: "String Quartet, written June 2024 ",
        type: video, 
        vid: AVF
    },
    {
        id: uuidv4(),
        title: "Forpuck",
        text: "Cello Solo, written July 2024 ",
        type: video, 
        vid: Forpuck
    },
    {
        id: uuidv4(),
        title: "Nothing Gold Can Stay",
        text: "Movement for Piano and Voice, written September 2024",
        type: video, 
        vid: NGCS
    },
    {
        id: uuidv4(),
        title: "Inescapable One",
        text: "Symphony for Full Orchestra, written October 2024", 
        type: video, 
        vid: Inescapable_One
    },
]

export default dataSlider; 