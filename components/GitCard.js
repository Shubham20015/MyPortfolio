import { Icon } from "@iconify/react";

export default function GitCard({ width, height, gitData }) {
  return (
    <div
      className={`md:absolute ${width} ${height} bg-card-grey w-52 -sm:w-64 p-2 pb-0 rounded-lg hover:bg-gray-600 -sm:my-4`}
    >
      <a href={gitData.html_url} target="_blank">
        <h1 className="text-xl cursor-pointer break-all">{gitData.name}</h1>
      </a>
      <div className="flex items-center justify-end text-lg p-2">
        <Icon icon="akar-icons:star" />
        <h1 className="px-1  text-gray-100">{gitData.stargazers_count}</h1>
        <Icon icon="tabler:git-fork" />
        <h1 className="px-1 text-gray-100">{gitData.forks_count}</h1>
        <Icon icon="akar-icons:eye-open" />
        <h1 className="px-1 text-gray-100">{gitData.watchers_count}</h1>
      </div>
    </div>
  );
}
