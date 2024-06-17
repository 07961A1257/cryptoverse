import millify from "millify";

export const safeMillify = (value) => {
  if (value === null || value === undefined) {
    return "N/A"; // Return a placeholder for invalid values
  }
  if (typeof value === "string") {
    value = parseFloat(value);
  }
  if (isNaN(value)) {
    return "N/A"; // Return a placeholder if the value is still not a number
  }
  return millify(value);
};
