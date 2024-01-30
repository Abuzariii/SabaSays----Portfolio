import Neon from "@/components/Experimental/NeonCheck";
import Button from "@/components/Experimental/VercelVariables";
import ImageUpload from "@/components/Experimental/ImageUpload";
import BlobUpload from "@/components/Experimental/BlobImageUpload";

export default function Home() {
  return (
    <div>
      <Button />
      <Neon />
      {/* <ImageUpload /> */}
      <BlobUpload />
    </div>
  );
}
