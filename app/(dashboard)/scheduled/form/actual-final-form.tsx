"use client";

import { ScheduledFormProps } from "@/features/scheduled/types";
import { Fieldset, Grid, Select, Stack } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";

const ActualFinalForm = ({ form }: ScheduledFormProps) => {
  return (
    <div>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack style={{ flex: 1 }}>
            <Stack align="stretch" justify="center" style={{ flex: 2 }}>
              <DatePickerInput
                label="Actual Start"
                leftSection={<IconCalendar size={16} />}
                placeholder="Actual Start..."
                value={form.getInputProps("actualStart").value}
                onChange={(value) =>
                  form.setFieldValue("actualStart", value || new Date())
                }
                error={form.getInputProps("actualStart").error}
              />
              <DatePickerInput
                label="Actual Main Install Complete"
                leftSection={<IconCalendar size={16} />}
                placeholder="Actual Main Install Complete..."
                value={form.getInputProps("actualMainInstallComplete").value}
                onChange={(value) =>
                  form.setFieldValue(
                    "actualMainInstallComplete",
                    value || new Date()
                  )
                }
                error={form.getInputProps("actualMainInstallComplete").error}
              />
              <DatePickerInput
                label="Actual Gas On Complete"
                leftSection={<IconCalendar size={16} />}
                placeholder="Actual Gas On Complete..."
                value={form.getInputProps("actualGasOnComplete").value}
                onChange={(value) =>
                  form.setFieldValue("actualGasOnComplete", value || new Date())
                }
                error={form.getInputProps("actualGasOnComplete").error}
              />
              <DatePickerInput
                label="Actual Services Start"
                leftSection={<IconCalendar size={16} />}
                placeholder="Actual Services Start..."
                value={form.getInputProps("actualServicesStart").value}
                onChange={(value) =>
                  form.setFieldValue("actualServicesStart", value || new Date())
                }
                error={form.getInputProps("actualServicesStart").error}
              />
              <DatePickerInput
                label="Actual All Services Complete"
                leftSection={<IconCalendar size={16} />}
                placeholder="Actual All Services Complete..."
                value={form.getInputProps("actualAllServicesComplete").value}
                onChange={(value) =>
                  form.setFieldValue(
                    "actualAllServicesComplete",
                    value || new Date()
                  )
                }
                error={form.getInputProps("actualAllServicesComplete").error}
              />
              <DatePickerInput
                label="Actual Retirement Complete"
                leftSection={<IconCalendar size={16} />}
                placeholder="Actual Retirement Complete..."
                value={form.getInputProps("actualRetirementComplete").value}
                onChange={(value) =>
                  form.setFieldValue(
                    "actualRetirementComplete",
                    value || new Date()
                  )
                }
                error={form.getInputProps("actualRetirementComplete").error}
              />
              <DatePickerInput
                label="Actual Package Submitted Date"
                leftSection={<IconCalendar size={16} />}
                placeholder="Actual Package Submitted Date..."
                value={form.getInputProps("actualPackageSubmittedDate").value}
                onChange={(value) =>
                  form.setFieldValue(
                    "actualPackageSubmittedDate",
                    value || new Date()
                  )
                }
                error={form.getInputProps("actualPackageSubmittedDate").error}
              />
              <DatePickerInput
                label="Actual Retoration Ticket Submitted Date"
                leftSection={<IconCalendar size={16} />}
                placeholder="Actual Retoration Ticket Submitted Date..."
                value={
                  form.getInputProps("actualRetorationTicketSubmittedDate")
                    .value
                }
                onChange={(value) =>
                  form.setFieldValue(
                    "actualRetorationTicketSubmittedDate",
                    value || new Date()
                  )
                }
                error={
                  form.getInputProps("actualRetorationTicketSubmittedDate")
                    .error
                }
              />
              <DatePickerInput
                label="Final Invoice Date Submitted"
                leftSection={<IconCalendar size={16} />}
                placeholder="Final Invoice Date Submitted..."
                value={form.getInputProps("finalInvoiceDateSubmitted").value}
                onChange={(value) =>
                  form.setFieldValue(
                    "finalInvoiceDateSubmitted",
                    value || new Date()
                  )
                }
                error={form.getInputProps("finalInvoiceDateSubmitted").error}
              />
              <DatePickerInput
                label="Week Ending"
                leftSection={<IconCalendar size={16} />}
                placeholder="Week Ending..."
                value={form.getInputProps("weekEnding").value}
                onChange={(value) =>
                  form.setFieldValue("weekEnding", value || new Date())
                }
                error={form.getInputProps("weekEnding").error}
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
                label="Scope Year"
                placeholder="Select a value..."
                {...form.getInputProps("scopeYear")}
                key={form.key("scopeYear")}
                value={form.values.woNbr?.toString() ?? null}
                onChange={() => {}}
                data={["2021", "2022", "2023", "2024", "2025"]}
                c="#0fb9b1"
              />
              <Select
                label="COC Region"
                placeholder="Select a value..."
                {...form.getInputProps("cocRegion")}
                key={form.key("cocRegion")}
                value={form.values.woNbr?.toString() ?? null}
                onChange={() => {}}
                data={["North", "South", "East", "West"]}
                c="#0fb9b1"
              />
              <Select
                label="Building COC"
                placeholder="Select a value..."
                {...form.getInputProps("buildingCoc")}
                key={form.key("buildingCoc")}
                value={form.values.woNbr?.toString() ?? null}
                onChange={() => {}}
                data={["Building 01", "Building 02", "Building 03"]}
                c="#0fb9b1"
              />
              <Select
                label="Pol Sub"
                placeholder="Select a value..."
                {...form.getInputProps("polSub")}
                key={form.key("polSub")}
                value={form.values.woNbr?.toString() ?? null}
                onChange={() => {}}
                data={["550", "511"]}
                c="#0fb9b1"
              />
            </Stack>
          </Fieldset>
        </Grid.Col>
      </Grid>
    </div>
  );
};
export default ActualFinalForm;
