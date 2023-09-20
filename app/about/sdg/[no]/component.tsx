import {SDG} from '@prisma/client';
import Image from "next/image";

export function AboutSdg({sdg}: { sdg: SDG }) {
    return (
        <>

            <div className="flex-auto bg-amber-100">
                <h1 className="translate-x-14 translate-y-7 font-serif text-4xl"><strong><span className="bg-sky-200 rounded-b-xl">    {sdg.goal}</span></strong></h1>

                <div className="mx-16 my-20 font-mono">{sdg.description}</div>
            </div>

        </>
    )
}