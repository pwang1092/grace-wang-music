import React from 'react';
import { useState } from 'react';
import {Link} from 'react-scroll'; 
import './People.css';

const People = () => {
    return (
        <section id='people'>
            <h2 className="peopleTitle">Piano</h2>
            <span className="peopleDesc"> <h1>Education</h1>
                <p>Private Lessons with Tilly Tan (2013–Present)</p>
                <p>Completed Advanced Level of the Music Teachers Association of California’s Certificate of Merit Program (2022).
Competed in the Panel Division (2023).</p>
<br></br>
                <h2>Recognitions</h2>
                <p>Second Place, Global Music Art Competition (2024) Romantic Era Division III for Brahms’ Intermezzo in A Minor.</p>
                <p>Multiple State Honors, Branch Honors, and Convention Awards from MTAC.</p>
                <br></br>
                <h2>Selected Repertoire</h2>
                <p>Etude No. 3 in Eb Major, Frederic Chopin</p>
                <p>Prelude and Fugue No. 7 in Eb Major, J.S. Bach</p>
                <p>Sonata Pathetique Movement 1, Ludwig van Beethoven</p>
                <p>Intermezzo in A Major, Op. 118 No. 2, Johannes Brahms</p>
                <p>Hesitation Tango, Samuel Barber</p>
                <p>Piano Concerto No. 2, Movement 2, Sergei Rachmaninoff</p>
                <p>Etude No. 3, Un Sospiro, Franz Liszt</p>

</span>

        </section>
    );
}

export default People; 