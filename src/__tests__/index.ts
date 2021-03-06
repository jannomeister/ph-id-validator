import {
  isACRICard,
  isBirthCertificate,
  isDriversLicense,
  isGSISId,
  isIBPId,
  isNBIClearance,
  isOFWId,
  isOWWAId,
  isPagIbigLoyaltyCard,
  isPassport,
  isPhilhealthId,
  isPostalId,
  isPRCId,
  isSeamanBook,
  isSECRegistrationCert,
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
      name: "should return false if TIN ID is not numeric",
      input: "ASDASDSADASD",
      output: false,
      fn: isTinId,
    },
    {
      name: "should be a valid SSS ID",
      input: "01-4567892-1",
      output: true,
      fn: isSSSId,
    },
    {
      name: "should return false if SSS ID is not numeric",
      input: "ASDASDSADASD",
      output: false,
      fn: isSSSId,
    },
    {
      name: "should be a valid Philhealth ID",
      input: "02-250001863-5",
      output: true,
      fn: isPhilhealthId,
    },
    {
      name: "should return false if Philhealth ID is not numeric",
      input: "ASDASDSADASD",
      output: false,
      fn: isPhilhealthId,
    },
    {
      name: "should be a valid Driver's License ID",
      input: "N01-23-456789",
      output: true,
      fn: isDriversLicense,
    },
    {
      name: "should return false if Driver's License ID is not alphanumeric",
      input: "@$dasda12323",
      output: false,
      fn: isDriversLicense,
    },
    {
      name: "should be a valid Postal ID",
      input: "PAN 100141234567 P",
      output: true,
      fn: isPostalId,
    },
    {
      name: "should return false if Postal ID is not alphanumeric",
      input: "#ASDSA@adasd1212",
      output: false,
      fn: isPostalId,
    },
    {
      name: "should be a valid Birth certificate",
      input: "07404-A83P20C-9",
      output: true,
      fn: isBirthCertificate,
    },
    {
      name: "should return false if Birth certificate is not alphanumeric",
      input: "#ASDSA@adasd1212",
      output: false,
      fn: isBirthCertificate,
    },
    {
      name: "should be a valid UMID",
      input: "0028-1215160-9",
      output: true,
      fn: isUMID,
    },
    {
      name: "should return false if UMID is not numeric",
      input: "0028A1215160A9",
      output: false,
      fn: isUMID,
    },
    {
      name: "should be a valid Voter's ID",
      input: "3022-0201B-C0272ESA20000",
      output: true,
      fn: isVotersId,
    },
    {
      name: "should return false if Voter's ID is not alphanumeric",
      input: "#ASDSA@adasd1212",
      output: false,
      fn: isVotersId,
    },
    {
      name: "should be a valid Pag-ibig loyalty card",
      input: "1023-4567-8090",
      output: true,
      fn: isPagIbigLoyaltyCard,
    },
    {
      name: "should return false if Pag-ibig loyalty card is not alphanumeric",
      input: "#ASDSA@adasd1212",
      output: false,
      fn: isPagIbigLoyaltyCard,
    },
    {
      name: "should be a valid NBI clearance",
      input: "A123BCDE45-FG678910",
      output: true,
      fn: isNBIClearance,
    },
    {
      name: "should return false if NBI clearance is not alphanumeric",
      input: "#ASDSA@adasd1212",
      output: false,
      fn: isNBIClearance,
    },
    {
      name: "should be a valid SEC registration certificate",
      input: "CN201727901",
      output: true,
      fn: isSECRegistrationCert,
    },
    {
      name: "should be a valid OWAA ID",
      input: "17843121524",
      output: true,
      fn: isOWWAId,
    },
    {
      name: "should be a valid Seaman's book",
      input: "000000123",
      output: true,
      fn: isSeamanBook,
    },
    {
      name: "should be a valid IBP ID",
      input: "12345",
      output: true,
      fn: isIBPId,
    },
    {
      name: "should be a valid GSIS ID",
      input: "74081100199",
      output: true,
      fn: isGSISId,
    },
    {
      name: "should be a valid Passport",
      input: "P1234567A",
      output: true,
      fn: isPassport,
    },
    {
      name: "should be a valid PRC ID",
      input: "0123456",
      output: true,
      fn: isPRCId,
    },
    {
      name: "should be a valid OFW ID",
      input: "17110500011",
      output: true,
      fn: isOFWId,
    },
    {
      name: "should be a valid ACR I-Card",
      input: "123456789",
      output: true,
      fn: isACRICard,
    },
  ];

  for (const { name, input, output, fn } of testCases) {
    const testFn = () => expect(fn(input)).toBe(output);

    it(name, testFn);
  }
});

/*
  eslint
    jest/valid-title: "off",
    max-lines-per-function: ["off"]
*/
