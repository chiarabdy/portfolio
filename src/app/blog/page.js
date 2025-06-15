// src/app/blog/page.js

import { getSortedPostsData } from '@/lib/posts';
import BlogListPage from '@/components/blog/BlogListPage';

export default function BlogPage() {
  const allPostsData = getSortedPostsData();
  return <BlogListPage allPostsData={allPostsData} />;
}