"use client";

import ShowValue from "@/app/components/form/show-value";
import { ScheduledFormProps } from "@/features/scheduled/types";
import { Fieldset, Grid, NumberInput, Select, Stack } from "@mantine/core";

const ServicesForm = ({ form }: ScheduledFormProps) => {
  return (
    <div>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack style={{ flex: 1 }}>
            <Stack align="stretch" justify="center" style={{ flex: 2 }}>
              <NumberInput
                allowNegative={false}
                allowDecimal={false}
                label="Actual Nbr Services Complete"
                placeholder="Actual Nbr Services Complete..."
                key={form.key("actualNbrServicesComplete")}
                {...form.getInputProps("actualNbrServicesComplete")}
              />
              <NumberInput
                allowNegative={false}
                allowDecimal={false}
                label="Updated Services"
                placeholder="Updated Services..."
                key={form.key("updatedServices")}
                {...form.getInputProps("updatedServices")}
              />
            </Stack>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Fieldset legend="" bg="#eee">
            <Stack
              align="stretch"
              justify="center"
              gap="md"
              style={{ flex: 2 }}
              c="#f7b731"
            >
              <Select
                label="Target Services"
                placeholder="Select a value..."
                key={form.key("targetServices")}
                value={form.values.woNbr?.toString() ?? null}
                {...form.getInputProps("targetServices")}
                data={["Test 1", "Test 2", "Test 3"]}
              />
              <ShowValue
                label="Pct Services Complete"
                value={
                  form.values.pctServicesComplete?.toString() ?? "Calc Value"
                }
                bg="#f7b731"
              />
            </Stack>
          </Fieldset>
        </Grid.Col>
      </Grid>
    </div>
  );
};
export default ServicesForm;
