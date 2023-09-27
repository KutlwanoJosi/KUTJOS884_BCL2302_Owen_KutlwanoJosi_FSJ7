import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/kutlwano.jpg'
          alt='Kutlwano'
          width={300}
          height={300}
        />
      </div>
      <h1>I am Kutlwano Josi</h1>
      <p>
      Welcome to my corner of the digital world! I'm a junior software developer on a mission to explore the ever-evolving 
      realm of code and technology. Join me on this exciting journey as I share my experiences, insights, and discoveries in the 
      world of software development. Whether you're a fellow developer, a tech enthusiast, or just curious about the tech landscape, 
      there's something here for you. Let's dive into the world of coding, problem-solving, and innovation together!
      </p>
    </section>
  );
}

export default Hero;
