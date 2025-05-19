import null_icon from '../Assets/program/event.png';
import main_event from '../Assets/program/main.png';
import discussion from '../Assets/program/discussion.png';
import dinner from '../Assets/program/dinner.png';

const Program = [
    {
        day:"23. May",
        events:[
            {
                title:"Participants registration",
/*Max 410 Ch*/  description:"We need to register everyone and open the conference.",
                time:"13:00-14:30",
                speaker:"All attendents",
                icon:null_icon
            },           
            {
                title:"Inaugural lecture \"From Oxford to Real Life: 10 Carrer Truths I Wish I'd Known Years Ago \"",
                description:"Opening of the conference with special lecture given from Dr Anna Kordala",
                time:"14:30-15:30",
                speaker:"dr Anna Kordala",
                icon:main_event
            },
            {
                title:"First Oral session",
                description:"Session with quick talks",
                time:"15:30-16:45",
                speaker:"Multiple speakers",
                icon:null_icon
            },
            {
                title:"First poster session",
                description:"Session where our attendents have time to individually present their recent projects and have a discussion with anyone",
                time:"17:00-18:00",
                speaker:"All attendents",
                icon:discussion
            },
        ]
    },
    {
        day:"24. May",
        events:[
            {
                title:"Lecture \"Dissecting Platelet Function Using Functional Genomics\"",
                description:"A special lecture from Prof. Washington",
                time:"10:00-11:00",
                speaker:"prof. A. Valance Washington",
                icon:main_event
            },
            {
                title:"Second poster session",
                description:"Session where our attendents have time to individually present their recent projects and have a discussion with anyone",
                time:"11:15-12:30",
                speaker:"All attendents",
                icon:discussion
            },
            {
                title:"Second oral session",
                description:"Session with quick talks",
                time:"12:45-14:00",
                speaker:"Multiple speakers",
                icon:null_icon
            },
            {
                title:"Lunch break",
                description:"Attending the Genomica conference is a pathway to many abilities some consider to be unnatural.",
                time:"14:00-16:00",
                speaker:"Mrs Pizza & Mr. Hamburger",
                icon:dinner
            },
            {
                title:"Third poster session",
                description:"Session where our attendents have time to individually present their recent projects and have a discussion with anyone",
                time:"16:00-17:00",
                speaker:"All attendents",
                icon:discussion
            },
        ]
    },
    {
        day:"25. May",
        events:[
            {
                title:"Lecture \"The liver's sinusoidal endothelial cells - doing more than just lining the pipes!\"",
                description:"A special lecture from prof. Peter McCourt",
                time:"11:15-12:15",
                speaker:"prof. Peter McCourt",
                icon:main_event
            },
            {
                title:"Third oral session",
                description:"Session with quick talks",
                time:"11:15-12:15",
                speaker:"Multiple speakers",
                icon:null_icon
            },
            {
                title:"Lunch break",
                description:"We invite you to our third and last poster session",
                time:"12:30-14:00",
                speaker:"Mr. Pieróg & Mrs. Kiełbasa",
                icon:dinner
            },
            {
                title:"Conference conclussion, award ceremony",
                description:"Let's thank everybody for this edition of Genomica!",
                time:"14:00-15:00",
                speaker:"All attendents",
                icon:null_icon
            },
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