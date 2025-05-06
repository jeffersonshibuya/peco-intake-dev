"use client";

import { mockWorkOrders } from "@/data/mock-wo";
import { getScheduledHistory } from "@/lib/getScheduledHistory";
import { diffVersions } from "@/utils/scheduled-changes-diff";
import {
  Blockquote,
  Box,
  Button,
  Divider,
  Flex,
  LoadingOverlay,
  ScrollArea,
  Stack,
  Table,
  Text,
  Timeline,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconAlertCircle,
  IconChevronLeft,
  IconReplace,
} from "@tabler/icons-react";
import dayjs from "dayjs";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type ScheduledData = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

type ChangeEntry = {
  version: number;
  changedAt: Date | string | null;
  data: ScheduledData;
};

// Optional: Format field names for readability
function formatKey(key: string): string {
  return key
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const hiddenFields = new Set(["id", "createdAt", "updatedAt"]);

export default function ScheduledHistory() {
  const params = useParams<{ id: string }>();
  const queryParams = useSearchParams();
  const [visible, { toggle }] = useDisclosure(true);

  const versionRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const woInfo = mockWorkOrders.filter(
    (value) => value.wo_nbr.toString() === queryParams.get("wo_nbr")
  )[0];

  const [history, setHistory] = useState<ChangeEntry[]>([]);

  useEffect(() => {
    async function getChanges() {
      const data = await getScheduledHistory(params.id);

      setHistory(data);
      toggle();
    }
    getChanges();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <>
      <Box pos="relative">
        <Flex align="center" py={5}>
          <Button component={Link} href="/scheduled" variant="light" mr={10}>
            <IconChevronLeft size={30} stroke={2.5} />
            Back
          </Button>
          <Title order={1} size="h3" className="text-slate-700">
            Scheduled Changes
          </Title>
        </Flex>
        <Box bg="gray.1" p={"sm"} style={{ borderRadius: "5px" }}>
          WO Nbr.: {woInfo?.wo_nbr} <br />
          {woInfo?.description}
        </Box>
        <Divider my="sm" />
        {!history.length && (
          <Blockquote color="blue" icon={<IconAlertCircle />} mt="xl">
            <span className="text-slate-500">
              There is no changes for this scheduled yet.
            </span>
          </Blockquote>
        )}

        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
          loaderProps={{ color: "blue", type: "bars" }}
        />

        <Box style={{ display: "flex", height: "74vh", overflow: "hidden" }}>
          {/* Left Column (scrollable content) */}
          <ScrollArea style={{ flex: 1, paddingRight: "20px" }}>
            <Timeline active={history.length} bulletSize={26} mt={10}>
              {history.map((change, i) => {
                const prev = i > 0 ? history[i - 1].data : null;
                const diff = diffVersions(prev, change.data);
                const isInitial = change.version === 1;

                return (
                  <Timeline.Item
                    key={change.version}
                    ref={(el) =>
                      void (versionRefs.current[change.version] = el!)
                    }
                    title={
                      <Text c="teal" fw={700}>
                        Version {change.version}
                      </Text>
                    }
                    bullet={<IconReplace size={14} />}
                  >
                    <Text size="xs" c="gray.7" mb="xs">
                      {change.changedAt
                        ? dayjs(new Date(change.changedAt)).format(
                            "MMM D, YYYY h:mm A"
                          )
                        : "Unknown date"}
                    </Text>

                    {Object.keys(diff).length > 0 ? (
                      isInitial ? (
                        <>
                          <Text size="sm" mb={4}>
                            Initial values:
                          </Text>
                          <Table withColumnBorders striped withTableBorder>
                            <Table.Thead>
                              <Table.Tr>
                                <Table.Td style={{ width: 350 }}>
                                  Field
                                </Table.Td>
                                <Table.Td style={{ width: 200 }}>
                                  Value
                                </Table.Td>
                              </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                              {Object.entries(diff)
                                .filter(([key]) => !hiddenFields.has(key))
                                .map(([key, { new: newVal }]) => (
                                  <Table.Tr key={key}>
                                    <Table.Td>{formatKey(key)}</Table.Td>
                                    <Table.Td>{String(newVal ?? "—")}</Table.Td>
                                  </Table.Tr>
                                ))}
                            </Table.Tbody>
                          </Table>
                        </>
                      ) : (
                        <>
                          <Text size="sm" c="gray.6" mb="xs">
                            {Object.keys(diff).length} field
                            {Object.keys(diff).length > 1 ? "s" : ""} changed
                          </Text>
                          <Table withColumnBorders striped withTableBorder>
                            <Table.Thead>
                              <Table.Tr>
                                <Table.Td style={{ width: 350 }}>
                                  Field
                                </Table.Td>
                                <Table.Td style={{ width: 200 }}>Old</Table.Td>
                                <Table.Td style={{ width: 200 }}>New</Table.Td>
                              </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                              {Object.entries(diff)
                                .filter(([key]) => !hiddenFields.has(key))
                                .map(([key, { old, new: newVal }]) => (
                                  <Table.Tr key={key}>
                                    <Table.Td>{formatKey(key)}</Table.Td>
                                    <Table.Td c="red">
                                      {String(old ?? "—")}
                                    </Table.Td>
                                    <Table.Td c="green">
                                      {String(newVal ?? "—")}
                                    </Table.Td>
                                  </Table.Tr>
                                ))}
                            </Table.Tbody>
                          </Table>
                        </>
                      )
                    ) : (
                      <Text size="sm" c="gray">
                        No changes in this version.
                      </Text>
                    )}
                  </Timeline.Item>
                );
              })}
            </Timeline>
          </ScrollArea>
          {/* Right Column (fixed space for the box with button) */}

          <Box
            style={{
              width: "150px",
              padding: "10px",
              margin: "0 auto",
              backgroundColor: "#fff",
              height: "auto",
              position: "sticky",
              borderLeft: "1px solid lightgray",
              top: 0,
            }}
          >
            {history.map((change) => (
              <Stack key={change.version} my={5}>
                <Box
                  style={{
                    borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                    cursor: "pointer",
                    paddingBottom: "10px",
                  }}
                  variant="light"
                  onClick={() => {
                    const target = versionRefs.current[change.version];
                    if (target) {
                      target.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  <Stack my={1}>
                    <Text size="sm" p={3} c={"gray.7"}>
                      Version {change.version} <br />
                      <Text size="xs" c={"gray.6"}>
                        {change.changedAt
                          ? dayjs(new Date(change.changedAt)).format(
                              "MMM D, YYYY h:mm A"
                            )
                          : "Unknown date"}
                      </Text>
                    </Text>
                  </Stack>
                </Box>
              </Stack>
            ))}
          </Box>
        </Box>

        {/* <Box
          style={{
            width: "300px",
            padding: "10px",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Button onClick={() => {}}>Scroll to Version</Button>
        </Box>

        <ScrollArea h={"75vh"}>
          <Timeline active={history.length} bulletSize={26} mt={10}>
            {history.map((change, i) => {
              const prev = i > 0 ? history[i - 1].data : null;
              const diff = diffVersions(prev, change.data);
              const isInitial = change.version === 1;

              return (
                <Timeline.Item
                  key={change.version}
                  ref={(el) => void (versionRefs.current[change.version] = el!)}
                  title={
                    <Text c="teal" fw={700}>
                      Version {change.version}
                    </Text>
                  }
                  bullet={<IconReplace size={14} />}
                >
                  <Text size="xs" c="gray.7" mb="xs">
                    {change.changedAt
                      ? dayjs(new Date(change.changedAt)).format(
                          "MMM D, YYYY h:mm A"
                        )
                      : "Unknown date"}
                  </Text>

                  {Object.keys(diff).length > 0 ? (
                    isInitial ? (
                      <>
                        <Text size="sm" mb={4}>
                          Initial values:
                        </Text>
                        <Table withColumnBorders striped withTableBorder>
                          <Table.Thead>
                            <Table.Tr>
                              <Table.Td style={{ width: 350 }}>Field</Table.Td>
                              <Table.Td style={{ width: 200 }}>Value</Table.Td>
                            </Table.Tr>
                          </Table.Thead>
                          <Table.Tbody>
                            {Object.entries(diff)
                              .filter(([key]) => !hiddenFields.has(key))
                              .map(([key, { new: newVal }]) => (
                                <Table.Tr key={key}>
                                  <Table.Td>{formatKey(key)}</Table.Td>
                                  <Table.Td>{String(newVal ?? "—")}</Table.Td>
                                </Table.Tr>
                              ))}
                          </Table.Tbody>
                        </Table>
                      </>
                    ) : (
                      <>
                        <Text size="sm" c="gray.6" mb="xs">
                          {Object.keys(diff).length} field
                          {Object.keys(diff).length > 1 ? "s" : ""} changed
                        </Text>
                        <Table withColumnBorders striped withTableBorder>
                          <Table.Thead>
                            <Table.Tr>
                              <Table.Td style={{ width: 350 }}>Field</Table.Td>
                              <Table.Td style={{ width: 200 }}>Old</Table.Td>
                              <Table.Td style={{ width: 200 }}>New</Table.Td>
                            </Table.Tr>
                          </Table.Thead>
                          <Table.Tbody>
                            {Object.entries(diff)
                              .filter(([key]) => !hiddenFields.has(key))
                              .map(([key, { old, new: newVal }]) => (
                                <Table.Tr key={key}>
                                  <Table.Td>{formatKey(key)}</Table.Td>
                                  <Table.Td c="red">
                                    {String(old ?? "—")}
                                  </Table.Td>
                                  <Table.Td c="green">
                                    {String(newVal ?? "—")}
                                  </Table.Td>
                                </Table.Tr>
                              ))}
                          </Table.Tbody>
                        </Table>
                      </>
                    )
                  ) : (
                    <Text size="sm" c="gray">
                      No changes in this version.
                    </Text>
                  )}
                </Timeline.Item>
              );
            })}
          </Timeline>
        </ScrollArea> */}
      </Box>
    </>
  );
}
