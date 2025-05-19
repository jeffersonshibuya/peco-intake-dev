'use client';

import Loader from '@/app/components/loader';
import { useGetSchedules } from '@/features/scheduled/api/use-get-schedules';
import { Badge, Blockquote, Button, SimpleGrid, Table } from '@mantine/core';
import { IconAlertCircle, IconEdit, IconHistory } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

const SchedulesList = () => {
  const router = useRouter();
  const { data, isLoading, isFetching } = useGetSchedules();

  const rows = data?.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>
        <SimpleGrid cols={1} spacing='xs' verticalSpacing='xs'>
          <div>
            <Badge variant='light' color='rgba(0, 0, 0, 1)' size='lg'>
              {element.woNbr}
            </Badge>
          </div>
          <div className='text-xl px-2'>{element.woDescription}</div>
        </SimpleGrid>
      </Table.Td>
      <Table.Td style={{ textAlign: 'center' }}>{element.woPrograma}</Table.Td>
      <Table.Td style={{ textAlign: 'center' }}>
        {element.woRetirementGroup}
      </Table.Td>
      <Table.Td>
        <SimpleGrid cols={1} spacing='xs' verticalSpacing='xs'>
          <div>
            <div className='text-rose-600 bg-rose-100 rounded py-1 px-2 text-xs'>
              Scheduled Start
            </div>
            <div className='px-2'>{element.scheduledStart}</div>
          </div>
          <div>
            <div className='text-orange-600 bg-orange-100 rounded py-1 px-2 text-xs'>
              Scheduled Services Start
            </div>
            <div className='px-2'>{element.scheduledServicesStart}</div>
          </div>
          <div>
            <div className='text-emerald-600 bg-emerald-100 rounded py-1 px-2 text-xs'>
              Scheduled Main Install Complete
            </div>
            <div className='px-2'>{element.scheduledMainInstallComplete}</div>
          </div>
          <div>
            <div className='text-indigo-600 bg-indigo-100 rounded py-1 px-2 text-xs'>
              Scheduled Gas On Complete
            </div>
            <div className='px-2'>{element.scheduledGasOnComplete}</div>
          </div>
          <div>
            <div className='text-violet-600 bg-violet-100 rounded py-1 px-2 text-xs'>
              Scheduled All Services Complete
            </div>
            <div className='px-2'>{element.scheduledAllServicesComplete}</div>
          </div>
        </SimpleGrid>
      </Table.Td>
      <Table.Td>
        <SimpleGrid cols={1} spacing='xs' verticalSpacing='xs'>
          <div>
            <div className='text-fuchsia-600 bg-fuchsia-100 rounded py-1 px-2 text-xs'>
              Actual
            </div>
            <div className='px-2'>{element.actualMainInstallFeet}</div>
          </div>
          <div>
            <div className='text-sky-600 bg-sky-100 rounded py-1 px-2 text-xs'>
              Target
            </div>
            <div className='px-2'>{element.targetMainInstallFeet}</div>
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
                  <div>
                    <Badge variant='light' color='rgba(0, 0, 0, 1)' size='sm'>
                      #
                    </Badge>
                  </div>
                  <div className='text-md'>Description</div>
                </Table.Th>
                <Table.Th style={{ textAlign: 'center' }}>Program</Table.Th>
                <Table.Th style={{ textAlign: 'center' }}>
                  Retirement Group
                </Table.Th>
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
