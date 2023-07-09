import React from "react";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";
import Article from "../../components/article/Article";

export default function Blog() {
  return (
    <div className="blog_section section__padding " id="blog">
      <div className="blog_section_heading">
        <h2 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h2>
      </div>
      <div className="blog_section_container">
        <div className="blog_container_groupA">
          <Article  imageUrl={blog01} date={"Sep 26, 2021"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} />
        </div>
        <div className="blog_container_groupB">
          <Article imageUrl={blog02} date={"Sep 26, 2021"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} />
          <Article imageUrl={blog03} date={"Sep 26, 2021"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} />
          <Article imageUrl={blog04} date={"Sep 26, 2021"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} />
          <Article imageUrl={blog05} date={"Sep 26, 2021"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} />
        </div>
      </div>
    </div>
  );
} 
