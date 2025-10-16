/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://master-tver.vercel.app', // без слэша в конце
    generateRobotsTxt: true,                    // создаст robots.txt
    sitemapSize: 5000,                          // если страниц >5000, делаем несколько sitemap
    changefreq: 'weekly',
    priority: 0.8,
};

module.exports = config;
