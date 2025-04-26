const NewsSection = ({ title, viewMoreLink, news }) => {
    return (
      <div className="news-section">
        <div className="section-header">
          <h3 className="section-title">{title}</h3>
          <a href={viewMoreLink} className="view-more">
            xem tất cả
          </a>
        </div>
        <div className="news-list">
          {news.map((item) => (
            <div key={item.id} className="news-item">
              {item.hasImage && (
                <div className="news-image">
                  <img src={item.imageUrl || "/placeholder.svg"} alt={item.title} />
                </div>
              )}
              <div className="news-content">
                <a href="#" className="news-title">
                  <span className="bullet">▶</span> {item.title}
                  {item.isNew && <span className="new-badge">new</span>}
                </a>
                <div className="news-date">{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default NewsSection
  