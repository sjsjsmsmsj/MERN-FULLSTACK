# 📝 Enquiry App

Ứng dụng Enquiry giúp người dùng gửi thông tin liên hệ và quản trị viên có thể xem, cập nhật và xoá các thông tin đó. Ứng dụng gồm 2 phần:
- Frontend: React.js + Flowbite + Axios + React Toastify + SweetAlert2
- Backend: Express.js + MongoDB (Mongoose)

---

## 🚀 Tính năng

✅ Gửi enquiry (Tên, Email, SĐT, Tin nhắn)  
✅ Hiển thị danh sách enquiry  
✅ Xoá enquiry  
✅ Sửa/Update enquiry  
✅ Thông báo (toast) khi thực hiện hành động  
✅ Modal xác nhận xoá với SweetAlert2

---

## 📦 Cấu trúc thư mục

.
├── client/ # React frontend
│ └── components/
│ └── enquiry/
│ ├── Enquiry.jsx
│ └── EnquiryList.jsx
│ └── App.jsx
│ └── main.jsx
├── server/ # Node.js backend
│ └── models/
│ └── enquiry.model.js
│ └── routes/
│ └── enquiry.route.js
│ └── controllers/
│ └── enquiry.controller.js
│ └── server.js
└── README.md

yaml
Sao chép
Chỉnh sửa


---

## ⚙️ Cài đặt

### 1. Backend (server)

```bash
cd server
npm install

PORT=8020
MONGO_URI=mongodb://localhost:27017/enquiry_db

npm start

🧪 API Backend
Method	Endpoint	Mô tả
GET	/api/website/enquiry/view	Lấy danh sách enquiry
POST	/api/website/enquiry/insert	Thêm mới enquiry
PUT	/api/website/enquiry/update/:id	Cập nhật enquiry theo ID
DELETE	/api/website/enquiry/delete/:id	Xoá enquiry theo ID

📸 Giao diện
<img src="https://via.placeholder.com/700x300?text=Enquiry+Form+UI" alt="UI" />
💡 Công nghệ sử dụng
Frontend:

React.js

Flowbite-React

Axios

React Toastify

SweetAlert2

Backend:

Express.js

Mongoose (MongoDB)

dotenv

👨‍💻 Tác giả
👤 Lâm Gia Thịnh

g