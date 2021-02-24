import { isTinId } from "../index";

test("is valid TIN ID", () => {
  expect(isTinId("704-747-443-000")).toBe(true);
});
