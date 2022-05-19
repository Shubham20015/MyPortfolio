import BaseLayout from "../components/BaseLayout";
import ContactPage from "../components/ContactPage";

export default function contact() {
  return (
    <BaseLayout>
      <ContactPage />
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
