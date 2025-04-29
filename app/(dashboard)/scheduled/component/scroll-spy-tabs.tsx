// components/ScrollSpyTabs.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollArea, Stack, Tabs } from "@mantine/core";

const sections = [
  { id: "scheduled", label: "Scheduled" },
  { id: "main", label: "Main" },
  { id: "services", label: "Services" },
  { id: "retired", label: "Retired" },
  { id: "actual-and-final", label: "Actual and Final" },
  { id: "permit-remarks", label: "Permit Remarks" },
  { id: "permits", label: "Permits" },
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
    console.log(viewport);
    if (!viewport) return;

    const onScroll = () => {
      console.log("scrolling....");
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
        styles={{
          tab: {
            transition: "border-color 0.5s ease, color 0.5s ease",
          },
        }}
      >
        <Tabs.List>
          {sections.map((section) => (
            <Tabs.Tab key={section.id} value={section.id}>
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
