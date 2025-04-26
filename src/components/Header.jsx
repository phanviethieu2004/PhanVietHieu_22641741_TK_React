"use client"

import { Mail, Building2 } from "lucide-react"

const Header = ({ language, setLanguage }) => {
  return (
    <div className="header">
      <div className="top-header">
        <div className="container">
          <div className="top-links">
            <a href="#" className="top-link">
              <Building2 size={16} />
              <span>E-OFFICE</span>
            </a>
            <a href="#" className="top-link">
              <Mail size={16} />
              <span>EMAIL</span>
            </a>
            <a href="#" className="top-link">
              <span>THƯ VIỆN - THÔNG TIN</span>
            </a>
          </div>
          <div className="language-switcher">
            <a href="#" className="link">
              KẾT NỐI
            </a>
            <span className="separator">|</span>
            <a href="#" className="link">
              LIÊN HỆ
            </a>
            <button className={`lang-btn ${language === "vi" ? "active" : ""}`} onClick={() => setLanguage("vi")}>
              <img src="/vi.png" alt="Tiếng Việt" />
            </button>
            <button className={`lang-btn ${language === "en" ? "active" : ""}`} onClick={() => setLanguage("en")}>
              <img src="/en.png" alt="English" />
            </button>
          </div>
        </div>
      </div>
      <div className="main-header">
        <div className="container">
          <div className="logo-container">
            <img src="/logo.png" alt="IUH Logo" className="logo" />
            <div className="university-name">
              <div className="ministry">BỘ CÔNG THƯƠNG</div>
              <div className="university">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</div>
              <div className="slogan">Đổi mới tư duy, làm giàu thêm trí thức - đời sống</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
