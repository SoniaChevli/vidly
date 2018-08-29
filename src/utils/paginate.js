import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  console.log("items", items);
  console.log("pageNumber", pageNumber);
  console.log("pageSize", pageSize);
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
