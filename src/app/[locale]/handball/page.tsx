"use client";

import { queries } from "@/graphql/cms";
import { useQuery } from "@apollo/client";
import PageShell from "@/components/PageShell";

export default function Page({ params }: { params: { locale: string } }) {
  const { data } = useQuery(queries.cmsPostList, {
    variables: {
      categoryIds: ["NnBRZ2zaQ5ULfVcjCgtWq"],
    },
  });

  const posts = data?.cpPostList?.posts?.filter((post: any) =>
    post?.categoryIds.includes("NnBRZ2zaQ5ULfVcjCgtWq"),
  );

  return (
    <PageShell title="Гандбол">
      {posts && posts.length > 0 && (
        <ul className="cat-list">
          {posts.map((post: any) => (
            <li key={post._id}>
              <a href={`/${params.locale}/handball/${post._id}`} className="noajax">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
