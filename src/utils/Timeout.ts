export default class Timeout {
  private timer = 0;
  private startedAt = 0;

  private readonly callback = () => {};
  private delay = 0;

  constructor(callback: () => void, timeout: number) {
    this.callback = callback;
    this.delay = timeout;

    this.start();
  }

  private start(timeout = this.delay) {
    this.startedAt = new Date().valueOf();
    this.timer = window.setTimeout(this.callback, timeout);
  }

  public pause() {
    this.delay = this.delay - (new Date().valueOf() - this.startedAt);
    window.clearTimeout(this.timer);
  }

  public resume() {
    this.start();
  }

  public stop() {
    window.clearTimeout(this.timer);
  }
}
