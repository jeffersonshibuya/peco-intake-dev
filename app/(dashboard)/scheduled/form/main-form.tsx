"use client";

import ShowValue from "@/app/components/form/show-value";
import { ScheduledFormProps } from "@/features/scheduled/types";
import { Fieldset, Grid, NumberInput, Select, Stack } from "@mantine/core";

const MainForm = ({ form }: ScheduledFormProps) => {
  return (
    <div>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack style={{ flex: 1 }}></Stack>
          <Stack align="stretch" justify="center" gap="md" style={{ flex: 2 }}>
            <NumberInput
              allowNegative={false}
              allowDecimal={false}
              label="Actual Main Install Feet"
              placeholder="Actual Main Install Feet..."
              key={form.key("actualMainInstallFeet")}
              {...form.getInputProps("actualMainInstallFeet")}
            />
            <NumberInput
              allowNegative={false}
              allowDecimal={false}
              label="Updated Main Install Feet"
              placeholder="Updated Main Install Feet..."
              key={form.key("updatedMainInstallFeet")}
              {...form.getInputProps("updatedMainInstallFeet")}
            />
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }} >
          <Fieldset legend="" bg="#ddd">
            <Stack
              align="stretch"
              justify="center"
              gap="md"
              style={{ flex: 2 }}
              c="#fa8231"
            >
              <Select
                label="Target Main Installed Feet"
                placeholder="Select a value..."
                key={form.key("targetMainInstallFeet")}
                value={form.values.woNbr?.toString() ?? null}
                // onChange={(value) => form.setValues()}
                {...form.getInputProps("targetMainInstallFeet")}
                data={["Test 1", "Test 2", "Test 3"]}
                
              />
              <ShowValue
                label="Pct Main Installed"
                value={form.values.pctMainInstalled?.toString() ?? "Calc Value"}
                bg="#fa8231"
              />
            </Stack>
          </Fieldset>
        </Grid.Col>
      </Grid>
    </div>
  );
};
export default MainForm;
