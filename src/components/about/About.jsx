import './About.css';
import girl from '../../assets/girl.svg';


const About = () => {
    return (
        <section id="about" className="about">
            <div className="about__content">
                <h2 className="about__title">About me</h2>
                <p className="about__paragraph">
                    I’m a software developer with a strong passion for building user-friendly and efficient web applications. I specialize in modern technologies such as React, Node.js, and UI/UX design, and I’m always focused on delivering clean, responsive, and accessible solutions.
                </p>
                <p className="about__paragraph">
                    I'm constantly learning and staying up to date with the latest trends in web development, and I enjoy working on projects that challenge me to grow both technically and creatively.
                </p>
                <a href="#" className="btn btn__light">Check my Github</a>
            </div>

            <figure className="about__figure">
                <img src={girl} className="about__picture" alt="chica-code" />
            </figure>
        </section>

    )
}

export default About