import { ScrollControls, Scroll } from "@react-three/drei";
import { color } from "framer-motion";
import React from "react";

export default function Portfolio(){
    return(
        <>
        <ScrollControls pages={5}>
            <Scroll html>
                <h style={{position: "absolute", fontSize: '10vh', color: 'white'}}>Haalz</h>
            </Scroll>
        </ScrollControls>
        </>
    )
}