import React from 'react';

const Reacharch = ({re}) => {
    return (
        <div className="mb-3">
            <h2>Name:{re.research_title}</h2>
            <p>Date:{re.research_date}</p>
            <p>Description:{re.research_description}</p>
        </div>
    );
};

export default Reacharch;