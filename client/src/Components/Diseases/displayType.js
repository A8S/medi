import React from 'react';

export const DisplayType = (props) => {

    const types = props.disease.type.map((item) => {
        return (
            <div className="card makeitflex m-2 mr-0">
                <div className="card-body">
                    <div className="card-title"><strong>{item.title.name}</strong></div>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt elit, sed do eiusmod tempor incididunt</p>
                </div>
            </div>
        );
    })

    const RenderTypes = () => {
        if(props.disease.type == null)
            return <div></div>
        else
            return types;
    }

    return (
        <RenderTypes />
    );
}