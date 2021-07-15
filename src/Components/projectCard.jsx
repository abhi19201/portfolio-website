import React from 'react'


export default function projectCard({id, name, url}) {



    return (
            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <span className="stars"></span>
                        <h2 className="java">{id}</h2>
                        <p className="java">Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>
                    </div>
                </div>
            <div className="face face2">
                <h2>{name}</h2>
                <div className="icon" >
                    <i className="fab fa-github fa-3x"  onClick={()=>{window.open(url, "_blank")}}></i>
                </div>
            </div>
            </div>

    )
}
