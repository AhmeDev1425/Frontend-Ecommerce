import { Outlet } from "react-router-dom"
export default function Mainboard() {
    return(<>
    <main class="main-content">

      <section className="card" style={{marginBottom: '2rem'}}>
        <h2>Welcome Sir .</h2>
        <div className="tabs">
          <ul className="tab-list">
            <li><button className="tab-button active">Overview</button></li>
            <li><button className="tab-button">Users</button></li>
            <li><button className="tab-button">Products</button></li>
            <li><button className="tab-button">Categories</button></li>
            <li><button className="tab-button">Brands</button></li>
            <li><button className="tab-button">Orders</button></li>
          </ul>
        </div>
        <div style={{padding: '1rem 0'}}>
                <Outlet />
        </div>
      </section>

    </main>
    
    </>)
    
}
