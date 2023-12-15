import ProjectCard from './ProjectCard';
import '../styles/Portfolio.css';
import projectImage1 from '../assets/images/1.png';
import projectImage2 from '../assets/images/2.png';
import projectImage3 from '../assets/images/3.png';
import projectImage4 from '../assets/images/4.png';
import projectImage5 from '../assets/images/5.png';
import projectImage6 from '../assets/images/6.png';



const projects = [
    {
    name: 'PWA Project',
    image: projectImage1,
    technologies: 'Express.js, Webpack, JavaScript',
    link: 'https://infinite-shore-95091-dbb5d0e5c816.herokuapp.com/'
    },
    {
        name: 'MVC Project',
        image: projectImage2,
        technologies: 'HTML, CSS, Handlebars.js, Node.js, Express.js, MySQL',
        link: 'https://dry-harbor-91556-2dc18a24500f.herokuapp.com/'
        },
        {
            name: 'Employee Tracker',
            image: projectImage3,
            technologies: 'Express.js, Node.js, MySQL',
            link: 'https://nabil1294.github.io/Employee_Tracker/'
            },
            {
                name: 'Drinkologist',
                image: projectImage4,
                technologies: 'HTML, CSS, JavaScript',
                link: 'https://michaelepigott.github.io/Group-Project-8-25/'
                },
                {
                    name: 'Weather Dashboard',
                    image: projectImage5,
                    technologies: 'HTML, CSS, jQuery',
                    link: 'https://nabil1294.github.io/Weather_Dashboard/'
                    },
                    {
                        name: 'RecipeProject',
                        image: projectImage6,
                        technologies: 'HTML, CSS, Handlebars.js, Node.js, Express.js, MySQL',
                        link: 'https://https//thawing-sea-00451-374dc9c94032.herokuapp.com/'
                        },
                                                            

];

const Portfolio = () => {
    return (
    <div className="portfolio-container">
        {projects.map((project, index) => (
        <ProjectCard
            key={index}
            name={project.name}
            image={project.image}
            technologies={project.technologies}
            link={project.link}
        />
        ))}
    </div>
    );
};

export default Portfolio;
