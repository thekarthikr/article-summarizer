import { useState, useEffect } from "react";

import { copy, linkIcon, loader, tick } from "../assets";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
        "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    };

    const response = await fetch(
      `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${article.url}`,
      options
    );
    const data = await response.json();

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      setArticle(newArticle);
    }
  };

  return (
    <section className='mt-16 w-full max-w-xl'>
      <div className='flex flex-col w-full gap-2'>
        <form
          className='relative flex justify-center items-center'
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt='link-icon'
            className='absolute left-0 my-2 ml-3 w-5'
          />

          <input
            type='url'
            placeholder='Paste the article link'
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className='url_input peer'
          />
          <button
            type='submit'
            className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 '
          >
            <p>↵</p>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
