"use client";

import SmartContentRenderer from "@/components/content/SmartContentRenderer";
import { useQuery } from "@apollo/client";
import queries from "@/graphql/cms/queries";
import PageShell from "@/components/PageShell";

export default function Page() {
  const { data } = useQuery(queries.cmsPostList, {
    variables: {
      categoryIds: ["gtslawYu3wI9Op9DtDP83"],
    },
  });

  const post = data?.cpPostList?.posts?.[0];

  return (
    <PageShell title={post?.title}>
      <SmartContentRenderer content={post?.content || ""} />
    </PageShell>
  );
}
