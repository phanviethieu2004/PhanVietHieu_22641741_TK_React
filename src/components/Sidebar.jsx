import { ChevronRight } from "lucide-react"

const Sidebar = () => {
  const sidebarSections = [
    {
      title: "CƠ CẤU TỔ CHỨC",
      items: [
        { title: "LÃNH ĐẠO", link: "#" },
        { title: "CÁC PHÒNG BAN", link: "#" },
        { title: "CÁC KHOA", link: "#" },
        { title: "CÁC VIỆN", link: "#" },
        { title: "CÁC TRUNG TÂM", link: "#" },
        { title: "CÁC PHÂN HIỆU", link: "#" },
        { title: "ĐOÀN THỂ", link: "#" },
      ],
    },
  ]

  return (
    <div className="sidebar">
      {sidebarSections.map((section, index) => (
        <div key={index} className="sidebar-section">
          <div className="sidebar-title">{section.title}</div>
          <div className="sidebar-items">
            {section.items.map((item, idx) => (
              <a key={idx} href={item.link} className="sidebar-item">
                {item.title}
                <ChevronRight size={16} />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Sidebar
