import styles from '../styles/Collatz.module.css'
import React, {useEffect} from "react";
import Simulation from '../Math/Simulation.js'
function Collatz() {

    
    useEffect(() => {
        const sim = new Simulation();
        sim.setSize(window.innerWidth, window.innerHeight);
        sim.start();

        window.addEventListener('resize', () => {
            sim.setSize(window.innerWidth, window.innerHeight);
        });

        document.body.appendChild(sim.canvas);

        sim.canvas.addEventListener('click', () => {
            sim.stop();
            sim.start();
        });
    }, [])
    return (
    <div className = {styles.container}>
        
    </div>
    );
}

export default Collatz;