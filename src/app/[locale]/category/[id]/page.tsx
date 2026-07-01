"use client";

import { useQuery } from "@apollo/client";
import { queries } from "@/graphql/cms";
import { routeForCategory, CLIENT_PORTAL_ID } from "@/graphql/cms/categories";
import PageShell from "@/components/PageShell";
import PostCards from "@/components/content/PostCards";

/**
 * Generic category landing — works for ANY CMS category, including ones
 * added after this code shipped. Shows the category's sub-categories (if
 * any) plus its posts. Dedicated pages still exist for curated
 * categories; this is the automatic fallback so new categories are
 * immediately reachable from the (dynamic) navbar and sidebar.
 */
export default function CategoryPage({
  params,
}: {
  params: { locale: string; id: string };
}) {
  const { locale, id } = params;

  const { data: catData } = useQuery(queries.cmsCategoryList, {
    variables: { clientPortalId: CLIENT_PORTAL_ID },
  });
  const cats: any[] = catData?.cpCategories?.list ?? [];
  const category = cats.find((c) => c._id === id);
  const children = cats
    .filter((c) => c.parentId === id)
    .sort((a, b) => (a.name || "").localeCompare(b.name || ""));

  const { data, loading } = useQuery(queries.cmsPostList, {
    variables: { categoryIds: [id] },
  });

  const posts =
    data?.cpPostList?.posts?.filter((p: any) =>
      p?.categoryIds?.includes(id),
    ) ?? [];

  return (
    <PageShell title={category?.name ?? ""}>
      {children.length > 0 && (
        <ul className="cat-list" style={{ marginBottom: "2rem" }}>
          {children.map((c) => (
            <li key={c._id}>
              <a href={`/${locale}/${routeForCategory(c._id)}`} className="noajax">
                {c.name}
              </a>
            </li>
          ))}
        </ul>
      )}

      {loading ? (
        <div>Loading...</div>
      ) : posts.length > 0 ? (
        <PostCards posts={posts} locale={locale} basePath={`category/${id}`} />
      ) : children.length === 0 ? (
        <p>—</p>
      ) : null}
    </PageShell>
  );
}
