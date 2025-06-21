import './Project.css';

import portfolio1 from '../../assets/web4.png';
import portfolio2 from '../../assets/web5.png';
import portfolio3 from '../../assets/web6.png';


const Project = () => {
    return (
        <section className="project" id="project">
                <h3 className="project__title">Projects</h3>
                <div className="project__cards">
                    <div className="cards">
                        <img src={portfolio1} className="card__img" alt="Proyecto" />
                        <div className="card">
                            <h4 className="card__title">Electrostation</h4>
                            <p className="card__description">Project for showing  charging stations in Quito.</p>
                            <div className="card__buttons">
                                <a href="#" className="card__category">Repository</a>
                                <a href="#" className="card__category">Demo</a>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <img src={portfolio2} className="card__img" alt="Proyecto" />
                        <div className="card">
                            <h4 className="card__title">Portfolio</h4>
                            <p className="card__description">Project to showcase my skills and abilities.</p>
                            <div className="card__buttons">
                                <a href="#" className="card__category">Repository</a>
                                <a href="#" className="card__category">Demo</a>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <img src={portfolio3} className="card__img" alt="Proyecto" />
                        <div className="card">
                            <h4 className="card__title">MaquetSmart</h4>
                            <p className="card__description">Project for selling school models.</p>
                            <div className="card__buttons">
                                <a href="#" className="card__category">Repository</a>
                                <a href="#" className="card__category">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
        </section>
    )
}

export default Project