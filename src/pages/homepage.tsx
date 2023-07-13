import RenderFeed from "../components/renderfeed";
import Filter from "../components/filter";
import Stats from "../components/stats";

const HomePage = () => {
  return (
    <section className="flex flex-col justify-between">
        <div className="w-full">
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
