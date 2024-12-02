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
                <p>During COVID-19, I started teaching literature classes for students aged 7-14 to create a community for kids aged 9-14 and foster a love for 
literature. In the three summers in which I taught the class, I designed the curricula from scratch, creating both homework and class agendas, and assigned tasks to two other teachers. 
Our lectures included topics such as literary techniques, poetic devices, elements of style such as the claim and evidence structure, and grammar. Through discussions and games, we brought fiction to life. 
Through individual presentations on the book's content, our students gained public speaking confidence. My literature classes were praised by both students and parents, with most students returning each summer.  
I always included both a payment and nonpayment option to ensure that everyone could attend. </p>
<br></br>
<p>I later expanded it into  the Shelf Indulgence Learning Center, adding tutoring in English, spelling, and history. </p>
I provided one-on-one English tutoring to foreign students via zoom and tutored elementary school students in spelling and vocabulary. For spelling, I used the Spell to Read and Write curriculum, which students appreciated for its multi-sensory approach, as opposed to rote memorization.
<p>So far, I've taught over 30 students from different states. If you're looking to join one of my classes or need tutoring, feel free to contact me through the form below. </p>
<br></br>
<p>View a sample flyer from a past class <a href="https://drive.google.com/file/d/1W2r4skdEtkDPbQXs-SWeHylkTwIlbnDs/view?usp=sharing">here</a> </p>
<br></br>
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