export type Lang = "vi" | "en";

export const translations = {
  vi: {
    nav: {
      about: "Giới thiệu",
      skills: "Kỹ năng",
      projects: "Dự án",
      services: "Dịch vụ",
      contact: "Liên hệ",
      cta: "Bắt đầu dự án",
    },
    hero: {
      eyebrow: "Fullstack Web Developer",
      subtitle:
        "Xây dựng website, landing page và web app cho doanh nghiệp — đúng tiến độ, đúng cam kết, đúng những gì đã thống nhất.",
      ctaPrimary: "Xem dự án",
      ctaSecondary: "Liên hệ ngay",
    },
    about: {
      eyebrow: "Giới thiệu",
      paragraphs: [
        "Tôi là Dương — một lập trình viên fullstack tập trung vào việc dựng website, landing page và web app cho doanh nghiệp vừa và nhỏ, từ giáo dục, bất động sản, F&B đến thương mại điện tử và dịch vụ vận tải.",
        "Triết lý làm việc của tôi rất đơn giản: đã hứa thì làm, đã hẹn thì đúng giờ. Mọi mốc bàn giao đều được lên kế hoạch rõ ràng, báo cáo tiến độ minh bạch, không im lặng biến mất giữa dự án.",
        "Tôi làm việc trực tiếp từ thiết kế (Figma) đến triển khai thực tế với React, Next.js, NestJS, Express, WordPress — đảm bảo sản phẩm cuối vừa đẹp, vừa chạy ổn định, vừa dễ vận hành lâu dài.",
      ],
      highlightsTitle: "Vì sao khách hàng chọn tôi",
      highlights: [
        {
          title: "Làm việc chuyên nghiệp",
          desc: "Cam kết tiến độ rõ ràng, báo cáo minh bạch và đúng hạn — không để khách hàng phải chờ đợi hay đôn đốc.",
        },
        {
          title: "Fullstack thực chiến",
          desc: "Từ giao diện, backend, cơ sở dữ liệu đến triển khai server — chủ động xử lý toàn bộ chuỗi công nghệ.",
        },
        {
          title: "Uy tín & Bảo mật",
          desc: "Bảo vệ dữ liệu khách hàng, mã nguồn sạch sẽ, bảo mật theo chuẩn — đã hợp tác là giữ chữ tín.",
        },
        {
          title: "Đồng hành sau bàn giao",
          desc: "Hỗ trợ sửa lỗi, tối ưu và nâng cấp sau khi website đã lên live.",
        },
      ],
    },
    skills: {
      eyebrow: "Công nghệ",
      title: "Bộ công cụ tôi dùng để dựng sản phẩm",
      subtitle:
        "Từ thiết kế giao diện, lập trình frontend/backend, cơ sở dữ liệu đến quy trình làm việc nhóm.",
      categories: {
        frontend: "Frontend",
        backend: "Backend & Database",
        tools: "Công cụ & Triển khai",
      },
    },
    projects: {
      eyebrow: "Dự án thực tế",
      title: "Một số sản phẩm đã đưa vào vận hành",
      subtitle:
        "Các website đang chạy thực tế cho khách hàng ở nhiều lĩnh vực khác nhau.",
      visit: "Xem website",
      comingSoon: "Sắp ra mắt",
    },
    services: {
      eyebrow: "Dịch vụ",
      title: "Tôi có thể giúp bạn điều gì",
      subtitle:
        "Từ một trang landing page đơn giản đến hệ thống web app vận hành doanh nghiệp.",
      cta: "Trao đổi yêu cầu",
      items: [
        {
          title: "Website doanh nghiệp",
          desc: "Thiết kế và lập trình website giới thiệu công ty, sản phẩm, dịch vụ — chuyên nghiệp, chuẩn SEO, tối ưu tốc độ và hiển thị tốt trên mọi thiết bị.",
        },
        {
          title: "Landing Page",
          desc: "Trang đích tập trung chuyển đổi cho chiến dịch quảng cáo, ra mắt sản phẩm, sự kiện — tối ưu tốc độ tải và tỉ lệ để lại thông tin.",
        },
        {
          title: "Web Application",
          desc: "Xây dựng hệ thống quản lý, đặt hàng, đặt lịch, CRM nội bộ theo đúng quy trình vận hành riêng của doanh nghiệp bạn.",
        },
        {
          title: "Bảo trì & Nâng cấp",
          desc: "Sửa lỗi, cập nhật nội dung, tối ưu hiệu suất, bổ sung tính năng mới cho website đang vận hành.",
        },
        {
          title: "Tích hợp & Tự động hoá",
          desc: "Kết nối website với thanh toán, CRM, công cụ marketing, chatbot, API bên thứ ba để giảm thao tác thủ công.",
        },
        {
          title: "Tư vấn giải pháp",
          desc: "Tư vấn lựa chọn công nghệ, kiến trúc hệ thống và lộ trình phát triển phù hợp với ngân sách và mục tiêu thực tế.",
        },
      ],
    },
    contact: {
      eyebrow: "Liên hệ",
      title: "Có dự án cần triển khai?",
      subtitle:
        "Gửi yêu cầu của bạn — tôi sẽ phản hồi trong thời gian sớm nhất kèm đề xuất mốc thời gian rõ ràng.",
      emailLabel: "Email",
      phoneLabel: "Zalo",
      phoneLabel2: "Điện thoại",
      copy: "Sao chép",
      copied: "Đã sao chép",
      formNote:
        "Bạn có thể liên hệ trực tiếp qua email hoặc số điện thoại bên dưới — phản hồi thường trong vòng 24 giờ.",
    },
    footer: {
      tagline: "Đúng hẹn. Đúng chất lượng. Mọi lần.",
      rights: "Đã giữ toàn bộ quyền.",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
      cta: "Start a project",
    },
    hero: {
      eyebrow: "Fullstack Web Developer",
      subtitle:
        "Building websites, landing pages and web apps for businesses — on schedule, on scope, exactly as agreed.",
      ctaPrimary: "View projects",
      ctaSecondary: "Get in touch",
    },
    about: {
      eyebrow: "About",
      paragraphs: [
        "I'm Duong — a fullstack developer focused on building websites, landing pages and web apps for small and medium businesses, spanning education, real estate, F&B, e-commerce and transportation.",
        "My working philosophy is simple: if I commit to it, I deliver it, on time. Every milestone is planned with a clear date, progress is reported transparently, and I never go silent mid-project.",
        "I work end to end — from design (Figma) to real-world implementation with React, Next.js, NestJS, Express and WordPress — so the final product looks great, runs reliably and stays easy to maintain.",
      ],
      highlightsTitle: "Why clients choose me",
      highlights: [
        {
          title: "Professional work ethic",
          desc: "Clear milestone planning, transparent progress reports and on-time delivery — no waiting or chasing needed.",
        },
        {
          title: "Genuinely fullstack",
          desc: "From UI to backend, database and server deployment — I own the entire stack.",
        },
        {
          title: "Trust & Security",
          desc: "Clean code, data protection and security best practices — once we work together, trust is guaranteed.",
        },
        {
          title: "Support after launch",
          desc: "Bug fixes, optimisation and upgrades available after your website goes live.",
        },
      ],
    },
    skills: {
      eyebrow: "Technology",
      title: "The toolkit behind every build",
      subtitle:
        "From interface design to frontend/backend development, databases and team workflows.",
      categories: {
        frontend: "Frontend",
        backend: "Backend & Database",
        tools: "Tools & Deployment",
      },
    },
    projects: {
      eyebrow: "Real projects",
      title: "Products already running in production",
      subtitle: "Live websites currently serving clients across different industries.",
      visit: "Visit website",
      comingSoon: "Coming soon",
    },
    services: {
      eyebrow: "Services",
      title: "What I can help you build",
      subtitle: "From a simple landing page to a full business web application.",
      cta: "Discuss your project",
      items: [
        {
          title: "Business websites",
          desc: "Design and development of company, product and service websites — professional, SEO-friendly, fast and fully responsive.",
        },
        {
          title: "Landing pages",
          desc: "Conversion-focused pages for ad campaigns, product launches and events — built for speed and lead capture.",
        },
        {
          title: "Web applications",
          desc: "Custom management, booking or CRM systems tailored to your business's exact workflow.",
        },
        {
          title: "Maintenance & upgrades",
          desc: "Bug fixes, content updates, performance tuning and new features for an existing website.",
        },
        {
          title: "Integrations & automation",
          desc: "Connect your site to payments, CRMs, marketing tools, chatbots and third-party APIs to cut manual work.",
        },
        {
          title: "Solution consulting",
          desc: "Guidance on technology choices, system architecture and roadmap that fit your budget and goals.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Have a project in mind?",
      subtitle:
        "Send over your requirements — I'll get back to you quickly with a clear timeline proposal.",
      emailLabel: "Email",
      phoneLabel: "Zalo",
      phoneLabel2: "Phone",
      copy: "Copy",
      copied: "Copied",
      formNote:
        "Reach out directly via email or phone below — I typically reply within 24 hours.",
    },
    footer: {
      tagline: "On time. On point. Every time.",
      rights: "All rights reserved.",
    },
  },
} as const;
