import {
  IconChevronRight,
  IconGauge,
  IconHome2,
  IconLogout,
} from "@tabler/icons-react";
import { NavLink, Stack, Tooltip } from "@mantine/core";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?: () => void;
  href: string;
}

function NavbarLinkItem({ icon: Icon, label, active, href }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <Link href={href}>
        <div
          className={clsx(
            "w-[70px] h-[70px] flex items-center justify-center rounded-md",
            active
              ? "bg-blue-100 text-blue-700"
              : "text-gray-700 hover:bg-gray-100"
          )}
        >
          <Icon size={24} stroke={1.5} />
        </div>
      </Link>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Dashboard", href: "/" },
  { icon: IconGauge, label: "Scheduled", href: "/scheduled" },
];

export function NavbarMinimal() {
  const pathname = usePathname();

  const links = mockdata.map((link) => (
    <NavbarLinkItem
      {...link}
      key={link.label}
      active={pathname === link.href}
      href={link.href}
    />
  ));

  const mobileLinks = mockdata.map((link) => (
    <NavLink
      key={link.href}
      href={link.href}
      label={link.label}
      leftSection={<link.icon size={24} stroke={1.5} />}
      rightSection={
        <IconChevronRight
          size={12}
          stroke={1.5}
          className="mantine-rotate-rtl"
        />
      }
      className="w-full"
    />
  ));

  return (
    <nav className="flex flex-col w-full items-center h-full justify-between">
      <div className="flex mt-4">
        <div className="hidden md:flex">
          <Stack justify="center" gap={0}>
            {links}
          </Stack>
        </div>
        <div className="sm:flex md:hidden">
          <Stack
            justify="justify-start"
            gap={"sm"}
            align="strech"
            className="w-full"
            bg="var(--mantine-color-body)"
          >
            {mobileLinks}
          </Stack>
        </div>
        <div className="xs:flex sm:hidden w-full flex flex-col bg-red-100"></div>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLinkItem icon={IconLogout} label="Logout" href="#" />
      </Stack>
    </nav>
  );
}
