"use client";

import { useQuery } from "@apollo/client";
import queries from "@/graphql/cms/queries";
import SmartContentRenderer from "@/components/content/SmartContentRenderer";
import PageShell from "@/components/PageShell";
import ErxesForm from "@/components/ErxesForm";

export default function Page() {
  const { data } = useQuery(queries.cmsPostList, {
    variables: {
      categoryIds: ["-aFqXP7a1yLhkIzLBfSAE"],
    },
  });

  const post = data?.cpPostList?.posts?.[0];

  return (
    <>
      <PageShell title={post?.title} compact>
        {/* Map — below the banner, above the content */}
        <iframe
          src="https://maps.google.com/maps?q=Спортын төв ордон, Улаанбаатар, Монгол&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="320"
          style={{
            border: 0,
            display: "block",
            borderRadius: "var(--radius-lg)",
            marginBottom: "var(--space-6)",
          }}
          loading="lazy"
        />

        <SmartContentRenderer content={post?.content || ""} />

        {/* erxes embedded contact form */}
        <ErxesForm />
      </PageShell>
    </>
  );
}
