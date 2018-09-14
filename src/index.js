import qs from "query-string";
import getIcon from "./icons";

const { icon = "arrow-left" } = qs.parse(location.search);

getIcon(icon).then(icon => {
  document.getElementById("root").innerHTML = icon;
});
