"use client";

import { ScheduledFormProps } from "@/features/scheduled/types";
import { Grid, Stack, Textarea } from "@mantine/core";

const PermitRemarksForm = ({ form }: ScheduledFormProps) => {
  return (
    <div>
      <Grid>
        <Grid.Col span={{ base: 12, md: 12 }}>
          <Stack style={{ flex: 1 }}></Stack>
          <Stack align="stretch" justify="center" gap="md" style={{ flex: 2 }}>
            <Textarea
              label="Permit Remarks"
              placeholder="Permit Remarks..."
              resize="vertical"
              autosize
              minRows={5}
              maxRows={10}
              key={form.key("permitRemarks")}
              {...form.getInputProps("permitRemarks")}
            />
          </Stack>
        </Grid.Col>
      </Grid>
    </div>
  );
};
export default PermitRemarksForm;
