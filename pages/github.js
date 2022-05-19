import BaseLayout from "../components/BaseLayout";
import GithubPage from "../components/GithubPage";

export default function github({ gitData }) {
  return (
    <BaseLayout>
      <GithubPage data={gitData} />
    </BaseLayout>
  );
}

export async function getStaticProps(context) {
  const gitData = await fetch(
    "https://api.github.com/users/Shubham20015/repos"
  ).then((res) => res.json());
  return {
    props: {
      gitData,
    },
  };
}
