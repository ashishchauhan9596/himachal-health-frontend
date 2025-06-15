export const openGoogleMaps = (address: string) => {
  if (address.includes("Plot No.2, Om Sai Complex")) {
    window.open('https://www.google.com/maps/d/u/0/edit?mid=1vjGTzjsTZGgcriOooCreXu40XNlvPGo&usp=sharing', '_blank');
  } else {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  }
}; 