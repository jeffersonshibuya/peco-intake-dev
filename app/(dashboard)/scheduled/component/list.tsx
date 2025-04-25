"use client";

import { useGetSchedules } from "@/features/scheduled/api/use-get-schedules";
import { Blockquote, Skeleton, Stack, Table } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

const SchedulesList = () => {
  const { data, isLoading, isFetching } = useGetSchedules();

  const rows = data?.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.woNbr}</Table.Td>
      <Table.Td>{element.woDescription}</Table.Td>
      <Table.Td>{element.woPrograma}</Table.Td>
      <Table.Td>{element.woRetirementGroup}</Table.Td>
      <Table.Td>{element.scheduledStart}</Table.Td>
      <Table.Td>{element.scheduledMainInstallComplete}</Table.Td>
      <Table.Td>{element.scheduledGasOnComplete}</Table.Td>
      <Table.Td>{element.scheduledAllServicesComplete}</Table.Td>
      <Table.Td>{element.actualMainInstallFeet}</Table.Td>
      <Table.Td>{element.targetMainInstallFeet}</Table.Td>
    </Table.Tr>
  ));

  if (isLoading || isFetching) {
    return (
      <Stack gap={"xs"} mt={16}>
        <Skeleton height={30} radius="md" />
        <Skeleton height={30} radius="md" />
      </Stack>
    );
  }

  return (
    <>
      {rows?.length ? (
        <Table.ScrollContainer minWidth={100} type="native">
          <Table mt={16} striped highlightOnHover withTableBorder>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>WO Nbr.</Table.Th>
                <Table.Th>WO Description</Table.Th>
                <Table.Th>WO Programa</Table.Th>
                <Table.Th>WO Retirement Group</Table.Th>
                <Table.Th>Scheduled Start</Table.Th>
                <Table.Th>Scheduled Main Install Complete</Table.Th>
                <Table.Th>Scheduled Gas On Complete</Table.Th>
                <Table.Th>Scheduled All Services Complete</Table.Th>
                <Table.Th>Actual Main Install Feet</Table.Th>
                <Table.Th>Target Main Install Feet</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      ) : (
        <Blockquote color="pink" icon={<IconAlertCircle />} mt="xl">
          <span className="text-slate-500">No results.</span>
        </Blockquote>
      )}
    </>
  );
};
export default SchedulesList;
