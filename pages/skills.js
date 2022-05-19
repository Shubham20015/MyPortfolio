import BaseLayout from "../components/BaseLayout";
import SkillsPage from "../components/SkillsPage";

export default function skills() {
  return (
    <BaseLayout>
      <SkillsPage />
    </BaseLayout>
  );
}

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return {
    props: {},
  };
}
