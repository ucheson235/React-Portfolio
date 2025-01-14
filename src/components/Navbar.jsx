import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const menuOpen = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav
			className="fixed top-0 z-10 flex w-full items-center
    justify-center border-b border-b-gray-600 bg-black/70
    px-16 py-6 text-white backdrop-blur-md md:justify-evenly"
		>
			<a
				here="#Home"
				className="bg-gradient-to-r from-blue-500
         to-pink-500 bg-clip-text text-transparent
         opacity-80 text-3xl font-semibold transition-all duration-300
         hover:opacity-100"
			>
				Emmanuel
			</a>
			<ul className="hidden md:flex gap-10">
				<a
					href="#home"
					className="cursor-pointer opacity-70
          transition-all duration-300 hover:opacity-70"
				>
					<li>Home</li>
				</a>
				<a
					href="#tech"
					className="cursor-pointer opacity-70
          transition-all duration-300 hover:opacity-70"
				>
					<li>Tech</li>
				</a>
				<a
					href="#projects"
					className="cursor-pointer opacity-70
          transition-all duration-300 hover:opacity-70"
				>
					<li>Projects</li>
				</a>
				<a
					href="#contact"
					className="cursor-pointer opacity-70
          transition-all duration-300 hover:opacity-70"
				>
					<li>Contact</li>
				</a>
			</ul>
			<ul className="hidden md:flex gap-5">
				<a href="#">
					<li
						className="cursor-pointer text-xl opacity-70
          transition-all duration-300 hover:text-red-500
          hover:opacity-100"
					>
						<BsYoutube />
					</li>
				</a>
				<a href="https://x.com/ucheson235" target="black">
					<li
						className="cursor-pointer text-xl opacity-70
          transition-all duration-300 hover:text-sky-500
          hover:opacity-100"
					>
						<BsTwitter />
					</li>
				</a>
				<a href="https://www.linkedin.com/in/emmanuel-nwabuogor-39932a346/" target="black">
					<li
						className="cursor-pointer text-xl opacity-70
          transition-all duration-300 hover:text-blue-500
          hover:opacity-100"
					>
						<BsLinkedin />
					</li>
				</a>
				<a href="https://github.com/ucheson235">
					<li
						className="cursor-pointer text-xl opacity-70
          transition-all duration-300 hover:text-orange-500
          hover:opacity-100"
					>
						<BsGithub />
					</li>
				</a>
			</ul>
			{isOpen ? <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
       : 
       <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      }

      {isOpen && (<div className={`fixed right-0 top-[84px] flex
        h-screen w-1/2 flex-col items-start justify-start
        gap-10 border-1 border-gray-800 bg-black/90 p-12 ${isOpen ? "block" : "hidden" }`}>
        <ul className="flex flex-col gap-8">
				<a
					href="#home"
					className="cursor-pointer opacity-70
          transition-all duration-300 hover:opacity-70"
				>
					<li>Home</li>
				</a>
				<a
					href="#tech"
					className="cursor-pointer opacity-70
          transition-all duration-300 hover:opacity-70"
				>
					<li>Tech</li>
				</a>
				<a
					href="#projects"
					className="cursor-pointer opacity-70
          transition-all duration-300 hover:opacity-70"
				>
					<li>Projects</li>
				</a>
				<a
					href="#contact"
					className="cursor-pointer opacity-70
          transition-all duration-300 hover:opacity-70"
				>
					<li>Contact</li>
				</a>
			</ul>
      <ul className="flex flex-wrap gap-5">
				<a href="#">
					<li
						className="cursor-pointer text-xl opacity-70
          transition-all duration-300 hover:text-red-500
          hover:opacity-100"
					>
						<BsYoutube />
					</li>
				</a>
				<a href="https://x.com/ucheson235" target="black">
					<li
						className="cursor-pointer text-xl opacity-70
          transition-all duration-300 hover:text-sky-500
          hover:opacity-100"
					>
						<BsTwitter />
					</li>
				</a>
				<a  href="https://www.linkedin.com/in/emmanuel-nwabuogor-39932a346/" target="black">
					<li
						className="cursor-pointer text-xl opacity-70
          transition-all duration-300 hover:text-blue-500
          hover:opacity-100"
					>
						<BsLinkedin />
					</li>
				</a>
				<a href="https://github.com/ucheson235" target="black">
					<li
						className="cursor-pointer text-xl opacity-70
          transition-all duration-300 hover:text-orange-500
          hover:opacity-100"
					>
						<BsGithub />
					</li>
				</a>
			</ul>
        
         
        </div>)}
		</nav>
	);
};

export default Navbar;
