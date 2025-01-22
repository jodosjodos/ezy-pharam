export const maskSensitiveInfo = (value: string): string => {
  if (value.includes("@")) {
    // Mask email
    const [username, domain] = value.split("@");
    const maskedUsername =
      username.slice(0, 2) + "*".repeat(username.length - 2);
    return `${maskedUsername}@${domain}`;
  } else {
    // Mask phone number
    const maskedNumber =
      value.slice(0, 3) + "*".repeat(value.length - 4) + value.slice(-2);
    return maskedNumber;
  }
};
