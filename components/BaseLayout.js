import Head from "next/head";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import IconBar from "../components/IconBar";
import ProjectPanel from "../components/ProjectPanel";
import PageBar from "../components/PageBar";

export default function BaseLayout({ children }) {
  return (
    <div className="flex flex-col justify-between h-screen w-full">
      <Head>
        <title>Shubham's Portfolio</title>
        <link rel="icon" href="../images/favicon.png" />
      </Head>
      <TopBar />
      <div className="flex h-full">
        <div className="flex h-full w-[350px] -sm:hidden -sm:w-[50px] bg-regal-blue border-r-2 border-gray-400 border-opacity-10">
          <IconBar />
          <ProjectPanel />
        </div>
        <div className="flex flex-col h-full w-full overflow-x-hidden">
          <PageBar />
          <div className="relative h-full -sm:mb-5">{children}</div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}
