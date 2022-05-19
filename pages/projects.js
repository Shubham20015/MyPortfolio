import BaseLayout from "../components/BaseLayout";
import ProjectsPage from "../components/ProjectsPage";

export default function projects() {
  return (
    <BaseLayout>
      <ProjectsPage />
    </BaseLayout>
  );
}

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return {
    props: {},
  };
}
