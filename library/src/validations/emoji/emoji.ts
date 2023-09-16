import type { PipeResult } from '../../types.ts';
import { getOutput, getPipeIssues } from '../../utils/index.ts';

/**
 * Creates a validation functions that validates a emoji.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function emoji<TInput extends string>(error?: string) {
  return (input: TInput): PipeResult<TInput> =>
    !/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u.test(input)
      ? getPipeIssues('emoji', error || 'Invalid emoji', input)
      : getOutput(input);
}
