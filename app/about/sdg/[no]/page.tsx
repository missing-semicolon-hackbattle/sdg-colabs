import {PrismaClient} from '@prisma/client';
import {AboutSdg} from "@/app/about/sdg/[no]/component";

const prisma = new PrismaClient();

export default async function AboutSdgPage({params}: { params: { no: string } }) {
    return (<AboutSdg sdg={await prisma.sDG.findUniqueOrThrow({where: {no: parseInt(params.no)}})}></AboutSdg>)
}
