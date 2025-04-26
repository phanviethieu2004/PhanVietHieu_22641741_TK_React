import Sidebar from "./Sidebar"
import NewsSection from "./NewsSection"

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="container">
        <div className="content-grid">
          <Sidebar />
          <div className="content-sections">
            <div className="news-row">
              <NewsSection
                title="THÔNG BÁO"
                viewMoreLink="#"
                news={[
                  {
                    id: 1,
                    title: "Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2025",
                    date: "24-04-2025",
                    isNew: true,
                  },
                  {
                    id: 2,
                    title: "Thông báo tuyển chọn năm sinh tốt nghiệp đại học cho các trường quản đội",
                    date: "21-04-2025",
                    isNew: true,
                  },
                ]}
              />
              <NewsSection
                title="TUYỂN SINH"
                viewMoreLink="#"
                news={[
                  {
                    id: 1,
                    title: "Thông báo tuyển sinh đào tạo liên thông từ trình độ cao đẳng lên trình",
                    date: "28-05-2025",
                    isNew: false,
                  },
                  {
                    id: 2,
                    title: "Thông báo v/v tuyển sinh đại học văn bằng hai, đợt 1 năm 2025",
                    date: "20-03-2025",
                    isNew: false,
                  },
                ]}
              />
            </div>
            <div className="news-row">
              <NewsSection
                title="TIN TỨC - SỰ KIỆN"
                viewMoreLink="#"
                news={[
                  {
                    id: 1,
                    title: "AVEVA tài trợ gói phần mềm trị giá 180.000 đô Mỹ cho Đại học Công nghiệp",
                    date: "29-04-2025",
                    isNew: true,
                    hasImage: true,
                    imageUrl: "/news1.jpg",
                  },
                  {
                    id: 2,
                    title: "Hội nghị khoa học quốc tế BAIC 2025 lần 2 tại IUH - Sức mạnh AI trong",
                    date: "22-04-2025",
                    isNew: true,
                  },
                ]}
              />
              <NewsSection
                title="HỢP TÁC QUỐC TẾ"
                viewMoreLink="#"
                news={[
                  {
                    id: 1,
                    title: "Sôi nổi hoạt động Tuần lễ giao lưu văn hóa, khoa học sinh viên quốc",
                    date: "24-05-2025",
                    isNew: false,
                    hasImage: true,
                    imageUrl: "/news2.jpg",
                  },
                  {
                    id: 2,
                    title: "Đại học Công nghiệp TP. HCM tham gia dự án Green Edu Seeds của quỹ Erasmus",
                    date: "19-03-2025",
                    isNew: false,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent
