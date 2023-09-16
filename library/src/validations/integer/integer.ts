import type { PipeResult } from '../../types.ts';
import { getOutput } from '../../utils/index.ts';

/**
 * Creates a validation function that validates whether a number is an integer.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function integer<TInput extends number>(error?: string) {
  return (input: TInput): PipeResult<TInput> => {
    if (!Number.isInteger(input)) {
      return {
        issue: {
          validation: 'integer',
          message: error || 'Invalid integer',
          input,
        },
      };
    }
    return getOutput(input);
  };
}
