import { images } from '../../constants'
import { Fade } from 'react-reveal'

const Skill = () => {
  return (
    <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
      <Fade top>
        <div className="skillItem">
          <img src={images.React} alt="" />
          <h4>React</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium, in.
          </p>
        </div>
      </Fade>
    </div>
  )
}

export default Skill
