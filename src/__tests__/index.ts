import {
  isBirthCertificate,
  isDriversLicense,
  isNBIClearance,
  isPagIbigLoyaltyCard,
  isPhilhealthId,
  isPostalId,
  isSSSId,
  isTinId,
  isUMID,
  isVotersId,
} from "../index";

describe("Validate Type of IDs", () => {
  const testCases = [
    {
      name: "should be a valid TIN ID",
      input: "704-747-443-000",
      output: true,
      fn: isTinId,
    },
    {
      name: "should be a valid SSS ID",
      input: "01-4567892-1",
      output: true,
      fn: isSSSId,
    },
    {
      name: "should be a valid Philhealth ID",
      input: "02-250001863-5",
      output: true,
      fn: isPhilhealthId,
    },
    {
      name: "should be a valid Driver's License ID",
      input: "N01-23-456789",
      output: true,
      fn: isDriversLicense,
    },
    {
      name: "should be a valid Postal ID",
      input: "PAN 100141234567 P",
      output: true,
      fn: isPostalId,
    },
    {
      name: "should be a valid Birth certificate",
      input: "07404-A83P20C-9",
      output: true,
      fn: isBirthCertificate,
    },
    {
      name: "should be a valid UMID",
      input: "0028-1215160-9",
      output: true,
      fn: isUMID,
    },
    {
      name: "should be a valid Voter's ID",
      input: "3022-0201B-C0272ESA20000",
      output: true,
      fn: isVotersId,
    },
    {
      name: "should be a valid Pag-ibig loyalty card",
      input: "1023-4567-8090",
      output: true,
      fn: isPagIbigLoyaltyCard,
    },
    {
      name: "should be a valid NBI clearance",
      input: "A123BCDE45-FG678910",
      output: true,
      fn: isNBIClearance,
    },
  ];

  for (const { name, input, output, fn } of testCases) {
    const testFn = () => expect(fn(input)).toBe(output);

    it(name, testFn);
  }
});

/*
  eslint
    jest/valid-title: "off"
*/
