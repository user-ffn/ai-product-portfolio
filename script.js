// 仅在支持动态媒体查询的浏览器中启用平滑锚点体验；内容和导航在禁用脚本时仍可正常使用。
if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  document.documentElement.style.scrollBehavior = 'smooth';
}
