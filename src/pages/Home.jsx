import banner from "../assets/img/banner3.jpg";
import SearchSort from "../components/SearchSort";

export default function Home() {
  return (
    <div>
      <div className="banner-container">
        <img className="bannerhome" src={banner} />
      </div>

      <SearchSort />
    </div>
  );
}
