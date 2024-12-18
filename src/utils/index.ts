/**
 * 提取字符串中 {key|value} 的内容
 * @param {string} input - 输入的字符串
 * @returns {object} 提取出的内容，格式为 { key: value, ... }
 */
export function extractKeyValuePairs(input: string) {
	return Object.fromEntries([...input.matchAll(/\{(\w+)\|([^}]+)\}/g)].map(([, key, value]) => [key, value]));
}
