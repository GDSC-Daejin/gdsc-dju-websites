declare module 'utils' {
  /**
   * 숫자를 포함한 문자열에서 숫자를 제외한 문자를 제거하는 함수
   * @param numberContainsNotDigits 숫자 이외의 문자를 포함한 문자열
   * @return 숫자만 포함한 문자열
   */
  export function removedNotDigits(numberContainsNotDigits: string): string;

  /**
   * 숫자를 포함한 문자열에서 숫자만 제거하는 함수
   * @param numberContainsDigits 숫자를 포함한 문자열
   * @return 숫자만 제외한 문자열
   */
  export function removedDigits(numberContainsDigits: string): string;
}
