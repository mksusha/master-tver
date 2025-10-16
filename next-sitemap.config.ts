import { IConfig } from 'next-sitemap';

const config: IConfig = {
    siteUrl: 'https://master-tver.vercel.app/', // <- поменяй на свой домен
    generateRobotsTxt: true,       // автоматически создаст robots.txt
    changefreq: 'weekly',          // частота обновления страниц
    priority: 0.8,                 // приоритет страниц
};

export default config;
