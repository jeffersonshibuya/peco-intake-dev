/* eslint-disable @typescript-eslint/no-explicit-any */

export function diffVersions(
  oldData: Record<string, any> | null,
  newData: Record<string, any>
): Record<string, { old: any; new: any }> {
  const diff: Record<string, { old: any; new: any }> = {};
  const keys = new Set([
    ...Object.keys(oldData ?? {}),
    ...Object.keys(newData),
  ]);

  keys.forEach((key) => {
    const oldVal = oldData?.[key] ?? null;
    const newVal = newData[key];

    // If this is version 1 (no oldData), only show if there's a value
    const isFirstVersion = oldData == null;
    if (isFirstVersion && (newVal === null || newVal === "")) return;

    if (!isFirstVersion && oldVal === newVal) return;

    diff[key] = { old: oldVal, new: newVal };
  });

  return diff;
}
