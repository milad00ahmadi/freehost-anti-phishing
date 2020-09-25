declare module '*.html' {
  const content: any;
  export default content;
}
declare let require: {
  (path: string): any;
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (
    paths: string[],
    callback: (require: <T>(path: string) => T) => void
  ) => void;
};
