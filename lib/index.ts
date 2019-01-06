/**
 * Checks whether or not the current runtime environment is a browser
 * @returns {boolean} - whether or not the current runtime environment is a browser
*/
export default (): boolean => [typeof window, typeof document].includes('undefined') === false
