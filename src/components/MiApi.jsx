import { useEffect } from "react";

const MiApi = ({ setLoading, setServices }) => {
  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch("publicaciones.json");
      const data = await res.json();
      setServices(data);
    } catch (error) {
      console.log("Error fetching user data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
};

export default MiApi;
