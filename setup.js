import fs from 'fs';

// Estrutura de pastas da Frical
const dirs = [
  'src/components',
  'src/layouts',
  'src/pages/produtos',
  'src/pages/blog',
  'src/content/blog',
  'src/styles',
  'src/data',
  'public/images'
];

// Arquivos a serem criados
const files = [
  'src/components/Header.astro',
  'src/components/Footer.astro',
  'src/components/MenuMobile.astro',
  'src/components/Carrossel.jsx',
  'src/components/CardProduto.astro',
  'src/components/FormContato.astro',
  'src/components/WhatsappButton.astro',
  'src/layouts/Layout.astro',
  'src/pages/index.astro',
  'src/pages/sobre.astro',
  'src/pages/faq.astro',
  'src/pages/produtos/index.astro',
  'src/pages/produtos/prime-baby.astro',
  'src/pages/blog/[...slug].astro',
  'src/content/blog/post1.md',
  'src/content/blog/post2.md',
  'src/styles/global.css',
  'src/data/produtos.json'
];

// 1. Criar Pastas
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Pasta criada: ${dir}`);
  }
});

// 2. Criar Arquivos
files.forEach(file => {
  if (!fs.existsSync(file)) {
    let content = '';
    
    // Conteúdo inteligente para já resolver o aviso do Tailwind
    if (file.endsWith('Layout.astro')) {
      content = `---\nimport '../styles/global.css';\n---\n\n<!doctype html>\n<html lang="pt-br">\n\t<head>\n\t\t<meta charset="UTF-8" />\n\t\t<meta name="viewport" content="width=device-width" />\n\t\t<title>Frical Alimentos</title>\n\t</head>\n\t<body>\n\t\t<slot />\n\t</body>\n</html>`;
    } else if (file.endsWith('.astro')) {
      content = '---\n// Lógica do componente\n---\n\n<div>Novo componente</div>';
    } else if (file.endsWith('.jsx')) {
      content = 'export default function Componente() {\n  return <div>Componente React</div>;\n}';
    } else if (file.endsWith('.json')) {
      content = '[]';
    }
    
    fs.writeFileSync(file, content);
    console.log(`📄 Arquivo criado: ${file}`);
  }
});

console.log('✅ Estrutura Frical criada com sucesso!');