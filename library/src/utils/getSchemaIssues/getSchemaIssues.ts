import type { IssueReason, Issues, ParseInfo } from '../../types.ts';

/**
 * Returns the schema result object with issues.
 *
 * @param info The parse info.
 * @param reason The issue reason.
 * @param validation The validation name.
 * @param message The error message.
 * @param input The input value.
 * @param issues The sub issues.
 *
 * @returns The schema result object.
 */
export function getSchemaIssues(
  info: ParseInfo | undefined,
  reason: IssueReason,
  validation: string,
  message: string,
  input: unknown,
  issues?: Issues
): { issues: Issues } {
  // Note: The issue is deliberately not constructed with the spread operator
  // for performance reasons
  return {
    issues: [
      {
        reason,
        validation,
        origin: info?.origin || 'value',
        message,
        input,
        issues,
        abortEarly: info?.abortEarly,
        abortPipeEarly: info?.abortPipeEarly,
      },
    ],
  };
}
