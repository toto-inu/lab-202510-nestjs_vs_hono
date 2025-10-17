/**
 * Logging Middleware
 * すべてのAPIリクエストとレスポンスをログ出力するミドルウェア
 */

import type { Context, Next } from 'hono';
import { Logger } from '../../utilModules/logger';

export const loggingMiddleware = async (c: Context, next: Next) => {
  const startTime = Date.now();
  const method = c.req.method;
  const path = c.req.path;

  // 次の処理を実行
  await next();

  // レスポンスタイムを計算
  const responseTime = Date.now() - startTime;
  const status = c.res.status;

  // HTTPログ出力
  Logger.http(method, path, status, responseTime);
};
