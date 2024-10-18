import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center text-center flex-col">
      <h1 className="head_text ">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient ">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        WaelsAI is an open-source AI prompting tool for modern world to
        discover, share and create creative prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
