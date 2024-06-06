const isImage = (url?: string): boolean =>
  /\.(jpeg|jpg|gif|png)$/.test(url || "");

export default isImage;
