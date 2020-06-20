import React from 'react';

export const DisplayType = (props) => {

    const types = props.disease.subdiseases.map((item) => {
        return (
            <div className="card makeitflex m-2 mr-0">
                <div className="card-body">
                    <div className="card-title"><strong>{item.title}</strong></div>
                    <p className="card-text">{item.description}</p>
                </div>
            </div>
        );
    })

    const RenderTypes = () => {
        if(props.disease.subdiseases == null)
            return <div></div>
        else
            return <div>{props.disease.title}</div>;
    }

    return (
         <RenderTypes />
    );
}