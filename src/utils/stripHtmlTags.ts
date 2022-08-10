function stripHtmlTags(summary: string): string {
  const regex = /<.{1,2}>/gi;
  return summary.replaceAll(regex, "");
}

export default stripHtmlTags;
