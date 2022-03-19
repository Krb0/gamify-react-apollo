import { useQuery } from "@apollo/client";
import { Platform } from "../models/platforms/platform.schema";
import { ALL_PLATFORMS } from "../models/platforms/platforms.queries";

const usePlatforms = () => {
  const {
    data,
    loading,
  }: {
    data?: {
      platforms: [Platform];
    };
    loading: boolean;
  } = useQuery(ALL_PLATFORMS);

  return { data, loading };
};

export default usePlatforms;
