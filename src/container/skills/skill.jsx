import Css from '../../assets/icons/css.svg'
import Git from '../../assets/icons/git.svg'
import Github from '../../assets/icons/github.svg'
import Html5 from '../../assets/icons/html5.svg'
import Js from '../../assets/icons/js.svg'
import Next from '../../assets/icons/next.svg'
import React from '../../assets/icons/react.svg'
import Redux from '../../assets/icons/redux.svg'
import Sass from '../../assets/icons/sass.svg'

const Skill = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 tracking-wider">
      <div className="skillItem">
        <img src={Js} alt="" />
        <h4>Javascript</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          in.
        </p>
      </div>
      <div className="skillItem">
        <img src={React} alt="" />
        <h4>React</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          in.
        </p>
      </div>
      <div className="skillItem">
        <img src={Redux} alt="" />
        <h4>Redux</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          in.
        </p>
      </div>
      <div className="skillItem">
        <img src={Next} alt="" />
        <h4>Next Js</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          in.
        </p>
      </div>
      <div className="skillItem">
        <img className="" src={Html5} alt="" />
        <h4 className="">Html</h4>
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          in.
        </p>
      </div>
      <div className="skillItem">
        <img src={Css} alt="" />
        <h4>Css</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          in.
        </p>
      </div>
      <div className="skillItem">
        <img src={Sass} alt="" />
        <h4>Sass</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          in.
        </p>
      </div>

      <div className="skillItem">
        <img src={Git} alt="" />
        <h4>Git</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          in.
        </p>
      </div>
      <div className="skillItem">
        <img src={Github} alt="" />
        <h4>GitHub</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          in.
        </p>
      </div>
    </div>
  )
}

export default Skill
