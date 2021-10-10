import {createContext, useState, ReactNode} from 'react' 

interface ChallengeProviderProps{
    children:ReactNode;
}

interface ChallengeProviderValuesProps{
    level: number;
    currentXperience:number;
    challengeComplete:number;
    startNewChallenge: () => void;
    levelUp: () => void;
}

export const challengeContext= createContext({} as ChallengeProviderValuesProps)

export function ChallengeProvider({children}:ChallengeProviderProps){
    
    const [level,setLevel]= useState(1)
    const [currentXperience,setCurrentXperience]= useState(0)
    const [challengeComplete,setChallengeComplete]= useState(0)

    function startNewChallenge() {
        console.log('loco')
    }
    function levelUp() {
        console.log('loco')
    }

    return(
        <challengeContext.Provider
            value={{
                level,
                currentXperience,
                challengeComplete,
                startNewChallenge,
                levelUp
            }}
        >
            {children}
        </challengeContext.Provider>
    );
}
    
