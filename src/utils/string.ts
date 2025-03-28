/**
 * Converts an enum value to a formatted string.
 * Replaces all underscores with spaces and capitalizes the first letter of each word.
 */
export function formatEnumValue<T>(enumObj: T, value: T[keyof T]): string {
    const valueString = enumObj[value as keyof T] as unknown as string;
    return valueString
        .replace(/_/g, ' ')
        .split(' ')
        .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' ');
}
