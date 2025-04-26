"use client"

import { useState } from "react"
import { Search, Home } from "lucide-react"

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null)

  const menuItems = [
    {
      id: "intro",
      title: "GIỚI THIỆU",
      subMenu: [
        { title: "Giới thiệu chung", link: "#" },
        { title: "Lịch sử phát triển", link: "#" },
        { title: "Sứ mạng - Tầm nhìn", link: "#" },
        { title: "Cơ cấu tổ chức", link: "#" },
        { title: "Thành tựu đạt được", link: "#" },
      ],
    },
    {
      id: "education",
      title: "ĐÀO TẠO",
      subMenu: [
        { title: "Đào tạo đại học", link: "#" },
        { title: "Đào tạo sau đại học", link: "#" },
        { title: "Đào tạo quốc tế", link: "#" },
        { title: "Đào tạo trực tuyến", link: "#" },
        { title: "Các chương trình đào tạo", link: "#" },
      ],
    },
    {
      id: "admission",
      title: "TUYỂN SINH",
      subMenu: [
        { title: "Tuyển sinh đại học", link: "#" },
        { title: "Tuyển sinh sau đại học", link: "#" },
        { title: "Tuyển sinh liên thông", link: "#" },
        { title: "Tuyển sinh quốc tế", link: "#" },
        { title: "Học phí - Học bổng", link: "#" },
      ],
    },
    {
      id: "research",
      title: "NGHIÊN CỨU",
      subMenu: [
        { title: "Đề tài nghiên cứu", link: "#" },
        { title: "Công bố khoa học", link: "#" },
        { title: "Hội nghị - Hội thảo", link: "#" },
        { title: "Tạp chí khoa học", link: "#" },
        { title: "Hợp tác nghiên cứu", link: "#" },
      ],
    },
    {
      id: "students",
      title: "SINH VIÊN",
      subMenu: [
        { title: "Thông tin sinh viên", link: "#" },
        { title: "Hoạt động sinh viên", link: "#" },
        { title: "Học bổng - Hỗ trợ", link: "#" },
        { title: "Câu lạc bộ sinh viên", link: "#" },
        { title: "Cựu sinh viên", link: "#" },
      ],
    },
    {
      id: "lecturers",
      title: "GIẢNG VIÊN",
      subMenu: [
        { title: "Đội ngũ giảng viên", link: "#" },
        { title: "Hoạt động giảng dạy", link: "#" },
        { title: "Nghiên cứu khoa học", link: "#" },
        { title: "Đào tạo - Bồi dưỡng", link: "#" },
      ],
    },
    {
      id: "diploma",
      title: "VĂN BẰNG",
      subMenu: [
        { title: "Tra cứu văn bằng", link: "#" },
        { title: "Quy định văn bằng", link: "#" },
        { title: "Cấp bản sao văn bằng", link: "#" },
      ],
    },
  ]

  const handleMouseEnter = (id) => {
    setActiveMenu(id)
  }

  const handleMouseLeave = () => {
    setActiveMenu(null)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-container">
          <div className="nav-menu">
            <a href="#" className="home-link">
              <Home size={18} />
            </a>
            {menuItems.map((item) => (
              <div
                key={item.id}
                className={`nav-item ${activeMenu === item.id ? "active" : ""}`}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#" className="nav-link">
                  {item.title}
                </a>
                {activeMenu === item.id && (
                  <div className="submenu">
                    {item.subMenu.map((subItem, index) => (
                      <a key={index} href={subItem.link} className="submenu-item">
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="search-box">
            <input type="text" placeholder="Tìm kiếm" />
            <button className="search-btn">
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
