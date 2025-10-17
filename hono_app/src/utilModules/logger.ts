/**
 * Logger Utility
 * シンプルな統一ロギングユーティリティ
 */

export type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'DEBUG';

export class Logger {
  private static formatDate(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  private static formatLog(level: LogLevel, context: string, message: string): string {
    const timestamp = this.formatDate();
    return `[${timestamp}] [${context}] ${level}: ${message}`;
  }

  static info(context: string, message: string): void {
    console.log(this.formatLog('INFO', context, message));
  }

  static warn(context: string, message: string): void {
    console.warn(this.formatLog('WARN', context, message));
  }

  static error(context: string, message: string, error?: Error): void {
    console.error(this.formatLog('ERROR', context, message));
    if (error && error.stack) {
      console.error(error.stack);
    }
  }

  static debug(context: string, message: string): void {
    if (process.env.NODE_ENV === 'development') {
      console.log(this.formatLog('DEBUG', context, message));
    }
  }

  // HTTPリクエスト用の便利メソッド
  static http(method: string, path: string, status: number, responseTime: number): void {
    const message = `${method} ${path} ${status} ${responseTime}ms`;
    this.info('HTTP', message);
  }
}
