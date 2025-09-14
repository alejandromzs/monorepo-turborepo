const isProduction = process.env.NODE_ENV === 'production';

export const DOCS_URL = process.env.DOCS_URL || (isProduction ? 'https://monorepo-turborepo-amzs-docs.vercel.app' : 'http://localhost:3000');
export const WEB_URL = process.env.WEB_URL || (isProduction ? 'https://monorepo-turborepo-amzs-web.vercel.app' : 'http://localhost:3001');