import myPhoto from '../assets/images/myphoto.jpg';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <img src={myPhoto} alt="Mahmoud Nabil" className="about-photo" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>
        I was born on December 1st, 1994, in Alexandria, Egypt. I attended Janaklees National Schools for my early education.
        Later, I pursued my studies in the School of Business and graduated from the accounting and finance section with an excellent academic performance in May 2017. Following my graduation,
        I embarked on a rewarding professional journey, starting as a customer service and accounts manager at QNB Bank, where I honed my skills and gained valuable experience for two years. Seeking new horizons,
        I decided to move to the United States, where I explored various opportunities in different industries.
        Throughout my time in the United States, I embraced various roles and challenges across diverse job settings. 
        However, my passion for continuous learning and personal growth motivated me to take a significant step in my career.
        Determined to merge my interests in technology and business, I made the decision to return to studying.
          This led me to embark on a remarkable journey at UNC Chapel Hill Coding Bootcamp.
          Enrolling in the bootcamp provided me with an immersive and dynamic learning experience,
            equipping me with cutting-edge skills in web development and programming.
            I am now eager to apply my expertise and enthusiasm in pursuing exciting opportunities in the tech industry,
              combining my accounting and finance background with my newly acquired coding skills.
        </p>
      </div>
    </div>
  );
};

export default About;

