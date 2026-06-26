"use client";

import { useQuery } from "@apollo/client";
import queries from "@/graphql/cms/queries";
import SmartContentRenderer from "@/components/content/SmartContentRenderer";
import PageShell from "@/components/PageShell";

export default function Page() {
  const { data } = useQuery(queries.cmsPostList, {
    variables: {
      categoryIds: ["Dko2cX_KsL_1Ob2GcAyAo"],
    },
  });

  const post = data?.cpPostList?.posts?.[0];

  return (
    <PageShell title={post?.title}>
      {post?.excerpt && <p>{post.excerpt}</p>}
      <SmartContentRenderer content={post?.content || ""} />
    </PageShell>
  );
}
