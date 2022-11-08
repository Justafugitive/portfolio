import { Experience } from '../typings';

export const fetchExperiences = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);

    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    //how to check if it's working. Debugging
    // console.log("fetching experiences");

    return experiences;
}