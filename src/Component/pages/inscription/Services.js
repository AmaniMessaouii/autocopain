import React, { useEffect, useState } from 'react';
import arrow from "../../../assets/Arrow - Left.svg";
import pompe from "../../../assets/pompe.svg";
import garage from "../../../assets/garage.svg";
import panneEssences from "../../../assets/panne-essence.svg";
import panneBatterie from "../../../assets/panne-batterie.svg";
import roue from "../../../assets/roue.svg";
import bricoleur from "../../../assets/bricoleur.svg";
import ampoules from "../../../assets/ampoules.svg";
import essuiesGlaces from "../../../assets/essuies-glaces.svg";
import nettoyage from "../../../assets/nettoyage.svg";
import { useNavigate } from 'react-router-dom';

function Services() {
    const navigate = useNavigate();
    const [selectedServices, setSelectedServices] = useState([]);

    const servicesData = [
        { image: pompe, title: 'Pompe à essence' },
        { image: garage, title: 'Garage' },
        { image: panneEssences, title: 'Panne d’essence' },
        { image: panneBatterie, title: 'Panne de batterie' },
        { image: roue, title: 'Roue crevée' },
        { image: bricoleur, title: 'Bricoleur' },
        { image: ampoules, title: 'Ampoules' },
        { image: essuiesGlaces, title: 'Essuies glaces' },
        { image: nettoyage, title: 'Nettoyage véhicule' },
    ];

    useEffect(() => {
        const storedServices = JSON.parse(localStorage.getItem('selectedServices')) || [];
        setSelectedServices(storedServices);
    }, []);


    const handleServiceClick = (title) => {
        const updatedSelectedServices = selectedServices.includes(title)
            ? selectedServices.filter(service => service !== title)
            : [...selectedServices, title];

        setSelectedServices(updatedSelectedServices);
        localStorage.setItem('selectedServices', JSON.stringify(updatedSelectedServices));
    };

    const previousPage = () => {
        navigate('/info-supplementaires');
    };

    return (
        <div className='Container'>
            <div>
                <div className='flex-row align-items-center arrow-top gap-16' style={{ marginBottom: "30px" }}>
                    <img src={arrow} alt="arrow" onClick={previousPage} />
                    <h4 className='grey-color-900 title-nowrap'>Services proposées</h4>
                </div>
                <div className='flex-Column gap-24'>
                    <span className='primary-dark-color text-center paraXlargeR'>Veuillez sélectionner vos services</span>
                    <div className="services-grid">
                        {servicesData.map((item, index) => (
                            <div
                                key={index}
                                className={`flex-Column align-items-center justify-content-center gap-12 ${selectedServices.includes(item.title) ? 'selected' : ''}`}
                                onClick={() => handleServiceClick(item.title)}
                            >                               
                             <img src={item.image} alt={item.title} />
                                <span className="paraLargeB primary-dark-color text-center">
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <button type="submit" className="button-primary w-100" onClick={previousPage}>
                Valider
            </button>
        </div>
    );
}

export default Services;