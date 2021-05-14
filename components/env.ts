export const GLOBAL_CLASSNAME_PREFIX = "fay-rte-";
export const FILE_GW_URL = process.env.NODE_ENV === 'production' && typeof window !== 'undefined' ? window.stjk.fileUrl : '/fileApi';
export const OSS_URL = process.env.NODE_ENV === 'production' && typeof window !== 'undefined' ? window.stjk.ossUrl : '/ossApi';
