/*
 * @Description: 文档配置文件
 * @Author: xujian
 * @Date: 2020-07-08 11:03:11
 */ 

module.exports = {
  title: 'xujian\'s blog',
  description: 'xujian的个人博客',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
      ['link', { rel: 'manifest', href: '/logo.png' }],
      ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
      ['link', { rel: 'mask-icon', href: '/logo.png', color: '#3eaf7c' }],
      ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
      ['meta', { 'http-quiv': 'expires', cotent: '0' }],
      ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache, must-revalidate' }]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 这是部署到github相关的配置
  markdown: {
      lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
      nav: [
          { text: '主页', link: '/' },
          {
              text: '基础', items: [
                  { text: 'JavaScript', link: '/basis/JavaScript/' },
                  { text: 'HTML', link: '/basis/HTML/' },
                  { text: 'CSS', link: '/basis/CSS/' },
                  { text: 'TypeScript', link: '/basis/CSS/' },
              ]
          },
          {
              text: '框架', items: [
                  { text: 'Vue', link: '/frame/Vue/' },
                  { text: 'React', link: '/frame/React/' },
                  { text: 'Angular', link: '/frame/Angular/' },
                  { text: 'Flutter', link: '/frame/Flutter/' }
              ]
          },
          { text: '工作笔记', link: '/work/' },
          { text: '前端可视化', link: '/visualization/' },
          { text: '环境配置', link: '/devconfig/' },
          { text: 'Github', link: 'https://github.com/soyomo' }
      ],
      sidebar: {
          '/blog/': getSidebar('blog'),
          '/frame/': getSidebar('frame'),
          '/basis/': getSidebar('basis')
      },
      sidebarDepth: 2, // 侧边栏显示2级
  }
};

function getSidebar(barName) {
  const sidebar = {
      frame: [
          '/frame/',
          '/frame/Vue/',
          '/frame/React/',
          '/frame/Angular/'
      ],
      blog: [
          '/blog/'
      ],
      basis: [

      ]
  }
  return sidebar[barName]
}
