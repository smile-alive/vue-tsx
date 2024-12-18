/// <reference types="vite/client" />

declare type SecondParamType = Parameters<typeof import('echarts/core').registerMap>[1];
