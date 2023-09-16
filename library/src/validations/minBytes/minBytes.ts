import type { PipeResult } from '../../types.ts';
import { getOutput, getPipeIssues } from '../../utils/index.ts';

/**
 * Creates a validation functions that validates the byte length of a string.
 *
 * @param requirement The minimum length in byte.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function minBytes<TInput extends string>(
  requirement: number,
  error?: string
) {
  return (input: TInput): PipeResult<TInput> =>
    new TextEncoder().encode(input).length < requirement
      ? getPipeIssues('min_bytes', error || 'Invalid byte length', input)
      : getOutput(input);
}
