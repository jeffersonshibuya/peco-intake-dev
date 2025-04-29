"use client";

import { ScheduledFormProps } from "@/features/scheduled/types";
import { Fieldset, Grid, Select, Stack, TextInput, Title } from "@mantine/core";

const PermitsForm = ({ form }: ScheduledFormProps) => {
  return (
    <div>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack style={{ flex: 1 }}></Stack>
          <Stack align="stretch" justify="center" gap="md" style={{ flex: 2 }}>
            <Fieldset>
              <Stack
                align="stretch"
                justify="center"
                gap="md"
                style={{ flex: 2 }}
              >
                <Title order={4} c={"gray.7"}>
                  State
                </Title>
                <Select
                  label="State Permit Status"
                  placeholder="Select a value..."
                  {...form.getInputProps("statePermitStatus")}
                  key={form.key("statePermitStatus")}
                  value={form.values.woNbr?.toString() ?? null}
                  onChange={() => {}}
                  data={["Test 1", "Test 2", "Test 3"]}
                />
                <Select
                  label="State Permit Expiration"
                  placeholder="Select a value..."
                  {...form.getInputProps("statePermitExpiration")}
                  key={form.key("statePermitExpiration")}
                  value={form.values.woNbr?.toString() ?? null}
                  onChange={() => {}}
                  data={["Test 1", "Test 2", "Test 3"]}
                />
              </Stack>
            </Fieldset>
            <Fieldset>
              <Stack
                align="stretch"
                justify="center"
                gap="md"
                style={{ flex: 2 }}
              >
                <Title order={4} c={"gray.7"}>
                  Local
                </Title>
                <Select
                  label="Local Permit Status"
                  placeholder="Select a value..."
                  {...form.getInputProps("localPermitStatus")}
                  key={form.key("localPermitStatus")}
                  value={form.values.woNbr?.toString() ?? null}
                  onChange={() => {}}
                  data={["Test 1", "Test 2", "Test 3"]}
                />
                <Select
                  label="Local Permit Expiration"
                  placeholder="Select a value..."
                  {...form.getInputProps("localPermitExpiration")}
                  key={form.key("localPermitExpiration")}
                  value={form.values.woNbr?.toString() ?? null}
                  onChange={() => {}}
                  data={["Test 1", "Test 2", "Test 3"]}
                />
              </Stack>
            </Fieldset>
            <Select
              label="MR Info"
              placeholder="Select a value..."
              {...form.getInputProps("mrInfo")}
              key={form.key("mrInfo")}
              value={form.values.woNbr?.toString() ?? null}
              onChange={() => {}}
              data={["Test 1", "Test 2", "Test 3"]}
            />
            <Select
              label="MR Need Date"
              placeholder="Select a value..."
              {...form.getInputProps("mrNeedDate")}
              key={form.key("mrNeedDate")}
              value={form.values.woNbr?.toString() ?? null}
              onChange={() => {}}
              data={["Test 1", "Test 2", "Test 3"]}
            />
            <Select
              label="Soil Test Date"
              placeholder="Select a value..."
              {...form.getInputProps("soilTestDate")}
              key={form.key("soilTestDate")}
              value={form.values.woNbr?.toString() ?? null}
              onChange={() => {}}
              data={["Test 1", "Test 2", "Test 3"]}
            />
            <Select
              label="Soilt Test Status"
              placeholder="Select a value..."
              {...form.getInputProps("soiltTestStatus")}
              key={form.key("soiltTestStatus")}
              value={form.values.woNbr?.toString() ?? null}
              onChange={() => {}}
              data={["Test 1", "Test 2", "Test 3"]}
            />
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack align="stretch" justify="center" gap="md" style={{ flex: 2 }}>
            <Select
              label="Procedure Status"
              placeholder="Select a value..."
              {...form.getInputProps("procedureStatus")}
              key={form.key("procedureStatus")}
              value={form.values.woNbr?.toString() ?? null}
              onChange={() => {}}
              data={["Test 1", "Test 2", "Test 3"]}
            />
            <Select
              label="Gas On Procedure Required"
              placeholder="Select a value..."
              {...form.getInputProps("gasOnProcedureRequired")}
              key={form.key("gasOnProcedureRequired")}
              value={form.values.woNbr?.toString() ?? null}
              onChange={() => {}}
              data={["Test 1", "Test 2", "Test 3"]}
            />
            <Select
              label="Retirement Procedure Required"
              placeholder="Select a value..."
              {...form.getInputProps("retirementProcedureRequired")}
              key={form.key("retirementProcedureRequired")}
              value={form.values.woNbr?.toString() ?? null}
              onChange={() => {}}
              data={["Test 1", "Test 2", "Test 3"]}
            />
            <Select
              label="Comments From PV"
              placeholder="Select a value..."
              {...form.getInputProps("commentsFromPv")}
              key={form.key("commentsFromPv")}
              value={form.values.woNbr?.toString() ?? null}
              onChange={() => {}}
              data={["Test 1", "Test 2", "Test 3"]}
            />
            <Select
              label="Carry Over From Prior Year"
              placeholder="Select a value..."
              {...form.getInputProps("carryOverFromPriorYear")}
              key={form.key("carryOverFromPriorYear")}
              value={form.values.woNbr?.toString() ?? null}
              onChange={() => {}}
              data={["Test 1", "Test 2", "Test 3"]}
            />
            <Select
              label="Pull Forward"
              placeholder="Select a value..."
              {...form.getInputProps("pullForward")}
              key={form.key("pullForward")}
              value={form.values.woNbr?.toString() ?? null}
              onChange={() => {}}
              data={["Test 1", "Test 2", "Test 3"]}
            />
            <TextInput
              label="WAF?"
              placeholder="Custom layout"
              {...form.getInputProps("waf")}
              key={form.key("waf")}
            />
            <TextInput
              label="Soil Test"
              placeholder="Soil Test"
              {...form.getInputProps("soiltTest")}
              key={form.key("soiltTest")}
            />
          </Stack>
        </Grid.Col>
      </Grid>
    </div>
  );
};
export default PermitsForm;
