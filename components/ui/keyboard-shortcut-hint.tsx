import { cn } from "@/lib/utils";

/**
 * Props for the `KeyboardShortcutHint` component.
 *
 * @property ctrl - If true, indicates the Control key is part of the shortcut.
 * @property alt - If true, indicates the Alt key is part of the shortcut.
 * @property shift - If true, indicates the Shift key is part of the shortcut.
 * @property keycodes - An array of key codes representing the main keys in the shortcut.
 * @property onlyRenderText - If true, renders the shortcut as plain text instead of styled elements.
 */
type KeyboardShortcutHintProps = {
  ctrl?: boolean;
  alt?: boolean;
  shift?: boolean;
  keycodes: string[];
  onlyRenderText?: boolean;
};

const KeyboardShortcutHint = ({
  ctrl = false,
  alt = false,
  shift = false,
  keycodes,
  onlyRenderText = false,
}: KeyboardShortcutHintProps) => {
  let ctrlIcon;
  let altIcon;
  let shiftIcon;
  const platform = navigator.platform;

  if (platform.includes("Mac")) {
    ctrlIcon = "⌘ ";
    altIcon = "⌥ ";
    shiftIcon = "⇧ ";
  } else {
    ctrlIcon = "Ctrl ";
    altIcon = "Alt ";
    shiftIcon = "Shift ";
  }

  return (
    <kbd
      className={cn(
        !onlyRenderText &&
          "bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none"
      )}
    >
      <span className={cn("font-sans", !onlyRenderText && "text-xs")}>
        {ctrl && ctrlIcon}
        {shift && shiftIcon}
        {alt && altIcon}
        {keycodes.join(" ")}
      </span>
    </kbd>
  );
};

export default KeyboardShortcutHint;
