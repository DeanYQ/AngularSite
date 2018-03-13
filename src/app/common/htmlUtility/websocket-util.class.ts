export class WebSocketX {

  private readonly ws: WebSocket;

  constructor(url: string) {
    this.ws = new WebSocket(url);
    this.ws.onopen = function () {
      console.log('# websocket open');
    };

    this.ws.onerror = function () {
      console.log('# websocket error');
    };

    this.ws.onmessage = function (event) {
      console.log('# websocket message');
    };

    this.ws.onclose = function () {
      console.log('# websocket close');
    };
  }

  send(data: any): void {
    this.ws.send(data);
  }

  close(): void {
    this.ws.close();
  }
}
