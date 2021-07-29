/*import React from 'react'
import { Image, Grid } from 'semantic-ui-react';
import Link from "next/link";
import { map } from "lodash";

export default function ListImages (props) {
    const { images } = props;
    
    return (
        <div className="list-games">
            {map(images, (images) =>(
                <Imagen imagen={imagen} />
            ))}
        </div>
    )
}

function Imagen(props){
    const { imagen } = props;

    return <h3>Imagen</h3>
}*/

const ListImages = ({ downsized_medium: {url}}) =>{
    return(
        <Li className="my-2 nr-2 max-w-md w-auto h-auto list-none cursor-pointer">
            <img
                className="rounded-lg transition duration-500 ease-in-out transform hover: -translate-y-1 hover:scale-105"
                src={url}
            ></img>
        </Li>
    )
}

export default ListImages;