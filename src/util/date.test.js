import { formattedDate } from "./date";

test("should format August 12, 2021 as Thu, Aug 12", () => {
  const formatMePlease = new Date("August 12, 2021");
  expect(formattedDate(formatMePlease)).toMatch("Thu, Aug 12");
});
