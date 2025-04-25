"use client";

import { useGetSchedules } from "@/features/scheduled/api/use-get-schedules";
import {
  Blockquote,
  Box,
  Button,
  Collapse,
  Skeleton,
  Stack,
  Table,
  Tabs,
} from "@mantine/core";
import dayjs from "dayjs";
import {
  IconAlertCircle,
  IconBackhoe,
  IconCalendar,
  IconChevronRight,
  IconClockPause,
  IconHistoryToggle,
  IconHome,
} from "@tabler/icons-react";
import { useState } from "react";
import { motion } from "motion/react";
import { TabItemsWrapper } from "./tab-items-wrapper";

const SchedulesList = () => {
  const { data, isLoading, isFetching } = useGetSchedules();
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const rows = data?.flatMap((element, index) => {
    const isExpanded = expandedRows.has(element.id);
    const isEven = index % 2 === 0;

    return [
      <Table.Tr
        key={element.id}
        style={{ backgroundColor: isEven ? "#fff" : "#f9f9f9" }}
      >
        <Table.Td>
          <Button
            variant="subtle"
            onClick={() => toggleExpand(element.id)}
            leftSection={
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <IconChevronRight size={16} />
              </motion.div>
            }
          >
            {isExpanded ? "Hide" : "Show"} more
          </Button>
        </Table.Td>
        <Table.Td>{element.woNbr}</Table.Td>
        <Table.Td>{element.woDescription}</Table.Td>
        <Table.Td>{element.woPrograma}</Table.Td>
        <Table.Td>{element.woRetirementGroup}</Table.Td>
      </Table.Tr>,

      // expandable row
      <tr key={`expand-${element.id}`}>
        <td colSpan={5} style={{ padding: 0 }}>
          <Collapse in={isExpanded}>
            <Box p="md" bg="white.0">
              <Tabs
                orientation="vertical"
                defaultValue="scheduled"
                variant="outline"
              >
                <Tabs.List>
                  <Tabs.Tab
                    value="scheduled"
                    leftSection={<IconCalendar size={16} />}
                    color="#B4C6E7"
                  >
                    <span className="">Scheduled</span>
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="main"
                    leftSection={<IconHome size={16} />}
                    color="#FFFFCC"
                  >
                    Main
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="services"
                    leftSection={<IconBackhoe size={16} />}
                    color="#F8CBAD"
                  >
                    Services
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="retired"
                    leftSection={<IconClockPause size={16} />}
                    color="#DBDBDB"
                  >
                    Retired
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="actual-and-final"
                    leftSection={<IconHistoryToggle size={16} />}
                    color="#C6E0B4"
                  >
                    Actual and Final
                  </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="scheduled" p={"sm"}>
                  <TabItemsWrapper
                    items={[
                      {
                        label: "Scheduled Start",
                        value: dayjs(element.scheduledStart).format(
                          "MMM DD, YYYY"
                        ),
                      },
                      {
                        label: "Scheduled Main Install Complete",
                        value: dayjs(
                          element.scheduledMainInstallComplete
                        ).format("MMM DD, YYYY"),
                      },
                      {
                        label: "Scheduled Gas On Complete",
                        value: dayjs(element.scheduledGasOnComplete).format(
                          "MMM DD, YYYY"
                        ),
                      },
                      {
                        label: "Scheduled All Service Complete",
                        value: dayjs(
                          element.scheduledAllServicesComplete
                        ).format("MMM DD, YYYY"),
                      },
                      {
                        label: "Scheduled Retirement Complete",
                        value: dayjs(
                          element.scheduledRetirementComplete
                        ).format("MMM DD, YYYY"),
                      },
                    ]}
                  />
                </Tabs.Panel>
              </Tabs>
            </Box>
          </Collapse>
        </td>
      </tr>,
    ];
  });

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
                <Table.Th></Table.Th>
                <Table.Th>WO Nbr.</Table.Th>
                <Table.Th>WO Description</Table.Th>
                <Table.Th>WO Programa</Table.Th>
                <Table.Th>WO Retirement Group</Table.Th>
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
