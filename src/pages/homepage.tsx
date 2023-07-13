import RenderFeed from "../components/renderfeed";
import Filter from "../components/filter";
import Stats from "../components/stats";
import UserInfo from "../components/userinfo";

const HomePage = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between">
      <div className="w-full lg:w-1/5 h-fit p-3">
        <UserInfo />
        <Stats />
      </div>
      <div className="w-full h-fit p-2 flex flex-col gap-5">
            <Filter />
            <RenderFeed />
      </div>
    </section>
  );
};

export default HomePage;
