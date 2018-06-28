export function removePropFromObj(obj, prop = "ARCconfig") {
  return Object.keys(obj).reduce((previous, current) => {
    return current === prop
      ? previous
      : { ...previous, [current]: obj[current] };
  }, {});
}
