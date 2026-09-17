import "./App.css";
import { Button } from "./components/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="p-4">
      <div className="flex justify-end gap-4">
        <Button
          startIcon={<ShareIcon size="md" />}
          size="md"
          variant="primary"
          text="Share Brain"
        />
        <Button
          startIcon={<PlusIcon size="lg" />}
          size="md"
          variant="secondary"
          text="Add Content"
        />
      </div>

      <div className="flex gap 4"></div>
      <Card
        title="Solidworks"
        type="youtube"
        link="https://www.youtube.com/watch?v=oZMtODonJKU&t=482s"
      />
    </div>
  );
}

export default App;
