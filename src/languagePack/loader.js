import * as DE from "./de.lang";
import * as CH_LU from "./ch-lu.lang";
import * as CH_BL from "./ch-bl.lang";
import * as CH_TG from "./ch-tg.lang";

const map = {
  "ch-bl": CH_BL,
  "ch-lu": CH_LU,
  "ch-tg": CH_TG,
  de: DE
};

const loader = code => {
  return map[code] || DE;
};

export default loader;
