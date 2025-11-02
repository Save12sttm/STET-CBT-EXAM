// =====
// BIHAR STET 2025 - PAPER-II: POLITICAL SCIENCE
// SET 7 - COMPLETE 150 QUESTIONS
// =====
// Subject Code: 219 | Class 11-12 Level
// Based on Official Bihar STET 2025 Syllabus & PYQ Analysis
// Total: 150 Questions (100 Political Science + 50 Teaching/General)
// Bilingual: English + Hindi
// =====

const paper2Set7CompleteQuestions = [

    // ====== SECTION A: INDIAN CONSTITUTION (Q1-25) ======
    
    { id: 1, question: "Which Article deals with the impeachment of the President?", questionHindi: "कौन सा अनुच्छेद राष्ट्रपति के महाभियोग से संबंधित है?", options: ["Article 60", "Article 61", "Article 62", "Article 63"], correct: 1, subject: "Constitution" },
    
    { id: 2, question: "The concept of 'Judicial Review' in India is derived from:", questionHindi: "भारत में 'न्यायिक समीक्षा' की अवधारणा किससे ली गई है:", options: ["USA Constitution / अमेरिकी संविधान", "British Constitution / ब्रिटिश संविधान", "Irish Constitution / आयरिश संविधान", "Canadian Constitution / कनाडाई संविधान"], correct: 0, subject: "Constitution" },
    
    { id: 3, question: "Article 20 protects against:", questionHindi: "अनुच्छेद 20 किसके खिलाफ सुरक्षा देता है:", options: ["Arbitrary arrest / मनमानी गिरफ्तारी", "Double jeopardy and self-incrimination / दोहरे खतरे और आत्म-दोषारोपण", "Preventive detention / निवारक निरोध", "Forced labour / जबरन श्रम"], correct: 1, subject: "Constitution" },
    
    { id: 4, question: "The concept of 'Cabinet System' in India is based on:", questionHindi: "भारत में 'मंत्रिमंडल प्रणाली' की अवधारणा किस पर आधारित है:", options: ["Constitutional provisions / संवैधानिक प्रावधान", "Conventions / सम्मेलन", "Both A and B / A और B दोनों", "Judicial interpretations / न्यायिक व्याख्याएं"], correct: 1, subject: "Constitution" },
    
    { id: 5, question: "Article 123 empowers the President to promulgate:", questionHindi: "अनुच्छेद 123 राष्ट्रपति को किसे लागू करने का अधिकार देता है:", options: ["Proclamations / घोषणाएं", "Ordinances / अध्यादेश", "Orders / आदेश", "Rules / नियम"], correct: 1, subject: "Constitution" },
    
    { id: 6, question: "The National Commission for Scheduled Tribes was created by:", questionHindi: "राष्ट्रीय अनुसूचित जनजाति आयोग किसके द्वारा बनाया गया:", options: ["42nd Amendment / 42वां संशोधन", "73rd Amendment / 73वां संशोधन", "89th Amendment / 89वां संशोधन", "97th Amendment / 97वां संशोधन"], correct: 2, subject: "Constitution" },
    
    { id: 7, question: "Article 13 declares that laws inconsistent with Fundamental Rights are:", questionHindi: "अनुच्छेद 13 घोषित करता है कि मौलिक अधिकारों के असंगत कानून हैं:", options: ["Valid / वैध", "Void / शून्य", "Voidable / शून्य करने योग्य", "Suspended / निलंबित"], correct: 1, subject: "Constitution" },
    
    { id: 8, question: "The concept of 'Compensatory Discrimination' is related to:", questionHindi: "'प्रतिपूरक भेदभाव' की अवधारणा किससे संबंधित है:", options: ["Reservation policy / आरक्षण नीति", "Emergency provisions / आपातकालीन प्रावधान", "Federal structure / संघीय संरचना", "Judicial system / न्यायिक प्रणाली"], correct: 0, subject: "Constitution" },
    
    { id: 9, question: "Article 213 empowers the Governor to promulgate:", questionHindi: "अनुच्छेद 213 राज्यपाल को किसे लागू करने का अधिकार देता है:", options: ["Proclamations / घोषणाएं", "Ordinances / अध्यादेश", "Orders / आदेश", "Bills / विधेयक"], correct: 1, subject: "Constitution" },
    
    { id: 10, question: "The concept of 'Implied Powers' in Indian federalism refers to:", questionHindi: "भारतीय संघवाद में 'निहित शक्तियों' की अवधारणा किससे संबंधित है:", options: ["Powers derived from explicit provisions / स्पष्ट प्रावधानों से प्राप्त शक्तियां", "Powers not explicitly mentioned / स्पष्ट रूप से उल्लिखित नहीं शक्तियां", "Emergency powers / आपातकालीन शक्तियां", "Residuary powers / अवशिष्ट शक्तियां"], correct: 1, subject: "Constitution" },
    
    { id: 11, question: "The National Judicial Appointments Commission was struck down by Supreme Court in:", questionHindi: "राष्ट्रीय न्यायिक नियुक्ति आयोग को सर्वोच्च न्यायालय ने कब रद्द किया:", options: ["2013", "2014", "2015", "2016"], correct: 2, subject: "Constitution" },
    
    { id: 12, question: "Article 16 provides for equality of opportunity in matters of:", questionHindi: "अनुच्छेद 16 किसके मामलों में अवसर की समानता प्रदान करता है:", options: ["Education / शिक्षा", "Public employment / सार्वजनिक रोजगार", "Business / व्यवसाय", "All of the above / उपरोक्त सभी"], correct: 1, subject: "Constitution" },
    
    { id: 13, question: "The doctrine of 'Pith and Substance' is used to determine:", questionHindi: "'सार और तत्व' का सिद्धांत किसे निर्धारित करने के लिए उपयोग किया जाता है:", options: ["Legislative competence / विधायी क्षमता", "Fundamental rights / मौलिक अधिकार", "Emergency provisions / आपातकालीन प्रावधान", "Judicial independence / न्यायिक स्वतंत्रता"], correct: 0, subject: "Constitution" },
    
    { id: 14, question: "Article 112 deals with:", questionHindi: "अनुच्छेद 112 किससे संबंधित है:", options: ["Finance Commission / वित्त आयोग", "Annual Financial Statement (Budget) / वार्षिक वित्तीय विवरण (बजट)", "Consolidated Fund / संचित निधि", "Contingency Fund / आकस्मिक निधि"], correct: 1, subject: "Constitution" },
    
    { id: 15, question: "The 91st Constitutional Amendment deals with:", questionHindi: "91वां संविधान संशोधन किससे संबंधित है:", options: ["Size of Council of Ministers / मंत्रिपरिषद का आकार", "Anti-defection / दल-बदल विरोधी", "Panchayati Raj / पंचायती राज", "Right to Education / शिक्षा का अधिकार"], correct: 0, subject: "Constitution" },
    
    { id: 16, question: "Article 22 provides protection against:", questionHindi: "अनुच्छेद 22 किसके खिलाफ सुरक्षा प्रदान करता है:", options: ["Discrimination / भेदभाव", "Arrest and detention / गिरफ्तारी और हिरासत", "Exploitation / शोषण", "Untouchability / अस्पृश्यता"], correct: 1, subject: "Constitution" },
    
    { id: 17, question: "The concept of 'Distributive Justice' is reflected in:", questionHindi: "'वितरणात्मक न्याय' की अवधारणा किसमें प्रतिबिंबित होती है:", options: ["Fundamental Rights / मौलिक अधिकार", "Directive Principles / नीति निदेशक तत्व", "Both A and B / A और B दोनों", "Fundamental Duties / मौलिक कर्तव्य"], correct: 1, subject: "Constitution" },
    
    { id: 18, question: "Article 265 states:", questionHindi: "अनुच्छेद 265 कहता है:", options: ["No tax without authority of law / कानून के अधिकार के बिना कोई कर नहीं", "No retrospective tax / कोई पूर्वव्यापी कर नहीं", "No double taxation / कोई दोहरा कराधान नहीं", "Tax exemption / कर छूट"], correct: 0, subject: "Constitution" },
    
    { id: 19, question: "The concept of 'Residuary Powers' in India vests with:", questionHindi: "भारत में 'अवशिष्ट शक्तियों' की अवधारणा किसमें निहित है:", options: ["State Legislature / राज्य विधानमंडल", "Parliament / संसद", "Concurrent List / समवर्ती सूची", "President / राष्ट्रपति"], correct: 1, subject: "Constitution" },
    
    { id: 20, question: "Article 368 deals with:", questionHindi: "अनुच्छेद 368 किससे संबंधित है:", options: ["Emergency provisions / आपातकालीन प्रावधान", "Amendment procedure / संशोधन प्रक्रिया", "Citizenship / नागरिकता", "Elections / चुनाव"], correct: 1, subject: "Constitution" },
    
    { id: 21, question: "The concept of 'Directive Principles' aims at establishing:", questionHindi: "'नीति निदेशक तत्वों' की अवधारणा किसे स्थापित करने का लक्ष्य रखती है:", options: ["Political democracy / राजनीतिक लोकतंत्र", "Social and economic democracy / सामाजिक और आर्थिक लोकतंत्र", "Legal democracy / कानूनी लोकतंत्र", "All of the above / उपरोक्त सभी"], correct: 1, subject: "Constitution" },
    
    { id: 22, question: "Article 32 is called the 'Heart and Soul' of the Constitution by:", questionHindi: "अनुच्छेद 32 को संविधान का 'दिल और आत्मा' किसने कहा:", options: ["Nehru / नेहरू", "Ambedkar / अंबेडकर", "Gandhi / गांधी", "Patel / पटेल"], correct: 1, subject: "Constitution" },
    
    { id: 23, question: "The National Green Tribunal was established under which Act?", questionHindi: "राष्ट्रीय हरित न्यायाधिकरण किस अधिनियम के तहत स्थापित किया गया था?", options: ["2008 Act", "2009 Act", "2010 Act", "2011 Act"], correct: 2, subject: "Constitution" },
    
    { id: 24, question: "Article 51A was added by which Amendment?", questionHindi: "अनुच्छेद 51A किस संशोधन द्वारा जोड़ा गया था?", options: ["40th Amendment / 40वां संशोधन", "42nd Amendment / 42वां संशोधन", "44th Amendment / 44वां संशोधन", "52nd Amendment / 52वां संशोधन"], correct: 1, subject: "Constitution" },
    
    { id: 25, question: "The concept of 'Cooperative Federalism' in India is reflected in:", questionHindi: "भारत में 'सहकारी संघवाद' की अवधारणा किसमें प्रतिबिंबित होती है:", options: ["Concurrent List / समवर्ती सूची", "Inter-State Council / अंतर-राज्यीय परिषद", "Planning Commission / योजना आयोग", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Constitution" },

    // ====== SECTION B: POLITICAL THEORY (Q26-45) ======
    
    { id: 26, question: "The concept of 'Political Obligation' refers to:", questionHindi: "'राजनीतिक दायित्व' की अवधारणा किससे संबंधित है:", options: ["Duty to obey state / राज्य का पालन करने का कर्तव्य", "Right to disobey / अवज्ञा का अधिकार", "Freedom from law / कानून से स्वतंत्रता", "None / कोई नहीं"], correct: 0, subject: "Political Theory" },
    
    { id: 27, question: "Who propounded the theory of 'Limited Sovereignty'?", questionHindi: "'सीमित संप्रभुता' का सिद्धांत किसने प्रतिपादित किया?", options: ["John Locke / जॉन लॉक", "Jean Bodin / जीन बोडिन", "Thomas Hobbes / थॉमस हॉब्स", "John Austin / जॉन ऑस्टिन"], correct: 0, subject: "Political Theory" },
    
    { id: 28, question: "The concept of 'Civil Disobedience' was elaborated by:", questionHindi: "'सविनय अवज्ञा' की अवधारणा किसने विस्तृत की:", options: ["Henry David Thoreau / हेनरी डेविड थोरो", "Mahatma Gandhi / महात्मा गांधी", "Both A and B / A और B दोनों", "Martin Luther King Jr. / मार्टिन लूथर किंग जूनियर"], correct: 2, subject: "Political Theory" },
    
    { id: 29, question: "The theory of 'Elite Theory' was propounded by:", questionHindi: "'अभिजात वर्ग सिद्धांत' किसने प्रतिपादित किया:", options: ["Vilfredo Pareto / विल्फ्रेडो पारेतो", "Gaetano Mosca / गायटानो मोस्का", "Robert Michels / रॉबर्ट मिशेल्स", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Political Theory" },
    
    { id: 30, question: "Who wrote 'The Road to Serfdom'?", questionHindi: "'द रोड टू सर्फडम' किसने लिखा?", options: ["Friedrich Hayek / फ्रेडरिक हायेक", "Milton Friedman / मिल्टन फ्रीडमैन", "Karl Popper / कार्ल पॉपर", "Ludwig von Mises / लुडविग वॉन मिसेस"], correct: 0, subject: "Political Theory" },
    
    { id: 31, question: "The concept of 'Polyarchy' was developed by:", questionHindi: "'पॉलीआर्की' की अवधारणा किसने विकसित की:", options: ["Robert Dahl / रॉबर्ट डाहल", "Samuel Huntington / सैमुअल हंटिंगटन", "Giovanni Sartori / जियोवानी सार्टोरी", "Arend Lijphart / आरेंड लिजफार्ट"], correct: 0, subject: "Political Theory" },
    
    { id: 32, question: "The concept of 'Contestation and Participation' in democracy is associated with:", questionHindi: "लोकतंत्र में 'प्रतियोगिता और भागीदारी' की अवधारणा किससे जुड़ी है:", options: ["Robert Dahl / रॉबर्ट डाहल", "Joseph Schumpeter / जोसेफ शुम्पीटर", "Samuel Huntington / सैमुअल हंटिंगटन", "Seymour Lipset / सेमुर लिपसेट"], correct: 0, subject: "Political Theory" },
    
    { id: 33, question: "The concept of 'Third Wave of Democratization' refers to:", questionHindi: "'लोकतंत्रीकरण की तीसरी लहर' की अवधारणा किससे संबंधित है:", options: ["Post-1974 democratic transitions / 1974 के बाद लोकतांत्रिक संक्रमण", "Post-WWII democratization / द्वितीय विश्व युद्ध के बाद लोकतंत्रीकरण", "19th century democratization / 19वीं सदी का लोकतंत्रीकरण", "None / कोई नहीं"], correct: 0, subject: "Political Theory" },
    
    { id: 34, question: "Who wrote 'The End of History'?", questionHindi: "'द एंड ऑफ हिस्ट्री' किसने लिखा?", options: ["Francis Fukuyama / फ्रांसिस फुकुयामा", "Samuel Huntington / सैमुअल हंटिंगटन", "John Mearsheimer / जॉन मीयरशाइमर", "Kenneth Waltz / केनेथ वाल्ट्ज़"], correct: 0, subject: "Political Theory" },
    
    { id: 35, question: "The concept of 'Difference Principle' is associated with:", questionHindi: "'अंतर सिद्धांत' की अवधारणा किससे जुड़ी है:", options: ["John Rawls / जॉन रॉल्स", "Robert Nozick / रॉबर्ट नोज़िक", "Michael Walzer / माइकल वाल्ज़र", "Amartya Sen / अमर्त्य सेन"], correct: 0, subject: "Political Theory" },
    
    { id: 36, question: "The concept of 'Entitlement Theory' of justice was propounded by:", questionHindi: "न्याय का 'हकदारी सिद्धांत' किसने प्रतिपादित किया:", options: ["Robert Nozick / रॉबर्ट नोज़िक", "John Rawls / जॉन रॉल्स", "Friedrich Hayek / फ्रेडरिक हायेक", "Milton Friedman / मिल्टन फ्रीडमैन"], correct: 0, subject: "Political Theory" },
    
    { id: 37, question: "Who wrote 'The Feminine Mystique'?", questionHindi: "'द फेमिनिन मिस्टीक' किसने लिखा?", options: ["Betty Friedan / बेटी फ्रीडन", "Simone de Beauvoir / सिमोन दे बोउवार", "Germaine Greer / जर्मेन ग्रीर", "Kate Millett / केट मिलेट"], correct: 0, subject: "Political Theory" },
    
    { id: 38, question: "The concept of 'Repressive Tolerance' was developed by:", questionHindi: "'दमनकारी सहिष्णुता' की अवधारणा किसने विकसित की:", options: ["Herbert Marcuse / हर्बर्ट मार्क्यूज़", "Theodor Adorno / थियोडोर एडोर्नो", "Max Horkheimer / मैक्स हॉर्कहाइमर", "Jürgen Habermas / जुर्गन हेबरमास"], correct: 0, subject: "Political Theory" },
    
    { id: 39, question: "The concept of 'Biopower' is associated with:", questionHindi: "'जैव-शक्ति' की अवधारणा किससे जुड़ी है:", options: ["Michel Foucault / मिशेल फूको", "Giorgio Agamben / जियोर्जियो अगामबेन", "Both A and B / A और B दोनों", "Jacques Derrida / जैक्स देरिदा"], correct: 0, subject: "Political Theory" },
    
    { id: 40, question: "Who propounded the concept of 'Panopticon'?", questionHindi: "'पैनोप्टिकॉन' की अवधारणा किसने प्रतिपादित की?", options: ["Jeremy Bentham / जेरेमी बेंथम", "Michel Foucault / मिशेल फूको", "Both A and B / A और B दोनों", "None / कोई नहीं"], correct: 2, subject: "Political Theory" },
    
    { id: 41, question: "The concept of 'Cosmopolitanism' emphasizes:", questionHindi: "'वैश्विक नागरिकता' की अवधारणा किस पर जोर देती है:", options: ["Global citizenship / वैश्विक नागरिकता", "Universal moral community / सार्वभौमिक नैतिक समुदाय", "World government / विश्व सरकार", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Political Theory" },
    
    { id: 42, question: "The concept of 'Multiculturalism' was developed by:", questionHindi: "'बहुसंस्कृतिवाद' की अवधारणा किसने विकसित की:", options: ["Will Kymlicka / विल किम्लिक्का", "Charles Taylor / चार्ल्स टेलर", "Both A and B / A और B दोनों", "Bhikhu Parekh / भीखू पारेख"], correct: 2, subject: "Political Theory" },
    
    { id: 43, question: "Who wrote 'The Politics of Recognition'?", questionHindi: "'द पॉलिटिक्स ऑफ रिकॉग्निशन' किसने लिखा?", options: ["Charles Taylor / चार्ल्स टेलर", "Axel Honneth / एक्सेल होनेथ", "Nancy Fraser / नैन्सी फ्रेज़र", "Iris Marion Young / आइरिस मैरियन यंग"], correct: 0, subject: "Political Theory" },
    
    { id: 44, question: "The concept of 'Sovereignty' was first systematically discussed by:", questionHindi: "'संप्रभुता' की अवधारणा को सबसे पहले व्यवस्थित रूप से किसने चर्चित किया:", options: ["Jean Bodin / जीन बोडिन", "Thomas Hobbes / थॉमस हॉब्स", "John Austin / जॉन ऑस्टिन", "Hugo Grotius / ह्यूगो ग्रोटियस"], correct: 0, subject: "Political Theory" },
    
    { id: 45, question: "The concept of 'Participatory Democracy' emphasizes:", questionHindi: "'सहभागी लोकतंत्र' की अवधारणा किस पर जोर देती है:", options: ["Direct citizen involvement / प्रत्यक्ष नागरिक भागीदारी", "Representative democracy / प्रतिनिधि लोकतंत्र", "Elite rule / अभिजात वर्ग शासन", "Technocracy / तकनीकीतंत्र"], correct: 0, subject: "Political Theory" },

    // ====== SECTION C: INDIAN POLITICAL THINKERS (Q46-60) ======
    
    { id: 46, question: "Gandhi's concept of 'Swadeshi' means:", questionHindi: "गांधी की 'स्वदेशी' की अवधारणा का अर्थ है:", options: ["Self-rule / स्व-शासन", "Use of indigenous products / स्वदेशी उत्पादों का उपयोग", "Economic self-sufficiency / आर्थिक आत्मनिर्भरता", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Indian Thinkers" },
    
    { id: 47, question: "Nehru's concept of 'Mixed Economy' combined:", questionHindi: "नेहरू की 'मिश्रित अर्थव्यवस्था' की अवधारणा संयुक्त थी:", options: ["Public and private sectors / सार्वजनिक और निजी क्षेत्र", "Socialism and capitalism / समाजवाद और पूंजीवाद", "Both A and B / A और B दोनों", "None / कोई नहीं"], correct: 2, subject: "Indian Thinkers" },
    
    { id: 48, question: "Ambedkar's book 'Buddha and His Dhamma' was published:", questionHindi: "अंबेडकर की पुस्तक 'बुद्ध और उनका धम्म' कब प्रकाशित हुई:", options: ["1950", "1955", "1957", "1960"], correct: 2, subject: "Indian Thinkers" },
    
    { id: 49, question: "M.N. Roy's book 'India in Transition' was written in:", questionHindi: "एम.एन. रॉय की पुस्तक 'इंडिया इन ट्रांजिशन' कब लिखी गई:", options: ["1920s / 1920 के दशक", "1930s / 1930 के दशक", "1940s / 1940 के दशक", "1950s / 1950 के दशक"], correct: 0, subject: "Indian Thinkers" },
    
    { id: 50, question: "Jayaprakash Narayan's 'Total Revolution' included how many revolutions?", questionHindi: "जयप्रकाश नारायण की 'संपूर्ण क्रांति' में कितनी क्रांतियां शामिल थीं?", options: ["Five / पांच", "Six / छह", "Seven / सात", "Eight / आठ"], correct: 2, subject: "Indian Thinkers" },
    
    { id: 51, question: "Ram Manohar Lohia emphasized the concept of:", questionHindi: "राम मनोहर लोहिया ने किस अवधारणा पर जोर दिया:", options: ["Caste annihilation / जाति विनाश", "Gender equality / लैंगिक समानता", "Decentralization / विकेंद्रीकरण", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Indian Thinkers" },
    
    { id: 52, question: "Rabindranath Tagore criticized:", questionHindi: "रवींद्रनाथ टैगोर ने किसकी आलोचना की:", options: ["Narrow nationalism / संकीर्ण राष्ट्रवाद", "Western imperialism / पश्चिमी साम्राज्यवाद", "Communalism / सांप्रदायिकता", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Indian Thinkers" },
    
    { id: 53, question: "Vivekananda's 'Chicago Speech' was delivered in:", questionHindi: "विवेकानंद का 'शिकागो भाषण' कब दिया गया:", options: ["1890", "1893", "1895", "1900"], correct: 1, subject: "Indian Thinkers" },
    
    { id: 54, question: "Aurobindo's political activism ended around:", questionHindi: "अरबिंदो की राजनीतिक सक्रियता कब समाप्त हुई:", options: ["1905", "1908", "1910", "1915"], correct: 2, subject: "Indian Thinkers" },
    
    { id: 55, question: "Vinoba Bhave started the Bhoodan Movement in:", questionHindi: "विनोबा भावे ने भूदान आंदोलन कब शुरू किया:", options: ["1948", "1951", "1955", "1960"], correct: 1, subject: "Indian Thinkers" },
    
    { id: 56, question: "Dayananda Saraswati wrote:", questionHindi: "दयानंद सरस्वती ने लिखा:", options: ["Satyarth Prakash / सत्यार्थ प्रकाश", "Veda Bhashya / वेद भाष्य", "Both A and B / A और B दोनों", "None / कोई नहीं"], correct: 2, subject: "Indian Thinkers" },
    
    { id: 57, question: "Gandhi's 'Talisman' focuses on:", questionHindi: "गांधी का 'तावीज़' किस पर केंद्रित है:", options: ["Poorest of the poor / सबसे गरीब", "Welfare of all / सभी का कल्याण", "Rural development / ग्रामीण विकास", "Self-sufficiency / आत्मनिर्भरता"], correct: 0, subject: "Indian Thinkers" },
    
    { id: 58, question: "Subhas Chandra Bose's famous slogan was:", questionHindi: "सुभाष चंद्र बोस का प्रसिद्ध नारा था:", options: ["Jai Hind / जय हिंद", "Delhi Chalo / दिल्ली चलो", "Give me blood, I will give you freedom / तुम मुझे खून दो, मैं तुम्हें आजादी दूंगा", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Indian Thinkers" },
    
    { id: 59, question: "Gopal Krishna Gokhale founded:", questionHindi: "गोपाल कृष्ण गोखले ने क्या स्थापित किया:", options: ["Servants of India Society / सर्वेंट्स ऑफ इंडिया सोसाइटी", "Social Service League / सोशल सर्विस लीग", "Both A and B / A और B दोनों", "None / कोई नहीं"], correct: 0, subject: "Indian Thinkers" },
    
    { id: 60, question: "Maulana Azad served as Education Minister for:", questionHindi: "मौलाना आज़ाद शिक्षा मंत्री के रूप में कितने समय तक सेवा की:", options: ["5 years / 5 वर्ष", "10 years / 10 वर्ष", "11 years / 11 वर्ष", "15 years / 15 वर्ष"], correct: 2, subject: "Indian Thinkers" },

    // ====== SECTION D: WESTERN POLITICAL THINKERS (Q61-70) ======
    
    { id: 61, question: "Plato divided his ideal state into how many classes?", questionHindi: "प्लेटो ने अपने आदर्श राज्य को कितने वर्गों में विभाजित किया?", options: ["Two / दो", "Three / तीन", "Four / चार", "Five / पांच"], correct: 1, subject: "Western Thinkers" },
    
    { id: 62, question: "Aristotle believed that:", questionHindi: "अरस्तू का मानना था कि:", options: ["Man is a political animal / मनुष्य एक राजनीतिक प्राणी है", "State is natural / राज्य प्राकृतिक है", "State aims at good life / राज्य अच्छे जीवन का लक्ष्य रखता है", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Western Thinkers" },
    
    { id: 63, question: "Machiavelli's concept of 'Virtu' means:", questionHindi: "मैकियावेली की 'विर्टु' की अवधारणा का अर्थ है:", options: ["Moral virtue / नैतिक गुण", "Political skill and ability / राजनीतिक कौशल और क्षमता", "Religious piety / धार्मिक भक्ति", "None / कोई नहीं"], correct: 1, subject: "Western Thinkers" },
    
    { id: 64, question: "Hobbes' social contract leads to:", questionHindi: "हॉब्स का सामाजिक अनुबंध किसकी ओर ले जाता है:", options: ["Limited government / सीमित सरकार", "Absolute sovereign / पूर्ण संप्रभु", "Democratic government / लोकतांत्रिक सरकार", "Federal government / संघीय सरकार"], correct: 1, subject: "Western Thinkers" },
    
    { id: 65, question: "Locke's right to revolution is based on:", questionHindi: "लॉक का क्रांति का अधिकार किस पर आधारित है:", options: ["Government violating natural rights / सरकार प्राकृतिक अधिकारों का उल्लंघन करती है", "Trust between government and people / सरकार और लोगों के बीच विश्वास", "Both A and B / A और B दोनों", "None / कोई नहीं"], correct: 2, subject: "Western Thinkers" },
    
    { id: 66, question: "Rousseau believed that civilization:", questionHindi: "रूसो का मानना था कि सभ्यता:", options: ["Corrupts natural goodness / प्राकृतिक अच्छाई को भ्रष्ट करती है", "Improves human nature / मानव प्रकृति में सुधार करती है", "Is neutral / तटस्थ है", "None / कोई नहीं"], correct: 0, subject: "Western Thinkers" },
    
    { id: 67, question: "Marx's theory predicts:", questionHindi: "मार्क्स का सिद्धांत भविष्यवाणी करता है:", options: ["Evolution to communism / साम्यवाद की ओर विकास", "Classless society / वर्गहीन समाज", "Stateless society / राज्यहीन समाज", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Western Thinkers" },
    
    { id: 68, question: "Montesquieu's classification of governments includes:", questionHindi: "मोंटेस्क्यू का सरकारों का वर्गीकरण शामिल करता है:", options: ["Republic, Monarchy, Despotism / गणतंत्र, राजतंत्र, निरंकुशता", "Democracy, Aristocracy, Monarchy / लोकतंत्र, कुलीनतंत्र, राजतंत्र", "Unitary, Federal, Confederal / एकात्मक, संघीय, परिसंघीय", "None / कोई नहीं"], correct: 0, subject: "Western Thinkers" },
    
    { id: 69, question: "Lenin added to Marxism:", questionHindi: "लेनिन ने मार्क्सवाद में क्या जोड़ा:", options: ["Theory of imperialism / साम्राज्यवाद का सिद्धांत", "Vanguard party concept / अग्रणी पार्टी अवधारणा", "Democratic centralism / लोकतांत्रिक केंद्रीयवाद", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Western Thinkers" },
    
    { id: 70, question: "Mill's concept of 'Tyranny of Majority' warns against:", questionHindi: "मिल की 'बहुमत की तानाशाही' की अवधारणा किसके खिलाफ चेतावनी देती है:", options: ["Majority suppressing minority / बहुमत अल्पसंख्यक को दबाता है", "Social conformity / सामाजिक अनुरूपता", "Public opinion pressure / जनमत दबाव", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Western Thinkers" },

    // ====== SECTIONS E-L: REMAINING 80 QUESTIONS (Q71-150) ======
    
    // SECTION E: INTERNATIONAL RELATIONS (Q71-80)
    { id: 71, question: "The Treaty of Westphalia (1648) established:", questionHindi: "वेस्टफेलिया की संधि (1648) ने क्या स्थापित किया:", options: ["Modern state system / आधुनिक राज्य प्रणाली", "Sovereignty principle / संप्रभुता सिद्धांत", "Territorial integrity / क्षेत्रीय अखंडता", "All of the above / उपरोक्त सभी"], correct: 3, subject: "International Relations" },
    
    { id: 72, question: "The concept of 'Collective Security' is embodied in:", questionHindi: "'सामूहिक सुरक्षा' की अवधारणा किसमें सन्निहित है:", options: ["League of Nations / राष्ट्र संघ", "United Nations / संयुक्त राष्ट्र", "Both A and B / A और B दोनों", "NATO / नाटो"], correct: 2, subject: "International Relations" },
    
    { id: 73, question: "The Non-Proliferation Treaty (NPT) came into force in:", questionHindi: "अप्रसार संधि (NPT) कब लागू हुई:", options: ["1968", "1970", "1975", "1980"], correct: 1, subject: "International Relations" },
    
    { id: 74, question: "The concept of 'Structural Realism' was developed by:", questionHindi: "'संरचनात्मक यथार्थवाद' की अवधारणा किसने विकसित की:", options: ["Kenneth Waltz / केनेथ वाल्ट्ज़", "Hans Morgenthau / हंस मोर्गेन्थाउ", "John Mearsheimer / जॉन मीयरशाइमर", "E.H. Carr / ई.एच. कार"], correct: 0, subject: "International Relations" },
    
    { id: 75, question: "The Chemical Weapons Convention was signed in:", questionHindi: "रासायनिक हथियार सम्मेलन पर कब हस्ताक्षर किए गए:", options: ["1990", "1993", "1995", "1997"], correct: 1, subject: "International Relations" },
    
    { id: 76, question: "The concept of 'Security Dilemma' refers to:", questionHindi: "'सुरक्षा दुविधा' की अवधारणा किससे संबंधित है:", options: ["One state's security decreases another's / एक राज्य की सुरक्षा दूसरे को कम करती है", "Arms race spiral / हथियारों की दौड़ का सर्पिल", "Mistrust between states / राज्यों के बीच अविश्वास", "All of the above / उपरोक्त सभी"], correct: 3, subject: "International Relations" },
    
    { id: 77, question: "The European Union was formally established by:", questionHindi: "यूरोपीय संघ औपचारिक रूप से किसके द्वारा स्थापित किया गया:", options: ["Treaty of Rome / रोम की संधि", "Maastricht Treaty / मास्ट्रिच्ट संधि", "Treaty of Lisbon / लिस्बन की संधि", "Treaty of Paris / पेरिस की संधि"], correct: 1, subject: "International Relations" },
    
    { id: 78, question: "The concept of 'Hegemonic Stability Theory' suggests:", questionHindi: "'वर्चस्व स्थिरता सिद्धांत' की अवधारणा सुझाती है:", options: ["Hegemon provides international order / वर्चस्वशाली अंतर्राष्ट्रीय व्यवस्था प्रदान करता है", "Hegemony causes instability / वर्चस्व अस्थिरता का कारण बनता है", "Multiple hegemons needed / कई वर्चस्वशाली आवश्यक", "None / कोई नहीं"], correct: 0, subject: "International Relations" },
    
    { id: 79, question: "The QUAD grouping includes:", questionHindi: "QUAD समूह में शामिल हैं:", options: ["USA, India, Japan, Australia", "USA, UK, Japan, Australia", "USA, India, China, Japan", "USA, India, Japan, South Korea"], correct: 0, subject: "International Relations" },
    
    { id: 80, question: "The concept of 'Constructivism' in IR emphasizes:", questionHindi: "अंतर्राष्ट्रीय संबंधों में 'रचनावाद' की अवधारणा किस पर जोर देती है:", options: ["Social construction of reality / वास्तविकता का सामाजिक निर्माण", "Ideas and norms / विचार और मानदंड", "Identity formation / पहचान निर्माण", "All of the above / उपरोक्त सभी"], correct: 3, subject: "International Relations" },

    // SECTION F: PUBLIC ADMINISTRATION (Q81-90)
    { id: 81, question: "The Fulton Committee Report (1968) was related to:", questionHindi: "फुल्टन समिति रिपोर्ट (1968) किससे संबंधित थी:", options: ["British Civil Service / ब्रिटिश सिविल सेवा", "Indian Civil Service / भारतीय सिविल सेवा", "US Civil Service / अमेरिकी सिविल सेवा", "None / कोई नहीं"], correct: 0, subject: "Public Administration" },
    
    { id: 82, question: "The concept of 'Garbage Can Model' of decision-making was proposed by:", questionHindi: "निर्णय लेने के 'गारबेज कैन मॉडल' की अवधारणा किसने प्रस्तावित की:", options: ["James March / जेम्स मार्च", "Herbert Simon / हर्बर्ट साइमन", "Both A and B / A और B दोनों", "Charles Lindblom / चार्ल्स लिंडब्लोम"], correct: 0, subject: "Public Administration" },
    
    { id: 83, question: "The Northcote-Trevelyan Report (1854) recommended:", questionHindi: "नॉर्थकोट-ट्रेवेलियन रिपोर्ट (1854) ने क्या सिफारिश की:", options: ["Merit-based recruitment / योग्यता-आधारित भर्ती", "Competitive examinations / प्रतियोगी परीक्षाएं", "Professional civil service / पेशेवर सिविल सेवा", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Public Administration" },
    
    { id: 84, question: "The concept of 'Prismatic Society' was developed by:", questionHindi: "'प्रिज्मेटिक समाज' की अवधारणा किसने विकसित की:", options: ["F.W. Riggs / एफ.डब्ल्यू. रिग्स", "Fred W. Riggs / फ्रेड डब्ल्यू. रिग्स", "Both / दोनों", "None / कोई नहीं"], correct: 2, subject: "Public Administration" },
    
    { id: 85, question: "The Kothari Commission (1964-66) was related to:", questionHindi: "कोठारी आयोग (1964-66) किससे संबंधित था:", options: ["Education / शिक्षा", "Planning / योजना", "Administration / प्रशासन", "Finance / वित्त"], correct: 0, subject: "Public Administration" },
    
    { id: 86, question: "The concept of 'Incremental Model' of decision-making emphasizes:", questionHindi: "निर्णय लेने के 'वृद्धिशील मॉडल' की अवधारणा किस पर जोर देती है:", options: ["Small, gradual changes / छोटे, क्रमिक परिवर्तन", "Rational comprehensive approach / तर्कसंगत व्यापक दृष्टिकोण", "Radical changes / कट्टरपंथी परिवर्तन", "None / कोई नहीं"], correct: 0, subject: "Public Administration" },
    
    { id: 87, question: "The Right to Service Act aims at:", questionHindi: "सेवा का अधिकार अधिनियम का उद्देश्य है:", options: ["Time-bound service delivery / समयबद्ध सेवा वितरण", "Accountability / जवाबदेही", "Transparency / पारदर्शिता", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Public Administration" },
    
    { id: 88, question: "The concept of 'Total Quality Management' in administration emphasizes:", questionHindi: "प्रशासन में 'संपूर्ण गुणवत्ता प्रबंधन' की अवधारणा किस पर जोर देती है:", options: ["Customer satisfaction / ग्राहक संतुष्टि", "Continuous improvement / निरंतर सुधार", "Employee involvement / कर्मचारी भागीदारी", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Public Administration" },
    
    { id: 89, question: "The Santhanam Committee (1964) dealt with:", questionHindi: "संथानम समिति (1964) किससे संबंधित थी:", options: ["Corruption / भ्रष्टाचार", "Planning / योजना", "Education / शिक्षा", "Finance / वित्त"], correct: 0, subject: "Public Administration" },
    
    { id: 90, question: "The concept of 'Good Governance' includes:", questionHindi: "'सुशासन' की अवधारणा में शामिल है:", options: ["Rule of law / विधि का शासन", "Transparency and accountability / पारदर्शिता और जवाबदेही", "Participation and responsiveness / भागीदारी और प्रतिक्रियाशीलता", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Public Administration" },

    // SECTION G: COMPARATIVE POLITICS (Q91-100)
    { id: 91, question: "The concept of 'Power-Sharing' is central to:", questionHindi: "'शक्ति साझाकरण' की अवधारणा किसके लिए केंद्रीय है:", options: ["Consociational democracy / संघात्मक लोकतंत्र", "Majoritarian democracy / बहुसंख्यकवादी लोकतंत्र", "Authoritarian system / सत्तावादी प्रणाली", "None / कोई नहीं"], correct: 0, subject: "Comparative Politics" },
    
    { id: 92, question: "The American federalism is characterized by:", questionHindi: "अमेरिकी संघवाद की विशेषता है:", options: ["Dual federalism / दोहरा संघवाद", "Cooperative federalism / सहकारी संघवाद", "Creative federalism / रचनात्मक संघवाद", "All at different times / विभिन्न समयों पर सभी"], correct: 3, subject: "Comparative Politics" },
    
    { id: 93, question: "The concept of 'Vote of No Confidence' is a feature of:", questionHindi: "'अविश्वास प्रस्ताव' की अवधारणा किसकी विशेषता है:", options: ["Parliamentary system / संसदीय प्रणाली", "Presidential system / राष्ट्रपति प्रणाली", "Both / दोनों", "None / कोई नहीं"], correct: 0, subject: "Comparative Politics" },
    
    { id: 94, question: "The Chinese political system is based on:", questionHindi: "चीनी राजनीतिक प्रणाली किस पर आधारित है:", options: ["One-party rule / एक-दल शासन", "Socialist ideology / समाजवादी विचारधारा", "Democratic centralism / लोकतांत्रिक केंद्रीयवाद", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Comparative Politics" },
    
    { id: 95, question: "The concept of 'Question Hour' in Parliament originated in:", questionHindi: "संसद में 'प्रश्नकाल' की अवधारणा कहाँ उत्पन्न हुई:", options: ["Britain / ब्रिटेन", "USA / अमेरिका", "France / फ्रांस", "India / भारत"], correct: 0, subject: "Comparative Politics" },
    
    { id: 96, question: "The Israeli political system uses:", questionHindi: "इजरायली राजनीतिक प्रणाली उपयोग करती है:", options: ["Proportional representation / आनुपातिक प्रतिनिधित्व", "First-past-the-post / फर्स्ट-पास्ट-द-पोस्ट", "Mixed system / मिश्रित प्रणाली", "None / कोई नहीं"], correct: 0, subject: "Comparative Politics" },
    
    { id: 97, question: "The concept of 'Guided Democracy' was associated with:", questionHindi: "'निर्देशित लोकतंत्र' की अवधारणा किससे जुड़ी थी:", options: ["Indonesia under Sukarno / सुकर्णो के तहत इंडोनेशिया", "Pakistan under Ayub Khan / अयूब खान के तहत पाकिस्तान", "Both A and B / A और B दोनों", "None / कोई नहीं"], correct: 0, subject: "Comparative Politics" },
    
    { id: 98, question: "The South Korean political transition is an example of:", questionHindi: "दक्षिण कोरियाई राजनीतिक संक्रमण किसका उदाहरण है:", options: ["Third wave democratization / तीसरी लहर लोकतंत्रीकरण", "Authoritarian breakdown / सत्तावादी टूटना", "Economic development leading to democracy / आर्थिक विकास लोकतंत्र की ओर ले जाता है", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Comparative Politics" },
    
    { id: 99, question: "The New Zealand political system abolished its:", questionHindi: "न्यूजीलैंड की राजनीतिक प्रणाली ने किसे समाप्त किया:", options: ["Upper House / ऊपरी सदन", "Lower House / निचला सदन", "Monarchy / राजतंत्र", "None / कोई नहीं"], correct: 0, subject: "Comparative Politics" },
    
    { id: 100, question: "The concept of 'Separation of Church and State' is strongly maintained in:", questionHindi: "'चर्च और राज्य के पृथक्करण' की अवधारणा कहाँ मजबूती से बनाए रखी जाती है:", options: ["France (Laïcité) / फ्रांस (लाइसिटे)", "USA / अमेरिका", "Turkey / तुर्की", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Comparative Politics" },

    // SECTION H: PEDAGOGY (Q101-130) - 30 Questions
    { id: 101, question: "The concept of 'Learning Styles' (VAK model) was popularized by:", questionHindi: "'सीखने की शैलियां' (VAK मॉडल) की अवधारणा किसने लोकप्रिय बनाई:", options: ["Neil Fleming / नील फ्लेमिंग", "David Kolb / डेविड कोल्ब", "Howard Gardner / हॉवर्ड गार्डनर", "Walter Burke Barbe / वाल्टर बर्क बार्बे"], correct: 3, subject: "Pedagogy" },
    
    { id: 102, question: "Vygotsky's concept of 'More Knowledgeable Other' (MKO) refers to:", questionHindi: "वायगोत्स्की की 'अधिक जानकार अन्य' (MKO) की अवधारणा किससे संबंधित है:", options: ["Teacher / शिक्षक", "Peer / साथी", "Parent / माता-पिता", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Pedagogy" },
    
    { id: 103, question: "The 'Law of Readiness' in learning was proposed by:", questionHindi: "सीखने में 'तत्परता का नियम' किसने प्रस्तावित किया:", options: ["Edward Thorndike / एडवर्ड थार्नडाइक", "B.F. Skinner / बी.एफ. स्किनर", "Ivan Pavlov / इवान पावलोव", "Jean Piaget / जीन पियाजे"], correct: 0, subject: "Pedagogy" },
    
    { id: 104, question: "The concept of 'Situated Learning' emphasizes:", questionHindi: "'स्थित शिक्षा' की अवधारणा किस पर जोर देती है:", options: ["Learning in authentic contexts / प्रामाणिक संदर्भों में सीखना", "Social participation / सामाजिक भागीदारी", "Communities of practice / अभ्यास के समुदाय", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Pedagogy" },
    
    { id: 105, question: "The concept of 'Fixed Mindset' vs 'Growth Mindset' distinguishes between:", questionHindi: "'फिक्स्ड माइंडसेट' बनाम 'ग्रोथ माइंडसेट' की अवधारणा किनके बीच अंतर करती है:", options: ["Believing abilities are innate vs. can be developed / मानना कि क्षमताएं जन्मजात हैं बनाम विकसित की जा सकती हैं", "Learning approaches / सीखने के दृष्टिकोण", "Response to challenges / चुनौतियों की प्रतिक्रिया", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Pedagogy" },
    
    { id: 106, question: "The 'Premack Principle' in behavior management states:", questionHindi: "व्यवहार प्रबंधन में 'प्रीमैक सिद्धांत' कहता है:", options: ["High probability behavior reinforces low probability behavior / उच्च संभावना व्यवहार निम्न संभावना व्यवहार को मजबूत करता है", "Positive reinforcement is best / सकारात्मक सुदृढीकरण सर्वश्रेष्ठ है", "Punishment should be avoided / सजा से बचना चाहिए", "None / कोई नहीं"], correct: 0, subject: "Pedagogy" },
    
    { id: 107, question: "The 'ARCS Model' of motivation includes:", questionHindi: "प्रेरणा का 'ARCS मॉडल' शामिल करता है:", options: ["Attention, Relevance, Confidence, Satisfaction", "Achievement, Recognition, Competence, Success", "Assessment, Reward, Challenge, Support", "None of the above"], correct: 0, subject: "Pedagogy" },
    
    { id: 108, question: "The concept of 'Transfer of Training' refers to:", questionHindi: "'प्रशिक्षण के हस्तांतरण' की अवधारणा किससे संबंधित है:", options: ["Applying learned skills in different contexts / विभिन्न संदर्भों में सीखे हुए कौशल को लागू करना", "Teaching others / दूसरों को पढ़ाना", "Moving to different training / विभिन्न प्रशिक्षण में जाना", "None / कोई नहीं"], correct: 0, subject: "Pedagogy" },
    
    { id: 109, question: "The 'Cognitive Load Theory' suggests:", questionHindi: "'संज्ञानात्मक भार सिद्धांत' सुझाता है:", options: ["Working memory has limited capacity / कार्यशील स्मृति सीमित क्षमता है", "Instructional design should reduce extraneous load / शिक्षण डिजाइन बाहरी भार को कम करना चाहिए", "Both A and B / A और B दोनों", "None / कोई नहीं"], correct: 2, subject: "Pedagogy" },
    
    { id: 110, question: "The concept of 'Chunking' in memory refers to:", questionHindi: "स्मृति में 'चंकिंग' की अवधारणा किससे संबंधित है:", options: ["Grouping information into meaningful units / जानकारी को अर्थपूर्ण इकाइयों में समूहित करना", "Breaking complex tasks / जटिल कार्यों को तोड़ना", "Both A and B / A और B दोनों", "None / कोई नहीं"], correct: 2, subject: "Pedagogy" },
    
    { id: 111, question: "The 'Socratic Questioning' technique involves:", questionHindi: "'सुकराती प्रश्न' तकनीक में शामिल है:", options: ["Probing questions / जांच प्रश्न", "Critical thinking / आलोचनात्मक सोच", "Self-examination / आत्म-परीक्षण", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Pedagogy" },
    
    { id: 112, question: "The concept of 'Metacognitive Awareness' involves:", questionHindi: "'मेटाकॉग्निटिव जागरूकता' की अवधारणा में शामिल है:", options: ["Thinking about one's thinking / अपनी सोच के बारे में सोचना", "Self-regulation / स्व-विनियमन", "Monitoring learning / सीखने की निगरानी", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Pedagogy" },
    
    { id: 113, question: "The 'Mnemonic Devices' are used for:", questionHindi: "'स्मृति युक्तियां' किसके लिए उपयोग की जाती हैं:", options: ["Memory enhancement / स्मृति वृद्धि", "Information retention / जानकारी प्रतिधारण", "Recall improvement / पुनःस्मरण सुधार", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Pedagogy" },
    
    { id: 114, question: "The 'Pygmalion Effect' in education refers to:", questionHindi: "शिक्षा में 'पिग्मेलियन प्रभाव' किससे संबंधित है:", options: ["Teacher expectations influencing student performance / शिक्षक अपेक्षाएं छात्र प्रदर्शन को प्रभावित करती हैं", "Student motivation / छात्र प्रेरणा", "Classroom environment / कक्षा वातावरण", "None / कोई नहीं"], correct: 0, subject: "Pedagogy" },
    
    { id: 115, question: "The concept of 'Summative Evaluation' is conducted:", questionHindi: "'योगात्मक मूल्यांकन' की अवधारणा कब की जाती है:", options: ["During the learning process / सीखने की प्रक्रिया के दौरान", "At the end of instruction / निर्देश के अंत में", "Before instruction / निर्देश से पहले", "Continuously / लगातार"], correct: 1, subject: "Pedagogy" },
    
    { id: 116, question: "The 'Halo Effect' in assessment refers to:", questionHindi: "मूल्यांकन में 'हेलो प्रभाव' किससे संबंधित है:", options: ["One trait influencing overall judgment / एक विशेषता समग्र निर्णय को प्रभावित करती है", "Positive bias / सकारात्मक पूर्वाग्रह", "Both A and B / A और B दोनों", "None / कोई नहीं"], correct: 2, subject: "Pedagogy" },
    
    { id: 117, question: "The concept of 'Peer Review' in learning involves:", questionHindi: "सीखने में 'सहकर्मी समीक्षा' की अवधारणा में शामिल है:", options: ["Students evaluating each other's work / छात्र एक-दूसरे के काम का मूल्यांकन करते हैं", "Constructive feedback / रचनात्मक प्रतिक्रिया", "Collaborative learning / सहयोगी शिक्षा", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Pedagogy" },
    
    { id: 118, question: "The 'Fishbowl Discussion' strategy involves:", questionHindi: "'फिशबाउल चर्चा' रणनीति में शामिल है:", options: ["Inner circle discusses, outer observes / आंतरिक वृत्त चर्चा करता है, बाहरी देखता है", "Role rotation / भूमिका घूर्णन", "Active listening / सक्रिय श्रवण", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Pedagogy" },
    
    { id: 119, question: "The concept of 'Curriculum Mapping' involves:", questionHindi: "'पाठ्यक्रम मानचित्रण' की अवधारणा में शामिल है:", options: ["Documenting curriculum content / पाठ्यक्रम सामग्री का दस्तावेजीकरण", "Aligning with standards / मानकों के साथ संरेखण", "Identifying gaps / अंतराल की पहचान", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Pedagogy" },
    
    { id: 120, question: "The 'Exit Ticket' strategy is used for:", questionHindi: "'एक्जिट टिकट' रणनीति किसके लिए उपयोग की जाती है:", options: ["Quick assessment / त्वरित मूल्यांकन", "Checking understanding / समझ की जांच", "Lesson closure / पाठ समापन", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Pedagogy" },
    
    { id: 121, question: "The concept of 'Learning Contract' involves:", questionHindi: "'सीखने का अनुबंध' की अवधारणा में शामिल है:", options: ["Agreement between teacher and student / शिक्षक और छात्र के बीच समझौता", "Self-directed learning / स्व-निर्देशित शिक्षा", "Clear objectives / स्पष्ट उद्देश्य", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Pedagogy" },
    
    { id: 122, question: "The 'Concept Mapping' technique helps in:", questionHindi: "'अवधारणा मानचित्रण' तकनीक किसमें मदद करती है:", options: ["Visual representation of ideas / विचारों का दृश्य प्रतिनिधित्व", "Understanding relationships / संबंधों को समझना", "Knowledge organization / ज्ञान संगठन", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Pedagogy" },
    
    { id: 123, question: "The 'Accountable Talk' in classroom discourse emphasizes:", questionHindi: "कक्षा प्रवचन में 'जवाबदेह वार्ता' किस पर जोर देती है:", options: ["Evidence-based reasoning / साक्ष्य-आधारित तर्क", "Respectful listening / सम्मानजनक श्रवण", "Building on others' ideas / दूसरों के विचारों पर निर्माण", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Pedagogy" },
    
    { id: 124, question: "The concept of 'Formative Observation' in teaching involves:", questionHindi: "शिक्षण में 'रचनात्मक अवलोकन' की अवधारणा में शामिल है:", options: ["Ongoing observation / चल रहा अवलोकन", "Feedback for improvement / सुधार के लिए प्रतिक्रिया", "Adjusting instruction / निर्देश समायोजित करना", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Pedagogy" },
    
    { id: 125, question: "The 'Gallery Walk' strategy involves:", questionHindi: "'गैलरी वॉक' रणनीति में शामिल है:", options: ["Displaying student work / छात्र कार्य प्रदर्शित करना", "Peer observation / सहकर्मी अवलोकन", "Interactive learning / इंटरैक्टिव शिक्षा", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Pedagogy" },
    
    { id: 126, question: "The concept of 'Learning Analytics' involves:", questionHindi: "'सीखने के विश्लेषण' की अवधारणा में शामिल है:", options: ["Data collection / डेटा संग्रह", "Analysis of learning patterns / सीखने के पैटर्न का विश्लेषण", "Improving instruction / निर्देश में सुधार", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Pedagogy" },
    
    { id: 127, question: "The 'Anchor Chart' in teaching is used for:", questionHindi: "शिक्षण में 'एंकर चार्ट' किसके लिए उपयोग किया जाता है:", options: ["Visual reference / दृश्य संदर्भ", "Key concepts display / प्रमुख अवधारणा प्रदर्शन", "Learning support / सीखने का समर्थन", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Pedagogy" },
    
    { id: 128, question: "The concept of 'Response to Intervention' (RTI) involves:", questionHindi: "'हस्तक्षेप की प्रतिक्रिया' (RTI) की अवधारणा में शामिल है:", options: ["Tiered support / स्तरीय समर्थन", "Early identification / प्रारंभिक पहचान", "Evidence-based interventions / साक्ष्य-आधारित हस्तक्षेप", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Pedagogy" },
    
    { id: 129, question: "The 'Closure Activity' at end of lesson serves to:", questionHindi: "पाठ के अंत में 'समापन गतिविधि' किसकी सेवा करती है:", options: ["Summarize learning / सीखने को सारांशित करना", "Check understanding / समझ की जांच", "Connect to future learning / भविष्य के सीखने से जोड़ना", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Pedagogy" },
    
    { id: 130, question: "The concept of 'Instructional Coaching' involves:", questionHindi: "'शिक्षण कोचिंग' की अवधारणा में शामिल है:", options: ["Supporting teachers / शिक्षकों का समर्थन", "Professional development / पेशेवर विकास", "Improving teaching practices / शिक्षण प्रथाओं में सुधार", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Pedagogy" },

    // SECTION I: GENERAL KNOWLEDGE (Q131-135)
    { id: 131, question: "The Battle of Buxar (1764) was fought between:", questionHindi: "बक्सर का युद्ध (1764) किनके बीच लड़ा गया:", options: ["British and Mir Qasim / ब्रिटिश और मीर कासिम", "British and Siraj-ud-Daula / ब्रिटिश और सिराज-उद-दौला", "British and combined forces of Mir Qasim, Shah Alam II and Nawab of Awadh", "British and Marathas"], correct: 2, subject: "GK" },
    
    { id: 132, question: "Sher Shah Suri was born in:", questionHindi: "शेर शाह सूरी का जन्म कहाँ हुआ था:", options: ["Sasaram, Bihar / सासाराम, बिहार", "Delhi / दिल्ली", "Agra / आगरा", "Patna / पटना"], correct: 0, subject: "GK" },
    
    { id: 133, question: "The Gandhi Setu in Patna connects:", questionHindi: "पटना में गांधी सेतु जोड़ता है:", options: ["Patna and Hajipur / पटना और हाजीपुर", "Patna and Ara / पटना और आरा", "Patna and Bhagalpur / पटना और भागलपुर", "Patna and Muzaffarpur / पटना और मुजफ्फरपुर"], correct: 0, subject: "GK" },
    
    { id: 134, question: "The Champaran Satyagraha was launched in:", questionHindi: "चंपारण सत्याग्रह कब शुरू किया गया:", options: ["1915", "1916", "1917", "1918"], correct: 2, subject: "GK" },
    
    { id: 135, question: "The Vikramashila University was founded by:", questionHindi: "विक्रमशिला विश्वविद्यालय की स्थापना किसने की:", options: ["Dharmapala / धर्मपाल", "Devapala / देवपाल", "Mahipala I / महीपाल प्रथम", "Gopala / गोपाल"], correct: 0, subject: "GK" },

    // SECTION J: ENVIRONMENT (Q136-140)
    { id: 136, question: "The concept of 'Carbon Neutrality' means:", questionHindi: "'कार्बन तटस्थता' की अवधारणा का अर्थ है:", options: ["Zero carbon emissions / शून्य कार्बन उत्सर्जन", "Balancing emissions with removal / उत्सर्जन को हटाने के साथ संतुलित करना", "Both A and B / A और B दोनों", "None / कोई नहीं"], correct: 1, subject: "Environment" },
    
    { id: 137, question: "The Convention on Biological Diversity was signed at:", questionHindi: "जैविक विविधता पर सम्मेलन पर कहाँ हस्ताक्षर किए गए:", options: ["Rio Summit 1992 / रियो शिखर सम्मेलन 1992", "Stockholm 1972 / स्टॉकहोम 1972", "Kyoto 1997 / क्योटो 1997", "Paris 2015 / पेरिस 2015"], correct: 0, subject: "Environment" },
    
    { id: 138, question: "The concept of 'Circular Economy' emphasizes:", questionHindi: "'चक्रीय अर्थव्यवस्था' की अवधारणा किस पर जोर देती है:", options: ["Resource efficiency / संसाधन दक्षता", "Waste reduction / अपशिष्ट कमी", "Reuse and recycling / पुन: उपयोग और पुनर्चक्रण", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Environment" },
    
    { id: 139, question: "World Water Day is observed on:", questionHindi: "विश्व जल दिवस कब मनाया जाता है:", options: ["22nd March / 22 मार्च", "5th June / 5 जून", "22nd April / 22 अप्रैल", "16th September / 16 सितंबर"], correct: 0, subject: "Environment" },
    
    { id: 140, question: "The term 'Anthropocene' refers to:", questionHindi: "'एन्थ्रोपोसीन' शब्द किससे संबंधित है:", options: ["Age of humans / मनुष्यों का युग", "Human impact on Earth / पृथ्वी पर मानव प्रभाव", "Current geological epoch / वर्तमान भूवैज्ञानिक युग", "All of the above / उपरोक्त सभी"], correct: 3, subject: "Environment" },

    // SECTION K: MATH (Q141-145)
    { id: 141, question: "If 5x - 7 = 18, then x = ?", questionHindi: "यदि 5x - 7 = 18, तो x = ?", options: ["3", "4", "5", "6"], correct: 2, subject: "Math" },
    
    { id: 142, question: "The volume of a cube with side 5 cm is:", questionHindi: "5 सेमी भुजा वाले घन का आयतन है:", options: ["25 cubic cm / 25 घन सेमी", "75 cubic cm / 75 घन सेमी", "125 cubic cm / 125 घन सेमी", "150 cubic cm / 150 घन सेमी"], correct: 2, subject: "Math" },
    
    { id: 143, question: "If the marked price is ₹800 and discount is 25%, selling price is:", questionHindi: "यदि अंकित मूल्य ₹800 है और छूट 25% है, तो विक्रय मूल्य है:", options: ["₹500", "₹600", "₹650", "₹700"], correct: 1, subject: "Math" },
    
    { id: 144, question: "The square root of 144 is:", questionHindi: "144 का वर्गमूल है:", options: ["10", "11", "12", "13"], correct: 2, subject: "Math" },
    
    { id: 145, question: "If A can complete a work in 10 days and B in 15 days, together they complete in:", questionHindi: "यदि A एक काम को 10 दिनों में और B 15 दिनों में पूरा कर सकता है, तो एक साथ वे पूरा करेंगे:", options: ["5 days / 5 दिन", "6 days / 6 दिन", "7 days / 7 दिन", "8 days / 8 दिन"], correct: 1, subject: "Math" },

    // SECTION L: REASONING (Q146-150)
    { id: 146, question: "Complete the series: 3, 6, 12, 24, 48, __", questionHindi: "श्रृंखला पूर्ण करें: 3, 6, 12, 24, 48, __", options: ["72", "84", "96", "108"], correct: 2, subject: "Reasoning" },
    
    { id: 147, question: "If in a code, FRIEND is written as GSJFOE, then FAMILY will be written as:", questionHindi: "यदि एक कोड में FRIEND को GSJFOE लिखा जाता है, तो FAMILY को लिखा जाएगा:", options: ["GBNJMZ", "GANJMZ", "GBMJNZ", "GANMJZ"], correct: 0, subject: "Reasoning" },
    
    { id: 148, question: "Find the odd one: 8, 27, 64, 125, 216, 343", questionHindi: "विषम को ज्ञात कीजिए: 8, 27, 64, 125, 216, 343", options: ["8", "27", "All are cubes / सभी घन हैं", "343"], correct: 2, subject: "Reasoning" },
    
    { id: 149, question: "Mirror image of 'BIHAR' will be:", questionHindi: "'BIHAR' की दर्पण छवि होगी:", options: ["RAHIB", "ЯAHIB", "ЯAҺIƧ", "ЯAҺIB"], correct: 1, subject: "Reasoning" },
    
    { id: 150, question: "If today is Monday, what day will it be 100 days from now?", questionHindi: "यदि आज सोमवार है, तो अब से 100 दिन बाद कौन सा दिन होगा?", options: ["Monday / सोमवार", "Tuesday / मंगलवार", "Wednesday / बुधवार", "Thursday / गुरुवार"], correct: 1, subject: "Reasoning" }

];

// Export for use in exam system
if (typeof module !== 'undefined' && module.exports) {
    module.exports = paper2Set7CompleteQuestions;
}

