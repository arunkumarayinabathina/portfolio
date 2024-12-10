import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle
} from "@/components/ui/card";

function Repos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get("https://api.github.com/users/arunkumarayinabathina/repos");
        setRepos(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <h2 className="mb-6 text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-800 text-white">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="text-center py-12 px-4 bg-gray-800">
      <h2 className="mb-6 text-3xl font-extrabold text-white">
        GitHub Repositories
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {repos.map(repo => (
          <Card
            key={repo.id}
            className="w-full max-w-xs shadow-xl bg-gray-900 rounded-lg hover:scale-105 transform transition duration-300 hover:border-gray-600"
          >
            <CardHeader className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-4 rounded-t-lg">
              <CardTitle className="text-lg font-semibold">{repo.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-slate-300 text-sm mb-4">
                {repo.description ? repo.description : "No description available"}
              </p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-slate-700 text-white hover:bg-slate-600 transition duration-200">
                  View Repository
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Repos;
