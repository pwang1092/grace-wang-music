import React from 'react';
import { useState } from 'react';
import {Link} from 'react-scroll'; 
import './Book.css';

const Book = () => {
    return (
        <section id='book'>
            <h2 className="bookTitle">Teaching</h2>
            <span className="bookBody"> 
                <h1>Shelf Indulgence Learning Center</h1>
                <p>I've taught summer literature classes for kids aged 9-14 since 2020. In all of them, I design the curriculum from scratch, creating both homework and class agendas, teaching alongside two other instructors.  
                Class presentations include topics such as literary techniques, poetic devices, elements of style such as the claim and evidence structure, and grammar.   
                To ensure that everyone can attend, the classes have both a payment and a nonpayment option.  </p>
                <br></br>
                <p>I also tutor in English, spelling, and history. I've provided one-on-one English tutoring to foreign students via zoom and tutored elementary school students in spelling and vocabulary. </p>
                <p>I've taught over 30 students from different states. If you're looking to join one of my classes or need tutoring, feel free to contact me through the form below. </p>
                <br></br>
                <p>View a sample flyer from a past class <a href="https://drive.google.com/file/d/1W2r4skdEtkDPbQXs-SWeHylkTwIlbnDs/view?usp=sharing" className="linkHref">here</a> </p>
                <br></br>


                <h1>Piano Lessons</h1>
                <p>I provide on-one-one private lessons and have been teaching for over one year. References available if needed. </p>
                {/*<h2>Recognitions</h2>
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
                <p>Etude No. 3, Un Sospiro, Franz Liszt</p>*/}

            </span>

        </section>
    );
}

export default Book; 