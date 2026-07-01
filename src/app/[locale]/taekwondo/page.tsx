"use client";

import { queries } from "@/graphql/cms";
import { useQuery } from "@apollo/client";
import SmartContentRenderer from "@/components/content/SmartContentRenderer";
import PageShell from "@/components/PageShell";
import { CATEGORY } from "@/graphql/cms/categories";

export default function Page({ params }: { params: { locale: string } }) {
  const { data } = useQuery(queries.cmsPostList, {
    variables: {
      categoryIds: [CATEGORY.TAEKWONDO],
    },
  });

  const posts = data?.cpPostList?.posts?.filter((post: any) =>
    post?.categoryIds.includes(CATEGORY.TAEKWONDO),
  );

  return (
    <PageShell title="Таэквондо">
      <SmartContentRenderer content={posts?.[0]?.content || ""} />

      {posts && posts.length > 0 && (
        <ul className="cat-list" style={{ marginTop: "2rem" }}>
          {posts.map((post: any) => (
            <li key={post._id}>
              <a href={`/${params.locale}/taekwondo/${post._id}`} className="noajax">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
