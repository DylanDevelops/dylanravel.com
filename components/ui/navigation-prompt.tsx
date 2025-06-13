"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { Home, Paintbrush } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const NavigationPrompt = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Page Navigation">
          <CommandItem onSelect={() => runCommand(() => redirect("/"))}>
            <Home />
            <span>Home Page</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => redirect("/styling"))}>
            <Paintbrush />
            <span>Styling Page</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default NavigationPrompt;
