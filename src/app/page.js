import Neon from "@/components/Experimental/NeonCheck";
import Button from "@/components/Experimental/VercelVariables";
import BlobUpload from "@/components/Experimental/BlobImageUpload";
import VercelPostgres from "@/components/Experimental/VercelPostgres";

export default function Home() {
  return (
    <div>
      <Button />
      <Neon />
      <BlobUpload />
      <VercelPostgres />
    </div>
  );
}
