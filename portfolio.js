import emoji from "react-easy-emoji";

export const greetings = {
	name: "Ferdinand Charles",
	title: "Hi, I'm Charles",
	description:
		"The Software Developer, experienced in HTML, CSS, Python, C#, JavaScript and its frameworks such as react.js etc., .Net framework and most recently, Microsoft Azure cloud computing. I am a highly resourceful, flexible, innovative, and enthusiastic individual, a team player, who possesses a considerable amount of knowledge, experience, and creative skills. I am always eager to learn, be it new technologies, skills, or experiencing new cultures. I love traveling and making new connections, new food, new music. As for my journey so far? After graduated from the University with a B.sc in Industrial Physics, I have spent better part of my professional life working from one industry to another, from the Oil and gas sector, Educational sector, Banking, and finance sector to the Entertainment sector, before settling in the Tech industry as a Software Developer, a capacity I occupied after successfully obtaining crucial programming skills. My cross industry experience has given me some valuable skills, including my ability to adapt and communicate eloquently in both written and oral forms of communication, I can work both as a loner as well as a team player, critical thinking, problems solving are the kind of activities I enjoy, although I also enjoy teaching tech skills to teens in the rural areas, as a way of giving back to the community. So welcome to my portfolio, welcome to my world, I really hope you reached out because I did love to meet your acquaintance, I believe life isn’t supposed to be that hard so let’s work and have fun together. As they would say in the movies ‘Shall We Begin?’.",
	resumeLink:
		"https://drive.google.com/uc?export=download&id=1k_MI_fQCB_ZR2Rgtgy51QeXZGqqsMfAf",
};

export const openSource = {
	githubUserName: "Swizz6ix",
};

export const contact = {email: "ferdinandcharles6@gmail.com"};

export const socialLinks = {
	facebook: "https://www.facebook.com/reactwithtechandmusic/",
	instagram: "https://www.instagram.com/swizz6ix",
	twitter: "https://twitter.com/swizz6ix/status/1562548904964784128?t=fMlOuDboiHfu1Ey7a7RNoQ&s=19",
	github: "https://github.com/Swizz6ix",
	linkedin: "https://www.linkedin.com/in/ferdinand-charles-82901a87",
};

export const skillsSection = {
	title: "Skills",
	subTitle:
		"The future belongs to those who learn more skils and combine them in creative ways.",
	data: [
		{
			title: "Software Developer",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "dotnet",
					fontAwesomeClassname: "logos:dotnet",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
				{
					skillName: "Nodejs",
					fontAwesomeClassname: "logos:nodejs-icon",
				},
				{
					skillName: "ASP",
					fontAwesomeClassname: "vscode-icons:file-type-asp",
				},
				{
					skillName: "Blazor",
					fontAwesomeClassname: "simple-icons:blazor",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on the Microsoft Azure cloud platform"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				// {
				// 	skillName: "Heroku",
				// 	fontAwesomeClassname: "logos:heroku-icon",
				// },
				// {
				// 	skillName: "PostgreSQL",
				// 	fontAwesomeClassname: "logos:postgresql",
				// },
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				// {
				// 	skillName: "Docker",
				// 	fontAwesomeClassname: "logos:docker-icon",
				// },
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "logos:mongodb"
				}
				// {
				// 	skillName: "Cloudinary",
				// 	fontAwesomeClassname: "logos:cloudinary",
				// },
				// {
				// 	skillName: "Nginx",
				// 	fontAwesomeClassname: "logos:nginx",
				// },
				// {
				// 	skillName: "Sentry",
				// 	fontAwesomeClassname: "logos:sentry-icon",
				// },
			],
		},
		{
			title: "Blockchain",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience: Entry Level, in developing Smart Contract using Solidity & Ethereum"
				),
				emoji(
					"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
				),
				emoji(
					"⚡ Still new using Openzeppelin Smart Contract Standards & Chainlink Oracles"
				),
				emoji(
					"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
				),
				emoji(
					"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
				),
			],
			softwareSkills: [
				{
					skillName: "Ethereum",
					fontAwesomeClassname: "logos:ethereum",
				},
				{
					skillName: "Solidity",
					fontAwesomeClassname: "logos:solidity",
				},
				{
					skillName: "Web3js",
					fontAwesomeClassname: "logos:web3js",
				},
				{
					skillName: "Metamask",
					fontAwesomeClassname: "logos:metamask-icon",
				},
				// {
				// 	skillName: "Ganache",
				// 	fontAwesomeClassname: "logos:ganache-icon",
				// },
				{
					skillName: "Sanity",
					fontAwesomeClassname: "logos:sanity",
				}
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Cloud Computing",
		progressPercentage: "70",
	},
	{
		Stack: "Blockchain",
		progressPercentage: "50",
	},
];

export const educationInfo = [
	{
		schoolName: "ALX",
		subHeader: "Software Engineering",
		duration: "12 months",
		desc: "",
		grade: "",
		descBullets: [
			"Ubuntu, Linux, unix programming",
			"Data Structures and algorithms",
			"Reverse engineering and security",
			"Graphic Programming",
			"Object Oriented",
			"Databases",
			"Front-end"
		],
	},
	{
		schoolName: "Ebonyi State University",
		subHeader: "B.Sc Industrial Physics",
		duration: "4 years",
		desc: "",
		grade: "",
		descBullets: [
			"Foundamentals of Computer Science",
			"Basics of Programming Language",
			"Physics",
			"GeoPhysics",
			"Mathematics"
		],
	},
];

export const experience = [
	{
		role: "Software Developer",
		company: "Smart Tech Solutions",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Jan 2022 – present",
		desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Frontend Developer",
		company: "Smart Tech Solutions",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "June 2020 – 2022",
		desc: "Utilized HTML, CSS, and JavaScript to create 50+ responsive landing pages for both company and client. Mentored 8 new junior front-end developers on team in expanding JavaScript, React, and Angular skillset. Rebuilt popular applications in React and Redux with full user experience redesigned",
	},
	// {
	// 	role: "Junior Developer",
	// 	company: "Smart Tech Solutions",
	// 	companylogo: "/img/icons/common/bleedAI.jpg",
	// 	date: "Sept 2021 - Oct 2021",
	// 	desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
	// },
	// {
	// 	role: "UI/UX Designer",
	// 	company: "Wapidu",
	// 	companylogo: "/img/icons/common/wapidu.jpg",
	// 	date: "Sept 2021",
	// 	desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
	// },
];

export const projects = [
	{
		name: "Auto Mobile Website (Telsa)",
		desc: "Fully responsive automobile website with different pages, showing different models of cars and other products such as Solar Energy products. Industrial standard automations built with best practices, reusable components, redux are some of the amazing techniques employed to see this built through",
		alt: "Auto Mobile Website (Telsa)",
		img: "/img/icons/common/Tesla.png",
		github: "https://github.com/Swizz6ix/Auto-Mobile-Website-Telsa-",
		link: "https://auto-mobile-website-telsa-swizz6ix.vercel.app/"
	},
	{
		name: "Social Media Video App(Tiktok)",
		desc: "Social media Video app, built on industry standard with the famous scroll snap feature, utilizing the power of firebase to store and query the database, MUI furnishing with amazing Icons to add sleekness to the app, play, pause functionality, likes and comments enabled",
		alt: "Social Media Video App(Tiktok)",
		img: "/img/icons/common/Tik-Tok.png",
		github: "https://github.com/Swizz6ix/video-app-tik-tok-",
		link: "https://video-app-tik-tok.vercel.app/"
	},
	{
		name: "Movie Thriller App",
		desc: "Utilized TMDB API to allow users to dynamically discover newly released movies and watch thrillers directly from the app. Movies were sorted according to their genre such as Romance, Action, Horror, Documentary, etc. Demonstrating my strength of front-end development by implementing an amazing user experience using industry best practices. Technologies such as Firebase, MUI, axios, React.js, Context API (just to mention a few) were employed",
		img: "/img/icons/common/Movie-thriller-app.png",
		alt: "Movie Thriller App",
		github: "https://github.com/Swizz6ix/hulu-clone",
		link: "https://hulu-69340.web.app",
	},
	{
		name: "Covid19 tracker",
		desc: "This App allows users to keep track of the covid19 virus around the world, all thanks to disease.sh for comprehesive database, which i utilized through its API. Accessing vital informatioms such as the total number of new cases, recovery, and death per day, per country. With an ample data to play around with, I built some interesting features one of which is, to circle round the selected country on the map, with green indicating country is safe, with reduced or no new cases, and red indicates new cases on a daily and as a result country is not safe. subsequently, based on the numbers returned from querying a particular country, a line graph is plotted with curves showing if the cases in a particular country are on a raise or not. It is worth noting that this App was deployed to a rural health center to help them keep track of the virus and an increased awareness of 80%. was recorded. Some of the technologies employed include Firebase, React.js, react-leaflet, react-chartjs-2, Context API (just to mention a few) were employed",
		alt: "Covid19 tracker",
		img: "/img/icons/common/Covid-19-tracker.png",
		github: "https://github.com/Swizz6ix/covid19-tracker",
		link: "https://covid-19-tracker-5425a.web.app/",
	},
	{
		name: "e-commerce shopping app",
		desc: "Built a responsive e-commerce app using React.js that allowed users to shop, add and remove items from the cart at will, place orders, and make payments with ease, using Amazon as a reference App study. MUI was used to enhance users' experience, giving users that comfy home feeling, utilizing the power of firebase to store and query database, providing user authentication and login functionalities. Industry best practices was employed from sleek automation to payment feature, which was built using stripe that enables customers to make payments, with their cards",
		img: "/img/icons/common/Amazon.png",
		alt: "e-commerce shopping app",
		github: "https://github.com/Swizz6ix/e-commerce-app-Amazon-",
	},
	{
		name: "uniswap blockchain app",
		desc: "Built on web3 with technologies such as sanity and MetaMask, users are able to transfer and receive Ethereum in real time. Users are also able to view transaction history and get notifications in real time as transfers happen. Using industry best practices to achieve simple smart contract and excellent smooth milky looking UI with Tailwind css.",
		img: "/img/icons/common/Uniswap-blockchain-app.png",
		alt: "uniswap blockchain app",
		github: "https://github.com/Swizz6ix/uniswap-blochchain-app-nextjs",
		link: "https://uniswap-blockchain-app-nextjs-swizz6ix.vercel.app"
	},
];

export const blog = [
	{
		name: "React with Tech and Music",
		desc: "A weekly post about how the tech industry has benefited from the music industry and vice versa, it also includes weekly lessons and road maps to becoming a developer."
	},
	{
		name: "Teens, Tech and the future",
		desc: "A weekly post out young Tech CEOs and Startups, their struggles and success. And what the future holds for young teens and generations beyond them as they continue to embrace Tech Life. Is there a place for the older generations? Find out"
	}
]

export const feedbacks = [
	{
		name: "Alan Moore",
		feedback:
			"A nice fellow, successfully created and implemented my api in .Net in no time, although there was a bit slow start due some language differences I guess, but we moved pass in no time.",
	},
	{
		name: "Jessica Gomez ",
		feedback:
			"In the beginning I was a little worried but I ended up trusting him completing with his ideas, which I didn’t pay for by the way, so a sweet guy, good looking too and very understanding, my React App works perfectly, thanks for contribution.",
	},
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Ferdinand Charles",
	description:
		"Software Developer",
	author: "Ferdinand Charles",
	image: "/img/icons/common/Untitled-14.jpg",
	url: "",
	keywords: [
		"Front-end",
		"Ferdinand Charles",
		"Developer",
		"Software Developer",
		"Software",
		"Developer Portfolio ",
		"Software Engineer",
	],
}