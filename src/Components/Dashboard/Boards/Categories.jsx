export default function Categories() {
    return(<>
    
          <table className="table">
            <thead>
              <tr>Categ
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>John Doe</strong></td>
                <td>john@example.com</td>
                <td><span className="badge badge-success">Active</span></td>
                <td>
                  <button className="btn btn-ghost" style={{padding: '0.5rem'}}>Edit</button>
                </td>
              </tr>
              <tr>
                <td><strong>Jane Smith</strong></td>
                <td>jane@example.com</td>
                <td><span className="badge badge-warning">Pending</span></td>
                <td>
                  <button className="btn btn-ghost" style={{padding: '0.5rem'}}>Edit</button>
                </td>
              </tr>
              <tr>
                <td><strong>Bob Johnson</strong></td>
                <td>bob@example.com</td>
                <td><span className="badge badge-error">Inactive</span></td>
                <td>
                  <button className="btn btn-ghost" style={{padding: '0.5rem'}}>Edit</button>
                </td>
              </tr>
            </tbody>
          </table>

    
    
    
    </>)
    
}