import { getPostData, getAllPostSlugs } from '@/lib/posts';
import PostPageContent from '@/components/blog/PostPageContent';

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.slug);
  return {
    title: postData.title,
  };
}

export default async function Post({ params }) {
  const postData = await getPostData(params.slug);
  return <PostPageContent postData={postData} />;
}