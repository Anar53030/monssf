"use client";

import { queries } from "@/graphql/cms";
import { useQuery } from "@apollo/client";
import PageShell from "@/components/PageShell";
import { CATEGORY } from "@/graphql/cms/categories";

export default function Page({ params }: { params: { locale: string } }) {
  const { data } = useQuery(queries.cmsPostList, {
    variables: {
      categoryIds: [CATEGORY.BASKETBALL],
    },
  });

  const posts = data?.cpPostList?.posts?.filter((post: any) =>
    post?.categoryIds.includes(CATEGORY.BASKETBALL),
  );

  return (
    <PageShell title="Сагсан бөмбөг">
      {posts && posts.length > 0 && (
        <ul className="cat-list">
          {posts.map((post: any) => (
            <li key={post._id}>
              <a href={`/${params.locale}/basketball/${post._id}`} className="noajax">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
