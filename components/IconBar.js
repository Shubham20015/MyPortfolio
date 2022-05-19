import { Icon } from "@iconify/react";
import extension from "@iconify/icons-codicon/extensions";
import files from "@iconify/icons-codicon/files";
import repo from "@iconify/icons-codicon/repo-forked";
import search from "@iconify/icons-codicon/search";
import debugRun from "@iconify/icons-codicon/debug-alt";
import settings from "@iconify/icons-codicon/settings-gear";
import account from "@iconify/icons-codicon/account";

export default function IconBar() {
  return (
    <div className="flex flex-col justify-between py-4 w-1/6 -sm:w-full bg-royal-grey text-icon-grey text-3xl">
      <div className="flex flex-col items-center py-2">
        <Icon className="my-2" icon={files} />
        <Icon className="my-3" icon={search} />
        <Icon className="my-3" icon={repo} />
        <Icon className="my-3" icon={debugRun} />
        <Icon className="my-3" icon={extension} />
      </div>
      <div className="flex flex-col items-center">
        <Icon className="my-3 cursor-pointer" icon={account} />
        <Icon className="my-3 cursor-pointer" icon={settings} />
      </div>
    </div>
  );
}
