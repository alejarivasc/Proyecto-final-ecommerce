import banner from "../assets/img/banner3.jpg";
import SearchSort from "../components/SearchSort";

export default function Home() {
  return (
    <div>
      <img className="banner" src={banner} />

     <SearchSort /> 
    </div>
  );
}
