import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";

enum ContentType {
  Youtube = "youtube"
}
//controlled component
export function CreateContentModal({ open, onClose }) {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);

  function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
  }

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
                <Input reference={titleRef} placeholder="Title" />
                <Input reference={linkRef} placeholder="Link" />
              </div>
              <div className="flex gap-1 p-4">
                <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
                  setType(ContentType.Youtube)
                }} size="md"></Button>
              </div>
              <Button onClick={addContent} variant="primary" text="Submit" size="md" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}