import null_icon from '../Assets/program/event.png';
import main_event from '../Assets/program/main.png';
import discussion from '../Assets/program/discussion.png';

const Program = [
    {
        day:"17. May",
        events:[
            {
                title:"Participants registration",
/*Max 410 Ch*/  description:"We need to register everyone and open the conference.",
                time:"12:00-14:00",
                speaker:"All attendents",
                icon:null_icon
            },
            {
                title:"Conference opening, inaugural lecture \"Molecular Scissors of CRISPR/Cas9\"",
                description:"As our first event, we invite you to listen to dr Krzysztof Chyliński talking about CRISPR/Cas9",
                time:"14:00-15:30",
                speaker:"dr Krzysztof Chyliński",
                icon:main_event
            },
            {
                title:"Poster Session",
                description:"We invite you to our first poster session",
                time:"15:30-17:30",
                speaker:"All attendents",
                icon:discussion
            },
        ]
    },
    {
        day:"18. May",
        events:[
            {
                title:"Machine learning methods for the functional analysis of the 3D genome structure",
                description:"Special lecture",
                time:"9:00-10:00",
                speaker:"dr Teresa Szczepińska",
                icon:main_event
            },
            {
                title:"First oral session",
                description:"First oral session for 1,5h",
                time:"10:00-11:30",
                speaker:"All attendents",
                icon:discussion
            },
            {
                title:"Second poster session",
                description:"We invite you to our second poster session for 1h",
                time:"11:45-12:45",
                speaker:"All attendents",
                icon:discussion
            },
            {
                title:"Second oral session",
                description:"Second oral session for 1,25h",
                time:"13:00-14:15",
                speaker:"All attendents",
                icon:discussion
            },
            {
                title:"Lunch break",
                description:"Everybody needs a break!",
                time:"14:15-16:00",
                speaker:"All attendents",
                icon:null_icon
            },
            {
                title:"Disease in a dish: cellular models of human genetic disorders",
                description:"We invite you to our third special lecure presented by dr hab. Neil Kachmakova-Trojanowska, who will talk about models of human genetic disorders",
                time:"16:00-17:00",
                speaker:"dr hab. Neil Kachmakova-Trojanowska",
                icon:main_event
            }
        ]
    },
    {
        day:"19. May",
        events:[
            {
                title:"Molecular signature of astrocyte evolution in primates",
                description:"We invite you to out 4th and last special lecture about astreocyte",
                time:"9:00-10:00",
                speaker:"dr hab. Aleksandra Pękowska prof. PAN",
                icon:main_event
            },
            {
                title:"Third oral session",
                description:"We invite you to our third and last oral session",
                time:"10:00-11:30",
                speaker:"All attendents",
                icon:discussion
            },
            {
                title:"Third poster session",
                description:"We invite you to our third and last poster session",
                time:"11:30-13:00",
                speaker:"All attendents",
                icon:discussion
            },
            {
                title:"Lunch break",
                description:"Everybody needs a break!",
                time:"13:00-14:30",
                speaker:"All attendents",
                icon:null_icon
            },
            {
                title:"Conference conclusion, award ceremony",
                description:"Everything eventually comes to an end, as this event. We invite you to stay and thank everybody who took part in this event",
                time:"15:00-15:30",
                speaker:"Everyone",
                icon:null_icon
            },
        ]
    }
];

export {Program as ProgramData};