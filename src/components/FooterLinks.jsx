const FooterLinks = ({ title, items }) => {
    return (
      <div className="footer-links-section">
        <h3 className="footer-links-title">{title}</h3>
        <div className="footer-links-content">
          {items.map((item, index) =>
            item.type === "text" ? (
              <p key={index} className="footer-text">
                {item.content}
              </p>
            ) : (
              <a key={index} href={item.url} className="footer-link">
                {item.content}
              </a>
            ),
          )}
        </div>
      </div>
    )
  }
  
  export default FooterLinks
  