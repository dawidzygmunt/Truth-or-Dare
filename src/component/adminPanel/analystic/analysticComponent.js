function AnalysticTile(props) {
  return (
    <div className="sales">
      <div className="status">
        <div className="info">
          <h3>{props.title}</h3>
          <h1>{props.amount}</h1>
        </div>
        <div className="progress-circle">
          <svg>
            <circle cx='38' cy="38" r='36'></circle>
          </svg>
          <div className="percentage">
            <p>{props.percentage}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalysticTile;