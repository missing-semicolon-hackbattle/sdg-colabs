import {SDG} from '@prisma/client';

export function AboutSdg({sdg}: { sdg: SDG }) {
    return (
        <>

            <div className="flex-auto bg-amber-100">
                <h1 className="translate-x-14 translate-y-7 font-serif text-4xl"><strong><span className="bg-sky-200 rounded-b-xl">    NO POVERTY</span></strong></h1>
                <div className="mx-16 my-20 font-mono">The first Sustainable Development Goal (SDG) is "No Poverty," and its primary objective is to end poverty in all its forms everywhere by 2030.
                    This goal recognizes that poverty is a multi-dimensional issue that goes beyond just income or financial resources.
                    It encompasses various aspects of well-being, including access to education,
                    healthcare, clean water, and basic human rights.

                    <div className="my-7">Key targets and indicators associated with the "No Poverty" SDG include:
                    </div>

                    <div>
                        1. <b>*Eradication of Extreme Poverty:*</b> Targeting the most vulnerable populations, the goal is to reduce the proportion of people living on less than $1.90 a day (the international poverty line) and ensure that no one is living in extreme poverty by 2030.
                    </div>
                    <br></br>
                    <div>
                        2. <b>*Social Protection Systems:*</b> Implementing nationally appropriate social protection systems to support those in need, including the expansion of coverage and access to essential services.
                    </div>
                    <br></br>
                    <div>
                        3. <b>*Equal Rights and Access:*</b> Ensuring that all people, regardless of their economic status, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, and technology.
                    </div>
                    <br></br>
                    <div>
                        4. <b>*Resilience of Vulnerable Populations:*</b> Building the resilience of the poor and those in vulnerable situations and reducing their exposure to extreme events and other economic, social, and environmental shocks and disasters.
                    </div>
                    <br></br>
                </div>
            </div>

        </>
    )
}