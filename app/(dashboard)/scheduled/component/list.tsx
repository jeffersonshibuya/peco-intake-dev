"use client";

import Loader from "@/app/components/loader";
import { useGetSchedules } from "@/features/scheduled/api/use-get-schedules";
import { Blockquote, Divider, Flex, Table, Tooltip } from "@mantine/core";
import { IconAlertCircle, IconEdit, IconHistory } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const SchedulesList = () => {
  const router = useRouter();
  const { data, isLoading, isFetching } = useGetSchedules();

  const rows = data?.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.woNbr}</Table.Td>
      <Table.Td>{element.woDescription}</Table.Td>
      <Table.Td>{element.woPrograma}</Table.Td>
      <Table.Td>{element.woRetirementGroup}</Table.Td>
      <Table.Td>{element.scheduledStart}</Table.Td>
      <Table.Td>{element.scheduledServicesStart}</Table.Td>
      <Table.Td>{element.scheduledMainInstallComplete}</Table.Td>
      <Table.Td>{element.scheduledAllServicesComplete}</Table.Td>
      <Table.Td>{element.scheduledGasOnComplete}</Table.Td>
      <Table.Td>{element.actualMainInstallFeet}</Table.Td>
      <Table.Td>{element.targetMainInstallFeet}</Table.Td>
      <Table.Td>
        <Flex gap={5}>
          <Tooltip label="Edit" color="blue" withArrow arrowSize={6}>
            <IconEdit
              color={"blue"}
              size={22}
              style={{ cursor: "pointer" }}
              onClick={() =>
                router.push(`/scheduled/edit-schedule/${element.id}`)
              }
            />
          </Tooltip>
          <Divider size="sm" orientation="vertical" />
          <Tooltip label="View Changes" color="teal" withArrow arrowSize={6}>
            <IconHistory
              color={"teal"}
              size={22}
              style={{ cursor: "pointer" }}
              onClick={() =>
                router.push(
                  `/scheduled-changes/${element.id}?wo_nbr=${element.woNbr}`
                )
              }
            />
          </Tooltip>
        </Flex>
      </Table.Td>
    </Table.Tr>
  ));

  if (isLoading || isFetching) {
    return <Loader />;
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
                <Table.Th></Table.Th>
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
