import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";

//controlled component
export function CreateContentModal({ open, onClose }) {
  return (
    <div>
      {open && (
        <div className="fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-slate-500/60">
          <div className="rounded-lg bg-white p-4 align">
            <div className="flex justify-end">
              <span className="cursor-pointer" onClick={onClose}>
                <CrossIcon />
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <Input placeholder="Title" />
                <Input placeholder="Link" />
              </div>
              <Button variant="primary" text="Submit" size="md" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Input({ onChange, placeholder }: { onChange: () => void }) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={"text"}
        className="px-4 py-2 border  m-2"
        onChange={onChange}
      />
    </div>
  );
}
