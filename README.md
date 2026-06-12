# Trần Nam Dương — Portfolio (Next.js)

Portfolio cá nhân & dịch vụ freelance, dark mode, hiệu ứng động bằng Framer Motion, hỗ trợ song ngữ Việt/Anh.

## Chạy thử local

```bash
npm install
npm run dev
```

Mở http://localhost:3000

## Build production

```bash
npm run build
npm run start
```

## Deploy

Có thể deploy miễn phí lên **Vercel** (đơn vị tạo ra Next.js):
1. Đẩy code lên GitHub.
2. Vào https://vercel.com → New Project → chọn repo → Deploy.

## Chỉnh sửa nội dung

Toàn bộ nội dung được tách riêng để dễ chỉnh sửa, không cần đụng vào code giao diện:

- `lib/translations.ts` — toàn bộ văn bản (tiêu đề, mô tả, bio...) cho cả 2 ngôn ngữ Việt (`vi`) và Anh (`en`).
- `lib/data.ts` — danh sách kỹ năng (`skillGroups`), dự án (`projects`), thông tin liên hệ (`contactInfo`), nhật ký deploy ở hero (`deployLogEntries`).

### Thêm/sửa dự án
Sửa mảng `projects` trong `lib/data.ts`. Mỗi dự án cần:
- `name`: tên dự án
- `url`: link website (hoặc `null` nếu chưa ra mắt)
- `category`: nhãn lĩnh vực (vi/en)
- `description`: mô tả ngắn (vi/en)
- `tags`: công nghệ/loại sản phẩm

Ảnh thumbnail dự án được lấy tự động từ ảnh chụp website thật qua `image.thum.io` dựa trên `url`.

### Thêm/sửa kỹ năng
Sửa `skillGroups` trong `lib/data.ts`. Icon dùng theo class của Devicon (đã include sẵn qua CDN tại devicon.dev).

### Sửa thông tin liên hệ / avatar
Sửa `contactInfo` trong `lib/data.ts` (email, số điện thoại, ảnh đại diện).

> Lưu ý: link ảnh avatar hiện đang lấy từ Facebook CDN — link này có thể hết hạn theo thời gian. Nên thay bằng ảnh tự upload vào thư mục `public/` và sửa `avatar` thành `/ten-anh.jpg`.

## Cấu trúc

- `app/layout.tsx` — layout gốc, font, metadata SEO.
- `app/page.tsx` — ghép các section.
- `components/` — Nav, Hero (kèm DeployLog signature), About, Skills, Projects, Services, Contact, Footer.
- `context/LanguageContext.tsx` — quản lý chuyển ngôn ngữ Việt/Anh (lưu trong localStorage).
- `app/globals.css` — design tokens (màu, font, dark mode).

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion
