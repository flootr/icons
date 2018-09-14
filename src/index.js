import qs from "query-string";
import getIcon from "./icons";

let { icon = "arrow-left" } = qs.parse(location.search);

if (!icon.startsWith("arrow")) {
  icon = "arrow-left";
}

getIcon(icon).then(icon => {
  document.getElementById("root").innerHTML = icon;
});
