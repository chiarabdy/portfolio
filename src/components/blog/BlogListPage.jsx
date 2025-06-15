'use client';

import Link from 'next/link';
import styled from 'styled-components';

const BlogPageWrapper = styled.div`
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  min-height: calc(100vh - 160px);
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  color: #e0e0e0;
  border-bottom: 2px solid #00d1cd;
  padding-bottom: 10px;
  margin-bottom: 40px;
`;

const PostList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PostListItem = styled.li`
  margin-bottom: 30px;
`;

const PostTitle = styled.h2`
  font-size: 1.75rem;
  margin: 0;
  a {
    text-decoration: none;
    color: #00d1cd;
    &:hover { text-decoration: underline; }
  }
`;

const PostDate = styled.small`
  color: #a0a0a0;
  margin-bottom: 10px;
  display: block;
`;

const PostExcerpt = styled.p`
  color: #e0e0e0;
  line-height: 1.6;
`;

export default function BlogListPage({ allPostsData }) {
  return (
    <BlogPageWrapper>
      <PageTitle>All Posts</PageTitle>
      <PostList>
        {allPostsData.map(({ slug, date, title, excerpt }) => (
          <PostListItem key={slug}>
            <PostTitle>
              <Link href={`/blog/${slug}`}>{title}</Link>
            </PostTitle>
            <PostDate>{date}</PostDate>
            <PostExcerpt>{excerpt}</PostExcerpt>
          </PostListItem>
        ))}
      </PostList>
    </BlogPageWrapper>
  );
}