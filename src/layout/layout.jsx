import Footer from '../shared/footer'
import Navbar from '../shared/navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
