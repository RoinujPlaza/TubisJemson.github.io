import { stats } from '../data'

function Stats() {
  return (
    <div className="stats">
      <div className="container stats-grid">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <div className="stat-icon" aria-hidden="true">{stat.icon}</div>
            <div>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats
