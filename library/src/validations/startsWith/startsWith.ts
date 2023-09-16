import type { PipeResult } from '../../types.ts';
import { getOutput, getPipeIssues } from '../../utils/index.ts';

/**
 * Creates a validation functions that validates the start of a string.
 *
 * @param requirement The start string.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function startsWith<TInput extends string>(
  requirement: string,
  error?: string
) {
  return (input: TInput): PipeResult<TInput> =>
    !input.startsWith(requirement as any)
      ? getPipeIssues('starts_with', error || 'Invalid start', input)
      : getOutput(input);
}
