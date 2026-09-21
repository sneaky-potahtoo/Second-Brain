import "../App.css";
import { Button } from "../components/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";
import { CreateContentModal } from "../components/CreateContentModal";
import { useState } from "react";
import { useContent } from "../hooks/useContent";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refreshContent } = useContent();
  
  return (
    <>
      <Sidebar />
      <div className="p-4 ml-72">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false)
          }}
          onContentAdded={() => {
            setModalOpen(false);
            refreshContent();
          }}
        />
        <div className="flex justify-end gap-4">
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            startIcon={<PlusIcon size="lg" />}
            size="md"
            variant="secondary"
            text="Add Content"
          />
          <Button
            startIcon={<ShareIcon size="md" />}
            size="md"
            variant="primary"
            text="Share Brain"
          />
        </div>

        <div className="flex gap 4">
          {contents.map(({ type, link, title }) => 
            <Card
              title={title}
              type={type}
              link={link}
            />)}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
