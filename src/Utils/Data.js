import null_icon from '../Assets/program/event.png';
import main_event from '../Assets/program/main.png';
import discussion from '../Assets/program/discussion.png';

const Program = [
    {
        day:"18. May",
        events:[
            {
                title:"Crispr-Cas9 and fast cloning, What should we do with it?",
/*Max 410 Ch*/  description:"Proin vel sollicitudin justo, tempus viverra sem. Nullam sed libero vel dui imperdiet eleifend. Duis sed fringilla dolor. Fusce tempor enim diam. Sed non luctus leo, congue dignissim tellus. Suspendisse a massa sapien. Pellentesque interdum erat eget dui lobortis efficitur. Aenean ut diam lobortis, dapibus massa at, ornare nisi. Cras ullamcorper arcu sed porttitor dictum. Morbi tellus nisl, tristique in in.",    //Description Limited, Max 255*2 characters
                time:"16:00, aula 103",
                speaker:"Ivona Prestova",
                icon:null_icon
            },
            {
                title:"Discussion of the event with Pizza 🍕",
                description:"Lorem",
                time:"16:30, IZZIS Hall",
                speaker:"All Attendets",
                icon:discussion
            },
            {
                title:"Was p53 just a fad, or is it still a future of cancer-preventing field of science",
                description:"Lorem",
                time:"17:00, Aula 103A & 103B",
                speaker:"Maksymilian Gmur",
                icon:null_icon
            },
            {
                title:"How is Alternative splicing affected after RNA-viral infections of SARS-COV viral group",
                description:"Lorem",
                time:"18:00, aula 103",
                speaker:"Katarzyna Iwanowicz-Sosenko",
                icon:main_event
            },
            {
                title:"[PL] Jak głodówka i stres może wpływać na zmiany w genomie płodu",
                description:"Lorem",
                time:"19:30, IZZIS Hall",
                speaker:"Stanisław Wąsek",
                icon:null_icon
            },
        ]
    },
    {
        day:"19. May",
        events:[
            {
                title:"Presentation genetics",
                description:"Lorem",
                time:"16:00, aula 103",
                speaker:"Ivona Kovalicka",
                icon:null_icon
            }
        ]
    },
    {
        day:"20. May",
        events:[
            {
                title:"Presentation genetics",
                description:"Lorem",
                time:"16:00, aula 103",
                speaker:"Shaquile O'neal",
                icon:null_icon
            }
        ]
    }
];

export {Program as ProgramData};