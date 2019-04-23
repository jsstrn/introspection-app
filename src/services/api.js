import { hosts, isValidHost } from "./hosts";

const host = window.location.host;
const protocol = window.location.protocol;

const api = isValidHost(host)
  ? `${protocol}//${hosts[window.location.host]}`
  : "";

export default api;
