import type { CollectionEntry } from "astro:content";
import { useCallback, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import type { IGithubApi } from "src/models/ghapi";
import Spinner from "../Spinner";

interface Props {
  project: CollectionEntry<"projects">;
  profileImage: any;
}

export default function CardFooter({ project, profileImage }: Props) {
  const [stars, setStars] = useState<number | undefined>();
  const [loading, setLoading] = useState<boolean>();

  const fetchStars = useCallback(async () => {
    setLoading(true);
    const repo = project.data.github!.split("/");
    const userName = repo[3];
    const repoName = repo[4];

    const response = await fetch(
      `https://api.github.com/repos/${userName}/${repoName}`
    );

    const json: IGithubApi = await response.json();
    setStars(json.stargazers_count);
  }, []);

  useEffect(() => {
    if (project.data?.github) {
      fetchStars();
    }
  }, []);

  console.log(stars);

  return (
    <div id="footer" className="pt-5 text-gray-300">
      <div id="user" className="flex justify-between">
        <div id="left" className="flex items-center gap-2">
          {profileImage}
          <span className="text-xs">Muhammed Kaplan</span>
        </div>

        <div id="right-">
          {stars ? (
            <span className="flex items-center gap-3">
              <FaStar /> {stars}
            </span>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
}
