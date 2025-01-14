import { motion } from "framer-motion"



// const projectsData =[
//   {
//     image:"https://i.ibb.co/dr1NKbD/image1.jpg",
//     title:"NOW-NOW-APP",
//     description:"NowNow is a mobile app that makes your life easier when you want to send money receive money and pay bills on your terms",
//     links:"https://ucheson235.github.io/NOW-NOW-APP/",
//     technology:["HTML","CSS","JavaScript"]


//   },
//   {
//     image:"https://i.ibb.co/5rmYhzj/foodie-img.jpg",
//     title:"Food.com",
//     description:"food.com your go to destination for good food and free booking and delivery, we are dedicated to bringing you a seamless dining experience, whether you are planning a cozy meal at home or a grand celebration. food.com connects you with a diverse range of food to a satisfy every craving.",
//     links:"https://ucheson235.github.io/food.com/",
//     technology:["HTML","CSS","JavaScript"]


//   },
//   {
//     image:"https://i.ibb.co/71ky0Zr/image3.jpg",
//     title:"PAY-ME-APP",
//     description:"Pay-Me is an innovative web application designed to facilitate secure transactions between buyers and sellers by holding payments in a secure wallet until goods or services have been successfully delivered and verified. This platform aims to build trust, enhance customer satisfaction, and boost sales by mitigating the risk of scams and substandard products.",
//     links:"https://ucheson235.github.io/PAY-ME-APP/",
//     technology:["HTML","CSS","JavaScript"]


//   },
//   {
//     image:"https://i.ibb.co/F3Gt16y/image4.jpg",
//     title:"Money",
//     description:"experience seamless money management, achieve your financial goals, and delve investment with quick and easy account opening-process",
//     links:"https://ucheson235.github.io/Money/",
//     technology:["HTML","CSS","JavaScript"]


//   },
//   {
//     image:"https://i.ibb.co/X4s8RNs/image5.jpg",
//     title:"Money",
//     description:"Procrastination is a web app that help user keep track with their daily tasks",
//     links:"https://ucheson235.github.io/Procrastination/",
//     technology:["HTML","CSS","JavaScript"],


//   },

// ]

// const ProjectCard = (project) => {
//   return (
//     <div className="flex flex-col items-center gap-8 md:flex-row
//     md:gap-24">
//        <img src={project.image} alt="" className="w-full cursor-pointer
//        rounded-2xl transition-all duration-300
//        hover:scale-105 md:w-[300px]" />
//        <div className="flex flex-col gap-5">
//           <div className="flex flex-col gap-3">
//             <div className="text-xl font-semibold">{project.title}</div>
//             <p className="text-gray-400">{project.description}</p>
//           </div>
//           <div className="flex flex-wrap gap-5">
//            {
//             project.technology.map((tech, index) =>{
//               <span key={index} className="rounded-lg bg-black
//               p-3">
//                 {tech}
//               </span>
//             })
//            }
//           </div>
//        </div>
//     </div>
//   )


// }

// const Projects = () => {
//   return (
//     <div id="Projects"  className="flex min-h-screen w-full 
//     flex-col items-center justify-center gap-16 p-4 md:px-14
//     md:py-24">
//     <h1 className="text-4xl font-light text-white
//     md:text-6xl"> My Projects</h1>
//     <div className="flex w-full max-w-[1000px] flex-col gap-16"></div>
//      {
//       projectsData.map((project, index) =>{
//        <ProjectCard key={index} project={project} />
//       })
//      }
//     </div>
//   )
// }

// export default Projects

const projectsData = [
  {
    image: "https://i.ibb.co/dr1NKbD/image1.jpg",
    title: "NOW-NOW-APP",
    description:
      "NowNow is a mobile app that makes your life easier when you want to send money receive money and pay bills on your terms",
    links: "https://ucheson235.github.io/NOW-NOW-APP/",
    technology: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "https://i.ibb.co/5rmYhzj/foodie-img.jpg",
    title: "Food.com",
    description:
      "food.com your go to destination for good food and free booking and delivery, we are dedicated to bringing you a seamless dining experience, whether you are planning a cozy meal at home or a grand celebration. food.com connects you with a diverse range of food to a satisfy every craving.",
    links: "https://ucheson235.github.io/food.com/",
    technology: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "https://i.ibb.co/71ky0Zr/image3.jpg",
    title: "PAY-ME-APP",
    description:
      "Pay-Me is an innovative web application designed to facilitate secure transactions between buyers and sellers by holding payments in a secure wallet until goods or services have been successfully delivered and verified. This platform aims to build trust, enhance customer satisfaction, and boost sales by mitigating the risk of scams and substandard products.",
    links: "https://ucheson235.github.io/PAY-ME-APP/",
    technology: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "https://i.ibb.co/F3Gt16y/image4.jpg",
    title: "Money",
    description:
      "experience seamless money management, achieve your financial goals, and delve investment with quick and easy account opening-process",
    links: "https://ucheson235.github.io/Money/",
    technology: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: "https://i.ibb.co/X4s8RNs/image5.jpg",
    title: "Procrastination",
    description: "Procrastination is a web app that help user keep track with their daily tasks",
    links: "https://ucheson235.github.io/Procrastination/",
    technology: ["HTML", "CSS", "JavaScript"],
  },
];

const ScrollReveal = ({children}) => {
  return(
    <motion.div
     initial={{opacity:0, y:100}}
     whileInView={{opacity:1, y:0}}
     viewport={{once:true}}
     transition={{duration:0.8}}
    >
      

     {children}
    </motion.div>

  )

}

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
     <a
       href={project.links}
       target="blank"
     >
     <div
     className="flex flex-col items-center gap-8 md:flex-row md:gap-24 w-full max-w-[1000px]"
      >
      
        
      
        <img
          src={project.image}
          alt={project.title}
          className="w-[300px] h-[200px] max-w-full cursor-pointer
                     rounded-2xl transition-all duration-300
                     hover:scale-105 object-cover"
        />
    
         
   
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl text-white font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technology.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3 text-white">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
     </a>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
    <ScrollReveal><h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>  </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
