"use client";

import { mockWorkOrders } from "@/data/mock-wo";
import { insertScheduledSchema } from "@/db/schema";
import { useCreateSchedule } from "@/features/scheduled/api/use-create-scheduled";
import { ScheduledFormValues } from "@/features/scheduled/types";
import {
  Accordion,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Group,
  Select,
  Text,
  Title,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import {
  IconBackhoe,
  IconBookmark,
  IconCalendar,
  IconChevronLeft,
  IconClockPause,
  IconHistoryToggle,
  IconHome,
  IconLicense,
  IconTextPlus,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ScheduledForm from "../form/scheduled-form";
import MainForm from "../form/main-form";
import ServicesForm from "../form/services-form";
import RetiredForm from "../form/retired-form";
import ActualFinalForm from "../form/actual-final-form";
import PermitRemarksForm from "../form/permit-remarks-form";
import PermitsForm from "../form/permits-form";
import ScrollSpyTabs from "../component/scroll-spy-tabs";

const ScheduledSPAFormPage = () => {
  const router = useRouter();
  const scheduleMutation = useCreateSchedule();
  const [woSelected, setWoSelected] = useState<{
    wo_nbr: number;
    description: string;
    program: string;
    retirement_group: string;
  } | null>(null);
  const [opened, setOpened] = useState<string[]>([
    "scheduled",
    "main",
    "services",
    "retired",
    "actual-and-final",
    "permit-remarks",
    "permits",
  ]);

  const handleWoSelection = (value: string | null) => {
    if (value) {
      const woInfo = mockWorkOrders.find((wo) => wo.wo_nbr === parseInt(value));
      if (woInfo) {
        setWoSelected(woInfo);
        form.setValues({
          woNbr: woInfo.wo_nbr,
        });
      }
    }
  };

  const form = useForm<ScheduledFormValues>({
    mode: "controlled",
    initialValues: {
      woNbr: undefined,
      woDescription: undefined,
      woProgram: undefined,
      woRetirementGroup: undefined,

      // Scheduled
      scheduledStart: undefined,
      scheduledMainInstallComplete: undefined,
      scheduledGasOnComplete: undefined,
      scheduledServicesStart: undefined,
      scheduledAllServicesComplete: undefined,
      scheduledRetirementComplete: undefined,

      // Main
      actualMainInstallFeet: undefined,
      targetMainInstallFeet: undefined,
      updatedMainInstallFeet: undefined,
      pctMainInstalled: undefined,

      // Services
      actualNbrServicesComplete: undefined,
      updatedServices: undefined,
      targetServices: undefined,
      pctServicesComplete: undefined,

      // Retired
      actualFtRetiredPerAsBuiltOutmoded: undefined,
      targetFtRetiredOutmoded: undefined,
      pctRetiredOutmodedComplete: undefined,
      actualFtRetiredPerAsBuiltNonOutmoded: undefined,
      targetFtRetiredNonOutmoded: undefined,
      pctRetiredNonOutmodedComplete: undefined,

      // Actual and Final
      actualStart: undefined,
      actualMainInstallComplete: undefined,
      actualGasOnComplete: undefined,
      actualServicesStart: undefined,
      actualAllServicesComplete: undefined,
      actualRetirementComplete: undefined,
      actualPackageSubmittedDate: undefined,
      actualRetorationTicketSubmittedDate: undefined,
      finalInvoiceDateSubmitted: undefined,
      weekEnding: undefined,
      scopeYear: undefined,
      cocRegion: undefined,
      buildingCoc: undefined,
      polSub: undefined,

      // Permit remarks
      permitRemarks: undefined,

      // Permits
      statePermitStatus: undefined,
      statePermitExpiration: undefined,
      localPermitStatus: undefined,
      localPermitExpiration: undefined,
      mrInfo: undefined,
      mrNeedDate: undefined,
      soilTestDate: undefined,
      soiltTestStatus: undefined,
      procedureStatus: undefined,
      gasOnProcedureRequired: undefined,
      retirementProcedureRequired: undefined,
      commentsFromPv: undefined,
      carryOverFromPriorYear: undefined,
      pullForward: undefined,
      waf: undefined,
      soiltTest: undefined,
    },

    validate: {
      woNbr: isNotEmpty("*Required"),
      scheduledStart: isNotEmpty("*Required"),
      // scheduledMainInstallComplete: isNotEmpty("*Required"),
      // scheduledGasOnComplete: isNotEmpty("*Required"),
      // scheduledServicesStart: isNotEmpty("*Required"),
      // scheduledAllServicesComplete: isNotEmpty("*Required"),
      // scheduledRetirementComplete: isNotEmpty("*Required"),

      // actualMainInstallFeet: isNotEmpty("*Required"),
      // targetMainInstallFeet: isNotEmpty("*Required"),

      // actualNbrServicesComplete: isNotEmpty("*Required"),
      // targetServices: isNotEmpty("*Required"),
    },
  });

  const handleSubmit = () => {
    const result = form.validate();

    if (!result.hasErrors) {
      const parsed = insertScheduledSchema.parse({
        ...form.values,
      });
      scheduleMutation.mutate(parsed);
      router.push("/scheduled");
      return;
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="mt-3"
      >
        <Flex align="center" py={5}>
          <Button component={Link} href="/scheduled" variant="light" mr={10}>
            <IconChevronLeft size={30} stroke={2.5} />
            Back
          </Button>
          <Title order={1} size="h3" className="text-slate-700">
            Add New Scheduled
          </Title>
        </Flex>

        <Grid mt={16} mb={10}>
          <Grid.Col span={10}>
            <Box bg="gray.1" p={"sm"} style={{ borderRadius: "5px" }}>
              <Select
                withAsterisk
                label="Select a WO Nbr."
                placeholder="Select a WO"
                value={woSelected?.wo_nbr.toString() ?? null}
                onChange={(value) => handleWoSelection(value)}
                data={mockWorkOrders.map((wo) => `${wo.wo_nbr}`)}
                error={form.getInputProps("woNbr").error}
              />
              {woSelected && (
                <Flex my="5">
                  <Text>Description: {woSelected?.description}</Text>
                  <Divider
                    orientation="vertical"
                    size="md"
                    mx={10}
                    color="blue"
                  />
                  <Text>Program: {woSelected?.program}</Text>
                  <Divider
                    orientation="vertical"
                    size="md"
                    mx={10}
                    color="blue"
                  />
                  <Text>Retirement Group: {woSelected?.retirement_group}</Text>
                </Flex>
              )}
            </Box>
          </Grid.Col>
          <Grid.Col span={2}>
            <Group justify="flex-end" mt="md">
              <Button
                type="submit"
                size="lg"
                rightSection={<IconTextPlus size={24} />}
                disabled={scheduleMutation.isPending}
              >
                {scheduleMutation.isPending ? "Saving..." : "Save"}
              </Button>
            </Group>
          </Grid.Col>
        </Grid>
        <ScrollSpyTabs>
          <Accordion
            variant="separated"
            multiple
            value={opened}
            onChange={setOpened}
            mt={15}
          >
            <Accordion.Item value="scheduled" bg={"#fc5c65"} id="scheduled">
              <Accordion.Control icon={<IconCalendar />} bg={"#eb3b5a"} c={"#ffffff"} fz="h2">
                Scheduled
              </Accordion.Control>
              <Accordion.Panel>
                <ScheduledForm form={form} />
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="main" bg={"#fd9644"} id="main">
              <Accordion.Control icon={<IconHome />}>Main</Accordion.Control>
              <Accordion.Panel>
                <MainForm form={form} />
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="services" bg={"#fed330"} id="services">
              <Accordion.Control icon={<IconBackhoe />}>
                Services
              </Accordion.Control>
              <Accordion.Panel>
                <ServicesForm form={form} />
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="retired" bg={"#26de81"} id="retired">
              <Accordion.Control icon={<IconClockPause />}>
                Retired
              </Accordion.Control>
              <Accordion.Panel>
                <RetiredForm form={form} />
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item
              value="actual-and-final"
              bg={"#2bcbba"}
              id="actual-and-final"
            >
              <Accordion.Control icon={<IconHistoryToggle />}>
                Actual and Final
              </Accordion.Control>
              <Accordion.Panel>
                <ActualFinalForm form={form} />
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item
              value="permit-remarks"
              bg={"#45aaf2"}
              id="permit-remarks"
            >
              <Accordion.Control icon={<IconBookmark />}>
                Permit Remarks
              </Accordion.Control>
              <Accordion.Panel>
                <PermitRemarksForm form={form} />
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="permits" bg={"#4b7bec"} id="permits">
              <Accordion.Control icon={<IconLicense />}>
                Permits
              </Accordion.Control>
              <Accordion.Panel>
                <PermitsForm form={form} />
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </ScrollSpyTabs>
      </form>
    </div>
  );
};

export default ScheduledSPAFormPage;
