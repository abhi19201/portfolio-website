import React from "react";
import Background from "../Components/iconBackground";
//import ProjectCard from "../Components/projectCard";
import Carousel from "../Components/Carousel";

export default function Projects() {
    //const [GitData, setGitData] = React.useState(null);

    // useEffect(() => {
    //     fetch("https://api.github.com/users/Abhi19201/repos")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setGitData([...data]);
    //         });
    // }, []);

    return (
        <div>
            <h1 className='project' id='project'>
                Projects
            </h1>
            <div className='iconsBackground'>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Background />
                </div>

                <Carousel />
            </div>
        </div>
    );
}

/**
    <div class="projectCard" onClick={()=>{console.log(GitData)}} >
                    {GitData!=null ? GitData.map((repo, id)=>{
                    return(
                        <ProjectCard
                        id={repo.name}
                        name={repo.name}
                        url={repo.html_url}
                    />
                    )
                    })
                    : (<ProjectCard
                        id="1"
                        name="null"
                    />)
                    }

                </div>
 */
