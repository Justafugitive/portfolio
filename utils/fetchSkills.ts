import { Skill } from '../typings';

export const fetchSkills = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

    const data = await res.json();
    const skills: Skill[] = data.skills;

    //how to check if it's working. Debugging
    console.log("fetching skills");

    return skills;
}