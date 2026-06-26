"use client";

import { useQuery } from "@apollo/client";
import queries from "@/graphql/cms/queries";
import SmartContentRenderer from "@/components/content/SmartContentRenderer";
import PageShell from "@/components/PageShell";

export default function Page() {
  const { data, loading } = useQuery(queries.cmsPostList, {
    variables: {
      categoryIds: ["btUgLXKrvbqvkoPBv35ll"],
      sortField: "createdAt",
      sortDirection: "asc",
    },
  });

  const posts = data?.cpPostList?.posts || [];

  return (
    <PageShell title="МОСН 2024">
      {loading ? (
        <div>Loading...</div>
      ) : (
        posts.map((post: any, index: number) => (
          <div
            key={post._id}
            className="clearfix post"
            style={{ marginBottom: "40px" }}
          >
            <SmartContentRenderer content={post.content || ""} />

            {index !== posts.length - 1 && <hr />}
          </div>
        ))
      )}
    </PageShell>
  );
}
