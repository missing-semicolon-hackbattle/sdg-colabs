import {SDG} from '@prisma/client';

export function AboutSdg({sdg}: { sdg: SDG }) {
    return (
        <>
            <h1 className="text-4xl">{sdg.no}. SDG {sdg.goal}</h1>

            <h2 className="text-xl">What {sdg.goal} is about?</h2>
            <p>{sdg.description}</p>

            {
                // TODO: Display recent activity of the SDG through posts over here
            }

            {/*{sdg.posts.length && <h2>What's happening around?</h2>}*/}
            {/*{sdg.posts.map((post) => (*/}
            {/*    <div key={post.id}>*/}
            {/*        <h3>{post.title}</h3>*/}
            {/*        <p>{post.content}</p>*/}
            {/*    </div>*/}
            {/*))}*/}
        </>
    )
}