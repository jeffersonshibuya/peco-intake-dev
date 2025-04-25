import { Stack, Text } from "@mantine/core";

interface ShowValueProps {
  label: string;
  value?: string | null;
}

const ShowValue = ({ label, value }: ShowValueProps) => {
  return (
    <Stack gap="xs" bg={"gray.1"} style={{ borderRadius: "5px" }} p="xs">
      <Text size="sm">{label}</Text>
      <Text c={"blue.7"} fw="700" size={"sm"}>
        {value}
      </Text>
    </Stack>
  );
};
export default ShowValue;
