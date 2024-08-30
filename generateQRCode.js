const QRCode = require('qrcode');

// Details to be encoded in the QR code
const details = `

Name: Shibila sherin A
Phone: 9747587317
Email: shibilasherin22@gmail.com
`;

// Generate the QR code and save it as an image
QRCode.toFile('qrcode.png', details, { errorCorrectionLevel: 'H' }, function (err) {
    if (err) throw err;
    console.log('QR code generated and saved as qrcode.png');
});

// Or generate a QR code as a data URL (e.g., for use in HTML)
QRCode.toDataURL(details, function (err, url) {
    if (err) throw err;
    console.log(url);
});
