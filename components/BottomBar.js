import { Icon } from "@iconify/react";
import git from "@iconify/icons-codicon/git-compare";
import error from "@iconify/icons-codicon/error";
import warning from "@iconify/icons-codicon/warning";
import live from "@iconify/icons-codicon/broadcast";
import check from "@iconify/icons-codicon/check";
import bell from "@iconify/icons-codicon/bell-dot";

export default function BottomBar() {
  return (
    <div className="flex justify-between bg-dark-royal-grey w-full text-gray-300 cursor-default">
      <div className="flex">
        <div className="flex ml-[50px] -sm:ml-[10px]">
          <Icon className="my-1 mx-2" icon={git} />
          <h3>master</h3>
        </div>
        <div className="flex">
          <Icon className="my-1 mx-2" icon={error} />
          <h3>0</h3>
        </div>
        <div className="flex">
          <Icon className="my-1 mx-2" icon={warning} />
          <h3>0</h3>
        </div>
      </div>

      <div className="flex">
        <div className="flex -sm:hidden">
          <Icon className="my-1 mx-2" icon={live} />
          <h3>Go Live For You</h3>
        </div>
        <div className="flex mx-5">
          <Icon className="my-1 mx-1" icon={check} />
          <h3>Prettier</h3>
        </div>
        <div className="flex">
          <Icon className="my-1 mx-2" icon={bell} />
        </div>
      </div>
    </div>
  );
}
