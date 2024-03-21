import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

type ErrorResponse = {
  message: string;
};

const fetchSearchConsoleData = async () => {
  const response = await axios.get(
    "https://searchconsole.googleapis.com/v1/sites",
    {
      params: {
        key: "YOUR_API_KEY", // Replace with your actual API key
      },
    }
  );
  return response.data;
};

const SearchConsole: React.FC = () => {
  const { data, isLoading, error } = useQuery<any, ErrorResponse>(
    "searchConsoleData",
    fetchSearchConsoleData
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Google Search Console Data</h2>
      <ul>
        {data.siteUrls.map((site: any) => (
          <li key={site.siteUrl}>{site.siteUrl}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchConsole;
