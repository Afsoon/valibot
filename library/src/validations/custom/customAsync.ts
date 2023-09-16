import type { PipeResult } from '../../types.ts';
import { getOutput } from '../../utils/index.ts';

/**
 * Creates a async custom validation function.
 *
 * @param requirement The async validation function.
 * @param error The error message.
 *
 * @returns A async validation function.
 */
export function customAsync<TInput>(
  requirement: (input: TInput) => Promise<boolean>,
  error?: string
) {
  return async (input: TInput): Promise<PipeResult<TInput>> => {
    if (!(await requirement(input))) {
      return {
        issue: {
          validation: 'custom',
          message: error || 'Invalid input',
          input,
        },
      };
    }
    return getOutput(input);
  };
}
