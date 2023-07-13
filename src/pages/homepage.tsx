import RenderFeed from "../components/renderfeed";
import Filter from "../components/filter";
import Stats from "../components/stats";
import UserInfo from "../components/userinfo";

const HomePage = () => {
  return (
    <section className="flex justify-between">
      <div className="w-1/5 h-fit bg-yellow-500">
        <UserInfo />
        <Stats />
      </div>
      <div className="w-full h-fit bg-gray-400 p-2">
            <Filter />
            <RenderFeed />
      </div>
    </section>
  );
};

export default HomePage;
