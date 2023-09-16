import type { PipeResult } from '../../types.ts';
import { getOutput, getPipeIssues } from '../../utils/index.ts';

/**
 * Creates a validation functions that validates the MIME type of a file.
 *
 * @param requirement The MIME types.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function mimeType<TInput extends Blob>(
  requirement: `${string}/${string}`[],
  error?: string
) {
  return (input: TInput): PipeResult<TInput> =>
    !requirement.includes(input.type as `${string}/${string}`)
      ? getPipeIssues('mime_type', error || 'Invalid MIME type', input)
      : getOutput(input);
}
