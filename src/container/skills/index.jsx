import Skill from './skill'

const array = [1, 2, 3, 4, 5, 6, 7, 8]

const Skills = () => {
  return (
    <>
      <section className="py-16">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-semibold tracking-wider uppercase">
            My Skills
          </h2>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {array.map((item, index) => (
            <Skill key={index} item={item} />
          ))}
        </div>
      </section>
      <hr />
    </>
  )
}

export default Skills
