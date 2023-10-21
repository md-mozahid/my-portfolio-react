import Data from '../../../data/educationsData'
import Resume from './singleEducation'

const Education = () => {
  return (
    <div className="grid grid-cols-2 gap-10 w-[1000px] m-auto">
      {Data.map((resume, index) => {
        return <Resume key={index} resume={resume} />
      })}
    </div>
  )
}

export default Education
