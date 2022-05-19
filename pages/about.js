import BaseLayout from "../components/BaseLayout";
import AboutPage from "../components/AboutPage";

export default function about() {
  return (
    <BaseLayout>
      <AboutPage />
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
