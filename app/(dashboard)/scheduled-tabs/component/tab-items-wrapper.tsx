"use client";

import { Flex, Grid, Text } from "@mantine/core";

interface TabItemsWrapperProps {
  items: {
    label: string;
    value?: string | null;
  }[];
}

export const TabItemsWrapper = ({ items }: TabItemsWrapperProps) => {
  return (
    <Grid>
      {items.map((item, index) => (
        <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
          <Flex>
            <Text c="gray.8" fw={500} mr={5}>
              {item.label}:
            </Text>
            <Text c="blue.6" fw={700}>
              {item.value}
            </Text>
          </Flex>
        </Grid.Col>
      ))}
    </Grid>
  );
};
