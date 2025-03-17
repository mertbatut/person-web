export function getTechIcon(tech) {
  const techLower = tech?.toLowerCase() || '';
  
  if (techLower.includes('react')) return 'fab fa-react';
  if (techLower.includes('vue')) return 'fab fa-vuejs';
  if (techLower.includes('angular')) return 'fab fa-angular';
  if (techLower.includes('node')) return 'fab fa-node-js';
  if (techLower.includes('js') || techLower.includes('javascript')) return 'fab fa-js-square';
  if (techLower.includes('html')) return 'fab fa-html5';
  if (techLower.includes('css')) return 'fab fa-css3-alt';
  if (techLower.includes('sass')) return 'fab fa-sass';
  if (techLower.includes('bootstrap')) return 'fab fa-bootstrap';
  if (techLower.includes('php')) return 'fab fa-php';
  if (techLower.includes('wordpress')) return 'fab fa-wordpress';
  if (techLower.includes('python')) return 'fab fa-python';
  if (techLower.includes('java')) return 'fab fa-java';
  if (techLower.includes('docker')) return 'fab fa-docker';
  if (techLower.includes('aws')) return 'fab fa-aws';
  if (techLower.includes('git')) return 'fab fa-git-alt';
  if (techLower.includes('github')) return 'fab fa-github';
  if (techLower.includes('database') || techLower.includes('sql') || techLower.includes('mongo')) return 'fas fa-database';
  
  // Genel ikon
  return 'fas fa-code';
}

// Teknoloji açıklamaları için yardımcı fonksiyon
export function getTechDescription(tech) {
  const descriptions = {
    'React': 'Kullanıcı arayüzü geliştirmek için kullanılan JavaScript kütüphanesi',
    'React Native': 'Mobil uygulama geliştirmek için kullanılan cross-platform framework',
    'Vue.js': 'Kullanıcı arayüzleri oluşturmak için kullanılan ilerici bir JavaScript framework',
    'Angular': 'TypeScript tabanlı web uygulama framework\'ü',
    'Node.js': 'Sunucu tarafı JavaScript çalıştırma ortamı',
    'Express': 'Node.js için web uygulama framework\'ü',
    'JavaScript': 'Web geliştirme için kullanılan programlama dili',
    'TypeScript': 'JavaScript\'in statik tipli üst kümesi',
    'HTML5': 'Web sayfalarının yapısını oluşturmak için kullanılan işaretleme dili',
    'CSS3': 'Web sayfalarının stilini tanımlamak için kullanılan stil dili',
    'Sass': 'CSS için preprocessor',
    'TailwindCSS': 'Utility-first CSS framework',
    'Bootstrap': 'Popüler CSS framework',
    'jQuery': 'DOM manipülasyonu için JavaScript kütüphanesi',
    'PHP': 'Web geliştirme için sunucu taraflı betik dili',
    'WordPress': 'Açık kaynaklı içerik yönetim sistemi',
    'Python': 'Genel amaçlı programlama dili',
    'Django': 'Python tabanlı web framework',
    'Flask': 'Python için mikro web framework',
    'Java': 'Genel amaçlı programlama dili',
    'Spring': 'Java için uygulama framework\'ü',
    'C#': 'Microsoft tarafından geliştirilen programlama dili',
    '.NET': 'Microsoft tarafından geliştirilen framework',
    'MongoDB': 'NoSQL veritabanı',
    'MySQL': 'İlişkisel veritabanı yönetim sistemi',
    'PostgreSQL': 'İlişkisel veritabanı yönetim sistemi',
    'Firebase': 'Google tarafından geliştirilen uygulama geliştirme platformu',
    'GraphQL': 'API sorguları için bir dil',
    'REST API': 'RESTful mimari prensiplerine dayanan API',
    'Docker': 'Konteynerizasyon platformu',
    'Kubernetes': 'Konteyner orkestrasyon sistemi',
    'AWS': 'Amazon Web Services, bulut bilişim platformu',
    'Git': 'Dağıtık versiyon kontrol sistemi',
    'GitHub': 'Git repository barındırma servisi',
    'CI/CD': 'Sürekli entegrasyon ve sürekli dağıtım',
    'Redux': 'JavaScript uygulamaları için öngörülebilir durum yönetimi',
    'MobX': 'JavaScript uygulamaları için durum yönetimi',
    'Webpack': 'JavaScript modül paketleyicisi',
    'Babel': 'JavaScript derleyicisi',
    'ESLint': 'JavaScript için lint aracı',
    'Jest': 'JavaScript için test framework\'ü',
    'Mocha': 'JavaScript için test framework\'ü',
    'Chai': 'JavaScript için iddia kütüphanesi',
    'Cypress': 'Front-end test aracı',
    'Selenium': 'Web uygulamaları için test aracı',
    'Storybook': 'UI bileşenleri için geliştirme ortamı',
    'Figma': 'Arayüz tasarım aracı',
    'Sketch': 'Arayüz tasarım aracı',
    'Adobe XD': 'Arayüz tasarım aracı',
    'Photoshop': 'Görüntü düzenleme yazılımı',
    'Illustrator': 'Vektör grafik editörü',
    'ThreeJS': '3D grafik kütüphanesi',
    'D3.js': 'Veri görselleştirme kütüphanesi',
    'Chart.js': 'Grafikler oluşturmak için JavaScript kütüphanesi',
    'WebGL': 'Web tarayıcıları için 3D grafik API',
    'Canvas API': '2D grafik çizimi için JavaScript API',
    'SVG': 'Ölçeklenebilir Vektör Grafikleri'
  };
  
  return descriptions[tech] || 'Proje için kullanılan teknoloji';
}