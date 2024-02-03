import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Explore
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> The Tech Nerd </span>
      </h1>
      <p className="desc text-center">
      Share your experience, thoughts and ideas with the global community of developers
      </p>
      <Feed />
    </section>
  );
};

export default Home;
