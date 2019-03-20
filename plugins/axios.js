export default function({ $axios }) {
  $axios.setHeader("AUTHORIZATION", "TOKEN here");

  $axios.onRequest(config => {
    console.log("Making request to " + config.url);
  });
}
