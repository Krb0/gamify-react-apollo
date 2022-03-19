import { Platform } from "../../models/platforms/platform.schema";
import PlatformCard from "./PlatformCard";

const PlatformList = ({ platforms }: { platforms: [Platform] }) => {
  return (
    <>
      {platforms.map((platform) => (
        <PlatformCard platform={platform} />
      ))}
    </>
  );
};

export default PlatformList;
