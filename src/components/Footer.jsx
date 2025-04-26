import { Facebook, Twitter, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-logo">
            <img src="/img/logo.png" alt="IUH Logo" className="footer-logo-img" />
          </div>
          <div className="footer-stats">
            <div className="stats-item">
              <span className="stats-label">Số lượt truy cập:</span>
              <span className="stats-value">288,835,373</span>
            </div>
            <div className="stats-item">
              <span className="stats-label">Hôm nay:</span>
              <span className="stats-value">21,726</span>
            </div>
            <div className="stats-item">
              <span className="stats-label">Đang xem:</span>
              <span className="stats-value">86</span>
            </div>
          </div>
          <div className="footer-social">
            <span className="social-label">Chia sẻ</span>
            <div className="social-icons">
              <a href="#" className="social-icon facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon linkedin">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© Bản quyền 2015 - Đại học Công nghiệp Thành phố Hồ Chí Minh</p>
          <p className="copyright-note">
            Mọi hành động sử dụng nội dung đăng tải trên Website iuh.edu.vn phải có sự đồng ý bằng văn bản của Đại học
            Công nghiệp Thành phố Hồ Chí Minh.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
