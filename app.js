// Função chamada ao escanear o QR code com sucesso
function onScanSuccess(decodedText, decodedResult) {
    // Exibe o resultado do QR code no elemento 'result'
    document.getElementById('result').innerText = `Código detectado: ${decodedText}`;
    console.log(decodedResult); // Exibe o objeto completo no console para depuração

    // Opcional: Para a leitura após detectar um QR code
    html5QrcodeScanner.clear();  // Pare o scanner ao encontrar um código
}

// Função chamada se a leitura falhar (não é necessário tratar a cada falha)
function onScanFailure(error) {
    // Opcional: Log de erros para depuração
    console.warn(`Erro na leitura: ${error}`);
}

// Configuração do leitor de QR code com a biblioteca html5-qrcode
let html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader",  // ID do elemento onde o scanner vai exibir o vídeo da câmera
    { fps: 10, qrbox: 250 }  // Configurações do scanner (quadros por segundo e tamanho do box de leitura)
);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);
