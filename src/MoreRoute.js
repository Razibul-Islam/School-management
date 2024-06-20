import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import More from "./Components/Notice/More";

const MoreRoute = ({ path }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://school-server-umber.vercel.app/single-notice/${path}`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [path]);

  if (!data) {
    // Optionally, you can return a loading component while waiting for the data to load.
    return <div>Loading...</div>;
  }

  return <More data={data} />;
};
export default MoreRoute;
// Then, use the MoreRoute component in your routing configuration
