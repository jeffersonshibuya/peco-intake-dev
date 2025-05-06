// components/theme-provider.tsx
"use client";

import { ReactNode } from "react";
import { AppShell, Burger, Text } from "@mantine/core";
import "@mantine/dates/styles.css";
import { useDisclosure } from "@mantine/hooks";
import { NavbarMinimal } from "./components/navbar";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      padding={{ base: 10, sm: 15, lg: "lg" }}
      header={{ height: 60 }}
      navbar={{
        width: 80,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <div className="flex items-center gap-1 justify-start h-full">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text c="blue.5" fw={700} ml={10}>
            PECO - intake Form
          </Text>
        </div>
      </AppShell.Header>

      <AppShell.Navbar>
        <NavbarMinimal />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
