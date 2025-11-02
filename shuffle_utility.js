// =====
// ROBUST SHUFFLE UTILITY FOR STET CBT EXAM SYSTEM
// Version: 3.0 (Ultra-Enhanced & Production-Ready)
// Created by: AKASH
// =====

(function() {
    'use strict';
    
    // Enhanced error handling and logging
    const logger = {
        log: (msg) => console.log(`[ShuffleUtility] ${msg}`),
        error: (msg) => console.error(`[ShuffleUtility ERROR] ${msg}`),
        warn: (msg) => console.warn(`[ShuffleUtility WARN] ${msg}`)
    };
    
    // Cryptographically secure random number generator
    function getSecureRandom() {
        if (window.crypto && window.crypto.getRandomValues) {
            const array = new Uint32Array(1);
            window.crypto.getRandomValues(array);
            return array[0] / (0xffffffff + 1);
        }
        return Math.random(); // Fallback
    }
    
    /**
     * Enhanced Fisher-Yates Shuffle Algorithm with crypto-secure randomness
     */
    function shuffleArray(array) {
        if (!Array.isArray(array)) {
            logger.error('shuffleArray: Input must be an array');
            return [];
        }
        
        if (array.length <= 1) {
            return [...array];
        }
        
        const shuffled = [...array];
        
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(getSecureRandom() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        
        return shuffled;
    }
    
    function shuffleQuestions(questions) {
        if (!Array.isArray(questions) || questions.length === 0) {
            logger.error('shuffleQuestions: Invalid input');
            return [];
        }
        
        try {
            return shuffleArray(questions).map((q, index) => ({
                ...q,
                originalId: q.id,
                id: index + 1,
                shuffled: true,
                shuffleTimestamp: Date.now()
            }));
        } catch (error) {
            logger.error(`shuffleQuestions failed: ${error.message}`);
            return questions;
        }
    }
    
    function shuffleOptions(question) {
        if (!question || !Array.isArray(question.options)) {
            logger.error('shuffleOptions: Invalid question object');
            return question;
        }
        
        try {
            const correctAnswer = question.options[question.correct];
            const shuffledOptions = shuffleArray(question.options);
            const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
            
            if (newCorrectIndex === -1) {
                logger.warn(`Correct answer not found after shuffle for question ${question.id}`);
                return question;
            }
            
            return {
                ...question,
                options: shuffledOptions,
                correct: newCorrectIndex,
                originalCorrect: question.correct,
                optionsShuffled: true
            };
        } catch (error) {
            logger.error(`shuffleOptions failed for question ${question.id}: ${error.message}`);
            return question;
        }
    }
    
    function shuffleQuestionsAndOptions(questions) {
        if (!Array.isArray(questions) || questions.length === 0) {
            logger.error('shuffleQuestionsAndOptions: Invalid input');
            return [];
        }
        
        try {
            const validQuestions = questions.filter(validateQuestion);
            if (validQuestions.length !== questions.length) {
                logger.warn(`${questions.length - validQuestions.length} invalid questions filtered out`);
            }
            
            const shuffledQuestions = shuffleQuestions(validQuestions);
            const result = shuffledQuestions.map(q => shuffleOptions(q));
            
            logger.log(`Successfully shuffled ${result.length} questions with options`);
            return result;
        } catch (error) {
            logger.error(`shuffleQuestionsAndOptions failed: ${error.message}`);
            return questions;
        }
    }
    
    function deepClone(obj) {
        try {
            return JSON.parse(JSON.stringify(obj));
        } catch (error) {
            logger.error(`deepClone failed: ${error.message}`);
            return obj;
        }
    }
    
    function validateQuestion(question) {
        if (!question) return false;
        
        const checks = [
            () => typeof question.id === 'number',
            () => typeof question.question === 'string' && question.question.trim().length > 0,
            () => Array.isArray(question.options),
            () => question.options.length >= 2 && question.options.length <= 6,
            () => typeof question.correct === 'number',
            () => question.correct >= 0 && question.correct < question.options.length,
            () => question.options.every(opt => typeof opt === 'string' && opt.trim().length > 0)
        ];
        
        return checks.every(check => {
            try {
                return check();
            } catch {
                return false;
            }
        });
    }
    
    // Enhanced utility functions
    function getShuffleStats(questions) {
        if (!Array.isArray(questions)) return null;
        
        return {
            total: questions.length,
            shuffled: questions.filter(q => q.shuffled).length,
            optionsShuffled: questions.filter(q => q.optionsShuffled).length,
            valid: questions.filter(validateQuestion).length
        };
    }
    
    function resetShuffle(questions) {
        if (!Array.isArray(questions)) return [];
        
        return questions.map(q => {
            const reset = { ...q };
            delete reset.shuffled;
            delete reset.shuffleTimestamp;
            delete reset.optionsShuffled;
            delete reset.originalCorrect;
            if (reset.originalId) {
                reset.id = reset.originalId;
                delete reset.originalId;
            }
            return reset;
        }).sort((a, b) => a.id - b.id);
    }
    
    // Performance monitoring
    function measurePerformance(fn, ...args) {
        const start = performance.now();
        const result = fn(...args);
        const end = performance.now();
        logger.log(`${fn.name} executed in ${(end - start).toFixed(2)}ms`);
        return result;
    }
    
    // Export to global scope with enhanced API
    window.shuffleUtility = {
        shuffleArray,
        shuffleQuestions,
        shuffleOptions,
        shuffleQuestionsAndOptions,
        deepClone,
        validateQuestion,
        getShuffleStats,
        resetShuffle,
        measurePerformance,
        getSecureRandom,
        version: '3.0',
        build: Date.now()
    };
    
    logger.log('✅ Enhanced Shuffle Utility v3.0 loaded successfully');
    
})();

// Shuffle Utility for STET CBT Exam System
// Created by AKASH

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function shuffleQuestions(questions) {
    return shuffleArray(questions).map((q, index) => ({
        ...q,
        originalId: q.id,
        id: index + 1
    }));
}

function shuffleOptions(question) {
    const correctAnswer = question.options[question.correct];
    const shuffledOptions = shuffleArray(question.options);
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
    return {
        ...question,
        options: shuffledOptions,
        correct: newCorrectIndex
    };
}

function shuffleQuestionsAndOptions(questions) {
    const shuffledQuestions = shuffleQuestions(questions);
    return shuffledQuestions.map(q => shuffleOptions(q));
}

window.shuffleUtility = {
    shuffleArray,
    shuffleQuestions,
    shuffleOptions,
    shuffleQuestionsAndOptions
};
