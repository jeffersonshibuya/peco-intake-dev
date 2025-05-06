import { Box, LoadingOverlay } from "@mantine/core";

const Loader = () => {
  return (
    <Box pos="relative" h={"78vh"}>
      <LoadingOverlay
        visible={true}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "blue", type: "bars" }}
      />
    </Box>
  );
};
export default Loader;
