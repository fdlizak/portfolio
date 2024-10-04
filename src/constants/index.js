import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";

export const HERO_CONTENT = `Halo, saya seorang pengembang perangkat lunak yang penuh semangat dan antusiasme terhadap teknologi. Rasa ingin tahu dan kegemaran mendalam terhadap dunia digital mendorong saya untuk terus berkembang dan menciptakan solusi inovatif. Setiap proyek adalah peluang bagi saya untuk belajar, beradaptasi, dan memberikan hasil terbaik.`;

export const ABOUT_TEXT = `Saya adalah seorang pengembang perangkat lunak yang memiliki ketekunan dan fokus tinggi dalam setiap proyek yang saya kerjakan. Dengan tujuan untuk selalu memaksimalkan hasil dari setiap tugas, saya menguasai berbagai teknologi seperti JavaScript, MySQL, dan Figma. Saya juga berpengalaman bekerja secara kolaboratif dalam tim, serta sangat menikmati proses kerja yang terstruktur dan efisien.`;

export const EXPERIENCES = [
  {
    year: "September 2023 - November 2023",
    role: "Pengembangan proses peminjaman ruangan",
    company: "PTIPD UINSGD.",
    description: `Proses peminjaman ruangan merupakan sistem yang dirancang untuk memudahkan lembaga eksternal maupun internal dalam mengakses laboratorium dan fasilitas lain di PTIPD UINSGD. Sistem ini mencakup langkah-langkah mulai dari pengajuan permintaan hingga konfirmasi peminjaman.`,
  },
];

export const PROJECTS = [
  {
    title: "PTIPD UINSGD",
    image: project1,
    description: "Sebuah website fungsional yang dirancang untuk memudahkan proses peminjaman laboratorium komputer, sekaligus memungkinkan pengecekan inventaris barang.",
    technologies: ["Vue.js", "Tailwind", "Node.js", "Mysql"],
  },
  {
    title: "ShoppEase Admin",
    image: project2,
    description: "ShoppEase admin ini adalah situs web administratif untuk aplikasi ShoppEase. Sistem ini dirancang untuk memudahkan memantau barang, penjualan barang dan customer",
    technologies: ["React.js", "Ant Desain", "Node.js", "mysql"],
  },
];

export const CONTACT = {
  address: "Cihampelas Bandung",
  phoneNo: "+62 831 3796 9755",
  email: "Fadlizakkii@gmail.com",
};
