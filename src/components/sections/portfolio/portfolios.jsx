import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ProjectList from '../../../data/portfolioData'
import Button from '../../button/button'
import Portfolio from './singlePortfolio'

const Portfolios = () => {
  const [items, setItems] = useState([
    ...ProjectList.sort((a, b) => a.id - b.id),
  ])
  const location = useLocation()
  const path = location.pathname

  let projectSlice
  if (path === '/' && ProjectList.length > 3) {
    projectSlice = ProjectList.slice(0, 3)
  } else {
    projectSlice = items
  }

  return (
    <section className="max-w-full">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-semibold tracking-wider uppercase">
          My Portfolio
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectSlice.map((portfolio, index) => {
          return <Portfolio key={index} portfolio={portfolio} />
        })}
      </div>
      {path === '/' && (
        <div className="mt-10 text-center">
          <Link to="portfolio">
            <Button className="bg-rose-400 hover:px-16 transition-all">
              Show more
              <i className="fa-solid fa-arrow-right pl-2"></i>
            </Button>
          </Link>
        </div>
      )}
    </section>
  )
}

export default Portfolios
