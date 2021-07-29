import React from "react";
import { Image } from "semantic-ui-react";
import BasicLayout from "../layouts/BasicLayout/BasicLayout";

import Link from "next/link";


 export default function Test() {
  return (
      <BasicLayout>
        <h1>Test de Programacion</h1>
        <TestProgramacion/>
      </BasicLayout> 
     
  )
} 

function TestProgramacion(){
    return (
        <Link href="/">
            <a>
            <Image src="/test.png" alt="pdf"/>
            </a>
        </Link>
    );
}