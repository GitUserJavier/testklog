import React, { useState, useEffect } from "react";
import { Container, Grid, GridColumn, Image, Input} from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";
import search from "../../../pages/search";

export default function TopBar(){
    return(
        <div className="top-bar">
            <Container>
                <Grid className="top-bar">
                     <Grid.Column width={8} className="top-bar__left">
                       <Logo />
                     </Grid.Column>
                     <Grid.Column width={8} className="top-bar__right">
                        <SearchIma />
                     </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}

function Logo(){
    return (
        <Link href="/">
            <a>
            <Image src="/logo.png" alt="klog"/>
            </a>
        </Link>
    );
}

function SearchIma(){
    const [searchStr, setSearchStr ] = useState("");
    const [load, setLoad] = useState(false);
    const router = useRouter();
    
    useEffect(() => {
        if(load) {
            router.push(`/search?query=${searchStr}`);
        }
        setLoad(true);
    }, [searchStr]
    );

    return(
    <Input
     id="search" 
     icon={{ name: "search"}} 
     value={router.query.query} 
     onChange={(_, data)=> setSearchStr(data.value)}  
     />
    );
}