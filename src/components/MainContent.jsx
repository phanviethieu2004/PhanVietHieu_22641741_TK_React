import Sidebar from "./Sidebar"
import NewsSection from "./NewsSection"
import CampusSection from "./CampusSection"
import FooterLinks from "./FooterLinks"

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
                    title: "Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các trường quân đội",
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
                    date: "28-03-2025",
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
                    date: "25-04-2025",
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
                    date: "24-03-2025",
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

            {/* Campus Sections */}
            <div className="campus-row">
              <CampusSection title="PHÂN HIỆU QUẢNG NGÃI" imageUrl="/campus1.jpg" viewMoreLink="#" />
              <CampusSection title="CƠ SỞ THANH HÓA" imageUrl="/campus2.jpg" viewMoreLink="#" />
              <CampusSection
                title="VIDEO VÀ HÌNH ẢNH"
                imageUrl="/video-thumbnail.jpg"
                viewMoreLink="#"
                isVideo={true}
              />
            </div>

            {/* Footer Links */}
            <div className="footer-links-row">
              <FooterLinks
                title="LIÊN HỆ"
                items={[
                  { type: "text", content: "ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH" },
                  {
                    type: "text",
                    content: "Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, Thành phố Hồ Chí Minh",
                  },
                  { type: "text", content: "Điện thoại: 028 38940 390 - 100" },
                  { type: "text", content: "Tuyển sinh: 028 3985 1932 - 028 3895 5858 - 028 3985 1917" },
                  { type: "text", content: "Email: dhcn@iuh.edu.vn" },
                ]}
              />
              <FooterLinks
                title="HOẠT ĐỘNG KHÁC"
                items={[
                  { type: "link", content: "Hoạt động phục vụ cộng đồng", url: "#" },
                  { type: "link", content: "Sinh viên tình nguyện", url: "#" },
                  { type: "link", content: "CLB/Đội/Nhóm sinh viên", url: "#" },
                  { type: "link", content: "Kết nối doanh nghiệp", url: "#" },
                ]}
              />
              <FooterLinks
                title="THÔNG TIN MỞ RỘNG"
                items={[
                  { type: "link", content: "Báo chí viết về IUH", url: "#" },
                  { type: "link", content: "Khám phá IUH", url: "#" },
                  { type: "link", content: "Kỹ năng mềm", url: "#" },
                  { type: "link", content: "Bộ sưu tập", url: "#" },
                  { type: "link", content: "Dịch vụ sinh viên", url: "#" },
                ]}
              />
              <FooterLinks
                title="VĂN BẢN TIỆN ÍCH"
                items={[
                  { type: "link", content: "Quy chế-Quy định-Quy trình", url: "#" },
                  { type: "link", content: "Ba công khai", url: "#" },
                  { type: "link", content: "Biểu mẫu đào tạo", url: "#" },
                  { type: "link", content: "Quản lý khoa học", url: "#" },
                  { type: "link", content: "Phản hồi", url: "#" },
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
