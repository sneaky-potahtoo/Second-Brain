import "../App.css";
import { Button } from "../components/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";
import { CreateContentModal } from "../components/CreateContentModal";
import { useState } from "react";
import { useContent } from "../hooks/useContent";
import { BACKEND_URL } from "../config";
import axios from "axios";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refreshContent } = useContent();

  async function handleShareBrain() {
    const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
        share: true,
      }, {
        headers: {
          Authorization: localStorage.getItem("token"),
        }});
    const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
    navigator.clipboard.writeText(shareUrl);
    alert("Brain URL copied");
  }

  return (
    <>
      <Sidebar />
      <div className="p-4 ml-72">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
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
            onClick={handleShareBrain}
            startIcon={<ShareIcon size="md" />}
            size="md"
            variant="primary"
            text="Share Brain"
          />
        </div>

        <div className="flex gap-4 flex-wrap">
          {contents.map(({ type, link, title }) => (
            <Card title={title} type={type} link={link} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
