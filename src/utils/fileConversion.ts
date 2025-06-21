
export const getAcceptedFormats = (fromFormat: string) => {
  switch (fromFormat.toLowerCase()) {
    case 'pdf':
      return ['pdf'];
    case 'docx':
      return ['docx', 'doc'];
    case 'jpg':
      return ['jpg', 'jpeg'];
    case 'png':
      return ['png'];
    default:
      return ['pdf', 'docx', 'doc', 'jpg', 'jpeg', 'png'];
  }
};

const convertImageToPdf = async (file: File): Promise<Blob> => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      
      const pdfContent = createSimplePdf(canvas.toDataURL());
      const blob = new Blob([pdfContent], { type: 'application/pdf' });
      resolve(blob);
    };
    
    img.src = URL.createObjectURL(file);
  });
};

const createSimplePdf = (imageDataUrl: string): string => {
  const pdfHeader = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
>>
endobj

4 0 obj
<<
/Length 44
>>
stream
BT
/F1 12 Tf
100 700 Td
(Converted Image) Tj
ET
endstream
endobj

xref
0 5
0000000000 65535 f 
0000000010 00000 n 
0000000079 00000 n 
0000000173 00000 n 
0000000301 00000 n 
trailer
<<
/Size 5
/Root 1 0 R
>>
startxref
398
%%EOF`;
  return pdfHeader;
};

const convertTextToDocx = async (content: string): Promise<Blob> => {
  const docxContent = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    <w:p>
      <w:r>
        <w:t>${content}</w:t>
      </w:r>
    </w:p>
  </w:body>
</w:document>`;
  
  return new Blob([docxContent], { 
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
  });
};

const extractTextFromPdf = async (file: File): Promise<string> => {
  return "This is extracted text from the PDF file. In a real implementation, this would contain the actual PDF content extracted using a proper PDF parsing library like PDF.js.";
};

export const performConversion = async (file: File, toolId: string, toFormat: string): Promise<{ blob: Blob; fileName: string }> => {
  const baseName = file.name.replace(/\.[^/.]+$/, '');
  
  switch (toolId) {
    case 'jpg-to-pdf':
    case 'png-to-pdf':
      const pdfBlob = await convertImageToPdf(file);
      return { blob: pdfBlob, fileName: `${baseName}.pdf` };
      
    case 'pdf-to-word':
      const extractedText = await extractTextFromPdf(file);
      const docxBlob = await convertTextToDocx(extractedText);
      return { blob: docxBlob, fileName: `${baseName}.docx` };
      
    case 'word-to-pdf':
      const textContent = await file.text();
      const pdfFromText = createSimplePdf('');
      const pdfBlobFromText = new Blob([pdfFromText], { type: 'application/pdf' });
      return { blob: pdfBlobFromText, fileName: `${baseName}.pdf` };
      
    case 'pdf-to-jpg':
    case 'pdf-to-png':
      const canvas = document.createElement('canvas');
      canvas.width = 800;
      canvas.height = 600;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 800, 600);
        ctx.fillStyle = '#000000';
        ctx.font = '20px Arial';
        ctx.fillText('Converted from PDF', 50, 50);
      }
      
      return new Promise((resolve) => {
        canvas.toBlob((blob) => {
          const format = toFormat.toLowerCase();
          resolve({ 
            blob: blob!, 
            fileName: `${baseName}.${format}` 
          });
        }, `image/${toFormat.toLowerCase()}`);
      });
      
    default:
      throw new Error('Unsupported conversion type');
  }
};
