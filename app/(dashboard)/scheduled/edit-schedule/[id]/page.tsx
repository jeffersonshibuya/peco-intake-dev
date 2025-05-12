"use client";

import { mockWorkOrders } from "@/data/mock-wo";
import { insertScheduledSchema } from "@/db/schema";
import { ScheduledFormValues } from "@/features/scheduled/types";
import {
  Accordion,
  Box,
  Button,
  Flex,
  Grid,
  Group,
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
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ScrollSpyTabs from "../../component/scroll-spy-tabs";
import { useGetSchedule } from "@/features/scheduled/api/use-get-schedule";
import ScheduledForm from "../../form/scheduled-form";
import ServicesForm from "../../form/services-form";
import RetiredForm from "../../form/retired-form";
import MainForm from "../../form/main-form";
import ActualFinalForm from "../../form/actual-final-form";
import PermitRemarksForm from "../../form/permit-remarks-form";
import PermitsForm from "../../form/permits-form";
import { normalizeSchedule } from "../../utils/normalizeSchedule";
import { useEditSchedule } from "@/features/scheduled/api/use-edit-scheduled";
import Loader from "@/app/components/loader";

const EditSchedulePage = () => {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const scheduleQuery = useGetSchedule(params.id);
  const scheduleMutation = useEditSchedule(params.id);

  const data = scheduleQuery.data || undefined;
  const woInfo = mockWorkOrders.filter(
    (value) => value.wo_nbr === data?.woNbr
  )[0];
  const loading = scheduleQuery.isPending;

  const [opened, setOpened] = useState<string[]>([
    "scheduled",
    "main",
    "services",
    "retired",
    "actual-and-final",
    "permit-remarks",
    "permits",
  ]);

  const defaultValues = scheduleQuery.data
    ? {
        woNbr: woInfo?.wo_nbr,
        woDescription: woInfo?.description,
        woProgram: woInfo?.program,
        woRetirementGroup: woInfo?.retirement_group,

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
        permitRemarks: "",

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
      }
    : undefined;

  const form = useForm<ScheduledFormValues>({
    mode: "controlled",
    initialValues: defaultValues,
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

  // When the data is ready, update the form values
  useEffect(() => {
    if (scheduleQuery.data) {
      const values = normalizeSchedule(scheduleQuery.data);
      form.setValues({
        ...values,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scheduleQuery.data]);

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

  if (loading) {
    return <Loader />;
  }

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
              WO Nbr.:
              {woInfo?.wo_nbr} <br />
              {woInfo?.description}
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
              <Accordion.Control icon={<IconCalendar />}>
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
              bg={"#C6E0B4"}
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
              bg={"blue.1"}
              id="permit-remarks"
            >
              <Accordion.Control icon={<IconBookmark />}>
                Permit Remarks
              </Accordion.Control>
              <Accordion.Panel>
                <PermitRemarksForm form={form} />
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="permits" bg={"orange.5"} id="permits">
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

export default EditSchedulePage;
