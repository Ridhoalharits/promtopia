"use client";
import React from "react";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [post, setPosts] = useState([]);
  const handleSearchChange = (e) => {};
  const PromptCardList = ({ data, handleTagClick }) => {
    return (
      <div className="mt-16 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post.id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))}
      </div>
    );
  };

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <section className="feed">
      <form className="realtive w-full flex-center">
        <input
          type="text"
          placeholder="Search for prompts"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        ></input>
      </form>

      <PromptCardList data={post} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
