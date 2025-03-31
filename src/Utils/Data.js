import null_icon from '../Assets/program/event.png';
import main_event from '../Assets/program/main.png';
import discussion from '../Assets/program/discussion.png';

const Program = [
    {
        day:"23. May",
        events:[
//             {
//                 title:"Participants registration",
// /*Max 410 Ch*/  description:"We need to register everyone and open the conference.",
//                 time:"12:00-14:00",
//                 speaker:"All attendents",
//                 icon:null_icon
//             },           
            {
                title:"Events to be scheduled",
                description:"Attending the Genomica conference is a pathway to many abilities some consider to be unnatural.",
                time:"Hour/Minute-Hour/Minute",
                speaker:"Speaker to be revealed",
                icon:main_event
            },
        ]
    },
    {
        day:"24. May",
        events:[
            {
                title:"Events to be scheduled",
                description:"Attending the Genomica conference is a pathway to many abilities some consider to be unnatural.",
                time:"Hour/Minute-Hour/Minute",
                speaker:"Speaker to be revealed",
                icon:main_event
            }
        ]
    },
    {
        day:"25. May",
        events:[
            {
                title:"Events to be scheduled",
                description:"Attending the Genomica conference is a pathway to many abilities some consider to be unnatural.",
                time:"Hour/Minute-Hour/Minute",
                speaker:"Speaker to be revealed",
                icon:main_event
            },
            // {
            //     title:"Third oral session",
            //     description:"We invite you to our third and last oral session",
            //     time:"10:00-11:30",
            //     speaker:"All attendents",
            //     icon:discussion
            // },
            // {
            //     title:"Third poster session",
            //     description:"We invite you to our third and last poster session",
            //     time:"11:30-13:00",
            //     speaker:"All attendents",
            //     icon:discussion
            // },
            // {
            //     title:"Lunch break",
            //     description:"Everybody needs a break!",
            //     time:"13:00-14:30",
            //     speaker:"All attendents",
            //     icon:null_icon
            // },
            // {
            //     title:"Conference conclusion, award ceremony",
            //     description:"Everything eventually comes to an end, as this event. We invite you to stay and thank everybody who took part in this event",
            //     time:"15:00-15:30",
            //     speaker:"Everyone",
            //     icon:null_icon
            // },
        ]
    }
];

export {Program as ProgramData};