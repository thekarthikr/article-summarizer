import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col '>
      <nav className='flex justify-between items-center w-full mb-10 pt-4'>
        <img src={logo} alt='sumz logo' className='w-28 object-contain' />
        <button
          type='button'
          className='black_btn'
          onClick={() =>
            window.open("https://github.com/thekarthikr/article-summarizer")
          }
        >
          Github
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Accelerate Your Reading and Boost Productivity, Save Time and Energy
        with AI-Powered Article Summarization
      </h2>
    </header>
  );
};

export default Hero;
