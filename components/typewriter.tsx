"use client"
import React, { useEffect, useState } from 'react'


interface TypewriterProps {
    words: string[],
    speed: number,
}

const Typewriter = ({ words, speed }: TypewriterProps) => {
    const [currentWordIndex, setCurrentWordIndex] = useState<number>(0)
    const [currentText, setCurrentText] = useState<string>('')

    const currentWord = words[currentWordIndex];

    useEffect(() => {
        let charIndex = 0;
        const typingInterval = setInterval(() => {
            if (charIndex <= currentWord.length) {
                setCurrentText(currentWord.slice(0, charIndex));
                charIndex++
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setCurrentWordIndex((prevIndex) => prevIndex === words.length - 1 ? 0 : prevIndex + 1)
                }, 1000);

            }
        }, speed)
        return () => {
            clearInterval(typingInterval)
        }

    }, [currentWord, words, speed])



    return (
        <span className=' tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-7'>
            {currentText}
        </span>
    )
}

export default Typewriter