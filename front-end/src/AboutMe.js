import { Link } from 'react-router-dom'
import pic from './pic_of_me.png'


/**
 * A React component that represents the AboutMe page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutMe = props => {
  return (
    <>
      <h1>Hello and welcome to the About Me section!</h1>

      <p>
        My name is Abhi and here are a few things about me: 
      </p>
      <p>
      To begin with, I enjoy coding (hence why I'm taking this class). 
      </p>
      <p>
      I'm also taking OS with Yang Tang.  
      </p>
      <p>
      If anyone else is in that class, we could study/work together, I'm always down to meet a new friend.
      </p>
      <p>
      Another interest of mine is reading novels and I'm currently reading "Life of Pi".  
      </p>

      <p>
        Finally, the thing that I am MOST obsessed with is soccer.
      </p>

      <p>
        I'm a HUGE fan of the sport and could quite literally talk for days about it. 
      </p>

    <p>
        Well, that's about it for me, Thanks for reading.
    </p>
    
      <p>
        
        <img src={pic} alt="pic" />;
      </p>
      
    </>
  )
}

// make this component available to be imported into any other file
export default AboutMe
