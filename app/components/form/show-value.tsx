import { Stack, Text } from "@mantine/core";

interface ShowValueProps {
  label: string;
  bg?: string;
  value?: string | null;
}

const ShowValue = ({ label, value, bg }: ShowValueProps) => {
  return (
    <Stack gap="xs" bg={bg ?? "gray.1"} style={{ borderRadius: "5px" }} p="xs">
      <Text size="sm" c="#fff">{label}</Text>
      <Text c="#fff" fw="700" size={"sm"}>
        {value}
      </Text>
    </Stack>
  );
};
export default ShowValue;
