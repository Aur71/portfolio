import Sidebar from './sidebar/Sidebar'
import ToggleBtn from './ToggleBtn'

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <ToggleBtn />
      <main>{children}</main>
    </>
  )
}

export default Layout
