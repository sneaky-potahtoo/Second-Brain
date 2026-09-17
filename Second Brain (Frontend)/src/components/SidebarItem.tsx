import type { ReactElement } from "react";

export function SidebarItem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex text-gray-700 py-2 cursor-pointer hover:bg-gray-200 rounded-lg pl-8 transition-all duration-250">
      <div className="pr-2">{icon}</div>
      <div>{text}</div>
    </div>
  );
}
