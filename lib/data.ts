export type Skill = {
  name: string;
  icon: string; // devicon class suffix
  colored?: boolean;
};

export const skillGroups: { key: "frontend" | "backend" | "tools"; skills: Skill[] }[] = [
  {
    key: "frontend",
    skills: [
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
      { name: "Figma", icon: "devicon-figma-plain colored" },
    ],
  },
  {
    key: "backend",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "NestJS", icon: "devicon-nestjs-plain colored" },
      { name: "Express", icon: "devicon-express-original" },
      { name: "PHP", icon: "devicon-php-plain colored" },
      { name: "WordPress", icon: "devicon-wordpress-plain" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
    ],
  },
  {
    key: "tools",
    skills: [
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "GitLab", icon: "devicon-gitlab-plain colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
    ],
  },
];

export type Project = {
  name: string;
  url: string | null;
  status: "deployed" | "in_progress";
  category: { vi: string; en: string };
  description: { vi: string; en: string };
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Bách Việt Polytechnic",
    url: "https://www.bachvietpolytechnic.edu.vn/",
    status: "deployed",
    category: { vi: "Giáo dục", en: "Education" },
    description: {
      vi: "Website giới thiệu trường nghề: ngành học, tin tức, tuyển sinh và thông tin liên hệ cho học viên.",
      en: "Vocational school website covering programs, news, admissions and contact information for students.",
    },
    tags: ["WordPress", "PHP", "SEO"],
  },
  {
    name: "Mate Made",
    url: "https://matemade.vn/",
    status: "deployed",
    category: { vi: "Thương hiệu túi xách", en: "Bag brand" },
    description: {
      vi: "Website thương hiệu túi xách Mate Made: trưng bày sản phẩm, bộ sưu tập và câu chuyện thương hiệu.",
      en: "Brand website for Mate Made bags: product showcase, collections and brand story.",
    },
    tags: ["E-commerce", "UI/UX", "Responsive"],
  },
  {
    name: "Thăng Long Land",
    url: "https://thanglongland.com.vn/",
    status: "deployed",
    category: { vi: "Bất động sản", en: "Real estate" },
    description: {
      vi: "Website bất động sản: danh sách dự án, thông tin chủ đầu tư và kênh liên hệ tư vấn cho khách hàng.",
      en: "Real estate website featuring project listings, developer information and consultation contact channels.",
    },
    tags: ["WordPress", "PHP", "Landing Page"],
  },
  {
    name: "Pippip Taxi",
    url: "https://pippip.vn/",
    status: "deployed",
    category: { vi: "Dịch vụ vận chuyển", en: "Ride-hailing service" },
    description: {
      vi: "Website giới thiệu dịch vụ taxi Pippip: vùng phủ sóng, bảng giá, tải app và thông tin liên hệ tổng đài.",
      en: "Marketing site for Pippip Taxi: coverage areas, pricing, app download links and hotline contact.",
    },
    tags: ["Landing Page", "Responsive"],
  },
  {
    name: "Nhà hàng Vị An",
    url: "https://nhahangvian.com/",
    status: "deployed",
    category: { vi: "Nhà hàng & F&B", en: "Restaurant & F&B" },
    description: {
      vi: "Website nhà hàng Vị An: thực đơn, không gian, đặt bàn và thông tin liên hệ.",
      en: "Restaurant website for Vi An: menu, ambience, table booking and contact details.",
    },
    tags: ["Landing Page", "SEO", "Responsive"],
  },
  {
    name: "Mita Medical Tourism",
    url: null,
    status: "in_progress",
    category: { vi: "Du lịch y tế", en: "Medical tourism" },
    description: {
      vi: "Web app cho dịch vụ du lịch y tế: thông tin gói khám, đặt lịch và quản lý hồ sơ khách hàng. Đang trong quá trình hoàn thiện.",
      en: "Web app for a medical tourism service: package info, appointment booking and customer records. Currently in development.",
    },
    tags: ["Next.js", "NestJS", "Web App"],
  },
];

export const contactInfo = {
  email: "damchua2411@gmail.com",
  phone: "0356 241 101",
  phoneRaw: "0356241101",
  phone2: "0972 120 728",
  phoneRaw2: "0972120728",
  avatar:
    "https://scontent.fhan17-1.fna.fbcdn.net/v/t1.6435-9/76216446_3038441466381944_194504418702393344_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s960x960&_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHDLxRfR-INL2IJ-KGfTy2Rn0FVXFblU-OfQVVcVuVT49vms1q9FCxc6ls55S-otDpduR9JQO3P0-voirMqlXXa&_nc_ohc=8SbT-pIvmioQ7kNvwFAruPV&_nc_oc=AdpzyU3FlpniWD--1WjqAyA4MyZ-5UTdSLt8jBeyXnpwF9kETRkBUiixknv6B6it2-U&_nc_zt=23&_nc_ht=scontent.fhan17-1.fna&_nc_gid=7WsNQBvJ9X50jEzpbFyZGA&_nc_ss=7b2a8&oh=00_Af8D1dK20LuqdKvo62uVPxHTmF-lAYJJJvOBIzICP5SOFw&oe=6A53081A",
};

