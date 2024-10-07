import tescomPdf from '../../pdf/Tescom Company.pdf';

export function downloadPdf() {
    const pdfUrl = tescomPdf;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Tescom.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export function obfuscateEmail(email) {
    // Split the email into the username and domain parts
    let [username, domain] = email.split("@");

    // Find the portion to keep before the asterisks
    let prefix = username.slice(0, 2); // "vg"
    let suffix = username.slice(-2); // "79"

    // Replace the middle characters with asterisks
    let obfuscatedUsername = `${prefix}***${suffix}`;

    // Return the obfuscated email
    return `${obfuscatedUsername}@${domain}`;
}

export function getCurrentDate() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${day}-${month}-${year}_${hours}:${minutes}:${seconds}`;
}