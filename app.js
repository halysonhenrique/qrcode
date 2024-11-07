// Função para inicializar o leitor de QR Code
function startQRCodeScanner() {
    const qrReader = document.getElementById("qr-reader");

    // Inicia o leitor de QR Code com as configurações desejadas
    const html5QrCode = new Html5Qrcode("qr-reader");

    // Função de sucesso ao ler o QR Code
    const onScanSuccess = (decodedText, decodedResult) => {
        // Exibe o resultado do QR Code na tela
        document.getElementById("result").innerText = `QR Code detectado: ${decodedText}`;
        console.log(decodedText);
    };

    // Função de erro
    const onScanError = (errorMessage) => {
        console.warn(`Erro no scanner: ${errorMessage}`);
    };

    // Configurações de captura da câmera
    html5QrCode.start(
        { facingMode: "environment" },  // Usa a câmera traseira (pode ajustar conforme a necessidade)
        {
            fps: 10,  // Taxa de quadros
            qrbox: 250 // Tamanho da área de detecção do QR Code
        },
        onScanSuccess,
        onScanError
    ).catch((err) => {
        console.error("Erro ao inicializar o leitor de QR Code:", err);
        alert("Não foi possível acessar a câmera. Verifique as permissões.");
    });
}

// Iniciar a leitura do QR Code assim que a página for carregada
window.onload = startQRCodeScanner;
