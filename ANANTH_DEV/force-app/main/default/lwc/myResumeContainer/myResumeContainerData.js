import SOCIAL from '@salesforce/resourceUrl/SOCIAL'
import ANANTHA_FACEIMAGE from '@salesforce/resourceUrl/ANANTHA_FACEIMAGE';
export const PROFILE_IMAGE = ANANTHA_FACEIMAGE

export const SOCIAL_LINKS=[
    // {
    //     type:'twitter',
    //     label:"twitter/karkra_nikhil",
    //     link:"https://twitter.com/karkra_nikhil",
    //     icon:SOCIAL+'/SOCIAL/twitter.svg'
    // },
    // {
    //     type: "facebook",
    //     label: "facebook/salesforcetroop",
    //     link: "https://facebook.com/salesforcetroop",
    //     icon: SOCIAL + '/SOCIAL/facebook.svg'
    // },
    // {
    //     type: "github",
    //     label: "github/karkranikhil",
    //     link: "https://github.com/karkranikhil",
    //     icon: SOCIAL + '/SOCIAL/github.svg'
    // },
    {
        type: "linkedin",
        label: "linkedin/AnanthaGadamsetty",
        link: "https://www.linkedin.com/in/ananth-sai-9b05a2106/",
        icon: SOCIAL + '/SOCIAL/linkedin.svg'
    },
    // {
    //     type: "trailhead",
    //     label: "trailhead/nkarkra",
    //     link: "https://trailblazer.me/id/nkarkra",
    //     icon: SOCIAL + '/SOCIAL/trailhead.svg'
    // }
]

export const USER_DETAILS={
    NAME:'Anantha Gadamsetty',
    ROLE:'Salesforce Technical Lead',
    EMAIL:'ananth12731@gmail.com',
    PHONE:'02040136754'
}

export const CAREER_SUMMARY={
    HEADING:"CAREER SUMMARY",
    DESCRIPTION: "Results-oriented Salesforce Technical Lead with over 6 years of experience in designing, developing, and implementing business applications with Salesforce. Proven expertise in Salesforce CRM administration, configuration, and support, as well as designing and developing community portals. Skilled in Lightning Web Components, Apex, JavaScript, and Salesforce REST APIs. Strong knowledge of sales processes, CPQ APIs, and deployment processes using AutoRABIT and GitHub. Excellent analytical and programming skills, with experience in Telecom and Banking domains. Adept at interacting with clients, understanding requirements, and resolving issues within specified timelines. Holds certifications in Platform App Builder, Salesforce Administrator, and Platform Developer-1. Recognized for problem-solving and innovation capabilities.",
    KEYS_POINTS:[
        "Proficient in Salesforce CRM administration, configuration, and support.",
        "Designing and developing community portals.",
        "Experience with Lightning Web Components.",
        "Customizing Salesforce REST APIs.",
        "Familiarity with the sales process using CPQ APIs.",
        "Proficient in Salesforce flows and process builders.",
        "Strong knowledge in creating Apex classes and triggers.",
        "Experienced in deployment processes using AutoRABIT and GitHub.",
        "Excellent analytical and programming skills.",
    ]
}

export const EXPERIENCE_DATA={
    HEADING: "Work Experience",
    EXPERIENCES: [
        {
            ROLE: "Salesforce Technical Lead",
            COMPANY_NAME: "EROAD",
            DURATION: "Dec 2021 - Present",
            DESCRIPTION:
                "EROAD is an APAC and NA listed technology company that provides road charging, tax, compliance, and commercial services to the heavy and light commercial vehicle sectors. In this Project we are helping the EROAD to build the community portal helps users to create a case or the order request by themselves from the portal.",
            DESCRIPTION_POINTS: [
                "Designed and Developed Community cloud.",
                "Developed the Flows and LWC’s for various requirements.",
                "Designed and developed the sales process using CPQ APIs.",
                "Designed and implemented an efficient access management system for community users, enabling seamless permission management for portal users without the need for additional licenses",
                "Designed and developed a framework to create cases from the community portal.",
                "Configured knowledge Articles for customers to get required information from community portal.",
                "Involving in End –to-End testing of the Application and Bug fixing.",
                "Currently EROAD is involved in Agile way of working and having good knowledge on Agile methodology like sprint planning scrum meetings etc.",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Apex",
                    "LWC",
                    "Javascript",
                    "Flow",
                    "Rest API",
                ]
            },
        },
        {
            ROLE: "Salesforce Technical Developer",
            COMPANY_NAME: "ASB",
            DURATION: "May 2021 - Dec 2021",
            DESCRIPTION:
                "In this Project we are helping the ASB to build the advice tool that helps bankers to provide advice and recommended products to their customers. Created advice flow and Dashboards to track all the Details of the services provided, Test the connections, Log Tickets for the complaints and resolve them. Like this helping them to strengthen their customer relationship management.",
            DESCRIPTION_POINTS: [
                "Designed and implemented a robust framework to seamlessly integrate Microsoft Outlook and Salesforce, enabling efficient data synchronization and streamlined workflows",
                "Designed and Developed Advice flows.",
                "Developed the Flows and LWC’s for various requirements.",
                "Involving in End –to-End testing of the Application and Bug fixing.",
                "Currently ASB is involved in Agile way of working and having good knowledge on Agile methodology like sprint planning scrum meetings etc.,",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Apex",
                    "Salesorce Administration",
                    "Data Loader",
                    "Flow",
                ]
            }
        },
        {
            ROLE: "Salesforce Administrator",
            COMPANY_NAME: "Tech Mahindra",
            DURATION: "April 2020 - May 2021",
            DESCRIPTION:
                "Tech Mahindra is an Indian multinational information technology services and consulting company. Part of the Mahindra Group, the company is headquartered in Pune and has its registered office in Mumbai.",
            DESCRIPTION_POINTS: [
                "Created Objects, fields and Relationships.",
                "Implementing Various Profiles and Layouts.",
                "Implemented various rules, workflows, triggers, controller as per the business requirement",
                "Developed reports, dashboards, and processes to continuously monitor data quality and integrity",
                "Created Objects, fields and Relationships.",
                "Execute data loads, set up and manage security, user permissions, password resets, break/fix instructions and data access. Sustain security which will include sharing rules and security levels. Designed, create and maintain user roles, profiles, hierarchies and monitor application storage usage and archive data daily",
                "Used the sandbox for testing and migrated the code to the deployment instance after testing",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "Data Loader",
                    "Salesforce Administration",
                    "Triggers",
                ]
            }
        },
        {
            ROLE: "Siebel Developer",
            COMPANY_NAME: "Spark",
            DURATION: "March 2017 - April 2020",
            DESCRIPTION:
                "In this Project we are helping Spark Telecom to build the application that helps them to Keep track of their Customers and Services provided. Easy the processes to let Customers switch between services, providers etc. Created Dashboard to track all the Details of the services provided, Test the connections, Log Tickets for the complaints and resolve them. Like this helping them to strengthen their customer relationship management.",
            DESCRIPTION_POINTS: [
                "Configuring Siebel tools by using the workspace option provided in IP 17.",
                "Designed and Developed Views, Applets within the estimations given.",
                "Developed the workflows for various requirements.",
                "Involving in End –to-End testing of the Application and involved in Bug fixing.",
                "Worked on multiple ordering journeys.",
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    "HTML5",
                    "CSS3",
                    "Javascript",
                    "jQuery",
                    "java",
                    "SQL",
                ]
            }
        },
    ]
}


 export const EDUCATION_DATA={
     ICON: SOCIAL + '/SOCIAL/education.svg',
     HEADING: "EDUCATION",
     LIST:[
         {
             NAME: "Bachelor of Technology",
             UNIVERSITY_NAME: "PBR Vits",
             DURATION: "2012 - 2016",
         },
        //  {
        //      NAME: "Bachelor in Computer Science",
        //      UNIVERSITY_NAME: "RMIT University Melbourne",
        //      DURATION: "2006 - 2009",
        //  }
     ]
 }

 export const AWARDS_DATA={
     ICON: SOCIAL + '/SOCIAL/awards.svg',
     HEADING: "AWARDS",
     LIST: [
         {
             NAME: "Innovation Excellence Award",
             DESCRIPTION:"Presented for developing innovative solutions and implementing cutting-edge technologies within Salesforce projects, resulting in improved efficiency and business outcomes.",
         },
         {
             NAME: "Customer Success Award",
             DESCRIPTION:"Honors achievements in delivering exceptional solutions that meet and exceed customer expectations, resulting in positive feedback, increased user adoption, and measurable business outcomes.",
         },
     ]
 }

export const CERTIFICATION_DATA={
    ICON: SOCIAL + '/SOCIAL/certification.svg',
    HEADING: "CERTIFICATIONS",
    LIST: [
        {
            NAME: "Salesforce Administrator",
        },
        {
            NAME: "Salesforce Platform App Builder",
        },
        {
            NAME: "Salesforce Certified Platform Developer",
        },
        // {
        //     NAME: "Salesforce Platform App Builder",
        // },
        // {
        //     NAME: "Salesforce Einstein",
        // }
    ]
}

// export const LANGUAGES_DATA={
//     HEADING: "Languages",
//     LIST: [
//         {
//             NAME: "English",
//             LEVEL: "Native",
//         },
//         {
//             NAME: "German",
//             LEVEL: "Professional",
//         },
//         {
//             NAME: "Spanish",
//             LEVEL: "Professional",
//         },
//     ]
// }

export const SKILLS_DATA ={
    HEADING: "SKILLS & TOOLS",
    SKILLS:[
        
        {
            HEADING: "Salesforce",
            SKILLS_LIST: [
                { NAME: "Apex", LEVEL: "95"},
                { NAME: "Lightning Web Components" ,LEVEL: "95"},
                { NAME: "Triggers",LEVEL: "95"},
                { NAME: "Salesforce Flows",LEVEL: "95"},
                { NAME: "Git Hub",LEVEL: "95"},
                { NAME: "Autorabbit",LEVEL: "95"},
            ],
        },
        {
            HEADING: "FRONTEND",
            SKILLS_LIST: [
                // { NAME: "React", LEVEL: "95" },
                // { NAME: "Vue", LEVEL: "80" },
                // { NAME: "Angular", LEVEL: "75" },
                { NAME: "JavaScript(ES5/ES6/ES7/ES8)",LEVEL: "95"},
                { NAME: "HTML5/CSS3/SASS/LESS",LEVEL: "95"},
            ],
        },
        // {
        //     HEADING: "CRM/CMS",
        //     SKILLS_LIST: [
        //         { NAME: "Salesforce", LEVEL: "50" },
        //         { NAME: "Wordpress", LEVEL: "75" },
        //         { NAME: "Drupal", LEVEL: "60" },
        //     ],
        // }
    ],
    OTHERS_SKILLS:{
        HEADING: 'OTHERS',
        SKILLS_LIST: [
            "JIRA",
            "Confluence",
            "Azile",
            "Code Review",
        ]
    }
}

export const INTERESTS_DATA = {
    HEADING: "Interests",
    LIST: ["Reading", "Cooking", "Cricket"]
}