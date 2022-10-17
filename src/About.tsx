import React, { useEffect } from 'react'
import Greeting from './Greeting';

type Props = {}

const About = (props: Props) => {
  useEffect(() => {
    console.log('About page rendered');
  });

  return (
    <div>
      <h2>About</h2>
      <Greeting />
    </div>
  )
}

export default About