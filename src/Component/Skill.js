import React from 'react';
import skill from './data/skill.json';

const Skill = () => {
    return (
        <>
            <div className='container skill' id='skills'>
                <h1>SKILLS</h1>
                <div className='items'>
                    {
                        skill.map((data) => {
                            console.log(data.title); // Debugging के लिए

                            // JSX को return करें
                            return (

                                <div className='item' key={data.id}
                                    data-aos='flip-left'
                                    data-aos-duration="1000">
                                    <img src={`/asets/${data.imageSrc}`} alt={data.title} />
                                    <h3>{data.title}</h3>
                                </div>

                            );
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Skill;
