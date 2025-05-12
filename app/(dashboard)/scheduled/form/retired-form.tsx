"use client";

import ShowValue from "@/app/components/form/show-value";
import { ScheduledFormProps } from "@/features/scheduled/types";
import { Fieldset, Grid, NumberInput, Select, Stack } from "@mantine/core";

const RetiredForm = ({ form }: ScheduledFormProps) => {
  return (
    <div>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack style={{ flex: 1 }}>
            <Stack align="stretch" justify="center" style={{ flex: 2 }}>
              <NumberInput
                allowNegative={false}
                allowDecimal={false}
                label="Actual Retired per As-Built (outmoded)"
                placeholder="Actual Retired per As-Built (outmoded)..."
                key={form.key("actualRetiredPerAsBuiltOutmoded")}
                {...form.getInputProps("actualRetiredPerAsBuiltOutmoded")}
              />
              <NumberInput
                allowNegative={false}
                allowDecimal={false}
                label="Actual Ft Retired per As-Built (non-outmoded)"
                placeholder="Actual Ft Retired per As-Built (non-outmoded)..."
                key={form.key("actualFtRetiredPerAsBuiltNonModed")}
                {...form.getInputProps("pctRetiredPerAsBuiltNonOutmoded")}
              />
              <NumberInput
                allowNegative={false}
                allowDecimal={false}
                label="Target Ft Retired (non-outmoded)"
                placeholder="Target Ft Retired (non-outmoded)..."
                key={form.key("targetFtRetiredNonOutmoded")}
                {...form.getInputProps("targetFtRetiredNonOutmoded")}
              />
            </Stack>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Fieldset legend="" bg="#ddd">
            <Stack
              align="stretch"
              justify="center"
              gap="md"
              style={{ flex: 2 }}
            >
              <Select
                label="Target Ft Retired (outmoded)"
                placeholder="Select a value..."
                {...form.getInputProps("targetFtRetiredOutmoded")}
                key={form.key("targetFtRetiredOutmoded")}
                value={form.values.woNbr?.toString() ?? null}
                onChange={() => {}}
                data={["Test 1", "Test 2", "Test 3"]}
              c="#20bf6b"
              />
              <ShowValue
                label="Pct Retired (outmoded) Complete"
                value={
                  form.values.pctRetiredOutmodedComplete?.toString() ??
                  "Calc Value"
                }
              bg="#20bf6b"
              />
              <ShowValue
                label="Pct Retired (non-outmoded) Complete"
                value={
                  form.values.pctRetiredNonOutmodedComplete?.toString() ??
                  "Calc Value"
                }
              bg="#20bf6b"
              />
            </Stack>
          </Fieldset>
        </Grid.Col>
      </Grid>
    </div>
  );
};
export default RetiredForm;
