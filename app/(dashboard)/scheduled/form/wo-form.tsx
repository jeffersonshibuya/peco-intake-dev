"use client";

import { mockWorkOrders } from "@/data/mock-wo";
import { ScheduledFormProps } from "@/features/scheduled/types";
import { Box, Flex, Grid, Select, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";

const WoForm = ({ form }: ScheduledFormProps) => {
  const [woSelected, setWoSelected] = useState<{
    wo_nbr: number;
    description: string;
    program: string;
    retirement_group: string;
  }>();

  const handleWoSelection = (value: string | null) => {
    console.log("value", value);
    if (value) {
      const woInfo = mockWorkOrders.find((wo) => wo.wo_nbr === parseInt(value));
      console.log(woInfo);
      if (woInfo) {
        setWoSelected(woInfo);
        form.setValues({
          woNbr: 123,
        });
      }
    }
  };

  return (
    <div>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack style={{ flex: 1 }}>
            <Title order={2} className="text-slate-700">
              WO
            </Title>
            <div className="max-w-[350px] text-slate-500">
              <Title order={6}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                ab quo debitis beatae possimus sapiente nihil natus nulla
                officia, sol
              </Title>
              <Title order={6} my={10} c="red.5">
                (*) Required field
              </Title>
            </div>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack align="stretch" justify="center" gap="lg" style={{ flex: 2 }}>
            <Select
              withAsterisk
              label="Select a WO Nbr."
              placeholder="Select a WO"
              key={form.key("woNbr")}
              value={form.values.woNbr?.toString() ?? null}
              // {...form.getInputProps("woNbr")}
              onChange={(value) => handleWoSelection(value)}
              // data={mockWorkOrders.map((wo) => `${wo.wo_nbr}`)}
              data={mockWorkOrders.map((wo) => ({
                value: wo.wo_nbr.toString(), // 👈 string
                label: `WO #${wo.wo_nbr}`, // 👈 optional better label
              }))}
            />
            {/* <NumberInput
              withAsterisk
              label="woNbr"
              placeholder="woNbr"
              key={form.key("woNbr")}
              {...form.getInputProps("woNbr")}
              allowNegative={false}
              allowDecimal={false}
            /> */}
            <Box bg="gray.1" p="sm">
              <Flex>
                <Text fw={700} c="gray.6">
                  Description:{" "}
                </Text>
                <Text
                  fw={700}
                  variant="gradient"
                  gradient={{ from: "blue", to: "cyan", deg: 90 }}
                  ml={"10"}
                >
                  {woSelected?.description}
                </Text>
              </Flex>
              <Flex>
                <Text fw={700} c="gray.6">
                  Program:
                </Text>
                <Text
                  fw={700}
                  variant="gradient"
                  gradient={{ from: "blue", to: "cyan", deg: 90 }}
                  ml={"10"}
                >
                  {woSelected?.program}
                </Text>
              </Flex>
              <Flex>
                <Text fw={700} c="gray.6">
                  Retirement Group:
                </Text>
                <Text
                  fw={700}
                  variant="gradient"
                  gradient={{ from: "blue", to: "cyan", deg: 90 }}
                  ml={"10"}
                >
                  {woSelected?.retirement_group}
                </Text>
              </Flex>
            </Box>
          </Stack>
        </Grid.Col>
      </Grid>
    </div>
  );
};
export default WoForm;
