"use client";

import { Button, Flex, Title } from "@mantine/core";
import SchedulesList from "./component/list";
import { IconPlus } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const ScheduledPage = () => {
  const router = useRouter();
  return (
    <>
      <Flex align="center" justify={"space-between"} py={5}>
        <Title order={1} size="h2">
          Schedules
        </Title>
        <Button
          variant="fill"
          rightSection={<IconPlus size={14} color="white" />}
          onClick={() => router.push("/scheduled/form")}
        >
          Add Schedule
        </Button>
      </Flex>
      <SchedulesList />
    </>
  );
};
export default ScheduledPage;
