// components/ScrollSpyTabs.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollArea, Stack, Tabs } from "@mantine/core";

import {
  IconBackhoe,
  IconBookmark,
  IconCalendar,
  IconChevronLeft,
  IconClockPause,
  IconHistoryToggle,
  IconHome,
  IconLicense,
  icons,
  IconTextPlus,
} from "@tabler/icons-react";

const sections = [
  { id: "scheduled", label: "Scheduled", color: "#fc5c65", activeColor: "#eb3b5a", icon: <IconCalendar /> },
  { id: "main", label: "Main", color: "#fd9644", activeColor: "#fa8231",icon: <IconHome /> },
  { id: "services", label: "Services", color: "#fed330", activeColor: "#f7b731",icon: <IconBackhoe /> },
  { id: "retired", label: "Retired", color: "#26de81", activeColor: "#20bf6b", icon: <IconBookmark /> },
  { id: "actual-and-final", label: "Actual and Final", color: "#2bcbba", activeColor: "#0fb9b1", icon: <IconClockPause /> },
  { id: "permit-remarks", label: "Permit Remarks", color: "#45aaf2", activeColor: "#2d98da", icon: <IconHistoryToggle /> },
  { id: "permits", label: "Permits", color: "#4b7bec", activeColor: "#3867d6", icon: <IconLicense /> },
];

export default function ScrollSpyTabs({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState("scheduled");
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const viewport = scrollRef.current?.querySelector(
      ".mantine-ScrollArea-viewport"
    );
    if (!viewport) return;

    const onScroll = () => {
      const scrollY = viewport.scrollTop + 200;
      let current = sections[0].id;

      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const offsetTop = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= offsetTop && scrollY < offsetTop + height) {
            current = s.id;
            break;
          }
        }
      }

      setActiveTab(current);
    };

    viewport.addEventListener("scroll", onScroll);
    return () => viewport.removeEventListener("scroll", onScroll);
  }, []);

  const handleTabChange = (value: string | null) => {
    if (!value) return;
    const el = document.getElementById(value);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        keepMounted={false}
        mt={15}
        variant="pills"
        styles={{
          tab: {
            transition: "border-color 0.5s ease, color 0.5s ease",
          },
        }}
      >
        <Tabs.List>
          {sections.map((section) => (
            <Tabs.Tab key={section.id} value={section.id} bg={section.color} c={section.activeColor} leftSection={section.icon}>
              {section.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
      <Stack>
        <ScrollArea h={"66vh"} ref={scrollRef}>
          {children}
        </ScrollArea>
      </Stack>
    </>
  );
}
