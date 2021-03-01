/**
 * @name ph-id-validator
 * @license MIT license.
 * @copyright (c) 2021 Janno Tabamo
 * @author Janno Tabamo <jannotabamo@gmail.com> (https://resume.jannomeister.com)
 */
import isNumericValidator from "validator/lib/isNumeric";
import isAlphanumericValidator from "validator/lib/isAlphanumeric";
import isLengthValidator from "validator/lib/isLength";

const hasOnlyDash = (str: string) => {
  return /[-]/.test(str);
};

const hasOnySpace = (str: string) => {
  return /[ ]/.test(str);
};

const isSECRegistrationCert = (idNumber: string) => {
  return (
    isAlphanumericValidator(idNumber) &&
    isLengthValidator(idNumber, { min: 11, max: 11 })
  );
};

const isOWWAId = (idNumber: string) => {
  return (
    isNumericValidator(idNumber) &&
    isLengthValidator(idNumber, { min: 11, max: 11 })
  );
};

const isSeamanBook = (idNumber: string) => {
  return (
    isNumericValidator(idNumber) &&
    isLengthValidator(idNumber, { min: 9, max: 9 })
  );
};

const isIBPId = (idNumber: string) => {
  return (
    isNumericValidator(idNumber) &&
    isLengthValidator(idNumber, { min: 5, max: 5 })
  );
};

const isGSISId = (idNumber: string) => {
  return (
    isNumericValidator(idNumber) &&
    isLengthValidator(idNumber, { min: 11, max: 11 })
  );
};

const isPassport = (idNumber: string) => {
  return (
    isAlphanumericValidator(idNumber) &&
    isLengthValidator(idNumber, { min: 9, max: 9 })
  );
};

const isPRCId = (idNumber: string) => {
  return (
    isNumericValidator(idNumber) &&
    isLengthValidator(idNumber, { min: 7, max: 7 })
  );
};

const isOFWId = (idNumber: string) => {
  return (
    isNumericValidator(idNumber) &&
    isLengthValidator(idNumber, { min: 11, max: 11 })
  );
};

const isACRICard = (idNumber: string) => {
  return (
    isNumericValidator(idNumber) &&
    isLengthValidator(idNumber, { min: 9, max: 9 })
  );
};

const isTinId = (idNumber: string) => {
  if (!hasOnlyDash(idNumber) && !isNumericValidator(idNumber)) {
    return false;
  }

  const tinId = idNumber.split("-").join("");
  return (
    isNumericValidator(tinId) && isLengthValidator(tinId, { min: 9, max: 12 })
  );
};

const isSSSId = (idNumber: string) => {
  if (!hasOnlyDash(idNumber) && !isNumericValidator(idNumber)) {
    return false;
  }

  const sssId = idNumber.split("-").join("");
  return (
    isNumericValidator(sssId) && isLengthValidator(sssId, { min: 10, max: 10 })
  );
};

const isPhilhealthId = (idNumber: string) => {
  if (!hasOnlyDash(idNumber) && !isNumericValidator(idNumber)) {
    return false;
  }

  const philhealthId = idNumber.split("-").join("");
  return (
    isNumericValidator(philhealthId) &&
    isLengthValidator(philhealthId, { min: 12, max: 12 })
  );
};

const isDriversLicense = (idNumber: string) => {
  if (!hasOnlyDash(idNumber) && !isAlphanumericValidator(idNumber)) {
    return false;
  }

  const driverLicenseId = idNumber.split("-").join("");
  return (
    isAlphanumericValidator(driverLicenseId) &&
    isLengthValidator(driverLicenseId, { min: 11, max: 11 })
  );
};

const isPostalId = (idNumber: string) => {
  if (!hasOnySpace(idNumber) && !isAlphanumericValidator(idNumber)) {
    return false;
  }

  const postalId = idNumber.split(" ").join("");
  return (
    isAlphanumericValidator(postalId) &&
    isLengthValidator(postalId, { min: 16, max: 16 })
  );
};

const isBirthCertificate = (idNumber: string) => {
  if (!hasOnlyDash(idNumber) && !isAlphanumericValidator(idNumber)) {
    return false;
  }

  const birthCerificateId = idNumber.split("-").join("");
  return (
    isAlphanumericValidator(birthCerificateId) &&
    isLengthValidator(birthCerificateId, { min: 13, max: 13 })
  );
};

const isUMID = (idNumber: string) => {
  if (!hasOnlyDash(idNumber) && !isNumericValidator(idNumber)) {
    return false;
  }

  const umid = idNumber.split("-").join("");
  return (
    isNumericValidator(umid) && isLengthValidator(umid, { min: 12, max: 12 })
  );
};

const isVotersId = (idNumber: string) => {
  if (!hasOnlyDash(idNumber) && !isAlphanumericValidator(idNumber)) {
    return false;
  }

  const votersId = idNumber.split("-").join("");
  return (
    isAlphanumericValidator(votersId) &&
    isLengthValidator(votersId, { min: 22, max: 22 })
  );
};

const isPagIbigLoyaltyCard = (idNumber: string) => {
  if (!hasOnlyDash(idNumber) && !isAlphanumericValidator(idNumber)) {
    return false;
  }

  const loyaltyCard = idNumber.split("-").join("");
  return (
    isAlphanumericValidator(loyaltyCard) &&
    isLengthValidator(loyaltyCard, { min: 12, max: 12 })
  );
};

const isNBIClearance = (idNumber: string) => {
  if (!hasOnlyDash(idNumber) && !isAlphanumericValidator(idNumber)) {
    return false;
  }

  const nbiClearance = idNumber.split("-").join("");
  return (
    isAlphanumericValidator(nbiClearance) &&
    isLengthValidator(nbiClearance, { min: 18, max: 18 })
  );
};

export {
  isTinId,
  isSSSId,
  isPhilhealthId,
  isDriversLicense,
  isPostalId,
  isBirthCertificate,
  isUMID,
  isVotersId,
  isPagIbigLoyaltyCard,
  isNBIClearance,
  isSECRegistrationCert,
  isOWWAId,
  isSeamanBook,
  isIBPId,
  isGSISId,
  isPassport,
  isPRCId,
  isOFWId,
  isACRICard,
};
