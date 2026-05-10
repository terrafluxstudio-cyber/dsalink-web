/** Pre-encoded mailto for data correction reports (UTF-8 via encodeURIComponent). */
export const REPORT_ERROR_MAILTO = `mailto:terrafluxstudio@gmail.com?subject=${encodeURIComponent(
  "DSALink 数据纠错反馈",
)}&body=${encodeURIComponent(
  "学校名称：\n错误描述：\n正确信息参考：",
)}`;
