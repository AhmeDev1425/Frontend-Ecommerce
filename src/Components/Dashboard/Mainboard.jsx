import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"


export default function Mainboard() {
    return(<>
    <main class="main-content">

      <section className="card" style={{marginBottom: '2rem'}}>
        <h2>Welcome Sir .</h2>
        <div className="tabs">
          <ul className="tab-list">
            <Link to="/admin/mainboard/">
              <li><button className="tab-button active">Overview</button></li>
            </Link>
            <Link to="/admin/mainboard/users">
              <li><button className="tab-button active">Users</button></li>
            </Link>
            <Link to="/admin/mainboard/products">
              <li><button className="tab-button active">Products</button></li>
            </Link>
            <Link to="/admin/mainboard/categories">
              <li><button className="tab-button active">Categories</button></li>
            </Link>
            <Link to="/admin/mainboard/brands">
              <li><button className="tab-button active">Brands</button></li>
            </Link>
            <Link to="/admin/mainboard/orders">
              <li><button className="tab-button active">Orders</button></li>
            </Link>
          </ul>
        </div>
        <div style={{padding: '1rem 0'}}>
                <Outlet />
        </div>
      </section>

    </main>
    
    </>)
    
}
