"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null)

  const sidebarSections = [
    {
      title: "CƠ CẤU TỔ CHỨC",
      items: [
        {
          title: "LÃNH ĐẠO",
          link: "#",
          subItems: [
            { title: "Ban Giám hiệu", link: "#" },
            { title: "Hội đồng Trường", link: "#" },
            { title: "Hội đồng Khoa học và Đào tạo", link: "#" },
          ],
        },
        {
          title: "CÁC PHÒNG BAN",
          link: "#",
          subItems: [
            { title: "PHÒNG TỔ CHỨC - HÀNH CHÍNH", link: "#" },
            { title: "PHÒNG TÀI CHÍNH - KẾ TOÁN", link: "#" },
            { title: "PHÒNG KẾ HOẠCH - ĐẦU TƯ", link: "#" },
            { title: "PHÒNG ĐÀO TẠO", link: "#" },
            { title: "PHÒNG QUẢN LÝ KHOA HỌC VÀ HỢP TÁC QUỐC TẾ", link: "#" },
            { title: "PHÒNG CÔNG TÁC CHÍNH TRỊ VÀ HỖ TRỢ SINH VIÊN", link: "#" },
            { title: "PHÒNG KHẢO THÍ VÀ ĐẢM BẢO CHẤT LƯỢNG", link: "#" },
            { title: "PHÒNG QUẢN TRỊ", link: "#" },
            { title: "PHÒNG DỊCH VỤ", link: "#" },
            { title: "PHÒNG QUẢN LÝ KÝ TÚC XÁ", link: "#" },
            { title: "TẠP CHÍ KHOA HỌC VÀ CÔNG NGHỆ", link: "#" },
            { title: "NHÀ XUẤT BẢN", link: "#" },
          ],
        },
        {
          title: "CÁC KHOA",
          link: "#",
          subItems: [
            { title: "Khoa Công nghệ Thông tin", link: "#" },
            { title: "Khoa Điện - Điện tử", link: "#" },
            { title: "Khoa Cơ khí", link: "#" },
            { title: "Khoa Quản trị Kinh doanh", link: "#" },
            { title: "Khoa Kế toán - Kiểm toán", link: "#" },
            { title: "Khoa Ngoại ngữ", link: "#" },
            { title: "Khoa Công nghệ Hóa học", link: "#" },
            { title: "Khoa Công nghệ May và Thời trang", link: "#" },
            { title: "Khoa Xây dựng", link: "#" },
            { title: "Khoa Lý luận Chính trị", link: "#" },
          ],
        },
        {
          title: "CÁC VIỆN",
          link: "#",
          subItems: [
            { title: "Viện Công nghệ HCM", link: "#" },
            { title: "Viện Khoa học Ứng dụng", link: "#" },
            { title: "Viện Đào tạo Quốc tế", link: "#" },
          ],
        },
        {
          title: "CÁC TRUNG TÂM",
          link: "#",
          subItems: [
            { title: "Trung tâm Thông tin - Thư viện", link: "#" },
            { title: "Trung tâm Ngoại ngữ - Tin học", link: "#" },
            { title: "Trung tâm Hợp tác Doanh nghiệp", link: "#" },
            { title: "Trung tâm Đào tạo Thường xuyên", link: "#" },
          ],
        },
        {
          title: "CÁC PHÂN HIỆU",
          link: "#",
          subItems: [
            { title: "Phân hiệu Quảng Ngãi", link: "#" },
            { title: "Phân hiệu Thanh Hóa", link: "#" },
          ],
        },
        {
          title: "ĐOÀN THỂ",
          link: "#",
          subItems: [
            { title: "Đảng ủy", link: "#" },
            { title: "Công đoàn", link: "#" },
            { title: "Đoàn Thanh niên", link: "#" },
            { title: "Hội Sinh viên", link: "#" },
          ],
        },
      ],
    },
  ]

  const handleItemClick = (itemTitle) => {
    if (activeItem === itemTitle) {
      setActiveItem(null)
    } else {
      setActiveItem(itemTitle)
    }
  }

  // Find the active item's data
  const activeItemData = activeItem ? sidebarSections[0].items.find((item) => item.title === activeItem) : null

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        {sidebarSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="sidebar-section">
            <div className="sidebar-title">{section.title}</div>
            <div className="sidebar-items">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`sidebar-item ${activeItem === item.title ? "active" : ""}`}
                  onClick={() => handleItemClick(item.title)}
                >
                  <span>{item.title}</span>
                  <ChevronRight size={16} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {activeItemData && (
        <div className="sidebar-submenu-panel">
          <div className="submenu-header">
            <img src="/logo-small.png" alt="IUH Logo" className="submenu-logo" />
            <span className="submenu-title">{activeItemData.title}</span>
          </div>
          <div className="submenu-items-grid">
            {activeItemData.subItems.map((subItem, index) => (
              <a key={index} href={subItem.link} className="submenu-item">
                {subItem.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar
