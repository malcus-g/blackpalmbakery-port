import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import type { SectionName } from '@/lib/types';


export function useSectionInView(sectionName: SectionName, threshold = .75) {
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    const [ref, inView] = useInView({
        threshold
    });

    useEffect(() => {
        if(inView && Date.now() - timeOfLastClick > 300){
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref
    };
}