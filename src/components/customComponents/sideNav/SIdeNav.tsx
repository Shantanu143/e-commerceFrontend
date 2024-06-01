import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Settings,
  Settings2,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";
interface SideNavItem {
  name: string;
  route: string;
  icon: React.ReactNode;
}

const sideNav: SideNavItem[] = [
  {
    name: "Dashboard",
    route: "/vender/",
    icon: <Home className="h-5 w-5" />,
  },
  {
    name: "Orders",
    route: "/vender/orders",
    icon: <ShoppingCart className="h-5 w-5" />,
  },
  {
    name: "Products",
    route: "/vender/products",
    icon: <Package className="h-5 w-5" />,
  },
  {
    name: "Analytics",
    route: "/vender/analytics",
    icon: <LineChart className="h-5 w-5" />,
  },
];
export const SIdeNav = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 py-4">
        <Link
          to={"/"}
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        {sideNav.map((data, index) => {
          return (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Link
                  to={data.route}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  {data.icon}
                  <span className="sr-only">{data.name}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{data.name}</TooltipContent>
            </Tooltip>
          );
        })}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              to={"/"}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
};

export const SIdeNavMobile = () => {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to={"/"}
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>

            {sideNav.map((data, index) => {
              return (
                <Link
                  key={index}
                  to={data.route}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  {data.icon}
                  {data.name}
                </Link>
              );
            })}
            <Link
              to={"/"}
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Settings2 className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
