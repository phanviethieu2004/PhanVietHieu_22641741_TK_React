const Footer = () => {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4 className="footer-title">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</h4>
              <p>Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, TP. HCM</p>
              <p>Điện thoại: (028) 38940390</p>
              <p>Fax: (028) 38946268</p>
              <p>Email: dhcn@iuh.edu.vn</p>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">LIÊN KẾT</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Bộ Công Thương</a>
                </li>
                <li>
                  <a href="#">Bộ Giáo dục và Đào tạo</a>
                </li>
                <li>
                  <a href="#">Cổng thông tin sinh viên</a>
                </li>
                <li>
                  <a href="#">Thư viện</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">KẾT NỐI VỚI CHÚNG TÔI</h4>
              <div className="social-links">
                <a href="#" className="social-link">
                  Facebook
                </a>
                <a href="#" className="social-link">
                  Youtube
                </a>
                <a href="#" className="social-link">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="copyright">© 2025 Đại học Công nghiệp TP. Hồ Chí Minh. All rights reserved.</div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  