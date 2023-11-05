import { images } from '../../constants'

// import { motion } from 'framer-motion'
import { Fade } from 'react-reveal'

const Skill = () => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 tracking-wider"
      // whileInView={{ opacity: [0, 1] }}
      // transition={{ duration: 0.5 , delay: 2}}
    >
      <Fade left>
        <div className="skillItem">
          <img src={images.Js} alt="" />
          <h4>Javascript</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium, in.
          </p>
        </div>
      </Fade>
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
      <Fade bottom>
        <div className="skillItem">
          <img src={images.Redux} alt="" />
          <h4>Redux</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium, in.
          </p>
        </div>
      </Fade>
      <Fade right>
        <div className="skillItem">
          <img src={images.Next} alt="" />
          <h4>Next Js</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium, in.
          </p>
        </div>
      </Fade>
      <Fade left>
        <div className="skillItem">
          <img className="" src={images.Html5} alt="" />
          <h4 className="">Html</h4>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium, in.
          </p>
        </div>
      </Fade>
      <Fade bottom>
        <div className="skillItem">
          <img src={images.Css} alt="" />
          <h4>Css</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium, in.
          </p>
        </div>
      </Fade>
      <Fade top>
        <div className="skillItem">
          <img src={images.Sass} alt="" />
          <h4>Sass</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium, in.
          </p>
        </div>
      </Fade>
      <Fade right>
        <div className="skillItem">
          <img src={images.Git} alt="" />
          <h4>Git</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium, in.
          </p>
        </div>
      </Fade>
      {/* <div className="skillItem">
        <img src={images.Github} alt="" />
        <h4>GitHub</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          in.
        </p>
      </div> */}
    </div>
  )
}

export default Skill
