export default function Products() {
    return(<>

      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-header">
            <h3 className="kpi-title">Total Students</h3>
            <div className="kpi-icon">
              <svg fill="currentColor" viewBox="0 0 20 20" width="20" height="20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
            </div>
          </div>
          <div className="kpi-value">247</div>
          <div className="kpi-change positive">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"/>
            </svg>
            +12% from last month
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-header">
            <h3 className="kpi-title">Active Assignments</h3>
            <div className="kpi-icon">
              <svg fill="currentColor" viewBox="0 0 20 20" width="20" height="20">
                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"/>
              </svg>
            </div>
          </div>
          <div className="kpi-value">18</div>
          <div className="kpi-change positive">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"/>
            </svg>
            +3 new this week
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-header">
            <h3 className="kpi-title">Attendance Today</h3>
            <div className="kpi-icon">
              <svg fill="currentColor" viewBox="0 0 20 20" width="20" height="20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
            </div>
          </div>
          <div className="kpi-value">92%</div>
          <div className="kpi-change positive">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"/>
            </svg>
            +5% from yesterday
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-header">
            <h3 className="kpi-title">Weekly Revenue</h3>
            <div className="kpi-icon">
              <svg fill="currentColor" viewBox="0 0 20 20" width="20" height="20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"/>
              </svg>
            </div>
          </div>
          <div className="kpi-value">$2,847</div>
          <div className="kpi-change negative">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"/>
            </svg>
            -8% from last week
          </div>
        </div>
      </div>
    
    
    
    </>)
    
}