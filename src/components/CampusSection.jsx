import { Play } from "lucide-react"

const CampusSection = ({ title, imageUrl, viewMoreLink, isVideo = false }) => {
  return (
    <div className="campus-section">
      <div className="section-header">
        <h3 className="section-title">{title}</h3>
        <a href={viewMoreLink} className="view-more">
          xem tất cả
        </a>
      </div>
      <div className="campus-image-container">
        <img src={imageUrl || "/placeholder.svg"} alt={title} className="campus-image" />
        {isVideo && (
          <div className="video-play-button">
            <Play size={24} />
          </div>
        )}
      </div>
    </div>
  )
}

export default CampusSection
