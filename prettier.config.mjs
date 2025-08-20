/** @type {import('@ianvs/prettier-plugin-sort-imports').Config} */
const config = {
  printWidth: 80, // 한 줄 최대 문자 수
  trailingComma: "all", // 여러 줄일 때 마지막에 후행 콤마 사용
  tabWidth: 2, // 들여쓰기 시, 탭 너비 설정
  semi: true, // 문장 끝 세미콜론 사용여부
  singleQuote: false, // 쌍 따옴표 " 사용
  bracketSpacing: true, // 중괄호 내 공백 사용
  arrowParens: "avoid", // 화살표 함수 단일 인자 시, 괄호 생략
  useTabs: false, // 스페이스 대신 탭 사용
  proseWrap: "never", // 마크다운 포맷팅 제외,
  endOfLine: "auto", // 개행문자 유지 (혼합일 경우, 첫 줄 개행문자로 통일)
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/(.*)$",
    "^@/config/(.*)$",
    "@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/store/(.*)$",
    "^@/components/ui/(.*)$",
    "@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/app/(.*)$",
    "^~/(.*)$",
    "",
    "^[./]",
    "",
    "^@/mocks/(.*)$",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
};

export default config;