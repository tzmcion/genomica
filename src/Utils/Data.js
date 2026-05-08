import null_icon from '../Assets/program/event.png';
import main_event from '../Assets/program/main.png';
import discussion from '../Assets/program/discussion.png';
import diamond from "../Assets/program/diamond.png"
import dinner from '../Assets/program/dinner.png';

const Program = [
    {
        day:"Friday 15th of May",
        events:[
            {
                title:"Participants registration",
/*Max 410 Ch*/  description:"We need to register everyone and open the conference.",
                time:"13:00-14:30",
                speaker:"All attendents",
                icon:null_icon
            },
            {
                title:"Conference opening",
                description:"Let's welcome everyone!",
                time:"14:30-14:45",
                speaker:"Organizers",
                icon:null_icon
            },
            {
                title:"Inaugural lecture: \“Revisiting the importance of LCK in T-cell responses\"",
                description:"Opening of the conference finishes with a special lecture from Ondrej Stepanek",
                time:"14:45-15:45",
                speaker:"PhD Ondrej Stepanek",
                icon:main_event
            },
            {
                title:"Genomed presentation: \"NGS sequencing in microbiome analysis - comparison of available sequencing approaches using the example of V3-V4 16S rDNA metabarcoding service at Genomed S.A.\"",
                description:"NGS sequencing in microbiome analysis - comparison of available sequencing approaches using the example of V3-V4 16S rDNA metabarcoding service at Genomed S.A.",
                time:"15:45-16:00",
                speaker:"Genomed",
                icon:null_icon
            },
            {
                title:"First Oral session",
                description:"Session with quick talks",
                time:"16:20-17:40",
                speaker:"Multiple speakers",
                icon:null_icon
            },
            {
                title:"First poster session",
                description:"Session where our attendents have time to individually present their recent projects and have a discussion with anyone",
                time:"18:00-19:20",
                speaker:"All attendents",
                icon:discussion
            },
        ]
    },
    {
        day:"Saturday 16th of May",
        events:[
            {
                title:"Special lecture: \"Decoding β-Cell development & function: Paving the way for novel diabetes treatments\"",
                description:"A special lecture from Dr Mostafa Bakhti",
                time:"10:00-11:00",
                speaker:"PhD Mostafa Bakhti",
                icon:main_event
            },
            {
                title:"Bioceltix presentation: \"Veterinary Biotechnology - Stem cell-based therapies at a turning point\”",
                description:"A quick word from our partner - Bioceltix",
                time:"11:00-11:20",
                speaker:"Bioceltix",
                icon:null_icon
            },
            {
                title:"Second poster session",
                description:"Session where our attendents have time to individually present their recent projects and have a discussion with anyone",
                time:"11:30-13:00",
                speaker:"All attendents",
                icon:discussion
            },
            {
                title:"Lunch break",
                description:"Attending the Genomica conference is a pathway to many abilities some consider to be mouth watering",
                time:"13:00-15:00",
                speaker:"Mrs. Pizza & Mr. Brocolli",
                icon:dinner
            },
            {
                title:"Second oral session",
                description:"Session with quick talks",
                time:"15:00-16:20",
                speaker:"Multiple speakers",
                icon:null_icon
            },
            {
                title:"Third poster session",
                description:"Session where our attendents have time to individually present their recent projects and have a discussion with anyone",
                time:"16:40-18:00",
                speaker:"All attendents",
                icon:discussion
            },
            {
                title:"Social event at Bracka 4",
                description:"Bracka 4 is one of those spots everyone just ends up knowing. Tucked inside a historic townhouse just off the Main Square, it's been a meeting point for locals and people passing through Kraków for over 15 years.",
                time:"19:00-Midnight",
                speaker:"Everyone!",
                icon:diamond
            },
        ]
    },
    {
        day:"Sunday 17th of May",
        events:[
            {
                title:"Special Lecture: \"Targeted Base Editing Strategies for Neurological Disease\"",
                description:"A special lecture from dr Żaneta Matuszek",
                time:"10:00-11:00",
                speaker:"PhD Żaneta Matuszek",
                icon:main_event
            },
            {
                title:"Third oral session",
                description:"Session with quick talks",
                time:"11:20-12:40",
                speaker:"Multiple speakers",
                icon:null_icon
            },
            {
                title:"Fourth poster session",
                description:"Session where our attendents have time to individually present their recent projects and have a discussion with anyone",
                time:"13:00-14:15",
                speaker:"Multiple speakers",
                icon:null_icon
            },
            {
                title:"Lunch break",
                description:"We invite you to our third and last poster session",
                time:"14:15-15:30",
                speaker:"Mr. Pieróg & Mrs. Kiełbasa",
                icon:dinner
            },
            {
                title:"Conference conclussion, award ceremony",
                description:"Let's thank everybody for this edition of Genomica!",
                time:"15:30-16:00",
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