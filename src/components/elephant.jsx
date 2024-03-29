import '../styles/elephant.css'
import '../styles/animations.css'
import { animated } from '@react-spring/web'
import { useEffect, useState } from 'react'

const Elephant = ({ scale, message, messageColor }) => {

    const [showDots, setShowDots] = useState(false)

    useEffect(() => {
        // eslint-disable-next-line 
        Array.from(Array(51)).map((_, i) => {
            if (i === 0) return null

            let path = document.getElementById(`elephant-${i}`);
            if (!path) return null
            let pathLength = path.getTotalLength();
            path.style.strokeDasharray = pathLength;
            path.style.strokeDashoffset = pathLength;
            return null
        });

    })

    useEffect(() => {
        if (!message) return
        message.includes('loading') && setShowDots(true)
    }, [message])



    return (
        <div className='flex flex-col  justify-center items-center  max-h-screen max-w-screen' style={{ transform: `scale(${scale ? scale : '0.5'})`, animation: 'dashoffset linear 2s infinite' }}>

            {
                message &&
                <div className={` flex gap-1 pb-44 h-[240px] text-9xl  text-center p-8 font-bold  ${messageColor ? messageColor : 'text-black'} bg-white bg-opacity-50`}>
                    <p >{message} </p>

                    {
                        showDots && <>
                            <span className='inline animate-bounce'> . </span>
                            <span className='inline animate-bounce' style={{ animationDelay: '200ms' }}> . </span>
                        </>
                    }

                </div>
            }
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 387.74 341.93">
                <g id="Layer_1-2" data-name="Layer 1">
                    <g id='elephant-group'>
                        <animated.path id='elephant-2' className="cls-2" d="M326.75,335.65c-1.37.36-2.1.71-2.83.73-3.41.06-6.82.05-10.23.02-.74,0-1.5-.1-2.21-.31-3.81-1.15-4.22-2.3-2.05-5.53.37-.55.88-1.03,1.16-1.61.99-2.09,2.45-1.94,4.09-.92,3.78,2.37,7.55,4.76,12.07,7.62Z" />


                        <animated.path id='elephant-3' className="cls-2" d="M328.11,294.59c-4.11,6.02-8.19,12.06-12.28,18.09-.18.28-.32.59-.47.88-.22-.06-.43-.12-.64-.17-.2-.81-.57-1.61-.58-2.42-.05-6.98-.05-13.96-.02-20.94.01-3.11.32-3.23,3.22-2.3,3.15,1.02,6.39,1.77,9.52,2.84,2.88.98,2.95,1.54,1.25,4.02Z" />


                        <animated.path id='elephant-4' className="cls-2" d="M339.59,333.06c-.68,1.06-1.9,1.79-3.07,2.82-4.77-2.97-9.48-5.9-14.19-8.83-1.62-1-3.26-1.98-4.86-3.01-1.42-.9-2.22-1.99-1.04-3.69,5.42-7.85,10.83-15.72,16.25-23.58.13-.19.37-.3,1.08-.85.13,1.24.31,2.03.28,2.8-.12,2.92.05,5.9-.54,8.72-1.1,5.26.44,9.81,2.83,14.31,1.4,2.64,2.79,5.3,3.86,8.07.35.89-.04,2.36-.6,3.24Z" />

                        <animated.path id='elephant-5' className="cls-2" d="M373.69,325.47c-4.96,2.92-9.04,6.73-15.08,5.99-1.76-.22-2.72-.83-2.76-2.75-.07-2.91-.35-5.8-.48-8.71-.06-1.35.39-2.08,1.95-1.43,4.88,2.03,9.79,3.98,14.68,5.98.43.17.82.44,1.69.92Z" />


                        <animated.path id='elephant-6' className="cls-2" d="M381.42,314.56c-.71,1.68-1.29,3.41-1.97,5.11-.62,1.53-1.7,1.85-3.22,1.24-5.69-2.27-11.42-4.46-17.1-6.76-.96-.38-1.77-1.15-2.9-1.92,3.86-6,7.59-11.82,11.47-17.85.76.72,1.21,1.05,1.55,1.48,3.85,4.78,7.63,9.61,11.54,14.34,1.19,1.43,1.3,2.76.63,4.36Z" />


                        <animated.path id='elephant-7' className="cls-2" d="M361.99,294.02c-2.92,4.71-5.97,9.35-9.01,13.98-.25.37-.82.53-1.52.95-3.65-4.78-7.16-9.38-10.68-13.98-1.11-1.45-.43-2.25,1.05-2.32,6.3-.33,12.61-.55,18.92-.78,1.67-.06,1.88,1.11,1.24,2.15Z" />


                        <animated.path id='elephant-8' className="cls-2" d="M363.19,286.24c-1.35.31-2.19.64-3.04.68-6.23.28-12.46.51-18.69.74-2.25.08-2.81-.86-1.74-2.88,3.13-5.94,6.3-11.86,9.38-17.83.82-1.59,1.92-1.47,2.63-.3,3.8,6.31,7.46,12.71,11.46,19.59Z" />


                        <animated.path id='elephant-9' className="cls-2" d="M345.44,263.49c-4.05,7.69-7.76,14.9-11.7,21.97-.41.74-2.36,1.21-3.38.94-4.48-1.16-8.89-2.63-13.32-4-.31-.1-.61-.35-.92-.37-6.99-.39-9.49-6.26-13.03-10.8-.84-1.08-.96-2.39,1.03-2.66,12.66-1.75,25.32-3.53,37.98-5.26.95-.13,1.96.09,3.34.18Z" />

                        {/*  */}
                        {/*  */}
                        {/* trunk */}
                        <animated.path
                            id='elephant-10' className="cls-2" d="M22.96,51.34c-1.38,6.05-1.45,12.39-2.13,18.6-.11.95-.37,1.89-.71,3.55-2.79-3.44-4.98-6.56-7.59-9.26-2.63-2.71-2.24-5.3-.98-8.4,2-4.92,3.71-9.96,5.48-14.97.29-.84.32-1.82.25-2.71-.13-1.66-.62-3.3-.61-4.95.03-8.02-4.58-13.57-9.79-18.82-1.58-1.59-1.63-3.28-.17-6.1,4.58,5.2,8.76,9.95,12.94,14.69,2.34,9.31,5.58,18.39,3.31,28.37Z" />

                        <animated.path

                            id='elephant-11' className="cls-2" d="M19.35,82.32c-1.18,8.04-2.43,16.08-3.69,24.12-.06.38-.33.72-.5,1.08-7.5-11.93-7.07-24.91-5.65-38.04.24-.12.48-.25.71-.38,2.91,3.69,5.84,7.35,8.68,11.08.4.53.56,1.45.45,2.14Z" />

                        <animated.path

                            id='elephant-12' className="cls-2" d="M49.01,114.89c-.55.72-.99,1.58-1.67,2.15-4.13,3.45-8.34,6.82-12.48,10.27-1.48,1.23-2.83,1.51-4.43.21-3.21-2.63-6.53-5.12-9.67-7.82-.77-.66-1.59-1.99-1.47-2.88,1.12-8.13,2.44-16.23,3.7-24.33.25-.13.5-.25.75-.37.59.97,1.31,1.88,1.73,2.91,1.53,3.76,2.8,7.63,4.51,11.3.59,1.27,2,2.56,3.32,3.02,4.28,1.52,8.72,2.61,13.07,3.98.95.29,1.76,1.03,2.64,1.56Z" />

                        <animated.path

                            id='elephant-13' className="cls-2" d="M58.98,142.2c-3.37-1.03-6.58-2.6-9.77-4.12-3.79-1.81-7.49-3.81-11.96-6.1,5.58-5.1,11.15-9.44,17.14-13.99,1.36,3.84,2.57,7.15,3.71,10.48,1.21,3.53,2.4,7.07,3.52,10.63.95,3,.27,3.98-2.64,3.1Z" />
                        {/*  trunk */}
                        {/*  */}
                        {/*  */}

                        <animated.path

                            id='elephant-14' className="cls-2" d="M117.62,165.86c.05.47-.46,1.22-.94,1.49-1.06.61-2.24,1-3.14,1.38-3.37-.7-6.49-1.21-9.54-2.02-3.97-1.06-7.85-1.16-11.8.04-1.66.5-3.41.76-5.13,1-.57.07-1.2-.25-1.8-.39.17-.67.13-1.58.55-1.98,2.61-2.43,5.27-4.83,8.06-7.05.55-.44,1.8-.34,2.61-.09,6.65,2.06,13.27,4.2,19.89,6.38.52.17,1.19.78,1.24,1.24Z" />


                        <animated.path id='elephant-15' className="cls-2" d="M145.68,236.39c0,1.43-1.73,2.91-2.78,4.27-3.02,3.91-6.1,7.77-9.15,11.65-.22-.05-.44-.1-.66-.15-.07-.89-.33-1.81-.2-2.68.79-5.42,1.73-10.83,2.49-16.26.22-1.61.2-3.3-.03-4.91-.74-5.1-1.65-10.17-2.43-15.26-.12-.79.13-1.63.2-2.45.21-.05.42-.1.63-.15,2.91,3.66,5.72,7.42,8.77,10.98,3.81,4.44,3.15,9.82,3.16,14.96Z" />


                        <animated.path id='elephant-16' className="cls-2" d="M154.74,274.95c-4.14,4.97-8.43,9.81-13.03,15.1-.71-1.18-1.33-1.96-1.68-2.86-2.84-7.35-5.67-14.71-8.35-22.12-.3-.81.07-2.19.63-2.93,4.02-5.29,8.17-10.48,12.27-15.7,1.02-1.29,1.67-.74,2.07.47.21.62.35,1.31.33,1.96-.2,5.4,2.39,9.93,4.48,14.61,1.25,2.8,2.73,5.51,3.82,8.37.33.86.06,2.38-.54,3.1Z" />


                        <animated.path id='elephant-17' className="cls-2" d="M136.15,296.23c-3.37,3.66-6.75,7.33-10.16,10.95-1.11,1.18-2.43.87-2.71-.76-1.37-8.05-2.32-16.11.8-24.04.88-2.24,1.5-4.57,2.35-6.82.51-1.32,1.23-2.56,2.17-4.48,1.56,3.99,2.85,7.19,4.07,10.41,1.38,3.64,2.57,7.37,4.13,10.93.7,1.62.38,2.7-.65,3.81Z" />


                        <animated.path id='elephant-18' className="cls-2" d="M143.5,329.77c-6.43,3.22-5.24,2.27-8.68-2.46-2.58-3.55-4.84-7.34-7.38-10.93-1.04-1.48-1.14-2.51.2-3.88,3.02-3.07,5.87-6.32,8.84-9.45.52-.56,1.29-.88,2.28-1.53.62,3.94.79,7.39,1.75,10.61,1.29,4.28,3.11,8.4,4.85,12.52,1.25,2.96.99,3.69-1.86,5.12Z" />


                        <animated.path id='elephant-19' className="cls-2" d="M132.35,332.47h-12.33c1.21-4.09,2.28-7.71,3.54-11.97,3.78,3.52,5.66,7.71,8.79,11.97Z" />


                        <animated.path id='elephant-20' className="cls-2" d="M183.48,335.28c-.01.23-.03.46-.04.69-.92.15-1.84.41-2.76.42-5.91.04-11.82.05-17.73.02-3.18-.01-3.82-.61-2.8-3.48.93-2.6,2.35-5.06,3.86-7.39.4-.62,2.23-1.04,2.87-.65,5.6,3.35,11.09,6.9,16.6,10.39Z" />


                        <animated.path id='elephant-21' className="cls-2" d="M188.79,331.82c-.22.13-.44.25-.66.38-2.68-1.6-5.38-3.17-8.02-4.82-2.96-1.84-5.69-4.13-8.83-5.54-4.15-1.85-5.75-5.19-6.77-9.15-.4-1.53-1.18-3.02-1.23-4.55-.03-1.12.53-2.61,1.35-3.36,4.89-4.5,9.91-8.85,14.92-13.21.7-.6,1.59-.98,2.4-1.47.23,1,.65,2,.68,3.01.18,5.41.49,10.82.3,16.22-.19,5.52,1.63,10.45,3.5,15.43.87,2.32,1.58,4.71,2.36,7.06Z" />


                        <animated.path id='elephant-22' className="cls-2" d="M178.01,286.36c-3.7,3.32-7.44,6.59-11.17,9.87-.44.38-.86.78-1.33,1.12-.89.66-1.81,1.27-2.72,1.91-.33-1.13-.89-2.25-.96-3.39-.14-2.48-.04-4.98-.04-7.47h-.31c0-2.65.03-5.31-.01-7.97-.03-1.97.99-2.6,2.69-2.02,4.77,1.62,9.57,3.2,14.22,5.11,1.92.78.51,2.05-.37,2.84Z" />


                        <animated.path id='elephant-23' className="cls-2" d="M187.84,252.77c-.98,5.96-1.97,11.93-2.96,17.89-.38,2.29-.81,4.58-1.16,6.88-.23,1.53-.98,2.36-2.53,1.82-4.68-1.63-9.35-3.33-14-5.06-.91-.33-1.72-.92-3.05-1.65,7.78-7.04,15.27-13.83,22.77-20.62.31.25.62.49.93.74Z" />


                        <animated.path id='elephant-24' className="cls-2" d="M185.32,246.83c-6.21,5.63-12.45,11.23-18.67,16.83-2.08,1.87-4.15,3.73-6.76,6.07-2.07-4.41-3.69-8.21-5.59-11.87-2.71-5.22-2.57-10.92-3.09-16.52-.32-3.47-.46-6.97-.62-10.46-.1-2.19.7-2.71,2.72-1.79,10.69,4.88,21.38,9.76,32.04,14.69,2.05.94.98,2.12-.03,3.05Z" />


                        <animated.path id='elephant-25' className="cls-2" d="M258.15,261.77c-6.45-.62-12.93-1.14-19.32-2.15-3.14-.49-6.15-1.93-9.17-3.05-3.03-1.11-6.03-2.32-9-3.59-.87-.37-1.61-1.07-2.83-1.91,12.87-10.08,25.3-19.81,38.23-29.93.74,3.39,1.39,6.01,1.88,8.67,1.62,8.91,3.12,17.85,4.78,26.75,1.03,5.54.99,5.74-4.57,5.21Z" />


                        <animated.path id='elephant-26' className="cls-2" d="M251.51,218.31c-2.89,2.31-5.75,4.64-8.66,6.92-9.6,7.53-19.19,15.07-28.88,22.48-.96.73-2.74,1.23-3.79.86-6.16-2.21-12.25-4.62-18.26-7.21-.81-.35-1.61-2.25-1.39-3.19,1.16-4.93,2.62-9.78,4.02-14.65,1.44-5.03,2.97-10.03,4.36-15.07.76-2.72,1.28-3.25,4.02-2.6,8.07,1.9,16.12,3.94,24.18,5.88,5.49,1.31,11,2.54,16.49,3.84,2.56.61,5.11,1.3,7.66,1.96.08.26.17.52.25.78Z" />


                        <animated.path id='elephant-27' className="cls-2" d="M184.74,238.01c-4.91-2.18-9.7-4.25-14.44-6.42-5.43-2.47-10.82-5.03-16.23-7.55-2.21-1.03-2.36-1.7-.76-3.65,7.63-9.33,15.27-18.64,22.89-27.97,6.52-7.97,13-15.98,19.54-23.94.56-.69,1.33-1.19,2.18-1.93.5,24.77-4.36,48.26-13.18,71.46Z" />


                        <animated.path id='elephant-28' className="cls-2" d="M191.07,166.48c-13.51,16.51-27.01,33.02-40.52,49.53-.27-.13-.55-.26-.82-.38-.12-.63-.32-1.25-.35-1.87-.46-8.39-.85-16.79-1.36-25.17-.14-2.36.49-3.76,2.84-4.83,11.83-5.36,23.58-10.93,35.36-16.42,1.35-.63,2.74-1.19,4.11-1.79.25.31.5.62.74.93Z" />


                        <animated.path id='elephant-29' className="cls-2" d="M144.36,212.12c.03.75-.23,1.51-.49,3.05-2.9-3.64-5.15-6.79-7.73-9.65-6.74-7.48-10.19-16.83-14.8-25.52-.94-1.76-1.75-3.58-2.72-5.32-.88-1.6-.41-2.66,1.07-3.5q4.71-2.69,6.79,2.25c1.07,2.52,2.15,5.03,3.28,7.52.87,1.91,2.1,3.22,4.47,3.38,2.3.15,4.63.62,6.83,1.31.82.26,1.85,1.47,1.91,2.31.58,8.05.98,16.11,1.39,24.17Z" />


                        <animated.path id='elephant-30' className="cls-2" d="M119.51,160.57c-8.05-2.64-15.22-5.29-22.57-7.25-2.9-.78-6.22-.09-9.34.08-1.39.08-2.82.37-4.15.8-5.2,1.67-9.18-1.01-13.1-3.68-2.35-1.59-2.06-3.51.68-5.55,5.39-4.03,10.81-8.01,16.22-12.01,3.13-2.32,6.26-4.65,9.4-6.97,2.41-1.77,2.72-1.77,4.17.72,3.54,6.1,7.01,12.25,10.5,18.38,2.38,4.19,4.77,8.37,7.12,12.57.37.67.54,1.44,1.07,2.91Z" />


                        <animated.path id='elephant-31' className="cls-2" d="M95.37,120.66c-3.74,2.82-7.1,5.36-10.47,7.88-4.85,3.64-9.69,7.29-14.57,10.88-2.61,1.92-2.76,1.81-3.77-1.18-2.38-7.08-4.71-14.19-7.26-21.22-.73-2.02.55-2.66,1.69-3.27,2.63-1.41,5.59-2.28,8.03-3.94,4.5-3.05,8.1-2.02,12.05,1.16,3.47,2.79,7.5,4.89,11.25,7.33.89.58,1.69,1.3,3.05,2.36Z" />


                        <animated.path id='elephant-32' className="cls-2" d="M125.31,84.73c-3.15,3.97-6.32,7.92-9.48,11.87-4.77,5.97-9.54,11.93-14.3,17.9-1.91,2.39-2.22,2.44-4.87.71-5.13-3.35-10.23-6.76-15.43-10.01-1.6-1-1.67-1.99-.53-3.16,7.11-7.2,14.24-14.39,21.43-21.51.7-.69,1.84-.93,2.33-1.17,7.12.88,13.64,1.66,20.15,2.48,1.93.24,2.12,1.09.7,2.89Z" />


                        <animated.path id='elephant-33' className="cls-2" d="M146.19,99.47c-1.4,4.61-2.65,9.26-4.01,13.88-.59,2.01-1.7,3.02-4.09,3.08-9.8.27-19.6.8-29.4,1.23-.64.03-1.29.01-2.64.01.68-1.29.97-2.13,1.5-2.79,7.37-9.3,14.77-18.57,22.16-27.85,2.35-2.95,2.6-2.98,5.4-.51,3.18,2.8,6.3,5.67,9.54,8.4,1.5,1.27,2.14,2.58,1.54,4.55Z" />



                        <animated.path id='elephant-34' className="cls-2" d="M138.96,124.14c-2.91,7.6-5.91,15.16-8.87,22.73-1.48,3.77-2.94,7.55-4.41,11.32-.3.07-.61.14-.91.22-1.67-2.81-3.39-5.6-5.01-8.44-4.71-8.2-9.37-16.44-14.08-24.64-1.1-1.92-.9-2.52,1.28-2.63,9.97-.48,19.94-.93,29.91-1.34,2.45-.1,2.95.54,2.09,2.78Z" />


                        <animated.path id='elephant-35' className="cls-2" d="M207.34,114.77c.08.96-.72,2.63-1.5,2.91-6.86,2.48-13.81,4.72-20.72,7.04-3.93,1.31-7.84,2.66-12.29,4.18-.19-1.24-.48-2.1-.43-2.95.56-9.39,1.19-18.78,1.74-28.17.1-1.84.92-2.81,2.75-2.75,3.09.1,6.17-1.69,9.29-.01,5.69,3.06,11.46,5.96,17.07,9.15,1.19.68,2.19,2.2,2.65,3.54.78,2.26,1.25,4.68,1.44,7.06Z" />


                        <animated.path id='elephant-36' className="cls-2" d="M169.15,98.99c-.13,1.82-.03,3.66-.03,5.49h-.31c-.48,7.55-1,15.11-1.42,22.67-.1,1.86-.9,2.57-2.67,2.26-6.3-1.13-12.59-2.26-18.88-3.42-1.87-.35-1.78-1.78-1.41-3.12,1.23-4.4,2.54-8.78,3.84-13.15.9-3.03,1.72-6.08,2.84-9.03.37-.97,1.45-2.18,2.38-2.35,4.33-.79,8.72-1.23,13.08-1.85,2.01-.29,2.71.53,2.58,2.5Z" />
                        <animated.path id='elephant-37' className="cls-2" d="M161.83,134.32c-.43.63-.73,1.44-1.31,1.88-8.52,6.33-17.08,12.63-25.64,18.91-.67.49-1.46.82-2.19,1.22-.21-.21-.43-.41-.64-.62,1.52-4.01,3.01-8.03,4.58-12.03,1.45-3.71,3.04-7.36,4.45-11.09.6-1.6,1.53-2.24,3.21-1.94,5.24.92,10.49,1.77,15.72,2.72.65.11,1.22.62,1.82.95Z" />
                        <animated.path id='elephant-38' className="cls-2" d="M167.09,167.07c.04,2.46-.85,3.92-2.92,4.9-4.93,2.36-10.04,4.4-14.74,7.16-4.71,2.77-9.17,1.29-13.71.17-.96-.24-1.87-1.58-2.39-2.61-1.3-2.6-2.37-5.31-3.53-7.97-.83-1.91-.59-3.28,1.31-4.67,10.92-7.96,21.74-16.08,32.61-24.12.82-.61,1.82-.99,3.35-1.79v3.7c-.02,8.41-.13,16.82.02,25.23Z" />
                        <animated.path id='elephant-39' className="cls-2" d="M196.56,156.86c-2.82,1.41-4.97,2.55-7.19,3.58-4.96,2.3-9.95,4.55-14.93,6.81-1.55.7-2.45.2-2.45-1.53,0-8.33.02-16.66.08-24.99,0-.66.38-1.32.71-2.38,7.98,6.22,15.6,12.15,23.78,18.51Z" />
                        <animated.path id='elephant-40' className="cls-2" d="M209.82,140.58c-2.42,3.86-5.09,7.56-7.52,11.42-.94,1.49-2.05,1.43-3.11.61-7.88-6.06-15.7-12.2-24.17-18.79,1.78-.83,2.96-1.52,4.23-1.95,9.02-3.04,18.08-5.99,27.09-9.09,1.84-.64,2.46.01,2.67,1.64.57,4.28,1.19,8.56,1.6,12.86.11,1.07-.21,2.38-.79,3.3Z" />
                        <animated.path id='elephant-41' className="cls-2" d="M262.93,118.38c-3,3.17-5.53,5.86-8.08,8.54-8.7,9.16-17.37,18.35-26.17,27.41-.96.98-2.7,1.68-4.09,1.69-5.07.03-10.14-.25-15.21-.5-.72-.03-1.83-.36-2.03-.85-.24-.57.17-1.57.57-2.21,2.25-3.49,4.7-6.85,6.8-10.42.74-1.25,1.05-3.01.92-4.48-.36-4.31-1.06-8.58-1.58-12.88-.37-3.07-.1-3.39,2.97-3.18,3.73.24,7.5.36,11.17.98,6.46,1.11,12.54-.82,18.73-1.87,4.34-.74,8.65-1.66,12.98-2.42.75-.14,1.56.08,3.02.19Z" />
                        <animated.path id='elephant-42' className="cls-2" d="M252.83,212.06c-1.4,0-2.22.15-2.96-.02-7.68-1.8-15.35-3.65-23.02-5.5-5.65-1.36-11.3-2.75-16.95-4.12-2.42-.59-4.83-1.21-7.27-1.75-1.6-.35-1.84-1.45-1.73-2.82.65-8.38,1.29-16.77,1.95-25.15.26-3.32.6-6.64.83-9.96.13-1.85.9-2.63,2.86-2.51,5.73.35,11.47.61,17.21.78,1.77.05,2.91.58,3.75,2.23,3.54,6.95,7.21,13.84,10.82,20.76,4.15,7.95,8.28,15.9,12.4,23.86.61,1.17,1.18,2.35,2.11,4.2Z" />
                        <animated.path id='elephant-43' className="cls-2" d="M295.5,175.81c-11.89,11.82-23.82,23.6-35.75,35.39-.17.16-.39.28-1.14.82-1.8-3.32-3.52-6.42-5.16-9.55-5.88-11.26-11.74-22.53-17.61-33.79-.65-1.25-1.35-2.48-1.96-3.75-.85-1.74-.32-2.53,1.66-2.24,4.11.6,8.21,1.31,12.3,2.04,12.19,2.16,24.38,4.36,36.57,6.54,3.27.59,6.55,1.13,9.81,1.79.66.13,1.43.55,1.77,1.08.21.33-.11,1.3-.49,1.67Z" />
                        <animated.path id='elephant-44' className="cls-2" d="M295.12,168.24c-12.51-2.26-25.02-4.53-37.53-6.76-7.11-1.28-14.24-2.49-21.36-3.73-.77-.14-1.54-.33-3.22-.69,12.68-13.33,24.84-26.12,37.37-39.28,5.06,9.34,9.63,17.8,14.22,26.25,3.59,6.64,7.2,13.27,10.8,19.91.43.8.9,1.6,1.27,2.43.73,1.63.09,2.17-1.55,1.87Z" />
                        <animated.path id='elephant-45' className="cls-2" d="M314.19,131.97c-1.05,3.06-2.14,6.11-3.23,9.16-2.59,7.27-5.17,14.53-7.78,21.79-.24.65-.64,1.24-1.32,2.53-8.66-15.94-17-31.3-25.34-46.66.17-.24.33-.47.49-.7,2.81.77,5.63,1.51,8.42,2.33,6.68,1.97,13.35,3.98,20.03,5.95,2.38.7,4.79,1.32,7.18,2.03,1.89.56,2.1,1.95,1.55,3.57Z" />
                        <animated.path id='elephant-46' className="cls-2" d="M358.81,177.33c-.07.33-1.07.47-1.38.59-6.38-.91-12.39-1.74-18.39-2.66-4.93-.75-9.84-1.66-14.77-2.4-5.1-.77-10.21-1.42-15.32-2.14-2.55-.36-2.81-1.03-1.91-3.52,2.52-7.04,4.94-14.11,7.39-21.17,1.26-3.61,2.42-7.25,3.76-10.83,1.1-2.95,1.75-3.07,4.18-1.11,7.36,5.95,14.86,11.75,22.01,17.95,2.41,2.1,4.13,5.12,5.79,7.94,2.92,4.93,5.57,10.02,8.26,15.07.35.66.52,1.56.38,2.28Z" />
                        <animated.path id='elephant-47' className="cls-2" d="M357.8,182.97c-1.15,1.21-1.67,1.97-2.37,2.48-16.38,12.01-32.78,24-49.17,36.01-1.34.99-1.94.58-2.12-.91-.05-.41-.01-.83-.01-1.25.25-13.48.49-26.96.74-40.43.07-3.29.47-3.67,3.69-3.19,14.05,2.09,28.08,4.24,42.12,6.36,2.11.32,4.24.56,7.12.93Z" />
                        <animated.path id='elephant-48' className="cls-2" d="M299.8,181.76c-.23,14.4-.46,28.8-.81,43.19-.03,1.22-.63,2.67-1.44,3.58-9.12,10.23-18.33,20.38-27.53,30.54-.27.3-.59.55-1.22,1.13-.33-.85-.69-1.45-.8-2.09-2.28-12.77-4.59-25.53-6.71-38.32-.22-1.32.31-3.26,1.23-4.19,11.84-11.98,23.81-23.82,35.76-35.69.15-.16.42-.2.99-.46.2.85.54,1.58.53,2.31Z" />
                        <animated.path id='elephant-49' className="cls-2" d="M342.71,257.92c-3.45.61-6.24,1.18-9.06,1.58-9.45,1.36-19.01,2.2-28.35,4.12-9.88,2.03-19.54-.32-29.3-.2-.4,0-.82-.12-1.21-.25-.22-.07-.4-.27-.81-.57.51-.75.93-1.54,1.51-2.19,7.94-8.83,15.9-17.63,23.86-26.44,2.33-2.58,2.52-2.58,5.58-.63,11.59,7.41,23.2,14.79,34.78,22.2.88.56,1.65,1.3,3,2.38Z" />
                        <animated.path id='elephant-50' className="cls-2" d="M360.31,191.27c-1.65,8.15-2.95,16.4-5.18,24.39-1.66,5.96-4.31,11.69-6.94,17.32-2.06,4.4-2.93,8.75-1.82,13.5.38,1.61.55,3.29.67,4.94.04.66-.14,1.55-.57,1.95-.27.25-1.3-.03-1.81-.36-5.24-3.35-10.44-6.76-15.67-10.13-6.47-4.19-12.97-8.34-19.45-12.52-1.03-.67-2.01-1.43-3.6-2.57,18.1-13.27,35.89-26.31,53.67-39.35.24.15.48.3.72.46,0,.79.14,1.61-.02,2.37Z" />
                    </g>
                </g>
            </svg>
        </div>
    )


}

export default Elephant