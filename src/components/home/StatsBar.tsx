"use client";

import React from "react";
import { queries } from "@/graphql/cms";
import { useQuery } from "@apollo/client";

/**
 * StatsBar
 * --------
 * Static figures highlighting the federation's scale. Numbers are kept
 * here (easy to update); labels are translated via the `Home` namespace.
 */
export default function StatsBar() {

  const { data } = useQuery(queries.cmsPostList, {
    variables: {
      categoryIds: ["traMDrN7HLpo5aTDXFOnd"],
    },
  });

  const posts = data?.cpPostList?.posts || [];
  
  return (
    <section className="container">
      <div className="stats-bar">
        <div className="stats">
          {posts.map((post) => (
            <div className="stat-item" key={post._id}>
              <span className="stat-number">{post.title}</span>
              <span className="stat-label">{post.excerpt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
