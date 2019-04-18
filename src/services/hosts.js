const dev = "localhost:3000";
const auto = "auto-introspection-app.netlify.com";
const qa = "qa-introspection-app.netlify.com";
const staging = "staging-introspection-app.netlify.com";

const hosts = {
  [dev]: "localhost:7890",
  [auto]: "auto-introspection-api.herokuapp.com",
  [qa]: "test-introspection-api.herokuapp.com",
  [staging]: "staging-introspection-api.herokuapp.com"
};

const isValidHost = host => Object.keys(hosts).indexOf(host) !== -1;

export { hosts, isValidHost };
