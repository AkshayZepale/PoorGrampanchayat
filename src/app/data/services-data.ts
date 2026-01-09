import { Service } from '../models/service.model';

// export const LOCAL_SERVICES: Service[] = [
//   {
//     id: 1,
//     title: 'Birth Certificate Issuance',
//     titleMr: 'जन्म प्रमाणपत्र जारी',
//     titleEn: 'Birth Certificate Issuance',
//     titleHi: 'जन्म प्रमाण पत्र निर्गम',
//     description: 'Apply for a certified birth certificate from the Panchayat office.',
//     descriptionMr: 'ग्रामपंचायत कार्यालयातून प्रमाणित जन्म प्रमाणपत्रासाठी अर्ज करा.',
//     descriptionEn: 'Apply for a certified birth certificate from the Panchayat office.',
//     descriptionHi: 'ग्राम पंचायत कार्यालय से प्रमाणित जन्म प्रमाण पत्र के लिए आवेदन करें।',
//     requiredDocuments: ['Birth proof', 'Identity proof of parents', 'Residence proof'],
//     processTime: '3 working days',
//     url: 'https://www.google.com',
//     isActive: true
//   },
//   {
//     id: 2,
//     title: 'Property Tax Payment',
//     titleMr: 'मालमत्ता कर भरणा',
//     titleEn: 'Property Tax Payment',
//     titleHi: 'संपत्ति कर भुगतान',
//     description: 'Pay residential and commercial property tax online or at the counter.',
//     descriptionMr: 'निवासी व व्यावसायिक मालमत्ता कर ऑनलाइन किंवा काउंटरवर भरा.',
//     descriptionEn: 'Pay residential and commercial property tax online or at the counter.',
//     descriptionHi: 'आवासीय और व्यावसायिक संपत्ति कर ऑनलाइन या काउंटर पर जमा करें।',
//     requiredDocuments: ['Previous tax receipt', 'Property ID', 'Owner ID proof'],
//     processTime: 'Instant',
//     url: 'https://www.google.com',
//     isActive: true
//   },
//   {
//     id: 3,
//     title: 'Water Connection Request',
//     titleMr: 'पाणी जोडणी अर्ज',
//     titleEn: 'Water Connection Request',
//     titleHi: 'जल कनेक्शन अनुरोध',
//     description: 'New household or commercial tap water connection service.',
//     descriptionMr: 'घरगुती किंवा व्यावसायिक नळ पाणी जोडणी सेवा.',
//     descriptionEn: 'New household or commercial tap water connection service.',
//     descriptionHi: 'घरेलू या व्यावसायिक नल जल कनेक्शन सेवा।',
//     requiredDocuments: ['Property ownership proof', 'Identity proof', 'Building plan (if applicable)'],
//     processTime: '7-10 working days',
//     url: 'https://www.google.com',
//     isActive: true
//   },
//   {
//     id: 4,
//     title: 'Sanitation Request',
//     titleMr: 'स्वच्छता विनंती',
//     titleEn: 'Sanitation Request',
//     titleHi: 'स्वच्छता अनुरोध',
//     description: 'Door-to-door garbage pickup and special sanitation drive booking.',
//     descriptionMr: 'घरपोच कचरा संकलन आणि विशेष स्वच्छता मोहीम बुकिंग.',
//     descriptionEn: 'Door-to-door garbage pickup and special sanitation drive booking.',
//     descriptionHi: 'डोर-टू-डोर कचरा संग्रहण और विशेष स्वच्छता अभियान बुकिंग।',
//     requiredDocuments: ['House ID / Trade license'],
//     processTime: '2 working days',
//     url: 'https://www.google.com',
//     isActive: true
//   },
//   {
//     id: 5,
//     title: 'Senior Citizen ID',
//     titleMr: 'ज्येष्ठ नागरिक ओळखपत्र',
//     titleEn: 'Senior Citizen ID',
//     titleHi: 'वरिष्ठ नागरिक पहचान पत्र',
//     description: 'Issue identity cards for senior citizens to avail welfare schemes.',
//     descriptionMr: 'कल्याणकारी योजनांसाठी ज्येष्ठ नागरिक ओळखपत्र वितरित.',
//     descriptionEn: 'Issue identity cards for senior citizens to avail welfare schemes.',
//     descriptionHi: 'कल्याणकारी योजनाओं हेतु वरिष्ठ नागरिक पहचान पत्र जारी।',
//     requiredDocuments: ['Age proof', 'Residence proof', 'Passport photo'],
//     processTime: '5 working days',
//     url: 'https://www.google.com',
//     isActive: true
//   },
//   {
//     id: 6,
//     title: 'Building Permission',
//     titleMr: 'इमारत परवानगी',
//     titleEn: 'Building Permission',
//     titleHi: 'भवन अनुमति',
//     description: 'Approval for new construction, renovation, or land development.',
//     descriptionMr: 'नवीन बांधकाम, नूतनीकरण किंवा भूविकासासाठी मंजुरी.',
//     descriptionEn: 'Approval for new construction, renovation, or land development.',
//     descriptionHi: 'नए निर्माण, नवीनीकरण या भूमि विकास के लिए स्वीकृति।',
//     requiredDocuments: ['Ownership proof', 'Building plan', 'Structural stability certificate'],
//     processTime: '15 working days',
//     url: 'https://www.google.com',
//     isActive: true
//   }
// ];

export const LOCAL_SERVICES: Service[] = [
  {
    id: 1,
    title: 'Birth Certificate Issuance',
    titleMr: 'जन्म प्रमाणपत्र जारी',
    titleEn: 'Birth Certificate Issuance',
    titleHi: 'जन्म प्रमाण पत्र निर्गम',
    description: 'Apply for a certified birth certificate from the Panchayat office.',
    descriptionMr: 'ग्रामपंचायत कार्यालयातून प्रमाणित जन्म प्रमाणपत्रासाठी अर्ज करा.',
    descriptionEn: 'Apply for a certified birth certificate from the Panchayat office.',
    descriptionHi: 'ग्राम पंचायत कार्यालय से प्रमाणित जन्म प्रमाण पत्र के लिए आवेदन करें।',
    requiredDocuments: ['Birth proof', 'Identity proof of parents', 'Residence proof'],
    processTime: '3 working days',
    url: 'https://www.google.com',
    icon: 'fas fa-baby',
    iconColor: '#ff6f61', // coral
    isActive: true
  },
  {
    id: 2,
    title: 'Property Tax Payment',
    titleMr: 'मालमत्ता कर भरणा',
    titleEn: 'Property Tax Payment',
    titleHi: 'संपत्ति कर भुगतान',
    description: 'Pay residential and commercial property tax online or at the counter.',
    descriptionMr: 'निवासी व व्यावसायिक मालमत्ता कर ऑनलाइन किंवा काउंटरवर भरा.',
    descriptionEn: 'Pay residential and commercial property tax online or at the counter.',
    descriptionHi: 'आवासीय और व्यावसायिक संपत्ति कर ऑनलाइन या काउंटर पर जमा करें।',
    requiredDocuments: ['Previous tax receipt', 'Property ID', 'Owner ID proof'],
    processTime: 'Instant',
    url: 'https://www.google.com',
    icon: 'fas fa-house-circle-check',
    iconColor: '#198754', // green
    isActive: true
  },
  {
    id: 3,
    title: 'Water Connection Request',
    titleMr: 'पाणी जोडणी अर्ज',
    titleEn: 'Water Connection Request',
    titleHi: 'जल कनेक्शन अनुरोध',
    description: 'New household or commercial tap water connection service.',
    descriptionMr: 'घरगुती किंवा व्यावसायिक नळ पाणी जोडणी सेवा.',
    descriptionEn: 'New household or commercial tap water connection service.',
    descriptionHi: 'घरेलू या व्यावसायिक नल जल कनेक्शन सेवा।',
    requiredDocuments: ['Property ownership proof', 'Identity proof', 'Building plan (if applicable)'],
    processTime: '7-10 working days',
    url: 'https://www.google.com',
    icon: 'fas fa-tint',
    iconColor: '#0dcaf0', // water blue
    isActive: true
  },
  {
    id: 4,
    title: 'Sanitation Request',
    titleMr: 'स्वच्छता विनंती',
    titleEn: 'Sanitation Request',
    titleHi: 'स्वच्छता अनुरोध',
    description: 'Door-to-door garbage pickup and special sanitation drive booking.',
    descriptionMr: 'घरपोच कचरा संकलन आणि विशेष स्वच्छता मोहीम बुकिंग.',
    descriptionEn: 'Door-to-door garbage pickup and special sanitation drive booking.',
    descriptionHi: 'डोर-टू-डोर कचरा संग्रहण और विशेष स्वच्छता अभियान बुकिंग।',
    requiredDocuments: ['House ID / Trade license'],
    processTime: '2 working days',
    url: 'https://www.google.com',
    icon: 'fas fa-broom',
    iconColor: '#fd7e14', // orange
    isActive: true
  },
  {
    id: 5,
    title: 'Senior Citizen ID',
    titleMr: 'ज्येष्ठ नागरिक ओळखपत्र',
    titleEn: 'Senior Citizen ID',
    titleHi: 'वरिष्ठ नागरिक पहचान पत्र',
    description: 'Issue identity cards for senior citizens to avail welfare schemes.',
    descriptionMr: 'कल्याणकारी योजनांसाठी ज्येष्ठ नागरिक ओळखपत्र वितरित.',
    descriptionEn: 'Issue identity cards for senior citizens to avail welfare schemes.',
    descriptionHi: 'कल्याणकारी योजनाओं हेतु वरिष्ठ नागरिक पहचान पत्र जारी।',
    requiredDocuments: ['Age proof', 'Residence proof', 'Passport photo'],
    processTime: '5 working days',
    url: 'https://www.google.com',
    icon: 'fas fa-user-shield',
    iconColor: '#6f42c1', // purple
    isActive: true
  },
  {
    id: 6,
    title: 'Building Permission',
    titleMr: 'इमारत परवानगी',
    titleEn: 'Building Permission',
    titleHi: 'भवन अनुमति',
    description: 'Approval for new construction, renovation, or land development.',
    descriptionMr: 'नवीन बांधकाम, नूतनीकरण किंवा भूविकासासाठी मंजुरी.',
    descriptionEn: 'Approval for new construction, renovation, or land development.',
    descriptionHi: 'नए निर्माण, नवीनीकरण या भूमि विकास के लिए स्वीकृति।',
    requiredDocuments: ['Ownership proof', 'Building plan', 'Structural stability certificate'],
    processTime: '15 working days',
    url: 'https://www.google.com',
    icon: 'fas fa-building',
    iconColor: '#dc3545', // red
    isActive: true
  }
];

