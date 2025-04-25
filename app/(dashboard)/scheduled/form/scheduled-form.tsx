"use client";

import { ScheduledFormProps } from "@/features/scheduled/types";
import { Grid, Stack } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";

const ScheduledForm = ({ form }: ScheduledFormProps) => {
  return (
    <div className="">
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack style={{ flex: 1 }}>
            <DatePickerInput
              label="Scheduled Start"
              withAsterisk
              leftSection={<IconCalendar size={16} />}
              placeholder="Scheduled Start"
              value={form.getInputProps("scheduledStart").value}
              onChange={(value) =>
                form.setFieldValue("scheduledStart", value || new Date())
              }
              error={form.getInputProps("scheduledStart").error}
            />
            <DatePickerInput
              label="Scheduled Main Install Complete"
              leftSection={<IconCalendar size={16} />}
              placeholder="Scheduled Main Install Complete..."
              value={form.getInputProps("scheduledMainInstallComplete").value}
              onChange={(value) =>
                form.setFieldValue(
                  "scheduledMainInstallComplete",
                  value || new Date()
                )
              }
              error={form.getInputProps("scheduledMainInstallComplete").error}
            />
            <DatePickerInput
              label="Scheduled Gas On Complete"
              leftSection={<IconCalendar size={16} />}
              placeholder="Scheduled Gas On Complete..."
              value={form.getInputProps("scheduledGasOnComplete").value}
              onChange={(value) =>
                form.setFieldValue(
                  "scheduledGasOnComplete",
                  value || new Date()
                )
              }
              error={form.getInputProps("scheduledGasOnComplete").error}
            />
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack align="stretch" justify="center" gap="md" style={{ flex: 2 }}>
            <DatePickerInput
              label="Scheduled Services Start"
              leftSection={<IconCalendar size={16} />}
              placeholder="Scheduled Services Start..."
              value={form.getInputProps("scheduledServicesStart").value}
              // onChange={(value) =>
              //   form.setFieldValue(
              //     "scheduledServicesStart",
              //     value || new Date()
              //   )
              // }
              {...form.getInputProps("scheduledServicesStart")}
              error={form.getInputProps("scheduledServicesStart").error}
            />
            <DatePickerInput
              label="Scheduled All Services Complete"
              leftSection={<IconCalendar size={16} />}
              placeholder="Scheduled All Services Complete..."
              value={form.getInputProps("scheduledAllServicesComplete").value}
              onChange={(value) =>
                form.setFieldValue(
                  "scheduledAllServicesComplete",
                  value || new Date()
                )
              }
              error={form.getInputProps("scheduledAllServicesComplete").error}
            />
            <DatePickerInput
              label="Scheduled Retirement Complete"
              leftSection={<IconCalendar size={16} />}
              placeholder="Scheduled Retirement Complete..."
              value={form.getInputProps("scheduledRetirementComplete").value}
              onChange={(value) =>
                form.setFieldValue(
                  "scheduledRetirementComplete",
                  value || new Date()
                )
              }
              error={form.getInputProps("scheduledRetirementComplete").error}
            />
          </Stack>
        </Grid.Col>
      </Grid>
    </div>
  );
};
export default ScheduledForm;
