import React from 'react'


export default function projectCard({id, name, url}) {



    return (
            <div class="card">
                <div class="face face1">
                    <div class="content">
                        <span class="stars"></span>
                        <h2 class="java">{id}</h2>
                        <p class="java">Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>
                    </div>
                </div>
            <div class="face face2">
                <h2>{name}</h2>
                <div className="icon" >
                    <i className="fab fa-github fa-3x"  onClick={()=>{window.open(url, "_blank")}}></i>
                </div>
            </div>
            </div>

    )
}
