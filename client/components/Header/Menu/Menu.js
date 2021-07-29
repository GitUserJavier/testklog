import { Container, Menu , Grid, Icon, Image } from "semantic-ui-react";
import Link from "next/link";

export default function MenuWeb(){
    return (
        <div className="menu">
            <Container>
                <Grid >
                    <Grid.Column className="menu__center" width={6}>
                         <MenuPlatforms />
                    </Grid.Column>
                </Grid >    
            </Container>
        </div>
    )
}

function MenuPlatforms(){
    return(
        <Menu>
            <Link href="/test-programacion">
                <Menu.Item as="a">Test de programacion</Menu.Item>
            </Link>
        </Menu>
    )
}

