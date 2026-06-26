import { getCmsPostList } from "@/lib/kb";
import React from "react";
import SearchForm from "@/components/SearchForm";

interface SearchProps {
  searchParams: { q?: string };
}

export default async function SearchPage({ searchParams }: SearchProps) {
  const searchQuery = searchParams.q ?? "";

  const { postList } = searchQuery
    ? await getCmsPostList({ variables: { searchValue: searchQuery } })
    : { postList: null };

  return (
    <div className="content wrapper">
      <SearchForm searchQuery={searchQuery} />

      {searchQuery ? (
        <>
          <h2>Search Results for: {searchQuery}</h2>
          {postList?.posts?.length > 0 ? (
            <ul>
              {postList.posts.map((post: any) => (
                <li key={post._id}>{post.title}</li>
              ))}
            </ul>
          ) : (
            <p>No results found.</p>
          )}
        </>
      ) : (
        <p>Type a keyword to search.</p>
      )}
    </div>
  );
}
