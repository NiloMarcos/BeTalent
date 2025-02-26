export function formatPhoneNumber(phoneNumber: string | number): string {
  if (!phoneNumber || isNaN(Number(phoneNumber))) {
    return "The number must be valid and contain only digits.";
  }

  let formattedNumber: string = phoneNumber.toString().replace(/\D/g, '');

  if (formattedNumber.length === 13) {
    return formattedNumber.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, "+$1 ($2) $3-$4");
  } else {
    return "The number must contain exactly 13 digits.";
  }
}
