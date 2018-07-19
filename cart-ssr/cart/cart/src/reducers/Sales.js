export default function Sales(state = [], action) {
  switch (action.type) {
    case "IMPORT-SALE":
      {
        return action.payload;
      }
    default:
      {
        return [...state];
      }
  }
}
