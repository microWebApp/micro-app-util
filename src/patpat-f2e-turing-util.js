// Anything exported from this file is importable by other in-browser modules.
import "./style/global.less"
import "./set-public-path";

export function publicApiFunction() {
  console.log('publicApiFunction')
}
