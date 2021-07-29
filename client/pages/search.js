import React, { useState, useEffect} from "react";
//import { Container, Loader } from "semantic-ui-react";
import { useRouter } from "next/router"
import { size, map } from "lodash";
import BasicLayout from "../layouts/BasicLayout";
import ListImages from "../components/ListImages/ListImages";
import SearchIma from "../components/Header/TopBar/TopBar";
import Container from "../components/container";

function SearchI({ ima: { data } }) {
    return (
        <Container>
            <ul className="flex flex-wrap">
                { data.map.map(({ id, images }) => (
                    <ListImages key={id} { ... images}></ListImages>
                ))} 
            </ul>
        </Container>
    );
}


export async function getStaticProps(){
    try{
        const q = SearchIma;
        const apiKey= 'rGEzVxG4jTXY0086udoyIsty2Uvskb7QBs0GxYw_9nU'
        const url = `https://api.unsplash.com/search/photos?page=1&query=${q}&apiKey=${apiKey}&limit=12`;
        const response = await fetch(url);
        /*const result = await response.json();
        return result;*/
        const ima = await response.json();
        return{
            props: {
                ima,
            },
        };
    }catch (error){
        console.log(error);
        return null;
    };
}

export default SearchI;

/* export default function search(){
    const [image, setImage, images] = useState(null);
    const {query} = useRouter();
    useEffect(() => {
        document.getElementById("search").focus();
    }, []);
    useEffect(() => {
        (async () => {
            if(size(query.query) > 0) {
                const response = await searchImage(query.query);
                console.log(response);
                console.log(image);
            }else{
                setImage([])
            }
        })()
    }, [query])

    
    return(
        <BasicLayout className="search">
            {!image && <Loader active>Buscando imagenes</Loader>}
            {image && size(image) == 0 && (
                <div>
                    <h3>No se han encontrado imagenes</h3>
                </div>
            )}
            {size(image) != null && <ListImages image={images}/>}
                <div>
                    <h3>Si se han encontrado imagenes</h3>
                </div>
        </BasicLayout>  
    );
}
*/


