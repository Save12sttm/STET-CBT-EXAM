// BIHAR STET 2025 - PAPER-II: POLITICAL SCIENCE
// Subject Code: 219 | Class 11-12 Level
// Total: 150 Questions (Bilingual - English + Hindi)
// Based on Official STET PYQ Pattern (2019-2024)

const paper2Questions = [
    
    // ====== INDIAN CONSTITUTION (Q1-20) ======
    
    {id: 1, question: "The Constitution of India was drafted by which committee?", questionHindi: "भारत के संविधान का मसौदा किस समिति द्वारा तैयार किया गया था?", options: ["Constituent Assembly / संविधान सभा", "Drafting Committee / प्रारूप समिति", "Planning Commission / योजना आयोग", "Parliament / संसद"], correct: 1, subject: "Constitution"},
    
    {id: 2, question: "Who was the Chairman of the Drafting Committee?", questionHindi: "प्रारूप समिति के अध्यक्ष कौन थे?", options: ["Jawaharlal Nehru / जवाहरलाल नेहरू", "Dr. B.R. Ambedkar / डॉ. बी.आर. अंबेडकर", "Sardar Patel / सरदार पटेल", "Rajendra Prasad / राजेंद्र प्रसाद"], correct: 1, subject: "Constitution"},
    
    {id: 3, question: "How many parts are there in the Indian Constitution?", questionHindi: "भारतीय संविधान में कितने भाग हैं?", options: ["20", "22", "25", "26"], correct: 1, subject: "Constitution"},
    
    {id: 4, question: "How many schedules are there in the Indian Constitution currently?", questionHindi: "भारतीय संविधान में वर्तमान में कितनी अनुसूचियाँ हैं?", options: ["10", "11", "12", "13"], correct: 2, subject: "Constitution"},
    
    {id: 5, question: "Article 356 of the Constitution deals with:", questionHindi: "संविधान का अनुच्छेद 356 किससे संबंधित है:", options: ["Emergency provisions / आपातकालीन प्रावधान", "President's Rule / राष्ट्रपति शासन", "Financial Emergency / वित्तीय आपातकाल", "National Emergency / राष्ट्रीय आपातकाल"], correct: 1, subject: "Constitution"},
    
    {id: 6, question: "The Preamble of Indian Constitution declares India as:", questionHindi: "भारतीय संविधान की प्रस्तावना भारत को घोषित करती है:", options: ["Socialist, Secular, Democratic Republic / समाजवादी, धर्मनिरपेक्ष, लोकतांत्रिक गणराज्य", "Federal State / संघीय राज्य", "Parliamentary Democracy / संसदीय लोकतंत्र", "Welfare State / कल्याणकारी राज्य"], correct: 0, subject: "Constitution"},
    
    {id: 7, question: "Which amendment added 'Socialist' and 'Secular' to the Preamble?", questionHindi: "किस संशोधन ने प्रस्तावना में 'समाजवादी' और 'धर्मनिरपेक्ष' जोड़ा?", options: ["42nd Amendment / 42वां संशोधन", "44th Amendment / 44वां संशोधन", "52nd Amendment / 52वां संशोधन", "61st Amendment / 61वां संशोधन"], correct: 0, subject: "Constitution"},
    
    {id: 8, question: "Article 21 guarantees:", questionHindi: "अनुच्छेद 21 क्या गारंटी देता है:", options: ["Right to Education / शिक्षा का अधिकार", "Right to Life and Personal Liberty / जीवन और व्यक्तिगत स्वतंत्रता का अधिकार", "Right to Property / संपत्ति का अधिकार", "Right to Freedom of Religion / धर्म की स्वतंत्रता का अधिकार"], correct: 1, subject: "Constitution"},
    
    {id: 9, question: "Fundamental Duties were added by which amendment?", questionHindi: "मौलिक कर्तव्य किस संशोधन द्वारा जोड़े गए?", options: ["42nd Amendment / 42वां संशोधन", "44th Amendment / 44वां संशोधन", "73rd Amendment / 73वां संशोधन", "86th Amendment / 86वां संशोधन"], correct: 0, subject: "Constitution"},
    
    {id: 10, question: "How many Fundamental Duties are mentioned in the Constitution?", questionHindi: "संविधान में कितने मौलिक कर्तव्यों का उल्लेख है?", options: ["9", "10", "11", "12"], correct: 2, subject: "Constitution"},
    
    {id: 11, question: "Which article deals with the abolition of titles?", questionHindi: "कौन सा अनुच्छेद उपाधियों के उन्मूलन से संबंधित है?", options: ["Article 15 / अनुच्छेद 15", "Article 16 / अनुच्छेद 16", "Article 17 / अनुच्छेद 17", "Article 18 / अनुच्छेद 18"], correct: 3, subject: "Constitution"},
    
    {id: 12, question: "Directive Principles of State Policy are contained in which part?", questionHindi: "राज्य के नीति निदेशक तत्व किस भाग में हैं?", options: ["Part II / भाग II", "Part III / भाग III", "Part IV / भाग IV", "Part V / भाग V"], correct: 2, subject: "Constitution"},
    
    {id: 13, question: "Article 370 was related to which state before its abrogation?", questionHindi: "अनुच्छेद 370 निरस्त होने से पहले किस राज्य से संबंधित था?", options: ["Punjab / पंजाब", "Jammu and Kashmir / जम्मू और कश्मीर", "Assam / असम", "Nagaland / नगालैंड"], correct: 1, subject: "Constitution"},
    
    {id: 14, question: "The procedure for amendment of the Constitution is given in:", questionHindi: "संविधान संशोधन की प्रक्रिया किस अनुच्छेद में दी गई है:", options: ["Article 356 / अनुच्छेद 356", "Article 360 / अनुच्छेद 360", "Article 368 / अनुच्छेद 368", "Article 352 / अनुच्छेद 352"], correct: 2, subject: "Constitution"},
    
    {id: 15, question: "Which schedule deals with the allocation of seats in Rajya Sabha?", questionHindi: "कौन सी अनुसूची राज्यसभा में सीटों के आवंटन से संबंधित है?", options: ["First Schedule / पहली अनुसूची", "Second Schedule / दूसरी अनुसूची", "Third Schedule / तीसरी अनुसूची", "Fourth Schedule / चौथी अनुसूची"], correct: 3, subject: "Constitution"},
    
    {id: 16, question: "Anti-defection law is mentioned in which schedule?", questionHindi: "दलबदल विरोधी कानून किस अनुसूची में उल्लिखित है?", options: ["Ninth Schedule / नौवीं अनुसूची", "Tenth Schedule / दसवीं अनुसूची", "Eleventh Schedule / ग्यारहवीं अनुसूची", "Twelfth Schedule / बारहवीं अनुसूची"], correct: 1, subject: "Constitution"},
    
    {id: 17, question: "The concept of Judicial Review is borrowed from:", questionHindi: "न्यायिक समीक्षा की अवधारणा किससे ली गई है:", options: ["UK / यूके", "USA / अमेरिका", "Canada / कनाडा", "Ireland / आयरलैंड"], correct: 1, subject: "Constitution"},
    
    {id: 18, question: "Which amendment lowered the voting age from 21 to 18?", questionHindi: "किस संशोधन ने मतदान की आयु 21 से घटाकर 18 कर दी?", options: ["42nd / 42वां", "44th / 44वां", "61st / 61वां", "73rd / 73वां"], correct: 2, subject: "Constitution"},
    
    {id: 19, question: "Concurrent List contains how many subjects?", questionHindi: "समवर्ती सूची में कितने विषय हैं?", options: ["47", "52", "66", "97"], correct: 0, subject: "Constitution"},
    
    {id: 20, question: "The words 'Socialist', 'Secular', and 'Integrity' were added by:", questionHindi: "'समाजवादी', 'धर्मनिरपेक्ष', और 'अखंडता' शब्द किसके द्वारा जोड़े गए:", options: ["42nd Amendment / 42वां संशोधन", "44th Amendment / 44वां संशोधन", "52nd Amendment / 52वां संशोधन", "61st Amendment / 61वां संशोधन"], correct: 0, subject: "Constitution"},

    // ====== POLITICAL THEORY (Q21-35) ======
    
    {id: 21, question: "The term 'Political Science' was first used by:", questionHindi: "'राजनीति विज्ञान' शब्द का प्रयोग सबसे पहले किसने किया:", options: ["Aristotle / अरस्तू", "Plato / प्लेटो", "Machiavelli / मैकियावेली", "Hobbes / हॉब्स"], correct: 0, subject: "Political Theory"},
    
    {id: 22, question: "Who said 'Man is by nature a political animal'?", questionHindi: "'मनुष्य स्वभाव से एक राजनीतिक प्राणी है' किसने कहा?", options: ["Plato / प्लेटो", "Aristotle / अरस्तू", "Rousseau / रूसो", "Locke / लॉक"], correct: 1, subject: "Political Theory"},
    
    {id: 23, question: "The concept of 'Social Contract' is associated with:", questionHindi: "'सामाजिक अनुबंध' की अवधारणा किससे जुड़ी है:", options: ["Hobbes, Locke, Rousseau / हॉब्स, लॉक, रूसो", "Marx, Lenin / मार्क्स, लेनिन", "Plato, Aristotle / प्लेटो, अरस्तू", "Mill, Bentham / मिल, बेंथम"], correct: 0, subject: "Political Theory"},
    
    {id: 24, question: "Who wrote 'The Republic'?", questionHindi: "'द रिपब्लिक' किसने लिखी?", options: ["Aristotle / अरस्तू", "Plato / प्लेटो", "Socrates / सुकरात", "Machiavelli / मैकियावेली"], correct: 1, subject: "Political Theory"},
    
    {id: 25, question: "The concept of 'General Will' was given by:", questionHindi: "'सामान्य इच्छा' की अवधारणा किसने दी:", options: ["Rousseau / रूसो", "Locke / लॉक", "Hobbes / हॉब्स", "Montesquieu / मॉन्टेस्क्यू"], correct: 0, subject: "Political Theory"},
    
    {id: 26, question: "Who is known as the father of Modern Political Science?", questionHindi: "आधुनिक राजनीति विज्ञान के जनक किसे कहा जाता है?", options: ["Plato / प्लेटो", "Aristotle / अरस्तू", "Machiavelli / मैकियावेली", "Hobbes / हॉब्स"], correct: 2, subject: "Political Theory"},
    
    {id: 27, question: "'The Prince' was written by:", questionHindi: "'द प्रिंस' किसने लिखी:", options: ["Plato / प्लेटो", "Aristotle / अरस्तू", "Machiavelli / मैकियावेली", "Hobbes / हॉब्स"], correct: 2, subject: "Political Theory"},
    
    {id: 28, question: "Hobbes wrote which famous book?", questionHindi: "हॉब्स ने कौन सी प्रसिद्ध पुस्तक लिखी?", options: ["Leviathan / लेवियाथन", "Two Treatises of Government / टू ट्रीटिज ऑफ गवर्नमेंट", "The Social Contract / द सोशल कॉन्ट्रैक्ट", "The Prince / द प्रिंस"], correct: 0, subject: "Political Theory"},
    
    {id: 29, question: "The theory of 'Separation of Powers' was given by:", questionHindi: "'शक्तियों के पृथक्करण' का सिद्धांत किसने दिया:", options: ["Locke / लॉक", "Rousseau / रूसो", "Montesquieu / मॉन्टेस्क्यू", "Hobbes / हॉब्स"], correct: 2, subject: "Political Theory"},
    
    {id: 30, question: "Who wrote 'On Liberty'?", questionHindi: "'ऑन लिबर्टी' किसने लिखी?", options: ["John Locke / जॉन लॉक", "John Stuart Mill / जॉन स्टुअर्ट मिल", "Karl Marx / कार्ल मार्क्स", "Thomas Hobbes / थॉमस हॉब्स"], correct: 1, subject: "Political Theory"},
    
    {id: 31, question: "The concept of 'Liberty, Equality, Fraternity' is associated with:", questionHindi: "'स्वतंत्रता, समानता, बंधुत्व' की अवधारणा किससे जुड़ी है:", options: ["American Revolution / अमेरिकी क्रांति", "French Revolution / फ्रांसीसी क्रांति", "Russian Revolution / रूसी क्रांति", "Indian Independence / भारतीय स्वतंत्रता"], correct: 1, subject: "Political Theory"},
    
    {id: 32, question: "Who said 'Property is theft'?", questionHindi: "'संपत्ति चोरी है' किसने कहा?", options: ["Karl Marx / कार्ल मार्क्स", "Proudhon / प्रूधों", "Lenin / लेनिन", "Rousseau / रूसो"], correct: 1, subject: "Political Theory"},
    
    {id: 33, question: "The concept of 'Class Struggle' is central to:", questionHindi: "'वर्ग संघर्ष' की अवधारणा किसके लिए केंद्रीय है:", options: ["Liberalism / उदारवाद", "Marxism / मार्क्सवाद", "Fascism / फासीवाद", "Conservatism / रूढ़िवाद"], correct: 1, subject: "Political Theory"},
    
    {id: 34, question: "Who wrote 'The Communist Manifesto'?", questionHindi: "'द कम्युनिस्ट मेनिफेस्टो' किसने लिखा?", options: ["Lenin / लेनिन", "Stalin / स्टालिन", "Marx and Engels / मार्क्स और एंगेल्स", "Mao / माओ"], correct: 2, subject: "Political Theory"},
    
    {id: 35, question: "The concept of 'Justice' as giving everyone their due is from:", questionHindi: "'न्याय' की अवधारणा जो सभी को उनका अधिकार देना है, किससे है:", options: ["Plato / प्लेटो", "Aristotle / अरस्तू", "Rawls / रॉल्स", "All of these / उपरोक्त सभी"], correct: 3, subject: "Political Theory"},

    // ====== INDIAN POLITICAL SYSTEM (Q36-55) ======
    
    {id: 36, question: "The President of India holds office for a term of:", questionHindi: "भारत के राष्ट्रपति का कार्यकाल होता है:", options: ["4 years / 4 वर्ष", "5 years / 5 वर्ष", "6 years / 6 वर्ष", "Life term / आजीवन"], correct: 1, subject: "Indian Politics"},
    
    {id: 37, question: "The real executive power in India is vested in:", questionHindi: "भारत में वास्तविक कार्यकारी शक्ति किसमें निहित है:", options: ["President / राष्ट्रपति", "Prime Minister / प्रधानमंत्री", "Council of Ministers / मंत्रिपरिषद", "Parliament / संसद"], correct: 2, subject: "Indian Politics"},
    
    {id: 38, question: "Who appoints the Prime Minister of India?", questionHindi: "भारत के प्रधानमंत्री की नियुक्ति कौन करता है?", options: ["President / राष्ट्रपति", "Lok Sabha / लोकसभा", "People / जनता", "Chief Justice / मुख्य न्यायाधीश"], correct: 0, subject: "Indian Politics"},
    
    {id: 39, question: "The Rajya Sabha can be dissolved:", questionHindi: "राज्यसभा को भंग किया जा सकता है:", options: ["By President / राष्ट्रपति द्वारा", "By PM / प्रधानमंत्री द्वारा", "By Parliament / संसद द्वारा", "Cannot be dissolved / भंग नहीं किया जा सकता"], correct: 3, subject: "Indian Politics"},
    
    {id: 40, question: "Members of Rajya Sabha are elected for a term of:", questionHindi: "राज्यसभा के सदस्य कितने समय के लिए चुने जाते हैं:", options: ["4 years / 4 वर्ष", "5 years / 5 वर्ष", "6 years / 6 वर्ष", "7 years / 7 वर्ष"], correct: 2, subject: "Indian Politics"},
    
    {id: 41, question: "The Vice President of India is ex-officio Chairman of:", questionHindi: "भारत के उपराष्ट्रपति पदेन अध्यक्ष होते हैं:", options: ["Lok Sabha / लोकसभा", "Rajya Sabha / राज्यसभा", "Planning Commission / योजना आयोग", "NITI Aayog / नीति आयोग"], correct: 1, subject: "Indian Politics"},
    
    {id: 42, question: "The Speaker of Lok Sabha is elected by:", questionHindi: "लोकसभा अध्यक्ष का चुनाव किसके द्वारा होता है:", options: ["President / राष्ट्रपति", "Prime Minister / प्रधानमंत्री", "Members of Lok Sabha / लोकसभा सदस्यों द्वारा", "All MPs / सभी सांसदों द्वारा"], correct: 2, subject: "Indian Politics"},
    
    {id: 43, question: "The Supreme Court of India consists of:", questionHindi: "भारत के सर्वोच्च न्यायालय में शामिल हैं:", options: ["Chief Justice only / केवल मुख्य न्यायाधीश", "Chief Justice + 30 judges / मुख्य न्यायाधीश + 30 न्यायाधीश", "Chief Justice + 33 judges / मुख्य न्यायाधीश + 33 न्यायाधीश", "Chief Justice + 34 judges / मुख्य न्यायाधीश + 34 न्यायाधीश"], correct: 3, subject: "Indian Politics"},
    
    {id: 44, question: "The retirement age of Supreme Court judge is:", questionHindi: "सर्वोच्च न्यायालय के न्यायाधीश की सेवानिवृत्ति आयु है:", options: ["60 years / 60 वर्ष", "62 years / 62 वर्ष", "65 years / 65 वर्ष", "70 years / 70 वर्ष"], correct: 2, subject: "Indian Politics"},
    
    {id: 45, question: "The Governor of a state is appointed by:", questionHindi: "राज्य के राज्यपाल की नियुक्ति कौन करता है:", options: ["President / राष्ट्रपति", "Prime Minister / प्रधानमंत्री", "Chief Minister / मुख्यमंत्री", "State Legislature / राज्य विधानमंडल"], correct: 0, subject: "Indian Politics"},
    
    {id: 46, question: "The Council of Ministers is collectively responsible to:", questionHindi: "मंत्रिपरिषद सामूहिक रूप से किसके प्रति उत्तरदायी है:", options: ["President / राष्ट्रपति", "Prime Minister / प्रधानमंत्री", "Lok Sabha / लोकसभा", "Parliament / संसद"], correct: 2, subject: "Indian Politics"},
    
    {id: 47, question: "The concept of 'Collective Responsibility' is borrowed from:", questionHindi: "'सामूहिक उत्तरदायित्व' की अवधारणा किससे ली गई है:", options: ["USA / अमेरिका", "UK / ब्रिटेन", "France / फ्रांस", "Canada / कनाडा"], correct: 1, subject: "Indian Politics"},
    
    {id: 48, question: "Which state has a bicameral legislature?", questionHindi: "किस राज्य में द्विसदनीय विधानमंडल है?", options: ["Punjab / पंजाब", "Bihar / बिहार", "Kerala / केरल", "Gujarat / गुजरात"], correct: 1, subject: "Indian Politics"},
    
    {id: 49, question: "The Finance Commission is constituted every:", questionHindi: "वित्त आयोग का गठन कितने समय में होता है:", options: ["3 years / 3 वर्ष", "4 years / 4 वर्ष", "5 years / 5 वर्ष", "6 years / 6 वर्ष"], correct: 2, subject: "Indian Politics"},
    
    {id: 50, question: "The Comptroller and Auditor General (CAG) is appointed by:", questionHindi: "नियंत्रक और महालेखा परीक्षक (CAG) की नियुक्ति कौन करता है:", options: ["President / राष्ट्रपति", "Prime Minister / प्रधानमंत्री", "Finance Minister / वित्त मंत्री", "Parliament / संसद"], correct: 0, subject: "Indian Politics"},
    
    {id: 51, question: "The concept of 'Public Interest Litigation' (PIL) was introduced by:", questionHindi: "'जनहित याचिका' (PIL) की अवधारणा किसने शुरू की:", options: ["Justice V.R. Krishna Iyer / न्यायमूर्ति वी.आर. कृष्ण अय्यर", "Justice P.N. Bhagwati / न्यायमूर्ति पी.एन. भगवती", "Justice J.S. Verma / न्यायमूर्ति जे.एस. वर्मा", "Justice A.M. Ahmadi / न्यायमूर्ति ए.एम. अहमदी"], correct: 1, subject: "Indian Politics"},
    
    {id: 52, question: "The President can promulgate ordinances under which article?", questionHindi: "राष्ट्रपति किस अनुच्छेद के तहत अध्यादेश जारी कर सकते हैं?", options: ["Article 123 / अनुच्छेद 123", "Article 213 / अनुच्छेद 213", "Article 356 / अनुच्छेद 356", "Article 360 / अनुच्छेद 360"], correct: 0, subject: "Indian Politics"},
    
    {id: 53, question: "The system of Panchayati Raj was implemented on the recommendation of:", questionHindi: "पंचायती राज व्यवस्था किसकी सिफारिश पर लागू की गई:", options: ["Balwant Rai Mehta Committee / बलवंत राय मेहता समिति", "Ashok Mehta Committee / अशोक मेहता समिति", "G.V.K. Rao Committee / जी.वी.के. राव समिति", "L.M. Singhvi Committee / एल.एम. सिंघवी समिति"], correct: 0, subject: "Indian Politics"},
    
    {id: 54, question: "The President can declare three types of emergency. Which is NOT one of them?", questionHindi: "राष्ट्रपति तीन प्रकार की आपातकाल घोषित कर सकते हैं। कौन सा उनमें से नहीं है?", options: ["National Emergency / राष्ट्रीय आपातकाल", "State Emergency / राज्य आपातकाल", "Financial Emergency / वित्तीय आपातकाल", "Health Emergency / स्वास्थ्य आपातकाल"], correct: 3, subject: "Indian Politics"},
    
    {id: 55, question: "The concept of 'Zero Hour' in Parliament refers to:", questionHindi: "संसद में 'शून्य काल' की अवधारणा किससे संबंधित है:", options: ["Question Hour / प्रश्नकाल", "Interval between Question Hour and agenda / प्रश्नकाल और एजेंडा के बीच का अंतराल", "Lunch break / दोपहर का भोजन विराम", "Adjournment / स्थगन"], correct: 1, subject: "Indian Politics"},

    // ====== COMPARATIVE POLITICS (Q56-65) ======
    
    {id: 56, question: "The United Kingdom has which form of government?", questionHindi: "यूनाइटेड किंगडम में किस प्रकार की सरकार है?", options: ["Presidential / राष्ट्रपति प्रणाली", "Parliamentary / संसदीय", "Federal / संघीय", "Unitary / एकात्मक"], correct: 1, subject: "Comparative Politics"},
    
    {id: 57, question: "The USA follows which system of government?", questionHindi: "अमेरिका किस सरकार प्रणाली का पालन करता है?", options: ["Parliamentary / संसदीय", "Presidential / राष्ट्रपति प्रणाली", "Monarchical / राजतंत्र", "Socialist / समाजवादी"], correct: 1, subject: "Comparative Politics"},
    
    {id: 58, question: "In which country is the concept of 'Judicial Review' most developed?", questionHindi: "किस देश में 'न्यायिक समीक्षा' की अवधारणा सबसे विकसित है?", options: ["UK / ब्रिटेन", "USA / अमेरिका", "France / फ्रांस", "India / भारत"], correct: 1, subject: "Comparative Politics"},
    
    {id: 59, question: "China follows which political system?", questionHindi: "चीन किस राजनीतिक व्यवस्था का पालन करता है?", options: ["Democracy / लोकतंत्र", "Communist one-party system / साम्यवादी एक-दलीय प्रणाली", "Monarchy / राजतंत्र", "Military rule / सैन्य शासन"], correct: 1, subject: "Comparative Politics"},
    
    {id: 60, question: "The British Parliament is known as:", questionHindi: "ब्रिटिश संसद को कहा जाता है:", options: ["Congress / कांग्रेस", "Duma / ड्यूमा", "Westminster / वेस्टमिंस्टर", "Bundestag / बुंडेस्टाग"], correct: 2, subject: "Comparative Politics"},
    
    {id: 61, question: "Which country has the oldest written constitution?", questionHindi: "किस देश का लिखित संविधान सबसे पुराना है?", options: ["UK / ब्रिटेन", "USA / अमेरिका", "France / फ्रांस", "India / भारत"], correct: 1, subject: "Comparative Politics"},
    
    {id: 62, question: "In a federal system, powers are divided between:", questionHindi: "संघीय व्यवस्था में, शक्तियाँ विभाजित होती हैं:", options: ["President and PM / राष्ट्रपति और प्रधानमंत्री", "Central and State governments / केंद्र और राज्य सरकारों", "Legislature and Executive / विधायिका और कार्यपालिका", "Army and Police / सेना और पुलिस"], correct: 1, subject: "Comparative Politics"},
    
    {id: 63, question: "The Swiss political system is known for:", questionHindi: "स्विस राजनीतिक व्यवस्था किसके लिए जानी जाती है:", options: ["Direct Democracy / प्रत्यक्ष लोकतंत्र", "Monarchy / राजतंत्र", "Dictatorship / तानाशाही", "Military rule / सैन्य शासन"], correct: 0, subject: "Comparative Politics"},
    
    {id: 64, question: "The concept of 'Bicameralism' means:", questionHindi: "'द्विसदनवाद' की अवधारणा का अर्थ है:", options: ["One house legislature / एक सदन विधानमंडल", "Two house legislature / दो सदन विधानमंडल", "Three house legislature / तीन सदन विधानमंडल", "No legislature / कोई विधानमंडल नहीं"], correct: 1, subject: "Comparative Politics"},
    
    {id: 65, question: "Japan's parliament is called:", questionHindi: "जापान की संसद कहलाती है:", options: ["Diet / डाइट", "Congress / कांग्रेस", "Knesset / नेसेट", "Cortes / कोर्टेस"], correct: 0, subject: "Comparative Politics"},
    
    // ====== INTERNATIONAL RELATIONS (Q66-75) ======
    
    {id: 66, question: "The United Nations was established in:", questionHindi: "संयुक्त राष्ट्र की स्थापना कब हुई:", options: ["1942", "1945", "1948", "1950"], correct: 1, subject: "International Relations"},
    
    {id: 67, question: "How many permanent members are there in the UN Security Council?", questionHindi: "संयुक्त राष्ट्र सुरक्षा परिषद में कितने स्थायी सदस्य हैं?", options: ["3", "5", "7", "10"], correct: 1, subject: "International Relations"},
    
    {id: 68, question: "Which country is NOT a permanent member of UN Security Council?", questionHindi: "कौन सा देश संयुक्त राष्ट्र सुरक्षा परिषद का स्थायी सदस्य नहीं है?", options: ["USA / अमेरिका", "UK / ब्रिटेन", "Germany / जर्मनी", "China / चीन"], correct: 2, subject: "International Relations"},
    
    {id: 69, question: "The headquarters of UN is located in:", questionHindi: "संयुक्त राष्ट्र का मुख्यालय कहाँ है:", options: ["Geneva / जिनेवा", "New York / न्यूयॉर्क", "Paris / पेरिस", "London / लंदन"], correct: 1, subject: "International Relations"},
    
    {id: 70, question: "NATO stands for:", questionHindi: "NATO का पूर्ण रूप है:", options: ["North Atlantic Treaty Organization / उत्तर अटलांटिक संधि संगठन", "North American Trade Organization / उत्तर अमेरिकी व्यापार संगठन", "National Atlantic Treaty Organization / राष्ट्रीय अटलांटिक संधि संगठन", "None / कोई नहीं"], correct: 0, subject: "International Relations"},
    
    {id: 71, question: "The Non-Aligned Movement (NAM) was founded in:", questionHindi: "गुटनिरपेक्ष आंदोलन (NAM) की स्थापना कब हुई:", options: ["1955", "1961", "1971", "1975"], correct: 1, subject: "International Relations"},
    
    {id: 72, question: "Who was the first Secretary-General of the UN?", questionHindi: "संयुक्त राष्ट्र के पहले महासचिव कौन थे?", options: ["Kofi Annan / कोफी अन्नान", "Dag Hammarskjöld / डैग हैमरशोल्ड", "Trygve Lie / ट्रिग्वे ली", "U Thant / यू थांट"], correct: 2, subject: "International Relations"},
    
    {id: 73, question: "SAARC was established in:", questionHindi: "सार्क की स्थापना कब हुई:", options: ["1980", "1985", "1990", "1995"], correct: 1, subject: "International Relations"},
    
    {id: 74, question: "The Cold War was primarily between:", questionHindi: "शीत युद्ध मुख्य रूप से किनके बीच था:", options: ["USA and USSR / अमेरिका और सोवियत संघ", "UK and France / ब्रिटेन और फ्रांस", "India and China / भारत और चीन", "USA and China / अमेरिका और चीन"], correct: 0, subject: "International Relations"},
    
    {id: 75, question: "The International Court of Justice is located in:", questionHindi: "अंतर्राष्ट्रीय न्यायालय कहाँ स्थित है:", options: ["New York / न्यूयॉर्क", "Geneva / जिनेवा", "The Hague / द हेग", "Paris / पेरिस"], correct: 2, subject: "International Relations"},
    
    // ====== PUBLIC ADMINISTRATION (Q76-85) ======
    
    {id: 76, question: "Public Administration is concerned with:", questionHindi: "लोक प्रशासन किससे संबंधित है:", options: ["Private business / निजी व्यवसाय", "Government activities / सरकारी गतिविधियाँ", "NGO work / एनजीओ कार्य", "All of these / उपरोक्त सभी"], correct: 1, subject: "Public Administration"},
    
    {id: 77, question: "The father of Public Administration is:", questionHindi: "लोक प्रशासन के जनक हैं:", options: ["Woodrow Wilson / वुडरो विल्सन", "Max Weber / मैक्स वेबर", "Luther Gulick / लूथर गुलिक", "F.W. Taylor / एफ.डब्ल्यू. टेलर"], correct: 0, subject: "Public Administration"},
    
    {id: 78, question: "The concept of 'Bureaucracy' was developed by:", questionHindi: "'नौकरशाही' की अवधारणा किसने विकसित की:", options: ["Woodrow Wilson / वुडरो विल्सन", "Max Weber / मैक्स वेबर", "Henry Fayol / हेनरी फेयोल", "Luther Gulick / लूथर गुलिक"], correct: 1, subject: "Public Administration"},
    
    {id: 79, question: "POSDCORB stands for:", questionHindi: "POSDCORB का अर्थ है:", options: ["Planning, Organizing, Staffing, Directing, Coordinating, Reporting, Budgeting / योजना, संगठन, कर्मचारी, निर्देशन, समन्वय, रिपोर्टिंग, बजट", "Public Organization System / सार्वजनिक संगठन प्रणाली", "Public Office Standard / सार्वजनिक कार्यालय मानक", "None / कोई नहीं"], correct: 0, subject: "Public Administration"},
    
    {id: 80, question: "The concept of 'Hierarchy' is central to:", questionHindi: "'पदानुक्रम' की अवधारणा किसके लिए केंद्रीय है:", options: ["Bureaucracy / नौकरशाही", "Democracy / लोकतंत्र", "Communism / साम्यवाद", "Capitalism / पूंजीवाद"], correct: 0, subject: "Public Administration"},
    
    {id: 81, question: "Who gave the concept of 'Scientific Management'?", questionHindi: "'वैज्ञानिक प्रबंधन' की अवधारणा किसने दी?", options: ["F.W. Taylor / एफ.डब्ल्यू. टेलर", "Max Weber / मैक्स वेबर", "Henri Fayol / हेनरी फेयोल", "Luther Gulick / लूथर गुलिक"], correct: 0, subject: "Public Administration"},
    
    {id: 82, question: "The concept of 'New Public Administration' emerged in:", questionHindi: "'नव लोक प्रशासन' की अवधारणा कब उभरी:", options: ["1950s", "1960s", "1970s", "1980s"], correct: 2, subject: "Public Administration"},
    
    {id: 83, question: "The RTI Act in India was passed in:", questionHindi: "भारत में RTI अधिनियम कब पारित हुआ:", options: ["2002", "2005", "2007", "2010"], correct: 1, subject: "Public Administration"},
    
    {id: 84, question: "E-Governance refers to:", questionHindi: "ई-गवर्नेंस का तात्पर्य है:", options: ["Electronic government services / इलेक्ट्रॉनिक सरकारी सेवाएं", "Environmental governance / पर्यावरण शासन", "Energy governance / ऊर्जा शासन", "None / कोई नहीं"], correct: 0, subject: "Public Administration"},
    
    {id: 85, question: "The concept of 'Good Governance' includes:", questionHindi: "'सुशासन' की अवधारणा में शामिल है:", options: ["Transparency / पारदर्शिता", "Accountability / जवाबदेही", "Participation / भागीदारी", "All of these / उपरोक्त सभी"], correct: 3, subject: "Public Administration"},

    // ====== POLITICAL THINKERS (Q86-100) ======
    
    {id: 86, question: "Who is known as the 'Father of Political Science'?", questionHindi: "'राजनीति विज्ञान के जनक' कौन हैं?", options: ["Plato / प्लेटो", "Aristotle / अरस्तू", "Socrates / सुकरात", "Machiavelli / मैकियावेली"], correct: 1, subject: "Political Thinkers"},
    
    {id: 87, question: "Plato's ideal state is described in which book?", questionHindi: "प्लेटो के आदर्श राज्य का वर्णन किस पुस्तक में है?", options: ["The Republic / द रिपब्लिक", "The Laws / द लॉज", "Politics / पॉलिटिक्स", "The Prince / द प्रिंस"], correct: 0, subject: "Political Thinkers"},
    
    {id: 88, question: "According to Plato, who should rule the ideal state?", questionHindi: "प्लेटो के अनुसार, आदर्श राज्य पर किसे शासन करना चाहिए?", options: ["Kings / राजा", "Philosopher-Kings / दार्शनिक-राजा", "Warriors / योद्धा", "People / जनता"], correct: 1, subject: "Political Thinkers"},
    
    {id: 89, question: "Aristotle believed in which form of government as the best?", questionHindi: "अरस्तू किस सरकार के रूप को सर्वश्रेष्ठ मानते थे?", options: ["Monarchy / राजतंत्र", "Aristocracy / कुलीनतंत्र", "Polity (Mixed govt) / राज्यतंत्र (मिश्रित सरकार)", "Democracy / लोकतंत्र"], correct: 2, subject: "Political Thinkers"},
    
    {id: 90, question: "Machiavelli's 'The Prince' was dedicated to:", questionHindi: "मैकियावेली की 'द प्रिंस' किसे समर्पित थी:", options: ["Lorenzo de Medici / लोरेंजो दे मेडिसी", "Pope / पोप", "King of France / फ्रांस के राजा", "Holy Roman Emperor / पवित्र रोमन सम्राट"], correct: 0, subject: "Political Thinkers"},
    
    {id: 91, question: "Who said 'The end justifies the means'?", questionHindi: "'अंत साधन को उचित ठहराता है' किसने कहा?", options: ["Plato / प्लेटो", "Aristotle / अरस्तू", "Machiavelli / मैकियावेली", "Hobbes / हॉब्स"], correct: 2, subject: "Political Thinkers"},
    
    {id: 92, question: "According to Hobbes, life in the state of nature was:", questionHindi: "हॉब्स के अनुसार, प्राकृतिक अवस्था में जीवन था:", options: ["Peaceful / शांतिपूर्ण", "Solitary, poor, nasty, brutish and short / एकाकी, गरीब, घृणित, क्रूर और छोटा", "Prosperous / समृद्ध", "Happy / खुश"], correct: 1, subject: "Political Thinkers"},
    
    {id: 93, question: "Locke believed in which rights as natural rights?", questionHindi: "लॉक किन अधिकारों को प्राकृतिक अधिकार मानते थे?", options: ["Life, Liberty, Property / जीवन, स्वतंत्रता, संपत्ति", "Life, Liberty, Pursuit of Happiness / जीवन, स्वतंत्रता, खुशी की खोज", "Freedom, Equality, Fraternity / स्वतंत्रता, समानता, बंधुत्व", "None / कोई नहीं"], correct: 0, subject: "Political Thinkers"},
    
    {id: 94, question: "Rousseau's famous work 'The Social Contract' begins with:", questionHindi: "रूसो की प्रसिद्ध कृति 'द सोशल कॉन्ट्रैक्ट' शुरू होती है:", options: ["'Man is born free' / 'मनुष्य स्वतंत्र पैदा होता है'", "'Power corrupts' / 'शक्ति भ्रष्ट करती है'", "'Knowledge is power' / 'ज्ञान शक्ति है'", "'State is necessary' / 'राज्य आवश्यक है'"], correct: 0, subject: "Political Thinkers"},
    
    {id: 95, question: "Karl Marx and Friedrich Engels wrote:", questionHindi: "कार्ल मार्क्स और फ्रेडरिक एंगेल्स ने लिखा:", options: ["Das Kapital / दास कैपिटल", "The Communist Manifesto / द कम्युनिस्ट मेनिफेस्टो", "Both A and B / A और B दोनों", "None / कोई नहीं"], correct: 2, subject: "Political Thinkers"},
    
    {id: 96, question: "According to Marx, history is the history of:", questionHindi: "मार्क्स के अनुसार, इतिहास किसका इतिहास है:", options: ["Kings / राजाओं का", "Wars / युद्धों का", "Class struggles / वर्ग संघर्षों का", "Revolutions / क्रांतियों का"], correct: 2, subject: "Political Thinkers"},
    
    {id: 97, question: "Who wrote 'Two Treatises of Government'?", questionHindi: "'टू ट्रीटिज ऑफ गवर्नमेंट' किसने लिखी?", options: ["Thomas Hobbes / थॉमस हॉब्स", "John Locke / जॉन लॉक", "Jean-Jacques Rousseau / जीन-जैक्स रूसो", "Montesquieu / मॉन्टेस्क्यू"], correct: 1, subject: "Political Thinkers"},
    
    {id: 98, question: "The concept of 'Checks and Balances' was given by:", questionHindi: "'नियंत्रण और संतुलन' की अवधारणा किसने दी:", options: ["Locke / लॉक", "Rousseau / रूसो", "Montesquieu / मॉन्टेस्क्यू", "Hobbes / हॉब्स"], correct: 2, subject: "Political Thinkers"},
    
    {id: 99, question: "Who wrote 'The Spirit of the Laws'?", questionHindi: "'द स्पिरिट ऑफ द लॉज' किसने लिखी?", options: ["Montesquieu / मॉन्टेस्क्यू", "Rousseau / रूसो", "Voltaire / वॉल्टेयर", "Diderot / डिडरॉट"], correct: 0, subject: "Political Thinkers"},
    
    {id: 100, question: "John Stuart Mill is associated with which philosophy?", questionHindi: "जॉन स्टुअर्ट मिल किस दर्शन से जुड़े हैं?", options: ["Socialism / समाजवाद", "Utilitarianism / उपयोगितावाद", "Communism / साम्यवाद", "Fascism / फासीवाद"], correct: 1, subject: "Political Thinkers"},

    // ====== TEACHING PEDAGOGY (Q101-130) ======
    
    {id: 101, question: "According to Piaget, children aged 7-11 years are in which stage?", questionHindi: "पियाजे के अनुसार, 7-11 वर्ष के बच्चे किस अवस्था में होते हैं?", options: ["Sensorimotor / संवेदी-गामक", "Preoperational / पूर्व-संक्रियात्मक", "Concrete Operational / मूर्त संक्रियात्मक", "Formal Operational / औपचारिक संक्रियात्मक"], correct: 2, subject: "Pedagogy"},
    {id: 102, question: "Who proposed the theory of Multiple Intelligences?", questionHindi: "बहुबुद्धि सिद्धांत किसने प्रस्तावित किया?", options: ["Howard Gardner / हावर्ड गार्डनर", "Jean Piaget / जीन पियाजे", "B.F. Skinner / बी.एफ. स्किनर", "Lev Vygotsky / लेव वायगोत्स्की"], correct: 0, subject: "Pedagogy"},
    {id: 103, question: "Bloom's Taxonomy is related to:", questionHindi: "ब्लूम की वर्गीकरण किससे संबंधित है:", options: ["Learning objectives / सीखने के उद्देश्य", "Intelligence / बुद्धि", "Motivation / प्रेरणा", "Personality / व्यक्तित्व"], correct: 0, subject: "Pedagogy"},
    {id: 104, question: "Modifying existing knowledge with new information is called:", questionHindi: "नई जानकारी के साथ मौजूदा ज्ञान को संशोधित करना कहलाता है:", options: ["Assimilation / आत्मसातीकरण", "Accommodation / समायोजन", "Equilibration / संतुलन", "Organization / संगठन"], correct: 1, subject: "Pedagogy"},
    {id: 105, question: "Child-centered education was advocated by:", questionHindi: "बाल-केंद्रित शिक्षा की वकालत किसने की:", options: ["John Dewey / जॉन डीवी", "Herbert Spencer / हर्बर्ट स्पेंसर", "Rousseau / रूसो", "All of these / उपरोक्त सभी"], correct: 3, subject: "Pedagogy"},
    {id: 106, question: "Intrinsic motivation means:", questionHindi: "आंतरिक प्रेरणा का अर्थ है:", options: ["External rewards / बाहरी पुरस्कार", "Internal drive / आंतरिक प्रेरक", "Punishment / सजा", "Competition / प्रतिस्पर्धा"], correct: 1, subject: "Pedagogy"},
    {id: 107, question: "NCF 2005 focuses on:", questionHindi: "NCF 2005 किस पर केंद्रित है:", options: ["Learning without burden / बोझ के बिना सीखना", "Rote learning / रटकर सीखना", "Teacher-centered approach / शिक्षक-केंद्रित दृष्टिकोण", "Examination-oriented teaching / परीक्षा-उन्मुख शिक्षण"], correct: 0, subject: "Pedagogy"},
    {id: 108, question: "Constructivism theory states that:", questionHindi: "रचनावाद सिद्धांत कहता है कि:", options: ["Teachers construct knowledge / शिक्षक ज्ञान का निर्माण करते हैं", "Learners construct their own knowledge / शिक्षार्थी अपना ज्ञान स्वयं बनाते हैं", "Knowledge is transferred / ज्ञान स्थानांतरित होता है", "Learning is passive / सीखना निष्क्रिय है"], correct: 1, subject: "Pedagogy"},
    {id: 109, question: "Formative assessment is done:", questionHindi: "रचनात्मक मूल्यांकन कब किया जाता है:", options: ["At the end of session / सत्र के अंत में", "During the learning process / सीखने की प्रक्रिया के दौरान", "Once a year / वर्ष में एक बार", "For grading only / केवल ग्रेडिंग के लिए"], correct: 1, subject: "Pedagogy"},
    {id: 110, question: "The term IQ was coined by:", questionHindi: "IQ शब्द किसने गढ़ा:", options: ["Alfred Binet / अल्फ्रेड बिने", "William Stern / विलियम स्टर्न", "Lewis Terman / लुईस टर्मन", "David Wechsler / डेविड वेक्स्लर"], correct: 1, subject: "Pedagogy"},
    {id: 111, question: "Right to Education Act was passed in:", questionHindi: "शिक्षा का अधिकार अधिनियम कब पारित हुआ:", options: ["2005", "2007", "2009", "2010"], correct: 2, subject: "Pedagogy"},
    {id: 112, question: "Inclusive education means:", questionHindi: "समावेशी शिक्षा का अर्थ है:", options: ["Separate schools for disabled / विकलांगों के लिए अलग स्कूल", "Education for all together / सभी के लिए एक साथ शिक्षा", "Only gifted children / केवल प्रतिभाशाली बच्चे", "Only normal children / केवल सामान्य बच्चे"], correct: 1, subject: "Pedagogy"},
    {id: 113, question: "Learning disability in reading is called:", questionHindi: "पढ़ने में सीखने की अक्षमता कहलाती है:", options: ["Dyslexia / डिस्लेक्सिया", "Dyscalculia / डिस्कैलकुलिया", "Dysgraphia / डिस्ग्राफिया", "ADHD / ADHD"], correct: 0, subject: "Pedagogy"},
    {id: 114, question: "Socialization is:", questionHindi: "समाजीकरण है:", options: ["A biological process / एक जैविक प्रक्रिया", "A social process / एक सामाजिक प्रक्रिया", "An individual process / एक व्यक्तिगत प्रक्रिया", "None of these / इनमें से कोई नहीं"], correct: 1, subject: "Pedagogy"},
    {id: 115, question: "CCE (Continuous and Comprehensive Evaluation) was introduced under:", questionHindi: "CCE (सतत और व्यापक मूल्यांकन) किसके तहत पेश किया गया:", options: ["NCF 2005", "RTE Act 2009", "NEP 2020", "NPE 1986"], correct: 1, subject: "Pedagogy"},
    {id: 116, question: "Peer learning is:", questionHindi: "साथी से सीखना है:", options: ["Learning from teachers / शिक्षकों से सीखना", "Learning from classmates / सहपाठियों से सीखना", "Self-learning / स्व-शिक्षा", "Online learning / ऑनलाइन सीखना"], correct: 1, subject: "Pedagogy"},
    {id: 117, question: "Thinking about one's own thinking is called:", questionHindi: "अपनी सोच के बारे में सोचना कहलाता है:", options: ["Cognition / संज्ञान", "Metacognition / मेटाकॉग्निशन", "Intelligence / बुद्धि", "Memory / स्मृति"], correct: 1, subject: "Pedagogy"},
    {id: 118, question: "Pavlov's experiment is associated with:", questionHindi: "पावलोव का प्रयोग किससे संबंधित है:", options: ["Classical conditioning / शास्त्रीय अनुकूलन", "Operant conditioning / क्रियाप्रसूत अनुकूलन", "Social learning / सामाजिक सीखना", "Insight learning / अंतर्दृष्टि सीखना"], correct: 0, subject: "Pedagogy"},
    {id: 119, question: "Learning by doing was emphasized by:", questionHindi: "करके सीखने पर जोर किसने दिया:", options: ["John Dewey / जॉन डीवी", "Froebel / फ्रोबेल", "Montessori / मॉन्टेसरी", "All of these / उपरोक्त सभी"], correct: 3, subject: "Pedagogy"},
    {id: 120, question: "The period from birth to 2 years is called:", questionHindi: "जन्म से 2 वर्ष तक की अवधि कहलाती है:", options: ["Infancy / शैशवावस्था", "Early childhood / प्रारंभिक बचपन", "Late childhood / उत्तर बचपन", "Adolescence / किशोरावस्था"], correct: 0, subject: "Pedagogy"},
    {id: 121, question: "Creativity is associated with which type of thinking?", questionHindi: "रचनात्मकता किस प्रकार की सोच से जुड़ी है?", options: ["Convergent / अभिसारी", "Divergent / अपसारी", "Critical / आलोचनात्मक", "Analytical / विश्लेषणात्मक"], correct: 1, subject: "Pedagogy"},
    {id: 122, question: "According to Maslow, which need is at the top of hierarchy?", questionHindi: "मास्लो के अनुसार, पदानुक्रम के शीर्ष पर कौन सी आवश्यकता है?", options: ["Physiological / शारीरिक", "Safety / सुरक्षा", "Self-actualization / आत्म-साक्षात्कार", "Esteem / सम्मान"], correct: 2, subject: "Pedagogy"},
    {id: 123, question: "Zone of proximal development was given by:", questionHindi: "समीपस्थ विकास का क्षेत्र किसने दिया:", options: ["Piaget / पियाजे", "Vygotsky / वायगोत्स्की", "Bruner / ब्रूनर", "Bandura / बंडुरा"], correct: 1, subject: "Pedagogy"},
    {id: 124, question: "Gifted children are those who have:", questionHindi: "प्रतिभाशाली बच्चे वे हैं जिनके पास है:", options: ["High IQ / उच्च IQ", "Special talents / विशेष प्रतिभा", "Creative abilities / रचनात्मक क्षमताएं", "All of these / उपरोक्त सभी"], correct: 3, subject: "Pedagogy"},
    {id: 125, question: "Main aim of education according to NCF 2005 is:", questionHindi: "NCF 2005 के अनुसार शिक्षा का मुख्य उद्देश्य है:", options: ["Holistic development / समग्र विकास", "Employment / रोजगार", "High scores / उच्च अंक", "Discipline / अनुशासन"], correct: 0, subject: "Pedagogy"},
    {id: 126, question: "Project method was developed by:", questionHindi: "परियोजना विधि किसने विकसित की:", options: ["Kilpatrick / किलपैट्रिक", "Dewey / डीवी", "Montessori / मॉन्टेसरी", "Froebel / फ्रोबेल"], correct: 0, subject: "Pedagogy"},
    {id: 127, question: "Summative assessment is conducted:", questionHindi: "योगात्मक मूल्यांकन कब किया जाता है:", options: ["During teaching / शिक्षण के दौरान", "At the end of term / सत्र के अंत में", "Daily / दैनिक", "Weekly / साप्ताहिक"], correct: 1, subject: "Pedagogy"},
    {id: 128, question: "Ability to understand others' emotions is:", questionHindi: "दूसरों की भावनाओं को समझने की क्षमता है:", options: ["IQ / IQ", "EQ (Emotional Intelligence) / EQ (भावनात्मक बुद्धि)", "Creativity / रचनात्मकता", "Memory / स्मृति"], correct: 1, subject: "Pedagogy"},
    {id: 129, question: "The term 'Adolescence' means:", questionHindi: "'किशोरावस्था' शब्द का अर्थ है:", options: ["To grow up / बड़ा होना", "To mature / परिपक्व होना", "Teenage period / किशोर अवधि", "All of these / उपरोक्त सभी"], correct: 3, subject: "Pedagogy"},
    {id: 130, question: "Mother tongue as medium of instruction was advocated by:", questionHindi: "शिक्षा के माध्यम के रूप में मातृभाषा की वकालत किसने की:", options: ["Mahatma Gandhi / महात्मा गांधी", "Kothari Commission / कोठारी आयोग", "Both A and B / A और B दोनों", "None / कोई नहीं"], correct: 2, subject: "Pedagogy"},
    
    // ====== GENERAL KNOWLEDGE (Q131-135) ======
    
    {id: 131, question: "Who is the current President of India (2025)?", questionHindi: "भारत के वर्तमान राष्ट्रपति (2025) कौन हैं?", options: ["Ram Nath Kovind / राम नाथ कोविंद", "Draupadi Murmu / द्रौपदी मुर्मू", "Narendra Modi / नरेंद्र मोदी", "None / कोई नहीं"], correct: 1, subject: "GK"},
    {id: 132, question: "International Yoga Day is celebrated on:", questionHindi: "अंतर्राष्ट्रीय योग दिवस कब मनाया जाता है:", options: ["21 June / 21 जून", "21 July / 21 जुलाई", "21 August / 21 अगस्त", "21 September / 21 सितंबर"], correct: 0, subject: "GK"},
    {id: 133, question: "Who won the Nobel Peace Prize in 2023?", questionHindi: "2023 में नोबेल शांति पुरस्कार किसने जीता?", options: ["Narges Mohammadi / नरगेस मोहम्मदी", "Malala Yousafzai / मलाला यूसुफजई", "Kailash Satyarthi / कैलाश सत्यार्थी", "Abhijit Banerjee / अभिजीत बनर्जी"], correct: 0, subject: "GK"},
    {id: 134, question: "G20 Summit 2023 was hosted by:", questionHindi: "G20 शिखर सम्मेलन 2023 की मेजबानी किसने की:", options: ["USA / अमेरिका", "India / भारत", "China / चीन", "Russia / रूस"], correct: 1, subject: "GK"},
    {id: 135, question: "Chandrayaan-3 successfully landed on Moon in:", questionHindi: "चंद्रयान-3 चंद्रमा पर कब सफलतापूर्वक उतरा:", options: ["2021", "2022", "2023", "2024"], correct: 2, subject: "GK"},
    
    // ====== ENVIRONMENTAL SCIENCE (Q136-140) ======
    
    {id: 136, question: "The most abundant greenhouse gas is:", questionHindi: "सबसे प्रचुर ग्रीनहाउस गैस है:", options: ["Carbon dioxide / कार्बन डाइऑक्साइड", "Methane / मीथेन", "Water vapor / जल वाष्प", "Ozone / ओजोन"], correct: 2, subject: "Environment"},
    {id: 137, question: "World Environment Day is celebrated on:", questionHindi: "विश्व पर्यावरण दिवस कब मनाया जाता है:", options: ["5 May / 5 मई", "5 June / 5 जून", "5 July / 5 जुलाई", "5 August / 5 अगस्त"], correct: 1, subject: "Environment"},
    {id: 138, question: "Ozone layer is found in which atmospheric layer?", questionHindi: "ओजोन परत वायुमंडल की किस परत में पाई जाती है?", options: ["Troposphere / क्षोभमंडल", "Stratosphere / समताप मंडल", "Mesosphere / मध्यमंडल", "Thermosphere / तापमंडल"], correct: 1, subject: "Environment"},
    {id: 139, question: "Which gas is responsible for global warming?", questionHindi: "वैश्विक तापन के लिए कौन सी गैस जिम्मेदार है?", options: ["Oxygen / ऑक्सीजन", "Nitrogen / नाइट्रोजन", "Carbon dioxide / कार्बन डाइऑक्साइड", "Hydrogen / हाइड्रोजन"], correct: 2, subject: "Environment"},
    {id: 140, question: "The largest source of pollution in India is:", questionHindi: "भारत में प्रदूषण का सबसे बड़ा स्रोत है:", options: ["Industries / उद्योग", "Vehicles / वाहन", "Agriculture / कृषि", "Households / घरेलू"], correct: 1, subject: "Environment"},
    
    // ====== MATHEMATICAL APTITUDE (Q141-145) ======
    
    {id: 141, question: "If 20% of a number is 40, what is the number?", questionHindi: "यदि किसी संख्या का 20% 40 है, तो संख्या क्या है?", options: ["100", "150", "200", "250"], correct: 2, subject: "Math"},
    {id: 142, question: "The average of 5, 10, 15, 20, 25 is:", questionHindi: "5, 10, 15, 20, 25 का औसत है:", options: ["12", "15", "18", "20"], correct: 1, subject: "Math"},
    {id: 143, question: "A train travels 300 km in 5 hours. What is its speed?", questionHindi: "एक ट्रेन 5 घंटे में 300 किमी की यात्रा करती है। इसकी गति क्या है?", options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"], correct: 1, subject: "Math"},
    {id: 144, question: "The next number in series 2, 6, 12, 20, 30, __ is:", questionHindi: "श्रृंखला 2, 6, 12, 20, 30, __ में अगली संख्या है:", options: ["40", "42", "44", "46"], correct: 1, subject: "Math"},
    {id: 145, question: "If cost of 5 books is ₹250, what is cost of 8 books?", questionHindi: "यदि 5 पुस्तकों की कीमत ₹250 है, तो 8 पुस्तकों की कीमत क्या है?", options: ["₹350", "₹400", "₹450", "₹500"], correct: 1, subject: "Math"},
    
    // ====== LOGICAL REASONING (Q146-150) ======
    
    {id: 146, question: "Complete the series: A, D, G, J, __", questionHindi: "श्रृंखला पूरी करें: A, D, G, J, __", options: ["K", "L", "M", "N"], correct: 2, subject: "Reasoning"},
    {id: 147, question: "If BOOK is coded as CPPL, then PENCIL is coded as:", questionHindi: "यदि BOOK को CPPL लिखा जाता है, तो PENCIL को कैसे लिखा जाएगा:", options: ["QFODJM", "QFODM", "QFODJK", "QFMDJL"], correct: 0, subject: "Reasoning"},
    {id: 148, question: "Find the odd one out: Dog, Cat, Elephant, Car", questionHindi: "विषम ज्ञात कीजिए: कुत्ता, बिल्ली, हाथी, कार", options: ["Dog / कुत्ता", "Cat / बिल्ली", "Elephant / हाथी", "Car / कार"], correct: 3, subject: "Reasoning"},
    {id: 149, question: "If 5 + 3 = 28, 9 + 1 = 810, then 8 + 6 = ?", questionHindi: "यदि 5 + 3 = 28, 9 + 1 = 810, तो 8 + 6 = ?", options: ["214", "412", "248", "482"], correct: 2, subject: "Reasoning"},
    {id: 150, question: "Pointing to a photo, a man says 'She is daughter of my grandfather's only son'. Who is she?", questionHindi: "एक तस्वीर की ओर इशारा करते हुए, एक आदमी कहता है 'वह मेरे दादा के एकमात्र बेटे की बेटी है'। वह कौन है?", options: ["Sister / बहन", "Daughter / बेटी", "Mother / माँ", "Wife / पत्नी"], correct: 0, subject: "Reasoning"}
];

// Export for use in exam page
