export async function onRequest(context) {
  const url = new URL(context.request.url);
  url.hostname = "einfach-gefunden.de";

  const modifiedRequest = new Request(url.toString(), context.request);
  return fetch(modifiedRequest);
}