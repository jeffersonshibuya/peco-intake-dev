'use client';

import Loader from '@/app/components/loader';
import { useGetSchedules } from '@/features/scheduled/api/use-get-schedules';
import {
  Blockquote,
  Button,
  Divider,
  Flex,
  SimpleGrid,
  Table,
  Tooltip,
} from '@mantine/core';
import { IconAlertCircle, IconEdit, IconHistory } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

const SchedulesList = () => {
  const router = useRouter();
  const { data, isLoading, isFetching } = useGetSchedules();

  const rows = data?.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>
        <SimpleGrid cols={1} spacing='xs' verticalSpacing='xs'>
          <div className='text-sm font-bold'>{element.woNbr}</div>
          <div className='text-md'>{element.woDescription}</div>
        </SimpleGrid>
      </Table.Td>
      <Table.Td>{element.woPrograma}</Table.Td>
      <Table.Td>{element.woRetirementGroup}</Table.Td>
      <Table.Td>
        <SimpleGrid cols={1} spacing='xs' verticalSpacing='xs'>
          <div>
            <div className='underline text-xs'>Scheduled Start</div>
            <div>{element.scheduledStart}</div>
          </div>
          <div>
            <div className='underline text-xs'>Scheduled Services Start</div>
            <div>{element.scheduledServicesStart}</div>
          </div>
          <div>
            <div className='underline text-xs'>
              Scheduled Main Install Complete
            </div>
            <div>{element.scheduledMainInstallComplete}</div>
          </div>
          <div>
            <div className='underline text-xs'>Scheduled Gas On Complete</div>
            <div>{element.scheduledGasOnComplete}</div>
          </div>
          <div>
            <div className='underline text-xs'>
              Scheduled All Services Complete
            </div>
            <div>{element.scheduledAllServicesComplete}</div>
          </div>
        </SimpleGrid>
      </Table.Td>
      <Table.Td>
        <SimpleGrid cols={1} spacing='xs' verticalSpacing='xs'>
          <div>
            <div className='underline text-xs'>Actual</div>
            <div>{element.actualMainInstallFeet}</div>
          </div>
          <div>
            <div className='underline text-xs'>Target</div>
            <div>{element.targetMainInstallFeet}</div>
          </div>
        </SimpleGrid>
      </Table.Td>
      <Table.Td>
        <SimpleGrid cols={1} spacing='xs' verticalSpacing='xs'>
          <Button
            leftSection={<IconEdit size={14} />}
            variant='default'
            onClick={() =>
              router.push(`/scheduled/edit-schedule/${element.id}`)
            }
          >
            Edit
          </Button>

          <Button
            leftSection={<IconHistory size={14} />}
            variant='default'
            onClick={() =>
              router.push(
                `/scheduled-changes/${element.id}?wo_nbr=${element.woNbr}`
              )
            }
          >
            View Changes
          </Button>
        </SimpleGrid>
      </Table.Td>
    </Table.Tr>
  ));

  if (isLoading || isFetching) {
    return <Loader />;
  }

  return (
    <>
      {rows?.length ? (
        <Table.ScrollContainer minWidth={100} type='native'>
          <Table
            mt={16}
            striped
            highlightOnHover
            withTableBorder
            styles={{
              td: { verticalAlign: 'top' },
            }}
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th>
                  <div className='text-sm'>#</div>
                  <div className='text-md'>Description</div>
                </Table.Th>
                <Table.Th>Program</Table.Th>
                <Table.Th>Retirement Group</Table.Th>
                <Table.Th>Dates</Table.Th>
                <Table.Th>Main Install Feet</Table.Th>
                <Table.Th></Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      ) : (
        <Blockquote color='pink' icon={<IconAlertCircle />} mt='xl'>
          <span className='text-slate-500'>No results.</span>
        </Blockquote>
      )}
    </>
  );
};
export default SchedulesList;
