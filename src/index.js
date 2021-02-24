import { isAlphanumeric, isNumberString, length } from "class-validator";

const hasOnlyDash = (str) => {
  return /[-]/.test(str);
};

const hasOnySpace = (str) => {
  return /[ ]/.test(str);
};

const isTinId = (idNumber) => {
  if (!hasOnlyDash(idNumber) && !isNumberString(idNumber)) {
    return false;
  }

  const tinId = idNumber.split("-").join("");
  return isNumberString(tinId) && length(tinId, 9, 12);
};

const isSSSId = (idNumber) => {
  if (!hasOnlyDash(idNumber) && !isNumberString(idNumber)) {
    return false;
  }

  const sssId = idNumber.split("-").join("");
  return isNumberString(sssId) && length(sssId, 10, 10);
};

const isPhilhealthId = (idNumber) => {
  if (!hasOnlyDash(idNumber) && !isNumberString(idNumber)) {
    return false;
  }

  const philhealthId = idNumber.split("-").join("");
  return isNumberString(philhealthId) && length(philhealthId, 12, 12);
};

const isDriversLicense = (idNumber) => {
  if (!hasOnlyDash(idNumber) && !isAlphanumeric(idNumber)) {
    return false;
  }

  const driverLicenseId = idNumber.split("-").join("");
  return isAlphanumeric(driverLicenseId) && length(driverLicenseId, 11, 11);
};

const isPostalId = (idNumber) => {
  if (!hasOnySpace(idNumber) && !isAlphanumeric(idNumber)) {
    return false;
  }

  const postalId = idNumber.split(" ").join("");
  return isAlphanumeric(postalId) && length(postalId, 16, 16);
};

const isBirthCertificate = (idNumber) => {
  if (!hasOnlyDash(idNumber) && !isAlphanumeric(idNumber)) {
    return false;
  }

  const birthCerificateId = idNumber.split("-").join("");
  return isAlphanumeric(birthCerificateId) && length(birthCerificateId, 13, 13);
};

const isUMID = (idNumber) => {
  if (!hasOnlyDash(idNumber) && !isNumberString(idNumber)) {
    return false;
  }

  const umid = idNumber.split("-").join("");
  return isNumberString(umid) && length(umid, 12, 12);
};

const isVotersId = (idNumber) => {
  if (!hasOnlyDash(idNumber) && !isAlphanumeric(idNumber)) {
    return false;
  }

  const votersId = idNumber.split("-").join("");
  return isAlphanumeric(votersId) && length(votersId, 22, 22);
};

const isPagIbigLoyaltyCard = (idNumber) => {
  if (!hasOnlyDash(idNumber) && !isAlphanumeric(idNumber)) {
    return false;
  }

  const loyaltyCard = idNumber.split("-").join("");
  return isAlphanumeric(loyaltyCard) && length(loyaltyCard, 22, 22);
};

const isNBIClearance = (idNumber) => {
  if (!hasOnlyDash(idNumber) && !isAlphanumeric(idNumber)) {
    return false;
  }

  const nbiClearance = idNumber.split("-").join("");
  return isAlphanumeric(nbiClearance) && length(nbiClearance, 18, 18);
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
};
